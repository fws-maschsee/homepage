import { defineCollection } from 'astro:content'
import { createDocsCollection } from '@levino/shipyard-docs'

// Nur eine Sammlung: die Langtexte unter /docs. Es gibt hier bewusst kein
// Blog — diese Seite erklärt einen Zustand, sie führt kein Tagebuch.
const docs = defineCollection(createDocsCollection('./src/content/docs'))

export const collections = { docs }
