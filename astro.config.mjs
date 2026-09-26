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
	output: 'server',
	adapter: node({
		mode: 'standalone',
	}),
	vite: { plugins: [tailwindcss()] },
	markdown: {
		processor: unified(),
	},
	integrations: [
		shipyard({
			css: appCss,
			brand: PROJECT_NAME,
			title: PROJECT_NAME,
			tagline: 'Ein privates Elternprojekt',
			announcementBar: {
				id: 'kein-angebot-der-schule',
				content:
					'<strong>Kein offizielles Angebot der Freien Waldorfschule Hannover-Maschsee.</strong> Privat von Eltern betrieben, von der Schule weder beauftragt noch geprüft.',
				backgroundColor: 'warning',
				textColor: 'var(--color-warning-content)',
				isCloseable: false,
			},
			footer: { copyright: BETREIBER },
			navigation: {
				start: { label: 'Überblick', href: '/' },
				docs: { label: 'Dokumentation', href: '/docs' },
				datenschutz: { label: 'Datenschutz', href: '/docs/datenschutz' },
				kontakt: { label: 'Impressum & Kontakt', href: '/kontakt' },
			},
			scripts: [
				{
					src: 'https://analytics.levinkeller.de/js/script.js',
					defer: true,
					'data-domain': SITE_DOMAIN,
				},
			],
		}),
		shipyardDocs({
			editUrl: `${REPO_URL}/edit/main`,
		}),
		admonitionTitel,
	],
})
