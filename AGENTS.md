# Arbeiten an diesem Repository

Für Agenten und Entwickler:innen. Wer nur Texte ändern will, liest die
[README](README.md) — dort steht der einfache Weg.

## Sprache

Deutsch. In Texten, Kommentaren, Commit-Nachrichten und Antworten. Diese Seite
wird von Eltern, Lehrkräften und einem Schulvorstand gelesen.

Anrede: **Sie**. Die Klassenseiten duzen, weil sie sich an die eigene
Klassenelternschaft richten. Diese Seite spricht auch Schulleitung und
Vorstand an.

## Die harten Regeln

**1. Kein Login. Niemals.**
Diese Seite ist öffentlich. Es gibt kein `src/middleware.ts`, kein
`@levino/pocketbase-auth`, kein oauth2-proxy und keinen ForwardAuth davor. Das
ist keine offene Aufgabe, sondern der Zweck. Der Deploy-Workflow lässt einen
Build absichtlich scheitern, wenn `/` mit 401 oder 403 antwortet.

**2. Der Hinweisbalken bleibt und bleibt nicht wegklickbar.**
`announcementBar` in `astro.config.mjs`, `isCloseable: false`. Dazu der
ausgeschriebene Kasten oben auf der Startseite. Beides ist Pflicht, nicht
Gestaltung.

**3. Keine Zahl ohne Beleg.**
Serverkosten, Auslastung, Versionsnummern, Zertifikatszustand: Was hier steht,
muss zum Zeitpunkt des Schreibens nachgemessen worden sein. Wer eine Zahl
aktualisiert, misst sie vorher nach. Die Glaubwürdigkeit dieser Seite ist ihr
einziges Kapital.

**4. Was nicht läuft, steht auch drauf.**
Der Abschnitt „Was noch nicht läuft" auf der Startseite und „Was fehlt noch —
ehrlich" im Datenschutz-Teil sind keine Schönheitsfehler, die man bei
Gelegenheit wegräumt. Sie sind der Grund, warum man dem Rest glauben kann.
Wird ein Punkt erledigt, wird er dort gestrichen — und wenn ein neuer
auftaucht, kommt er dazu.

**5. Kein Fachjargon in den oberen Abschnitten.**
Startseite und `docs/eltern.md` müssen für ein Elternteil ohne IT-Kenntnisse
lesbar sein. Begriffe wie GitOps, OIDC oder Kubernetes gehören nach
`docs/technik.md` — und dort werden sie erklärt, bevor sie benutzt werden.

**6. Keine personenbezogenen Daten in diesem Repository.**
Es ist öffentlich. Außer Name und E-Mail-Adresse des Ansprechpartners gehört
hier nichts Personenbezogenes hinein — keine Elternnamen, keine
Klassenlisten, keine Beispieldaten, die echt aussehen. Dieselbe Regel gilt in
`server-config` (dort Invariante 6) und aus demselben Grund: Was einmal in
einer Versionsgeschichte steht, bekommt man nicht mehr heraus.

## Bauen und prüfen

```bash
npm ci
npm run build
npm run typecheck   # astro check
```

Beides muss durchlaufen, bevor etwas nach `main` geht. Direkt auf `main`
committen ist hier in Ordnung; Pull Requests sind für ein Repository dieser
Größe Zeremonie.

## Versionen sind gepinnt, und zwar mit Grund

Die `@levino/*`-Pakete stehen auf **exakten** Versionen, nicht auf `"*"` oder
`"^"`. shipyard 0.8.x setzt Astro 6 voraus; löst npm frei auf, bricht der Bau
mit `Rollup failed to resolve import "virtual:shipyard/css"` — einer Meldung,
die in eine ganz andere Richtung zeigt. Ein Sprung auf shipyard 0.8 ist ein
bewusster Schritt zusammen mit Astro 6.

`html-escaper` steht als Produktions-Abhängigkeit im `package.json`, obwohl
der Code es nie importiert. Ohne diesen Eintrag verschwindet es im Image unter
`npm ci --omit=dev`, und der SSR-Server stirbt beim Start mit
`ERR_MODULE_NOT_FOUND`. Lokal fällt das nie auf.

Im Image wird mit `npm ci --omit=dev` installiert, nie mit `npm install`.

## Wo was liegt

```
src/pages/index.astro           Startseite (Gestaltung, deshalb kein Markdown)
src/pages/kontakt.astro         Kontakt und Anbieterangaben
src/components/Architektur.astro  Aufbau-Grafik als Inline-SVG
src/content/docs/*.md           alle Langtexte
src/site.config.ts              Namen, Domains, Adressen — zentral
astro.config.mjs                Navigation und Hinweisbalken
deploy/                         K8s-Manifeste; gehören nach server-config
```

Die Aufbau-Grafik ist bewusst Inline-SVG mit Tailwind-/daisyUI-Farbklassen
(`fill-base-content`, `stroke-primary/50` …) statt fester Farbwerte: Nur so
passt sie sich dem hellen und dem dunklen Farbschema an. Das Format ist
hochkant, weil die Seite überwiegend auf Handys gelesen wird.

## Verwandte Repositories

- [`fws-maschsee/klassen-website-template`](https://github.com/fws-maschsee/klassen-website-template)
  — die Vorlage für eine geschützte Klassenseite. Von dort stammen Dockerfile,
  Deploy-Workflow und die Versionsfestlegungen.
- [`fws-maschsee/server-config`](https://github.com/fws-maschsee/server-config)
  — das GitOps-Repository. **Privat.** Dorthin gehört `deploy/`.
  Mehrere Agenten arbeiten daran: vor jedem Push `git pull --rebase`, und nur
  die eigenen Pfade stagen.
