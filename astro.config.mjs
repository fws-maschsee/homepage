import node from '@astrojs/node'
import tailwind from '@astrojs/tailwind'
import shipyard from '@levino/shipyard-base'
import {
	remarkAdmonitions,
	remarkDirective,
} from '@levino/shipyard-base/remark'
import shipyardDocs from '@levino/shipyard-docs'
import { defineConfig } from 'astro/config'
import { remarkAdmonitionLabels } from './plugins/remark-admonition-labels.mjs'
import { BETREIBER, PROJECT_NAME, REPO_URL, SITE_URL } from './src/site.config'

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
	markdown: {
		// Admonitions im Docusaurus-Stil (:::note, :::tip, :::info, :::warning,
		// :::danger). Die Reihenfolge ist bindend: remarkAdmonitionLabels muss
		// zwischen remarkDirective und remarkAdmonitions laufen.
		remarkPlugins: [remarkDirective, remarkAdmonitionLabels, remarkAdmonitions],
	},
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		shipyard({
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
				// Grau und stünde dann hellgrau auf gelb. `--wac` ist die von
				// daisyUI für Warnflächen vorgesehene Schriftfarbe und in beiden
				// Farbschemata schwarz.
				textColor: 'oklch(var(--wac))',
				isCloseable: false,
			},
			// Anbieterkennzeichnung im Fuss JEDER Seite. WIRKT NOCH NICHT:
			// shipyard 0.6.1 rendert einen fest eingebauten Fuss („© Levin
			// Keller, 2025") und wertet diese Angabe nicht aus; ab 0.7.x tut
			// es das, wie in den Klassenseiten zu sehen. Der Sprung dorthin
			// verlangt daisyUI 5 und Tailwind 4 und ist ein eigener Schritt.
			// Bis dahin traegt die Anschrift die Kontaktseite, und die steht
			// als „Impressum & Kontakt" in der Leiste ueber jeder Seite.
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
		}),
		shipyardDocs({
			// Führt auf der fertigen Seite direkt zum Bearbeiten-Formular auf
			// GitHub. Das ist der einfachste Weg, Inhalte zu ergänzen — man
			// braucht nichts installiert zu haben.
			editUrl: `${REPO_URL}/edit/main/src/content/docs`,
		}),
	],
})
