---
title: Für die Schule
sidebar:
  label: Für die Schule
  position: 4
---

# Für Schulleitung, Vorstand und Geschäftsführung

Dieser Abschnitt ist für die Menschen geschrieben, die am Ende
unterschreiben müssen. Er ist deshalb nüchtern und benennt die Einwände
zuerst, die uns selbst am meisten beschäftigen.

Vorweg der Rahmen: **Wir bitten hier nicht um eine Entscheidung.** Wir
möchten, dass Ihnen bekannt ist, dass es das gibt, dass es läuft, und dass
die Tür für eine Übernahme offen steht. Was daraus wird, entscheiden Sie —
oder eben nicht.

## Was kostet das?

Der laufende Betrieb ist der überraschendste Teil dieser Rechnung.

| Posten | Kosten |
| --- | --- |
| Server (netcup VPS Lite 2 G12s, 4 vCPU, 8 GB RAM, 160 GB SSD) | **rund 8 € brutto im Monat** |
| Alle Programme darauf | 0 € — durchgehend quelloffen, keine Lizenzen |
| Zusätzliche Klasse | 0 € — es ist Platz da |
| Domains | gering, aber nicht null; hängt davon ab, welche Adressen behalten werden |
| GitHub (Ablage der Inhalte und automatische Auslieferung) | derzeit im kostenlosen Rahmen |

Das sind **rund 96 € im Jahr** für den Server — für die gesamte Schule, nicht
pro Klasse.

Warum weitere Klassen praktisch nichts kosten: Mit allem, was heute läuft
(Anmeldedienst mit eigener Datenbank, zwei Klassenseiten, die gesamte
Grundausstattung), sind rund **10 % der Rechenleistung und 9 % des
Arbeitsspeichers** fest belegt. Da ist Luft für ein Vielfaches.

**Was in dieser Rechnung nicht steht — und das ist der ehrliche Teil:**
Arbeitszeit. Aufbau und Betrieb sind bisher unbezahlte Elternarbeit. Wenn die
Schule übernimmt, muss sie entscheiden, wer diese Zeit aufbringt: jemand aus
der Verwaltung mit ein paar Stunden im Monat, ein Dienstleister mit einem
Wartungsvertrag, oder weiterhin Ehrenamt — dann aber mit einer klaren
Absprache statt stillschweigend. Der Betrieb ist bewusst so gebaut, dass er
wenig Zuwendung braucht; er braucht aber nicht null.

## Wer haftet?

**Heute: eine Privatperson.** Levin Keller betreibt Server und Dienste privat
und trägt dafür die Verantwortung. Die Schule haftet nicht — sie hat das
Projekt weder beauftragt noch geprüft, und diese Seite sagt das an mehreren
Stellen ausdrücklich, damit kein anderer Eindruck entsteht.

Das ist zugleich der stärkste Grund, über eine Übernahme zu sprechen. Der
jetzige Zustand ist für die Schule risikoarm, aber er ist auch instabil:

- Für die **Inhalte** sind die Eltern verantwortlich, die sie schreiben.
- Für den **Betrieb** ist eine Privatperson verantwortlich.
- Sobald jemand den Eindruck gewinnt, das sei ein Angebot der Schule, hat die
  Schule ein Problem, ohne je etwas entschieden zu haben.

Gegen genau diesen Eindruck arbeitet dieses Projekt aktiv an: mit dem
Hinweisbalken über jeder Seite, mit dem Abschnitt ganz oben auf der
Startseite — und damit, dass die Adresse selbst **`-test`** heißt. Wer den
Link ungefragt weitergereicht bekommt, sieht schon in der Adresszeile, dass
das kein offizieller Schulauftritt ist. Der Zusatz verschwindet erst, wenn
die Schule das Projekt tatsächlich übernommen hat — vorher wäre er eine
Irreführung.

Datenschutzrechtlich wäre die Schule bei einer Übernahme **Verantwortliche**
im Sinne der DSGVO. Was dafür fehlt, steht ungeschönt am Ende des
[Datenschutz-Abschnitts](/docs/datenschutz#was-fehlt-noch--ehrlich): ein
Auftragsverarbeitungsvertrag mit dem Anbieter, ein abgenommenes
Sicherungs- und Löschkonzept, ein Verzeichnis von
Verarbeitungstätigkeiten, eine förmliche Datenschutzerklärung.

## Was passiert, wenn die Eltern weg sind, die das gebaut haben?

Das ist der ernsteste Einwand gegen dieses Projekt. Er ist berechtigt, und er
wird hier nicht kleingeredet.

**Der Befund:** Der Aufbau hängt derzeit im Wesentlichen an einer Person.
Wenn diese Person morgen ausfällt, läuft das System zwar weiter — es ist so
gebaut, dass es niemanden zum Weiterlaufen braucht —, aber es gäbe zunächst
niemanden, der eine Störung beheben oder eine Änderung vornehmen könnte.

**Was dagegen getan wird**, und zwar nicht als Absichtserklärung, sondern
bereits umgesetzt:

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

**Was das trotzdem nicht ersetzt:** eine zweite Person, die es kann. Solange
die Schule nicht übernimmt, gibt es diese Person nicht, und das bleibt ein
Risiko. Wir können es nicht auflösen; wir können es nur benennen und dafür
sorgen, dass ein Wechsel möglich ist, wenn er nötig wird.

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

## Und wenn die Schule das nicht will?

Dann ist das eine legitime Antwort, und sie ändert für die Schule nichts.

Das Projekt läuft dann weiter als das, was es heute ist: eine private
Einrichtung von Eltern für ihre eigenen Klassen, deutlich als solche
gekennzeichnet, ohne Anspruch, für die Schule zu sprechen. Wenn die letzte
beteiligte Familie die Schule verlässt, endet es.

Wenn die Schule möchte, dass es **gar nicht** existiert — also auch nicht als
Privatprojekt —, ist das ein Gespräch, das wir führen und dessen Ergebnis
wir akzeptieren. Uns ist wichtiger, dass die Schule sich nicht übergangen
fühlt, als dass diese Server laufen.

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
- **Kalkulierbare Kosten.** Rund 96 € im Jahr für den Server, unabhängig von
  der Zahl der Klassen.

## Womit müssen Sie rechnen?

- **Personalaufwand**, siehe oben. Klein, aber nicht null.
- **Ein Datenschutzverfahren**, das ordentlich zu Ende geführt werden muss,
  bevor mehr als Protokolle und Unterlagen darin liegen.
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
