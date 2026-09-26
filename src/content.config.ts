import { defineCollection } from 'astro:content'
import { createDocsCollection } from '@levino/shipyard-docs'

const docs = defineCollection(createDocsCollection('./src/content/docs'))

export const collections = { docs }
