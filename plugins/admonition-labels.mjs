import { visit } from 'unist-util-visit'

/**
 * Setzt den im Markdown geschriebenen Titel einer Admonition
 * (`:::note[Kein Angebot der Schule]`) in die fertige Ueberschrift ein.
 *
 * `remarkAdmonitions` aus @levino/shipyard-base baut jede Admonition um und
 * schreibt dabei IMMER seinen Vorgabetitel („Note", „Warning" …) in die
 * Ueberschrift — bis 0.8.5 nahm es stattdessen `node.label`, seit 0.9 nicht
 * mehr (der Kommentar dort haelt fest, dass Container-Direktiven kein solches
 * Feld tragen). Der geschriebene Titel steht in Wahrheit als erster Absatz im
 * Rumpf, markiert mit `data.directiveLabel`, und bliebe ohne dieses Plugin
 * unsichtbar: die Ueberschrift zeigte „Note" statt „Kein Angebot der Schule".
 *
 * Deshalb laeuft dieses Plugin NACH shipyards Kette und nicht davor — es
 * korrigiert ein Ergebnis, statt eine Eingabe vorzubereiten. Dafuer sorgt in
 * `astro.config.mjs` eine eigene, hinter shipyard einsortierte Integration.
 *
 * Dasselbe Plugin und dasselbe Muster stehen im geteilten Code der
 * Klassenseiten (`src/remark/admonitionLabels.ts` dort).
 */
const hatKlasse = (knoten, klasse) => {
	const klassen = knoten?.data?.hProperties?.className
	return Array.isArray(klassen) && klassen.includes(klasse)
}

export const remarkAdmonitionLabels = () => (tree) => {
	visit(tree, 'containerDirective', (node) => {
		// Genau die Form, die `remarkAdmonitions` hinterlaesst: zwei Kinder,
		// Ueberschrift und Rumpf. Trifft sie nicht zu, hat shipyard diese
		// Direktive nicht umgebaut, und dann gibt es hier nichts zu korrigieren.
		const [ueberschrift, rumpf] = node.children ?? []
		if (
			!hatKlasse(ueberschrift, 'admonition-heading') ||
			!hatKlasse(rumpf, 'admonition-content')
		) {
			return
		}
		const [erstes] = rumpf.children ?? []
		if (
			!erstes ||
			erstes.type !== 'paragraph' ||
			!erstes.data?.directiveLabel
		) {
			return
		}
		const label = (erstes.children ?? [])
			.map((kind) => kind.value ?? '')
			.join('')
			.trim()
		if (!label) {
			return
		}
		ueberschrift.children = [{ type: 'text', value: label }]
		rumpf.children = (rumpf.children ?? []).slice(1)
	})
}

export default remarkAdmonitionLabels
