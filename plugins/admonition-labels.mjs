import { visit } from 'unist-util-visit'

/**
 * Deutsche Beschriftungen für Admonitions (`:::note[Kein Angebot der Schule]`).
 *
 * Warum das hier in ZWEI Schritten steht: `remarkAdmonitions` aus
 * @levino/shipyard-base baut die Admonition, benutzt dabei aber seit 0.9
 * ausdrücklich IMMER den englischen Vorgabetitel („Note", „Warning" …) und
 * wertet den Titel aus `:::note[…]` nicht aus. Bis 0.8 las es `node.label`;
 * ein Plugin, das nur diesen Wert setzt, läuft seit 0.9 ins Leere.
 *
 * Der Titel muss also nachträglich eingesetzt werden — nach shipyards Plugin.
 * Die Reihenfolge der remark-Plugins gibt das nicht her: shipyard hängt seine
 * eigenen hinter die übernommenen. Ein rehype-Plugin dagegen läuft immer nach
 * ALLEN remark-Plugins. Deshalb:
 *
 * 1. `remarkAdmonitionLabels` (remark, vor shipyard) markiert den
 *    Titel-Absatz, den remark-directive als erstes Kind mit
 *    `data.directiveLabel` ablegt, als `div.admonition-label`. Der Absatz
 *    bleibt stehen; shipyard packt ihn mit in den Inhalt.
 * 2. `rehypeAdmonitionLabels` (rehype, danach) nimmt diesen Marker wieder
 *    heraus und schreibt seinen Text in die von shipyard gebaute
 *    `div.admonition-heading`.
 *
 * shipyard behält damit die Hoheit über den Aufbau der Admonition; hier steht
 * nur die Beschriftung. Beides wird in `astro.config.mjs` an `unified({…})`
 * übergeben.
 */
const LABEL_CLASS = 'admonition-label'

export const remarkAdmonitionLabels = () => (tree) => {
	visit(tree, 'containerDirective', (node) => {
		const [first] = node.children ?? []
		if (!first || first.type !== 'paragraph' || !first.data?.directiveLabel) {
			return
		}
		first.data.hName = 'div'
		first.data.hProperties = { className: [LABEL_CLASS] }
	})
}

const hasClass = (node, className) =>
	node?.type === 'element' &&
	[].concat(node.properties?.className ?? []).includes(className)

const textOf = (node) =>
	node.type === 'text' ? node.value : (node.children ?? []).map(textOf).join('')

export const rehypeAdmonitionLabels = () => (tree) => {
	visit(tree, 'element', (node) => {
		if (!hasClass(node, 'admonition')) {
			return
		}
		const children = node.children ?? []
		const heading = children.find((child) =>
			hasClass(child, 'admonition-heading'),
		)
		const content = children.find((child) =>
			hasClass(child, 'admonition-content'),
		)
		if (!heading || !content) {
			return
		}
		const index = (content.children ?? []).findIndex((child) =>
			hasClass(child, LABEL_CLASS),
		)
		if (index === -1) {
			return
		}
		const [label] = content.children.splice(index, 1)
		const title = textOf(label).trim()
		if (title) {
			heading.children = [{ type: 'text', value: title }]
		}
	})
}
