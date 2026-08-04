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
zugriffsgeschützt:
`klasse-wiesen.fws-maschsee-test.de` und
`klasse-christophers.fws-maschsee-test.de`.

**Auslastung.** Über alles zusammen sind rund **10 % der Rechenleistung und
9 % des Arbeitsspeichers** fest reserviert. Es ist Platz für viele weitere
Klassen.

**Fortbestand der alten Adressen.** `klasse-poellmann.de` und
`klasse-christophers.de` leiten dauerhaft weiter (HTTP 301), damit
Lesezeichen und Kalender-Abos der Eltern nicht brechen.

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

## Was noch nicht steht

- **Mailinglisten pro Klasse** (`eltern@klasse-wiesen.lists.fws-maschsee-test.de`)
  — Versand über AWS SES, Empfang über einen Cloudflare-Worker. Im Aufbau,
  nicht produktiv.
- **Der Umzug der Anmeldung** von einem älteren, einfacheren Verfahren auf
  ZITADEL, mit Anmeldung über bestehende Google- und GitHub-Konten. Läuft
  gerade.
- **Personenbezogene Daten über den Anmeldedienst hinaus** — keine
  Klassenlisten, keine Kontaktdaten. Bewusst zurückgestellt, bis
  Sicherungskonzept, Löschkonzept und Auftragsverarbeitungsvertrag stehen.
  Die Begründung steht im
  [Datenschutz-Abschnitt](/docs/datenschutz#und-kontaktdaten-klassenlisten-telefonnummern).
