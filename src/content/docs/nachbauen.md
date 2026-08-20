---
title: Zum Nachbauen
sidebar:
  position: 6
---

# Für andere Schulen und Elterninitiativen

Wenn Sie an einer anderen Schule vor demselben Problem stehen: Nehmen Sie
sich, was Sie brauchen. Es ist quelloffen, es gibt nichts zu bezahlen und
niemanden um Erlaubnis zu fragen.

Was Sie hier bekommen, ist kein Produkt und kein Angebot mit Unterstützung.
Es ist der ehrliche Werkstattbericht einer Elterninitiative, die sich das
selbst gebaut hat.

## Was Sie brauchen

- **Einen Server.** Bei uns ein netcup VPS Lite 2 G12s für rund 8 € brutto
  im Monat: 4 vCPU, 8 GB RAM, 160 GB SSD. Gemessen mit zwei Klassen und dem
  gesamten Unterbau: 4 bis 5 % Rechenlast, rund 43 % Arbeitsspeicher (Stand
  4. August 2026). Für eine ganze Schule ist das reichlich bemessen. Es geht
  auch kleiner — der Arbeitsspeicher ist die knappere Größe, nicht die
  Rechenleistung.
- **Eine Domain.**
- **Eine Person mit Grundkenntnissen in Linux und Kubernetes.** Das ist die
  eigentliche Voraussetzung — nicht das Geld. Wer noch nie einen Server
  betrieben hat, sollte hier nicht anfangen; wer es beruflich tut, wird sich
  langweilen.
- **Zeit für den Aufbau**, nicht für den Betrieb. Der laufende Betrieb ist
  ruhig; der Aufbau ist die Arbeit.

## Was Sie kopieren können

**Die Vorlage für eine Klassenseite:**
[github.com/fws-maschsee/klassen-website-template](https://github.com/fws-maschsee/klassen-website-template)

Eine Copier-Vorlage — Copier ist ein Werkzeug, das aus einer Vorlage plus ein
paar beantworteten Fragen ein fertiges Projekt erzeugt. Eine weitere Klasse
bekommt damit in Minuten ihre Website: Astro 5, Shipyard, geschützte
Inhalte, Bau- und Auslieferungsautomatik, fertige Kubernetes-Manifeste.

Die Vorlage enthält außerdem, was uns Ausfälle beschert hat, mitsamt
Begründung an Ort und Stelle. Wer eine dieser Vorsichtsmaßnahmen
„aufräumt", baut einen Ausfall nach, den es schon einmal gab. Die zwei
teuersten:

- **Feste Versionsnummern für die `@levino/*`-Pakete** statt `"*"`. Eine
  freie Auflösung zieht eine Version, die eine neue Astro-Hauptversion
  voraussetzt, und der Bau bricht mit einer Fehlermeldung, die in eine ganz
  andere Richtung zeigt.
- **`npm ci --omit=dev` statt `npm install`** im Abbild. Sonst enthält das
  ausgelieferte Abbild andere Versionen als die geprüften — und der Server
  stirbt beim Start mit einem fehlenden Modul, das lokal immer da war.

**Die Organisation mit allem Übrigen:**
[github.com/fws-maschsee](https://github.com/fws-maschsee)

Das Infrastruktur-Archiv ist inzwischen privat — nicht wegen der
Betriebsgeheimnisse, sondern weil dort Betriebsdetails eines laufenden
Systems stehen. Wenn Sie hineinsehen möchten, [fragen Sie](/kontakt); wir
zeigen es.

## Die Entscheidungen, die wir wieder so treffen würden

**Ein Anmeldedienst für alles, nicht einer pro Anwendung.** Der Aufwand fällt
einmal an, die Ersparnis bei jeder weiteren Anwendung. Und beim Weggang einer
Familie gibt es genau eine Stelle, an der der Zugang endet.

**Eine getrennte Einheit pro Klasse, nicht eine Rechtevergabe pro Seite.**
Trennung durch Struktur statt durch Einstellungen. Eine Einstellung kann man
vergessen zu setzen; eine Struktur nicht.

**Inhalte als Textdateien, nicht in einer Datenbank.** Eltern bearbeiten sie
über eine Weboberfläche, ohne etwas zu installieren. Jede Fassung bleibt
erhalten. Und wenn das ganze System morgen verschwände, blieben die Inhalte
lesbar.

**Personenbezogene Daten in die Datenbank, nicht ins Archiv.** Getrennt vom
Code und von den Unterlagen — so bleiben sie jederzeit löschbar. Kurz steht
das auch im [Datenschutz-Abschnitt](/docs/datenschutz#was-liegt-wo).

**GitOps statt Handarbeit auf dem Server.** Kostet am Anfang mehr. Zahlt sich
in dem Moment aus, in dem jemand anders übernehmen soll — und dieser Moment
kommt bei einem Elternprojekt garantiert.

**Und auf einer öffentlichen Projektseite gar keine konkreten Klassen
nennen.** Wer dort Klassennamen, Lehrkräfte und die Hostnamen der
geschützten Seiten aufführt, gibt preis, welche Klasse welche Inhalte unter
welcher Adresse liegen hat — über Menschen, die niemand gefragt hat. Die
Zugriffskontrolle bleibt zwar wirksam, aber die Zuordnung selbst gehört
nicht ins offene Netz. Die Zahl der beteiligten Klassen trägt das Argument
vollständig; der Name trägt nichts bei.

**Alte Adressen dauerhaft weiterleiten.** Kalender-Abos brechen sonst still.
Niemand merkt es, bis Termine fehlen.

## Die Fehler, die wir gemacht haben

- **Den Klassennamen überall hineingeschrieben.** Bei der ersten Klasse
  steckte er in 19 Dateien. Die Umbenennung war eine Suchen-und-Ersetzen-
  Aktion quer durch das Projekt. In der Vorlage steht er jetzt an genau einer
  Stelle.
- **Abbilder unter Emulation gebaut.** Das erzeugt langsam und gelegentlich
  defekt. Bauen Sie jede Architektur auf einem Läufer eben dieser
  Architektur.
- **Zu spät gemerkt, dass ein Abbild anders aussieht als der geprüfte Bau.**
  Seitdem wird jedes Abbild in der Automatik gestartet und geprüft, bevor es
  irgendwo landet.
- **Zu wenig darüber gesprochen, was das eigentlich ist.** Diese Seite hier
  ist die Reaktion darauf. Wenn Sie so etwas an Ihrer Schule bauen, bauen Sie
  die Erklärung von Anfang an mit — und stellen Sie sie *vor* die Technik,
  nicht dahinter.

## Der Rat, der am wenigsten technisch und am wichtigsten ist

**Klären Sie früh, wem das gehört.**

Nicht, weil ein Elternprojekt ablaufen müsste — dieses hier ist auf Dauer
angelegt und wird auch dann weiterbetrieben, wenn die eigenen Kinder die
Schule verlassen haben. Sondern weil ein Dienst, den alle benutzen, jemanden
braucht, der ihn erklärtermaßen verantwortet, und weil zwei Leute, die es
können, besser sind als einer.

Machen Sie von Anfang an unmissverständlich klar, dass es kein Angebot der
Schule ist — im Namen, in der Adresse, auf jeder Seite. Und suchen Sie
parallel das Gespräch mit denen, die es später einmal übernehmen könnten.

Fragen? [Schreiben Sie uns.](/kontakt) Auf Fragen von anderen Schulen
antworten wir gern und ausführlich.
