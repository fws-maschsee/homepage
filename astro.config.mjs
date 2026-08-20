import node from '@astrojs/node'
import shipyard from '@levino/shipyard-base'
import shipyardDocs from '@levino/shipyard-docs'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import { remarkAdmonitionLabels } from './plugins/remark-admonition-labels.mjs'
import {
	BETREIBER,
	PROJECT_NAME,
	REPO_URL,
	SITE_DOMAIN,
	SITE_URL,
} from './src/site.config'
import appCss from './src/styles/app.css?url'

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
		// NUR die Beschriftung der Admonitions. Den Direktiven-Parser und
		// `remarkAdmonitions` setzt shipyard-base seit 0.7 selbst; ein zweiter
		// Eintrag wäre eine zweite Wahrheit über eine Liste, die shipyard
		// pflegt — und er brächte den in 0.8.1 abgestellten Fehler zurück, bei
		// dem der Gender-Doppelpunkt („Elternvertreter:in") als Inline-Direktive
		// zerfällt.
		//
		// Dass dieser Eintrag in `defineConfig` steht, ist die Bedingung dafür,
		// dass er VOR shipyards `remarkAdmonitions` läuft: Astro hängt die
		// Plugins der Integrationen hinten an. Sonst stünde über jeder
		// Admonition „Warning" statt „WICHTIG".
		remarkPlugins: [remarkAdmonitionLabels],
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
			editUrl: `${REPO_URL}/edit/main/src/content/docs`,
		}),
	],
})
