# fws-maschsee-test.de — die öffentliche Projektseite

Die Seite, die das Vorhaben erklärt: für Eltern, für Lehrkräfte, für
Schulleitung, Vorstand und Geschäftsführung, und für andere Schulen, die es
nachbauen wollen.

Live unter <https://fws-maschsee-test.de> — **öffentlich, ohne Anmeldung**.

> **Privates Angebot aus der Elternschaft.** Kein offizielles Angebot der
> Freien Waldorfschule Hannover-Maschsee.

**Zwei Regeln, bevor Sie etwas schreiben** (ausführlich in
[AGENTS.md](AGENTS.md)):

- **Keine konkreten Klassen, Lehrkräfte oder deren Adressen.** Die Seite ist
  öffentlich. Es steht die Zahl der beteiligten Klassen da, kein Name.
- **Was läuft, steht im Indikativ; was möglich wäre, im Konjunktiv.** Es gibt
  hier keine To-do-Liste und keinen Baustellenhinweis — aber auch keine
  Behauptung, die einer Nachfrage nicht standhält.

## Inhalte ändern — der einfache Weg

**Ohne irgendetwas zu installieren.** Auf der fertigen Seite steht unter jedem
Abschnitt ein Link zum Bearbeiten. Der führt direkt in das Textfeld auf
GitHub. Schreiben, auf „Commit changes" klicken, fertig. Ein paar Minuten
später ist es live.

Wer lieber gleich hier anfängt: Die Texte liegen als Markdown-Dateien unter
`src/content/docs/`.

| Datei | Was drinsteht | Erscheint unter |
| --- | --- | --- |
| `src/content/docs/index.md` | Übersicht über alle Themen | `/docs` |
| `src/content/docs/eltern.md` | Für Eltern: Nutzen, Anmeldung, Daten | `/docs/eltern` |
| `src/content/docs/lehrkraefte.md` | Für Lehrkräfte: Aufwand, Zuständigkeit | `/docs/lehrkraefte` |
| `src/content/docs/datenschutz.md` | Die ausführliche Datenschutz-FAQ | `/docs/datenschutz` |
| `src/content/docs/schule.md` | Für Schulleitung, Vorstand, Geschäftsführung | `/docs/schule` |
| `src/content/docs/technik.md` | Der technische Unterbau | `/docs/technik` |
| `src/content/docs/nachbauen.md` | Für andere Schulen | `/docs/nachbauen` |

**Eine neue Seite anlegen:** eine neue `.md`-Datei in `src/content/docs/`
ablegen, mit diesem Kopf:

```markdown
---
title: Überschrift in der Seitenleiste
sidebar:
  position: 7
---

# Überschrift auf der Seite

Text.
```

`position` bestimmt die Reihenfolge in der Seitenleiste. Soll die Seite auch
oben in der Kopfzeile auftauchen, muss sie zusätzlich in `astro.config.mjs`
unter `navigation` eingetragen werden.

**Hinweiskästen** gibt es im Docusaurus-Stil:

```markdown
:::note[Eigene Überschrift]

Text im Kasten.

:::
```

Verfügbar sind `note`, `tip`, `info`, `warning` und `danger`.

## Was wo liegt

| Pfad | Was |
| --- | --- |
| `src/pages/index.astro` | Die Startseite. Kein Markdown, weil sie viel Gestaltung enthält. Die FAQ steht dort im Array `fragen`, der Ausblick im Array `moeglich` — eine Frage ergänzt man, indem man ein Objekt anhängt. |
| `src/pages/kontakt.astro` | Kontakt- und Anbieterangaben. |
| `src/components/Architektur.astro` | Die Grafik des Aufbaus, als Inline-SVG. |
| `src/content/docs/` | Alle Langtexte (siehe oben). |
| `src/site.config.ts` | Namen, Domains, Adressen — zentral an einer Stelle. |
| `astro.config.mjs` | Kopfzeilen-Navigation und der Hinweisbalken. |
| `deploy/` | Kubernetes-Manifeste; sie gehören nach `server-config`. |

**Zahlen und Fakten im Text** (Serverkosten, Auslastung, Versionsnummern)
stehen ausgeschrieben im Markdown und nicht in `site.config.ts`. Sie ändern
sich selten, und sie stehen jeweils in einem Satz, der ohne Zusammenhang nicht
stimmen würde.

## Der Hinweisbalken

Der Balken über jeder Seite („Kein offizielles Angebot …") ist in
`astro.config.mjs` unter `announcementBar` konfiguriert. Er ist bewusst
**nicht wegklickbar** (`isCloseable: false`).

Er ist die wichtigste Aussage dieser Seite. Wer ihn entfernt oder wegklickbar
macht, nimmt der Seite ihre Grundlage.

## Lokal arbeiten

```bash
npm ci          # NICHT npm install - die Lockfile entscheidet
npm run dev     # http://localhost:4321
npm run build
npm run typecheck
```

## Ausrollen

Push auf `main` → GitHub Actions baut ein Image, startet es, prüft, dass es
mit **HTTP 200** antwortet, und schiebt es nach `ghcr.io`. Den Tag aus der
Zusammenfassung des Laufs dann in
[`fws-maschsee/server-config`](https://github.com/fws-maschsee/server-config)
unter `apps/homepage/kustomization.yaml` eintragen; Argo CD rollt aus.
Ausführlich in [`deploy/README.md`](deploy/README.md).

## Der Unterschied zu den Klassenseiten

Diese Seite verwendet denselben Baukasten wie die Klassenseiten (Astro 5,
`@levino/shipyard-base`) — mit **einem** wesentlichen Unterschied: Sie hat
**keine Auth-Middleware**. Kein PocketBase, kein ZITADEL davor, kein
`src/middleware.ts`.

Das ist keine vergessene Einstellung, sondern der Zweck: Eine Seite, die einem
Vorstand erklären soll, worum es geht, kann diesen Vorstand nicht zuerst um
ein Konto bitten. Der Deploy-Workflow lässt einen Build deshalb absichtlich
scheitern, wenn die Startseite mit 401 oder 403 antwortet.

Die Vorlage für eine geschützte Klassenseite liegt dagegen unter
[`fws-maschsee/klassen-website-template`](https://github.com/fws-maschsee/klassen-website-template).

## Kontakt

Levin Keller, <post@levinkeller.de>
