import { isUnifiedProcessor, unified } from '@astrojs/markdown-remark'
import node from '@astrojs/node'
import shipyard from '@levino/shipyard-base'
import shipyardDocs from '@levino/shipyard-docs'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import { remarkAdmonitionLabels } from './plugins/admonition-labels.mjs'
import {
	BETREIBER,
	PROJECT_NAME,
	REPO_URL,
	SITE_DOMAIN,
	SITE_URL,
} from './src/site.config'
import appCss from './src/styles/app.css?url'

/**
 * Hängt `remarkAdmonitionLabels` als LETZTES Plugin an den Markdown-Prozessor.
 *
 * Eine eigene Integration und nicht einfach ein Eintrag oben bei `markdown`,
 * weil die Reihenfolge hier der ganze Punkt ist: shipyard liest in seinem
 * `astro:config:setup` den bis dahin gesetzten Prozessor aus und hängt seine
 * eigenen Plugins DAHINTER. Alles, was `defineConfig` beisteuert, läuft also
 * vor shipyards `remarkAdmonitions` — und dieses Plugin muss danach laufen,
 * weil es dessen Ergebnis korrigiert: shipyard 0.9 schreibt in jede
 * Admonition-Überschrift seinen Vorgabetitel („Note") und liest den im
 * Markdown geschriebenen Titel nicht mehr aus. Bis 0.8.5 nahm es dafür
 * `node.label`, das ein Plugin VOR ihm setzen konnte; dieser Weg ist zu.
 *
 * Dass diese Integration als LETZTE in `integrations` steht, ist damit die
 * Bedingung dafür, dass über der Admonition auf `/docs` „Kein Angebot der
 * Schule" steht und nicht „Note". Dasselbe Muster fahren die Klassenseiten.
 */
const admonitionTitel = {
	name: 'fws-homepage-admonition-titel',
	hooks: {
		'astro:config:setup': ({ updateConfig, config: astroConfig }) => {
			const prozessor = astroConfig.markdown?.processor
			const geerbt =
				prozessor && isUnifiedProcessor(prozessor)
					? prozessor.options
					: undefined
			updateConfig({
				markdown: {
					processor: unified({
						...geerbt,
						remarkPlugins: [
							...(geerbt?.remarkPlugins ?? []),
							remarkAdmonitionLabels,
						],
					}),
				},
			})
		},
	},
}

export default defineConfig({
	site: SITE_URL,
	// SSR wie bei den Klassenseiten — bewusst, obwohl diese Seite öffentlich
	// ist und statisch ausgeliefert werden könnte. Grund: Dockerfile,
	// Health-Probes, Deployment-Manifest und Deploy-Workflow sind damit
	// zeichengleich zu den Klassenseiten. Wer eine Sache versteht, versteht
	// alle. Ein zweites Auslieferungsmuster wäre eine zweite Fehlerquelle für
	// einen Vorteil, den bei diesen Besucherzahlen niemand misst.
	//
	// Was hier NICHT steht und auch nicht hinzukommt: eine Auth-Middleware.
	// Diese Seite erklärt das Projekt Eltern, Kollegium, Schulleitung und
	// anderen Schulen. Ein Login davor würde genau die aussperren, für die
	// sie geschrieben ist.
	output: 'server',
	adapter: node({
		mode: 'standalone',
	}),
	// `@tailwindcss/vite` steht HIER und nicht in einer Astro-Integration:
	// Seit Tailwind 4 gibt es `@astrojs/tailwind` nicht mehr, und das
	// Vite-Plugin sieht nur die CSS-Dateien des Projekts, in dessen
	// Vite-Konfiguration es steht.
	vite: { plugins: [tailwindcss()] },
	markdown: {
		// `markdown.processor` statt `markdown.remarkPlugins`: Astro 7 rendert
		// Markdown standardmäßig mit Sätteri, das überhaupt keine
		// unified-Plugins fährt. `remarkPlugins` ist nur noch ein veralteter
		// Umweg (Astro hängt die Liste hinten an den Prozessor und warnt
		// dabei); der Prozessor ist der Weg.
		//
		// Er steht hier ohne eigene Plugins, und das ist kein Versehen: Fände
		// shipyard Sätteri vor, überschriebe es den Prozessor und meldete das
		// als Warnung bei jedem Bau.
		//
		// Das eigene Plugin `remarkAdmonitionLabels` steht bewusst NICHT hier,
		// sondern in der Integration `admonitionTitel` ganz am Ende der Liste:
		// Es muss NACH shipyards `remarkAdmonitions` laufen. Begründung dort.
		//
		// Den Direktiven-Parser und `remarkAdmonitions` setzt shipyard-base
		// seit 0.7 selbst; ein zweiter Eintrag wäre eine zweite Wahrheit über
		// eine Liste, die shipyard pflegt — und er brächte den in 0.8.1
		// abgestellten Fehler zurück, bei dem der Gender-Doppelpunkt
		// („Elternvertreter:in") als Inline-Direktive zerfällt.
		processor: unified(),
	},
	integrations: [
		shipyard({
			// Das Tailwind-Setup steckt seit Tailwind 4 nicht mehr in einer
			// Integration, sondern in dieser einen Zeile: shipyard hängt die
			// Datei über `virtual:shipyard/css` ein, und sie ist die einzige
			// Quelle des CSS. `?url` ist Pflicht — shipyard braucht den PFAD,
			// nicht den Inhalt. Fehlt der Wert, rendert die Seite ohne ein
			// einziges Stylesheet, und weder `astro build` noch `astro check`
			// melden es.
			css: appCss,
			brand: PROJECT_NAME,
			title: PROJECT_NAME,
			tagline: 'Ein privates Elternprojekt',
			// Nicht wegklickbar. Der Hinweis ist die wichtigste Aussage der
			// Seite; ein `isCloseable: true` würde ihn nach einem Klick für
			// immer verschwinden lassen.
			announcementBar: {
				id: 'kein-angebot-der-schule',
				content:
					'<strong>Kein offizielles Angebot der Freien Waldorfschule Hannover-Maschsee.</strong> Privat von Eltern betrieben, von der Schule weder beauftragt noch geprüft.',
				backgroundColor: 'warning',
				// Nicht 'base-content': das ist im dunklen Farbschema ein helles
				// Grau und stünde dann hellgrau auf gelb. `--color-warning-content`
				// ist die von daisyUI für Warnflächen vorgesehene Schriftfarbe und
				// in beiden Farbschemata dunkel. (In daisyUI 4 hiess dieselbe
				// Angabe `oklch(var(--wac))`; seit 5 tragen die Variablen
				// vollständige Farbwerte und sprechende Namen.)
				textColor: 'var(--color-warning-content)',
				isCloseable: false,
			},
			// Anbieterkennzeichnung im Fuss JEDER Seite — dieselbe Zeile, die
			// die Klassenseiten und `konto` fuehren. Sie steht deshalb hier und
			// nicht auf der Kontaktseite allein: Wer die Seite verantwortet,
			// gehoert auf jede Seite und nicht auf eine.
			footer: { copyright: BETREIBER },
			// NUR DREI EINTRAEGE, und das ist eine Korrektur: Vorher standen
			// hier alle Unterseiten der Dokumentation. Auf jeder /docs-Seite
			// rendert shipyard-docs links ohnehin die vollstaendige
			// Seitenleiste — das Menue stand damit zweimal auf dem Bildschirm,
			// oben und links, mit denselben Zielen. Die Leiste oben fuehrt
			// deshalb nur noch IN die Dokumentation hinein; welche Kapitel es
			// gibt, sagt die Seitenleiste.
			navigation: {
				start: { label: 'Überblick', href: '/' },
				docs: { label: 'Dokumentation', href: '/docs' },
				datenschutz: { label: 'Datenschutz', href: '/docs/datenschutz' },
				kontakt: { label: 'Impressum & Kontakt', href: '/kontakt' },
			},
			// Die Besucherzaehlung. shipyard schreibt das Tag selbst in den
			// Kopf jeder Seite. Bis 0.6 gab es dieses Feld nicht; das Skript
			// hing bis zum Umstieg auf 0.8 an einer eigenen Integration, die
			// per `injectScript('head-inline')` ein Skript-Tag nachbaute.
			// Dieser Notbehelf ist weg — wer ihn in der Versionsgeschichte
			// wiederfindet, braucht ihn nicht zurueckzuholen.
			//
			// WAS DABEI NICHT ENTSTEHT: kein Cookie, kein Wiedererkennungswert,
			// kein Profil. Plausible laeuft auf einem eigenen Server; die
			// Zaehlung ist der Grund, warum diese Seite ohne
			// Einwilligungsbanner auskommt.
			scripts: [
				{
					src: 'https://analytics.levinkeller.de/js/script.js',
					defer: true,
					// Muss der Domain entsprechen, unter der die Seite in
					// Plausible angelegt ist.
					'data-domain': SITE_DOMAIN,
				},
			],
		}),
		shipyardDocs({
			// Führt auf der fertigen Seite direkt zum Bearbeiten-Formular auf
			// GitHub. Das ist der einfachste Weg, Inhalte zu ergänzen — man
			// braucht nichts installiert zu haben.
			// OHNE den Pfad zur Sammlung: shipyard-docs haengt den vollstaendigen
			// Dateipfad (`src/content/docs/…`) selbst an. Stand hier der Ordner
			// mit drin, zeigte der Bearbeiten-Link auf
			// `…/edit/main/src/content/docs/src/content/docs/index.md` — doppelt
			// und damit auf eine Datei, die es nicht gibt. Das war schon vor dem
			// Umstieg auf shipyard 0.9 so.
			editUrl: `${REPO_URL}/edit/main`,
		}),
		admonitionTitel,
	],
})
