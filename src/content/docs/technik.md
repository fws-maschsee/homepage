---
title: Technik
sidebar:
  position: 5
---

# Technik

Ab hier wird es fachlich. Wer bis hierher gelesen hat, ohne IT-Hintergrund zu
haben, hat den wichtigen Teil schon hinter sich — der steht auf der
[Startseite](/), im [Eltern-Abschnitt](/docs/eltern) und im
[Datenschutz-Abschnitt](/docs/datenschutz).

Fachbegriffe werden hier verwendet und beim ersten Auftreten erklärt.

## Der Bestand, in Zahlen

**Maschine.** Ein einzelner Server bei netcup, Modell **VPS Lite 2 G12s**:
4 vCPU, 8 GB RAM, 160 GB SSD, rund **8 € brutto im Monat**. Standort
Nürnberg. Debian 13.

**Cluster.** **k3s v1.36.2** — eine schlanke Kubernetes-Variante. Kubernetes
ist die Software, die entscheidet, welches Programm auf welcher Maschine
läuft, es bei einem Absturz neu startet und den Netzwerkverkehr zu ihm
lenkt. Ein Knoten, eine Kopie je Dienst; das ist bei dieser Größe eine
bewusste Entscheidung und kein Provisorium. Hochverfügbarkeit kostet mehr,
als der Ausfall hier wert ist.

**Auslieferung.** **Argo CD v3.4.6** hält den Cluster mit dem Inhalt eines
Git-Archivs im Gleichstand.

**Eingangstor.** **Traefik** nimmt alle Anfragen von außen an und verteilt
sie anhand des Hostnamens auf die richtige Anwendung.

**Zertifikate.** **cert-manager** beantragt und erneuert Let's-Encrypt-
Zertifikate automatisch. Alle Verbindungen laufen über TLS. Zum Zeitpunkt
der Erstellung dieser Seite waren alle ausgestellten Zertifikate gültig.

**Geheimnisse.** **sealed-secrets**: Zugangsdaten von Anwendungen liegen
verschlüsselt im Archiv und können nur vom Cluster selbst entschlüsselt
werden. Wer das Archiv liest, hat damit nichts gewonnen. Zugangsdaten der
Infrastruktur selbst liegen dagegen **gar nicht** im Archiv, auch nicht
verschlüsselt — sie werden bei einem Neuaufbau von Hand neu erzeugt. Das ist
ein bewusst in Kauf genommener Nachteil bei der Reproduzierbarkeit,
zugunsten der Tatsache, dass ein verschlüsseltes Geheimnis in einer
Versionsgeschichte für immer dort steht.

**Anmeldedienst.** **ZITADEL v4.13.1** mit eigener PostgreSQL-Datenbank,
erreichbar unter
[id.fws-maschsee-test.de](https://id.fws-maschsee-test.de).

**Anwendungen.** Zwei Klassenseiten laufen produktiv, beide
zugriffsgeschützt, jede auf einer eigenen Subdomain und in einem eigenen
Namensraum. Die Hostnamen stehen hier bewusst nicht: Diese Seite ist
öffentlich, und die Zuordnung „diese Klasse, diese Adresse" gehört nicht
ins offene Netz. Dazu eine Mailingliste je Klasse: Versand über AWS SES,
Empfang über einen Cloudflare-Worker.

**Auslastung.** Zwei Zahlen, die man nicht verwechseln darf:

- **Gemessen** (`kubectl top node`, mehrere Stichproben am 4. August 2026):
  **4 bis 5 % der Rechenleistung**, **rund 43 % des Arbeitsspeichers**
  (etwa 3,5 von 8 GB).
- **Reserviert** (`Requests` im Cluster, also das, was sich die Dienste
  zusichern lassen): rund **11 % CPU** und **12 % Arbeitsspeicher**.

Die reservierten Werte sind die niedrigeren, weil `Requests` konservativ
gesetzt sind; die gemessenen sind die aussagekräftigen. Der Arbeitsspeicher
ist dabei fast vollständig durch die Grundausstattung belegt — allein der
Auslieferungs-Controller und der Anmeldedienst mitsamt Datenbank machen
gemessen rund 850 MB aus. Eine zusätzliche Klassenseite belegt davon rund
**50 MB** (gemessen 31 bis 59 MiB je Pod). Der Platz für weitere Klassen
ergibt sich aus dieser Differenz, nicht aus einer Schätzung.

**Fortbestand der alten Adressen.** Die früheren, nach der Klassenlehrkraft
benannten Domains leiten dauerhaft weiter (HTTP 301), damit Lesezeichen und
Kalender-Abos der Eltern nicht brechen.

## GitOps — was das heißt

**GitOps** bedeutet: Der gewünschte Zustand des Servers steht vollständig in
einem Git-Archiv, und eine Software im Cluster sorgt fortlaufend dafür, dass
die Wirklichkeit diesem Zustand entspricht.

Git ist eine Versionsverwaltung: Sie merkt sich jede Fassung jeder Datei,
wer sie wann geändert hat und mit welcher Begründung.

Der praktische Unterschied zum Üblichen:

- **Man ändert nicht den Server, man ändert die Beschreibung.** Wer sich per
  Fernzugriff einloggt und etwas von Hand verstellt, wird von der Software
  automatisch überstimmt. Das ist keine Schikane, sondern die einzige
  Garantie dafür, dass die Beschreibung noch stimmt.
- **Jede Änderung hat Datum, Urheber und Begründung.** Die Frage „warum ist
  das so eingestellt?" ist beantwortbar, auch drei Jahre später.
- **Der Server ist aus der Beschreibung neu aufbaubar.** Genau das ist die
  Antwort auf die Frage, was passiert, wenn die Menschen wechseln, die das
  gebaut haben.

Zur Ehrlichkeit gehört die Ausnahme: Die Zugangsdaten der Infrastruktur
liegen bewusst nicht im Archiv (siehe oben). Ein Neuaufbau bedeutet deshalb:
Beschreibung anwenden, danach eine überschaubare Zahl von Zugangsdaten von
Hand neu erzeugen. Der Weg dafür ist aufgeschrieben.

## OIDC und SSO — was das heißt

**SSO** (Single Sign-On, „einmal anmelden") bedeutet: eine Anmeldung für
alle Anwendungen statt eines eigenen Kontos pro Anwendung.

**OIDC** (OpenID Connect) ist das Verfahren, mit dem das funktioniert. Grob:

1. Sie rufen die Klassenseite auf, ohne angemeldet zu sein.
2. Die Seite schickt Sie zum Anmeldedienst.
3. Dort weisen Sie sich aus — mit Passwort oder über Google beziehungsweise
   GitHub.
4. Der Anmeldedienst schickt Sie mit einem befristeten, digital signierten
   Nachweis zurück: „Diese Person ist die und die und gehört zu dieser
   Klasse."
5. Die Klassenseite prüft die Signatur und lässt Sie herein.

Der entscheidende Punkt: **Die Klassenseite bekommt Ihr Passwort nie zu
sehen.** Sie sieht nur den Nachweis. Und wenn ein Zugang gelöscht wird,
werden keine neuen Nachweise mehr ausgestellt — der Zugang endet überall
gleichzeitig, ohne dass irgendwo eine Liste gepflegt werden muss.

Meldet man sich über Google an, ist Google ein sogenannter externer
Identitätsanbieter für unseren Anmeldedienst. Google bestätigt nur Ihre
Identität. Es bekommt keinen Zugriff auf die Inhalte und erfährt nicht, was
auf den Klassenseiten steht.

## Wie eine Klassenseite gebaut ist

**Astro 5** mit **`@levino/shipyard-base`** und **`@levino/shipyard-docs`**,
serverseitig gerendert über den Node-Adapter. Inhalte sind Markdown-Dateien
im Archiv der jeweiligen Klasse.

Zwei Punkte, die aus schmerzhafter Erfahrung stammen und in der Vorlage
festgeschrieben sind:

- **Die `@levino/*`-Pakete sind auf exakte Versionen festgenagelt**, nicht
  auf `"*"` oder `"^"`. Eine neue Nebenversion setzt eine neue
  Astro-Hauptversion voraus; löst der Paketmanager frei auf, bricht der Bau
  mit einem Fehler, der nach etwas ganz anderem aussieht. Ein Versionssprung
  ist ein bewusster Schritt, kein Nebeneffekt einer Installation.
- **Im Abbild wird mit `npm ci --omit=dev` installiert, nicht mit
  `npm install`.** Die Sperrdatei entscheidet, welche Versionen ausgeliefert
  werden. Ein `npm install` löst die Bereiche ein zweites Mal auf, und das
  ausgelieferte Abbild enthält dann etwas anderes als das, was geprüft
  wurde. Genau daran ist ein Server hier schon einmal gestorben.

Die Auslieferung: Ein Arbeitsablauf auf GitHub baut bei jeder Änderung ein
Abbild, **startet es und prüft, dass es antwortet**, und schiebt es erst dann
in die Registrierungsstelle. Gebaut wird auf einem Läufer der Zielarchitektur
— nie unter Emulation, weil das hier bereits defekte Abbilder erzeugt hat.
Ausgerollt wird anschließend über GitOps: Der Abbild-Verweis wird im
Infrastruktur-Archiv festgeschrieben, Argo CD gleicht ab. Die Bau-Automatik
hat **keinen Zugriff auf den Cluster** — sie braucht keinen.

## Diese Seite hier

Gleicher Baukasten wie die Klassenseiten, damit es nur ein Muster zu
verstehen gibt — mit einem entscheidenden Unterschied: **Diese Seite hat
keine Anmeldeprüfung.** Sie ist öffentlich, ohne Login, für alle. Das ist
kein Versehen und keine Lücke: Eine Seite, die einem Vorstand erklären soll,
worum es geht, kann diesen Vorstand nicht zuerst um ein Konto bitten.

Auf den Klassenseiten sitzt eine Middleware vor jeder Anfrage, die die
Anmeldung prüft. Hier ist sie nicht abgeschaltet — sie ist gar nicht erst
eingebaut. Es gibt keinen Schalter, den jemand versehentlich umlegen könnte.

Der Quelltext liegt offen:
[github.com/fws-maschsee/homepage](https://github.com/fws-maschsee/homepage).

## Was auf dieser Grundlage möglich wäre

Der Rest dieses Abschnitts ist Ausblick. **Gebaut ist davon nichts** — es
steht hier, weil die technische Grundlage die Kosten einer weiteren
Anwendung bestimmt, und die sind niedrig.

Eine zusätzliche Anwendung braucht: einen Namensraum, ein Deployment mit
Service und Ingress, einen Eintrag im GitOps-Archiv und eine
OIDC-Anwendung im Anmeldedienst. Für Websites gibt es dafür eine
Copier-Vorlage; die Manifeste entstehen daraus in Minuten. Der laufende
Betrieb kostet den Arbeitsspeicher, den die Anwendung tatsächlich braucht —
bei einer Astro-SSR-Seite rund 50 MB.

Weil Manifeste, Zugriffsrechte und Anwendungsquelltext durchgehend als
lesbarer, kommentierter Text vorliegen, kann eine KI sie fortschreiben.
Genau so ist dieser Cluster entstanden. Wer etwas ergänzen will, braucht
deshalb Schreibrechte auf ein Repository und eine Vorlage — nicht einen
Administrator und nicht Zugriff auf den Cluster.

Denkbar wären auf dieser Grundlage etwa: öffentliche Seiten für
Arbeitsgemeinschaften, ein Umfragewerkzeug, die Koordination der
Elterndienste, eine Ablage für Lehrmaterialien, eine
Stundenplanverwaltung, die Abgabe von Hausaufgaben als Pull Request — und
Anwendungen, die Schüler:innen selbst schreiben und über denselben Weg
tatsächlich in Betrieb nehmen, mit echter Anmeldung und echten Nutzern.

**Der Sonderfall Kontaktdaten.** Anschriften und Telefonnummern gehen über
das hinaus, was heute in der Datenbank des Anmeldedienstes steht. Sie kämen
deshalb nicht in eine der bestehenden Anwendungen, sondern in einen eigenen
Dienst mit eigener Datenbank: Jede Person pflegte dort ausschließlich ihre
eigenen Angaben und gäbe sie je Klasse frei. Die Sichtbarkeit entstünde bei
jedem Aufruf aus den aktuellen Zugehörigkeiten im Anmeldedienst und nicht
aus einer gespeicherten Liste — wer die Klasse verlässt, verschwände damit
ohne Aufräumvorgang. Nichts davon ginge über AWS SES oder Cloudflare, weil
dieser Dienst nichts verschickt und nichts weiterreicht. Was das für
Löschung, Sicherung und Auftragsverarbeitungsvertrag bedeutet, steht im
[Datenschutz-Abschnitt](/docs/datenschutz#und-kontaktdaten-klassenlisten-telefonnummern).
