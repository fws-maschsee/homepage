/**
 * Die Besucherzählung — als eingehängtes Skript und nicht als Angabe in der
 * shipyard-Konfiguration.
 *
 * WARUM DIESER UMWEG: shipyard kennt ab 0.7 ein Feld `scripts`, das genau so
 * ein Skript in den Kopf jeder Seite schreibt; die Klassenseiten benutzen es.
 * Diese Seite steht auf 0.6.1 — dort gibt es das Feld nicht, und eine Angabe,
 * die niemand liest, wäre eine Zählung, die niemand bekommt. Der Sprung auf
 * 0.7 verlangt daisyUI 5 und Tailwind 4 und ist ein eigener Schritt; bis dahin
 * hängt das Skript hier.
 *
 * `head-inline` schreibt den Code unverändert in den Kopf JEDER Seite —
 * unbearbeitet, unbebündelt, ohne Modul-Umweg. Der Code baut das Skript-Tag,
 * das Plausible erwartet; ein `<script>`-Tag direkt einzusetzen geht über
 * diesen Weg nicht, Astro kennt hier nur JavaScript.
 *
 * WAS DABEI NICHT ENTSTEHT: kein Cookie, kein Wiedererkennungswert, kein
 * Profil. Plausible läuft auf einem eigenen Server; die Zählung ist der Grund,
 * warum diese Seite trotzdem ohne Einwilligungsbanner auskommt.
 */
export const plausible = ({ domain, src }) => ({
	name: 'plausible',
	hooks: {
		'astro:config:setup': ({ injectScript }) => {
			injectScript(
				'head-inline',
				`(function(){var s=document.createElement('script');s.defer=true;s.setAttribute('data-domain',${JSON.stringify(domain)});s.src=${JSON.stringify(src)};document.head.appendChild(s)})();`,
			)
		},
	},
})
