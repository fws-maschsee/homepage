---
title: Für die Schule
sidebar:
  label: Für die Schule
  position: 4
---

# Für Schulleitung, Vorstand und Geschäftsführung

Dieser Abschnitt ist für die Menschen geschrieben, die am Ende
unterschreiben müssen. Er ist deshalb nüchtern und beantwortet die Fragen,
die aus dieser Richtung kommen: was es kostet, was es an Arbeit macht, wie
eine Übernahme abliefe und wie man wieder herauskäme.

**Die Schule kann das übernehmen — muss es aber nicht.** Der Betrieb ist auf
Dauer angelegt und läuft auch ohne Übernahme weiter. Wir zeigen den laufenden Betrieb,
erklären, was er braucht, und übergeben vollständig. Levin Keller begleitet
die Übernahme.

## Was kostet das?

Der laufende Betrieb ist der überraschendste Teil dieser Rechnung.

| Posten | Kosten |
| --- | --- |
| Server (netcup VPS Lite 2 G12s, 4 vCPU, 8 GB RAM, 160 GB SSD) | **rund 8 € brutto im Monat** |
| Alle Programme darauf | 0 € — durchgehend quelloffen, keine Lizenzen |
| Zusätzliche Klasse oder Anwendung | 0 € — es ist Platz da |
| Domains | gering, aber nicht null; hängt davon ab, welche Adressen behalten werden |
| GitHub (Ablage der Inhalte und automatische Auslieferung) | derzeit im kostenlosen Rahmen |

Zusammen **rund zehn Euro im Monat** — für die gesamte Schule, nicht pro
Klasse. Keine Lizenzen, keine Nutzergebühren, keine Staffelpreise.

Warum weitere Klassen und Anwendungen praktisch nichts kosten: Mit allem,
was heute läuft — Anmeldedienst mit eigener Datenbank, Mailinglisten, zwei
Klassenseiten und die gesamte Grundausstattung —, lag die Rechenlast am
4. August 2026 bei **4 bis 5 %** und der belegte Arbeitsspeicher bei **rund
43 %**. Den Arbeitsspeicher belegt fast vollständig die Grundausstattung,
die nicht mitwächst; eine weitere Klassenseite braucht davon rund **50 MB**.
Da ist Luft für ein Vielfaches. Gemessen wurde mit `kubectl top`; die
Aufschlüsselung steht im [Technik-Abschnitt](/docs/technik).

**Was in dieser Rechnung nicht steht — und das ist der ehrliche Teil:**
Arbeitszeit. Aufbau und Betrieb sind bisher unbezahlte Elternarbeit. Wenn die
Schule übernimmt, muss sie entscheiden, wer diese Zeit aufbringt: jemand aus
der Verwaltung mit ein paar Stunden im Monat, ein Dienstleister mit einem
Wartungsvertrag, oder weiterhin Ehrenamt — dann aber mit einer klaren
Absprache statt stillschweigend. Der Betrieb ist bewusst so gebaut, dass er
wenig Zuwendung braucht; er braucht aber nicht null.

## Wer ist heute wofür zuständig?

Für die **Inhalte** die Eltern, die sie schreiben. Für den **Betrieb** eine
Privatperson: Levin Keller. Nicht die Schule — sie hat das Projekt weder
beauftragt noch geprüft, und darum steht `-test` in der Adresse, solange das
so ist.

Datenschutzrechtlich wäre die Schule bei einer Übernahme **Verantwortliche**
im Sinne der DSGVO. Was heute dafür steht, steht offen da: die
[Datenschutzerklärung](/docs/datenschutzerklaerung) mit Zwecken,
Rechtsgrundlagen, Empfängern und Speicherdauern, der
Auftragsverarbeitungsvertrag mit dem Server-Anbieter, ein Löschknopf für
jede Person. Was mit einer Übernahme dazukommt, ist das, was nur die Schule
selbst führen kann: das Verzeichnis von Verarbeitungstätigkeiten ihrer
eigenen Stelle und die Einbindung ihrer Datenschutzbeauftragten.

## Was passiert, wenn die Eltern weg sind, die das gebaut haben?

Die naheliegendste Frage, und sie hat eine Antwort. Der Aufbau hängt derzeit
im Wesentlichen an einer Person. Was ihn davon unabhängig macht, ist bereits
gebaut und keine Absichtserklärung:

1. **Alles ist aus Aufzeichnungen reproduzierbar.** Wie der Server
   eingerichtet ist, steht vollständig als Text in einem Archiv — nicht in
   jemandes Kopf und nicht als Klickfolge in einer Oberfläche. Aus diesen
   Aufzeichnungen lässt sich der Server auf einer neuen Maschine neu
   aufbauen. Das ist der eigentliche Unterschied zu „der Vater aus der 4b
   hat da mal was eingerichtet".
2. **Es ist dokumentiert, nicht nur gebaut.** Zu jedem nicht offensichtlichen
   Schritt gibt es eine Anleitung, und zu jeder Störung, die es gab, eine
   Aufzeichnung, was die Ursache war und was dagegen unternommen wurde.
   Damit kann eine fremde Fachkraft übernehmen, ohne bei null anzufangen.
3. **Es gibt eine Vorlage für den Nachbau.** Eine weitere Klassenseite
   entsteht nicht durch Nachbauen von Hand, sondern aus einer fertigen
   Vorlage in wenigen Minuten. Damit hängt auch das Hinzufügen einer Klasse
   nicht an einer Person.
4. **Es sind lauter Standardbausteine.** Nichts hier ist eine Eigenbau-Lösung,
   die nur ihr Erfinder versteht. Es sind verbreitete, quelloffene
   Werkzeuge, für die es einen Markt an Dienstleistern gibt. Wer diesen
   Betrieb übernehmen soll, muss nicht dieses Projekt kennen, sondern seinen
   Beruf.
5. **Nichts ist eingeschlossen.** Die Inhalte sind schlichte Textdateien. Auch
   wenn morgen alles Übrige verschwände, blieben Protokolle, Berichte und
   Unterlagen lesbar — mit jedem Texteditor.

**Was das trotzdem nicht ersetzt:** eine zweite Person, die es kann. Genau
die kommt mit einer Übernahme dazu.

## Wie würde eine Übernahme praktisch ablaufen?

In dieser Reihenfolge, und jeder Schritt ist einzeln abbrechbar:

1. **Ansehen.** Ein Gespräch, in dem wir zeigen, was läuft und wie. Ohne
   Vorbedingung, ohne Erwartung an eine Zusage.
2. **Prüfen lassen.** Die Schule schaut selbst oder mit ihrer
   Datenschutzbeauftragten und einer IT-Fachkraft darauf. Wir liefern die
   Unterlagen; Einwände sind willkommen und werden nicht wegdiskutiert.
3. **Verträge auf die Schule umstellen.** Server, Domains und der
   Auftragsverarbeitungsvertrag laufen dann auf die Schule statt auf eine
   Privatperson. Datenschutzrechtlich wird die Schule Verantwortliche.
4. **Zugänge übergeben.** Server, Ablagen, Anmeldedienst, Domains — an die
   Personen, die die Schule benennt.
5. **Nebeneinander laufen.** Eine Übergangszeit, in der wir weiter erreichbar
   sind, während die Schule den Betrieb übernimmt.
6. **Die Adresse ändern.** Erst jetzt, wenn es tatsächlich ein Angebot der
   Schule ist, verliert die Domain ihr `-test`. Die alten Adressen leiten
   weiter, damit keine Lesezeichen und keine Kalender-Abos brechen.

Für all das gibt es keine Rechnung, keine Lizenz und keine Bedingung. Es ist
kein Angebot, aus dem jemand ein Geschäft machen will.

## Wie kommen wir wieder heraus, wenn wir es nicht mehr wollen?

Das ist die Frage, die bei Software zu selten gestellt wird und am meisten
über sie aussagt.

- **Die Inhalte** sind einfache Textdateien in einem verbreiteten Format.
  Herunterladen, fertig — es gibt kein Ausgabeformat, das jemand erst
  aufbekommen müsste, und keinen Anbieter, der dabei mitspielen muss.
- **Der Anmeldedienst** ist quelloffen und lässt sich anderswo betreiben.
  Es gibt keine Vertragsbindung.
- **Der Server** ist monatlich kündbar.
- **Es gibt keine Lizenz**, die ausläuft, und keinen Vertrag, aus dem man
  sich freikaufen müsste.

Der praktische Ausstieg besteht darin, die Textdateien zu sichern und den
Server abzubestellen. Das ist Absicht: Ein Projekt, aus dem man leicht
wieder herauskommt, muss man nicht mit Vorsicht betreten.

## Was ist der Nutzen für die Schule, nüchtern betrachtet?

- **Weniger Verstreuung.** Protokolle und Unterlagen liegen an einem Ort
  statt in Postfächern und Nachrichtengruppen.
- **Besserer Schutz als heute.** Der Ist-Zustand vieler Klassen ist ein
  Protokoll als E-Mail-Anhang in unbekannt vielen Postfächern, teils bei
  Anbietern außerhalb Europas. Ein zugriffsgeschützter Ort in Deutschland
  ist dem gegenüber eine Verbesserung, keine neue Baustelle.
- **Ein Zugang statt vieler.** Ein Konto pro Person für alles. Beim Weggang
  einer Familie endet der Zugang an einer Stelle statt an fünf, von denen
  man vier vergisst.
- **Keine Abhängigkeit von einem Anbieter.** Alles quelloffen, alles
  umziehbar.
- **Kalkulierbare Kosten.** Rund 96 € im Jahr für den Server, mit den
  Domains in der Größenordnung von 120 € — unabhängig von der Zahl der
  Klassen.
- **Jede weitere Anwendung ist billig.** Weil Anmeldung, Rechenplatz und
  eine Vorlage bereits stehen, kostet die nächste Anwendung Arbeitszeit und
  sonst fast nichts. Was auf dieser Grundlage möglich wäre — von Seiten für
  Arbeitsgemeinschaften bis zu Anwendungen, die Schüler:innen selbst bauen
  und in Betrieb nehmen —, steht im
  [Technik-Abschnitt](/docs/technik#was-auf-dieser-grundlage-möglich-wäre).
  Gebaut ist davon nichts; die Grundlage dafür schon.

## Womit müssen Sie rechnen?

- **Personalaufwand**, siehe oben. Klein, aber nicht null.
- **Ein Datenschutzverfahren**, das ordentlich zu Ende geführt werden muss.
  Es geht dabei nicht nur um Protokolle und Unterlagen: Dazu kämen
  Kontaktdaten, die Eltern selbst eintragen und je Klasse selbst freigeben
  (siehe
  [Datenschutz](/docs/datenschutz#kontaktdaten-klassenlisten-telefonnummern)).
- **Erwartungen.** Sobald es ein Angebot der Schule ist, erwarten Eltern,
  dass es funktioniert, und melden sich, wenn nicht. Das ist der Preis dafür,
  dass es genutzt wird.
- **Eine Zuständigkeit.** Es braucht eine benannte Person oder Stelle. Ohne
  sie verwaist so etwas, egal wie gut es gebaut ist.

## Wen sprechen Sie an?

[Levin Keller](/kontakt), erreichbar unter
[post@levinkeller.de](mailto:post@levinkeller.de). Für Rückfragen aus der
Schule stehen wir bereit — auch für kritische, auch für solche, die auf ein
Nein hinauslaufen.
