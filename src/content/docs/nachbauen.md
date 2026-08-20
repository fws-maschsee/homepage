---
title: Zum Nachbauen
sidebar:
  position: 6
---

# Für andere Schulen und Elterninitiativen

Wenn Sie an einer anderen Schule vor demselben Problem stehen: Nehmen Sie
sich, was Sie brauchen. Es ist quelloffen, es gibt nichts zu bezahlen und
niemanden um Erlaubnis zu fragen.

Hier steht, was es braucht und wie Sie anfangen.

## Was Sie brauchen

- **Einen Server.** Bei uns ein netcup VPS Lite 2 G12s für rund 8 € brutto
  im Monat: 4 vCPU, 8 GB RAM, 160 GB SSD. Gemessen mit zwei Klassen und dem
  gesamten Unterbau: 4 bis 5 % Rechenlast, rund 43 % Arbeitsspeicher (Stand
  4. August 2026). Für eine ganze Schule ist das reichlich bemessen. Es geht
  auch kleiner — der Arbeitsspeicher ist die knappere Größe, nicht die
  Rechenleistung.
- **Eine Domain.**
- **Ein KI-Abo und etwas Sitzfleisch.** Bei uns Claude, bedient über die
  Claude-CLI im Terminal. Das ist die eigentliche Voraussetzung — nicht das
  Geld und nicht Vorwissen in Linux oder Kubernetes. Was man wissen muss,
  lernt man dabei; das meiste erledigt die KI.
- **Zeit für den Aufbau**, nicht für den Betrieb. Der laufende Betrieb ist
  ruhig; der Aufbau ist die Arbeit.

## Wie Sie anfangen

Nicht mit Kopieren. Geben Sie Ihrer KI diese beiden Adressen und sagen Sie
ihr, was Sie vorhaben — sie liest, was dort steht, stellt die Fragen, die sie
braucht, und richtet den Rest ein:

- **Die Vorlage für eine Klassenseite:**
  [github.com/fws-maschsee/klassen-website-template](https://github.com/fws-maschsee/klassen-website-template)
  — eine Copier-Vorlage. Daraus entsteht in Minuten eine fertige Klassenseite:
  Astro 6, Shipyard, geschützte Inhalte, Bau- und Auslieferungsautomatik,
  fertige Kubernetes-Manifeste.
- **Die Organisation mit allem Übrigen:**
  [github.com/fws-maschsee](https://github.com/fws-maschsee)

In den Dateien steht die Begründung jeweils an Ort und Stelle — geschrieben
für den nächsten Menschen und für die nächste KI, die sie liest. Genau davon
lebt dieses Vorgehen.

Das Infrastruktur-Archiv ist privat, weil dort Betriebsdetails eines
laufenden Systems stehen. Wenn Sie hineinsehen möchten, [fragen Sie](/kontakt);
wir zeigen es.

Fragen? [Schreiben Sie uns.](/kontakt) Auf Fragen von anderen Schulen
antworten wir gern und ausführlich.
