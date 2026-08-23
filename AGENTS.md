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
kurze Statushinweis oben auf der Startseite. Beides ist Pflicht, nicht
Gestaltung.

Er ist **kurz und sachlich**, kein Warnkasten: „Privates Angebot aus der
Elternschaft. Kein offizielles Angebot der Freien Waldorfschule
Hannover-Maschsee." Er klärt eine Verwechslungsgefahr — er verteidigt
nichts.

**3. Keine Zahl ohne Beleg.**
Serverkosten, Auslastung, Versionsnummern, Zertifikatszustand: Was hier steht,
muss zum Zeitpunkt des Schreibens nachgemessen worden sein. Wer eine Zahl
aktualisiert, misst sie vorher nach. Die Glaubwürdigkeit dieser Seite ist ihr
einziges Kapital.

Bei der Auslastung: **gemessene** Werte (`kubectl top node`), nicht die
reservierten aus `Requests`. Die beiden gehen weit auseinander, und die
reservierten sagen nichts darüber, wie viel Platz noch da ist. Wo beide
genannt werden, muss dabeistehen, welcher welcher ist.

**4. Kein Fachjargon in den oberen Abschnitten.**
Startseite und `docs/eltern.md` müssen für ein Elternteil ohne IT-Kenntnisse
lesbar sein. Begriffe wie GitOps, OIDC oder Kubernetes gehören nach
`docs/technik.md` — und dort werden sie erklärt, bevor sie benutzt werden.

**5. Keine personenbezogenen Daten in diesem Repository.**
Es ist öffentlich. Außer Name und E-Mail-Adresse des Ansprechpartners gehört
hier nichts Personenbezogenes hinein — keine Elternnamen, keine
Klassenlisten, keine Beispieldaten, die echt aussehen. Dieselbe Regel gilt in
`server-config` (dort Invariante 6) und aus demselben Grund: Was einmal in
einer Versionsgeschichte steht, bekommt man nicht mehr heraus.

**6. Keine konkreten Klassen, Lehrkräfte oder deren Adressen.**
Weder im Text noch in Kommentaren, Metadaten, Beispielen oder
Konfigurationsdateien. Also keine Klassennamen, keine Lehrkraftnamen, keine
Hostnamen der geschützten Klassenseiten und keine früheren
Klassenlehrkraft-Domains.

Diese Seite ist öffentlich. Wer dort „diese Klasse, diese Lehrerin, diese
Adresse" zusammenschreibt, gibt Angaben über Menschen preis, die niemand
gefragt hat und die nichts davon haben. Die Zugriffskontrolle bleibt zwar
wirksam — die Zuordnung selbst gehört trotzdem nicht ins offene Netz.

**Was stattdessen dasteht: die Zahl.** „Zwei Klassengemeinschaften" belegt,
dass der Betrieb läuft und nicht bloß gedacht ist; das ist der Teil, der das
Argument trägt. Der Name trägt nichts bei. Die Zahl steht als `CLASS_COUNT`
in `src/site.config.ts`.

Zwei Ausnahmen, weil sie nichts über die Schule preisgeben: die Schule
selbst darf genannt werden (sie steht ohnehin im Statushinweis), und Levin
Keller als Verantwortlicher mit E-Mail-Adresse.

Vor jedem Push prüfen:

```bash
grep -rniE 'wiesen|christophers|poellmann|pöllmann' \
  --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=dist .
```

**7. Die Seite ist ein Angebot, keine Rechtfertigung.**
Sie beschreibt, was man damit machen kann, was es kostet und wie die Schule
es übernehmen kann. In dieser Reihenfolge.

Was hier nicht hineingehört, egal wie gut gemeint:

- Passagen, die erklären, warum etwas in Ordnung ist, statt was es kann.
- Vorwegnahmen von Einwänden, die niemand erhoben hat („Was das
  ausdrücklich nicht ist", „Warum wir das machen").
- Rechtsbelehrungen, Namens- und Kennzeichenrechte, Anwälte, Zusagen für
  den Fall einer Beanstandung. Wer etwas beanstanden will, meldet sich; ein
  Absatz darüber erzeugt die Frage erst.
- Regelungen für den Fall der Ablehnung. Sie machen Zustimmung zur
  aufwendigen und Abwinken zur billigsten aller Antworten.

Eltern, die für ihre eigene Klassengemeinschaft eine Website betreiben,
brauchen dafür niemandes Erlaubnis. Der Text darf nicht so klingen, als
bäte er darum.

Prüffrage beim Gegenlesen: *Rechtfertigt sich dieser Absatz, oder bietet er
etwas an?* Wenn Ersteres — kürzen oder streichen.

**8. Was läuft, steht im Indikativ. Was möglich wäre, im Konjunktiv.**
Diese Seite wird über Monate gelesen. Deshalb gibt es hier **keine
To-do-Liste und keinen Baustellenhinweis** — ein Bauzustand von heute liest
sich beim zweiten Besuch wie Nachlässigkeit, und niemand pflegt so eine
Liste zuverlässig nach.

Die Unterscheidung läuft stattdessen über die Sprache und über getrennte
Abschnitte:

- „Heute im Einsatz" — nur, was tatsächlich im Betrieb ist.
- „Was auf derselben Grundlage möglich wird" — Ausblick, durchgehend
  Konjunktiv, mit einem Satz davor, der sagt, dass davon nichts gebaut ist.

Der Unterschied muss beim Lesen ankommen, **ohne dass irgendwo „noch
nicht" steht**. Wer etwas aus dem Ausblick nach vorne schiebt, weil es
„bald fertig" ist, muss es vorher gebaut haben. Ein Pitch, der Absicht als
Zustand ausgibt, fliegt bei der ersten Nachfrage aus dem Kollegium auf.

Dasselbe gilt für die Aufbau-Grafik: durchgezogener Rahmen = läuft,
gestrichelter Rahmen = möglich, nicht gebaut.

**9. Kurz und zusagend statt vorsichtig.**
Der Betreiber hat die frühere Regel („nie pauschal datenschutzkonform")
ausdrücklich aufgehoben: Auf der Datenschutz-Seite steht in einem Satz, dass
alles DSGVO-konform auf einem Server in Deutschland läuft, und die
förmlichen Angaben stehen in `docs/datenschutzerklaerung.md`.

Was hier nicht mehr hineingehört:

- Mängellisten und „was fehlt noch"-Abschnitte.
- „Keine Rechtsberatung", „ersetzt keine juristische Prüfung", „kein
  Rechtstext" und ähnliche Absicherungen.
- Überschriften, die eine Erlaubnisfrage stellen („Dürfen Protokolle da
  überhaupt hinein?"). Wenn eine Frage als Überschrift, dann eine, die
  jemand wirklich hat: „Sind die Daten sicher vor Zugriff?"
- Ausführungen darüber, dass eine Versionsverwaltung personenbezogene Daten
  dauerhaft festhält. Es genügt: Personenbezogene Daten liegen in der
  Datenbank, getrennt von Code und Unterlagen, und bleiben löschbar.
- Sätze, nach denen Eltern das Projekt nur „eine Weile" betreiben könnten.
  Der Betrieb ist auf Dauer angelegt; die Übernahme durch die Schule ist ein
  Angebot und keine Bedingung.

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
`"^"`. Sie hängen mit `astro`, `tailwindcss` und `daisyui` zu einem Satz
zusammen, der nur gemeinsam aufgeht: shipyard 0.9.1 verlangt `astro ^7.2.4`
— deshalb Astro **7.2.4** — und setzt Tailwind 4 mit daisyUI 5 voraus. Löst
npm eine dieser Versionen frei auf, bricht der Bau an einer Stelle, die in
eine ganz andere Richtung zeigt, etwa mit
`Rollup failed to resolve import "virtual:shipyard/css"`. Ein Sprung auf die
nächste Hauptversion ist immer ein bewusster Schritt für alle vier Pakete
zusammen.

Was der Sprung von Astro 6 auf 7 mitgebracht hat, steht in
`plugins/admonition-labels.mjs` und in `astro.config.mjs` bei `markdown`:
Astro 7 rendert Markdown mit Sätteri statt mit unified, und eigene
remark-Plugins gehören seither an `unified({…})` aus
`@astrojs/markdown-remark` statt an das abgekündigte
`markdown.remarkPlugins`. Zugleich wertet shipyards `remarkAdmonitions` seit
0.9 den Titel aus `:::note[…]` nicht mehr aus; die deutsche Beschriftung
setzt deshalb ein rehype-Plugin nachträglich ein.

Seit Tailwind 4 gibt es **keine `tailwind.config.mjs`** und **keine
Integration `@astrojs/tailwind`** mehr. Die Konfiguration steht in
`src/styles/app.css` (`@import "tailwindcss"; @plugin "daisyui";`), das
Vite-Plugin `@tailwindcss/vite` hängt sie in `astro.config.mjs` ein, und
shipyard bekommt den Pfad über `css: appCss` — importiert mit `?url`, weil
shipyard den Pfad braucht und nicht den Inhalt. Fehlt dieser Wert, rendert
die Seite ohne ein einziges Stylesheet, und weder `astro build` noch
`astro check` melden es.

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
src/styles/app.css              der CSS-Einstieg: Tailwind 4, daisyUI 5
astro.config.mjs                Navigation, Hinweisbalken, Besucherzählung
deploy/                         K8s-Manifeste; gehören nach server-config
```

Die Aufbau-Grafik ist bewusst Inline-SVG mit Tailwind-/daisyUI-Farbklassen
(`fill-base-content`, `stroke-primary/50` …) statt fester Farbwerte: Nur so
passt sie sich dem hellen und dem dunklen Farbschema an. Das Format ist
hochkant, weil die Seite überwiegend auf Handys gelesen wird.

### Die Startseite im Aufbau

`src/pages/index.astro` folgt der Reihenfolge, die der Betreiber vorgegeben
hat, und die bleibt so:

1. **Was man damit machen kann** — „Heute im Einsatz", dann der Ausblick
2. **Was es kostet**
3. **Wie die Schule das übernehmen kann**
4. **Fragen** (FAQ)

**Eine weitere Frage in die FAQ eintragen:** in `src/pages/index.astro` an
das Array `fragen` ein Objekt anhängen — `frage` als eine Zeile, `antwort`
als Liste von Absätzen. Die Reihenfolge im Array ist die Reihenfolge auf der
Seite; sonst ist nichts zu tun. Der Ausblick steht analog im Array
`moeglich`.

Die ausführliche Datenschutz-FAQ bleibt, wo sie ist:
`src/content/docs/datenschutz.md`. Auf der Startseite steht davon nur eine
Kurzfassung in der FAQ, kein eigener Fließtext-Abschnitt.

## Verwandte Repositories

- [`fws-maschsee/klassen-website-template`](https://github.com/fws-maschsee/klassen-website-template)
  — die Vorlage für eine geschützte Klassenseite. Von dort stammen Dockerfile,
  Deploy-Workflow und die Versionsfestlegungen.
- [`fws-maschsee/server-config`](https://github.com/fws-maschsee/server-config)
  — das GitOps-Repository. **Privat.** Dorthin gehört `deploy/`.
  Mehrere Agenten arbeiten daran: vor jedem Push `git pull --rebase`, und nur
  die eigenen Pfade stagen.
