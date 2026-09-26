import { visit } from 'unist-util-visit'

const hatKlasse = (knoten, klasse) => {
	const klassen = knoten?.data?.hProperties?.className
	return Array.isArray(klassen) && klassen.includes(klasse)
}

// Korrigiert shipyards Ergebnis: Seit 0.9 schreibt remarkAdmonitions immer „Note“ statt des Titels aus `:::note[…]`.
export const remarkAdmonitionLabels = () => (tree) => {
	visit(tree, 'containerDirective', (node) => {
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
