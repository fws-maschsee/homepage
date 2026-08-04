---
title: Datenschutz
sidebar:
  position: 3
---

# Datenschutz — die Fragen, die tatsächlich gestellt werden

Dieser Abschnitt ist der längste auf dieser Seite, und das ist Absicht. Wer
Eltern bittet, Protokolle und Unterlagen ihrer Klasse einem System
anzuvertrauen, schuldet ihnen mehr als den Satz „Ihre Daten sind bei uns
sicher".

Hier stehen deshalb echte Fragen mit echten Antworten — einschließlich der
Antworten, die „das haben wir noch nicht" lauten.

:::note[Kein Rechtstext]

Das hier ist eine Erklärung, keine Datenschutzerklärung im juristischen
Sinne und keine Rechtsberatung. Es beschreibt, wie das System gebaut ist und
warum. Eine förmliche Datenschutzerklärung gehört dazu, sobald das Projekt
über den Elternkreis hinaus verbindlich wird — und spätestens dann, wenn die
Schule es übernimmt.

:::

## Wo liegen die Daten eigentlich?

Auf einem einzelnen Server im Rechenzentrum von **netcup in Nürnberg**, also
in Deutschland und damit im Geltungsbereich der DSGVO.

Auch die Eigentümerkette dahinter ist europäisch, was seltener ist, als man
denkt: Die netcup GmbH sitzt in Karlsruhe, die Muttergesellschaft Anexia in
Klagenfurt in Österreich. Das Unternehmen ist gründergeführt und gehört
keinem außereuropäischen Konzern.

Warum das erwähnenswert ist: Ein Rechenzentrum in Frankfurt nützt wenig, wenn
der Betreiber einem Mutterkonzern gehört, der einer außereuropäischen
Rechtsordnung unterliegt und dadurch zur Herausgabe von Daten verpflichtet
werden kann. Deshalb schauen wir nicht nur auf den Standort der Maschine,
sondern auf die Kette der Eigentümer.

## Was liegt wo? Das ist die wichtigste Frage überhaupt

Es gibt zwei ganz unterschiedliche Ablagen, und die Trennung zwischen ihnen
ist die zentrale Entscheidung dieses Systems:

**1. Inhalte liegen als Textdateien in einem privaten Archiv.**
Berichte, Elternabend-Protokolle, Putzpläne, Unterlagen. Diese Ablage ist
eine sogenannte Versionsverwaltung: Sie merkt sich jede Fassung, die es je
gab, und wer sie wann geändert hat. Das ist für Protokolle großartig — man
kann nachvollziehen, was wann beschlossen wurde, und nichts geht verloren.

**2. Personenbezogene Daten liegen in einer Datenbank auf dem Server —
ausdrücklich nicht im Archiv.**
Wer wer ist, wer zu welcher Klasse gehört, welche E-Mail-Adresse zu welchem
Zugang gehört, wer auf welchem Klassenverteiler steht: Das alles steht
hinter dem Anmeldedienst in einer Datenbank. Nicht im Archiv.

### Warum diese Trennung so wichtig ist

Genau die Eigenschaft, die eine Versionsverwaltung für Protokolle wertvoll
macht, macht sie für personenbezogene Daten untauglich: **Was einmal darin
steht, bekommt man praktisch nicht mehr heraus.**

Es steckt dann in der Historie. Es steckt in jeder Kopie, die jemand auf
seinen Rechner geholt hat. Es steckt in den Sicherungen. Man kann eine Zeile
löschen — der alte Stand bleibt trotzdem abrufbar, denn das ist der ganze
Zweck der Sache. Wirklich entfernen lässt sich das nur, indem man die
gesamte Geschichte umschreibt, und dann muss jede vorhandene Kopie
mitgezogen werden. Bei einem verteilten Archiv weiß niemand, wie viele
Kopien es gibt.

Mit dem Recht auf Löschung ist das unvereinbar. Wenn eine Familie verlangt,
dass ihre Daten gelöscht werden, muss das ein Vorgang sein und keine
Grabung. Deshalb: **Personenbezogene Daten kommen in eine Datenbank, aus der
man sie löschen kann. Punkt.**

Diese Regel steht nicht nur auf dieser Seite. Sie steht als verbindliche
Vorgabe in den Betriebsunterlagen des Servers, damit auch spätere
Änderungen sie nicht versehentlich aufweichen.

## Wer sieht was?

Zugriff hat nur, wer zur jeweiligen Klasse gehört. Jede Klasse ist im
Anmeldedienst ein eigener, abgetrennter Bereich; die Zugehörigkeit ist keine
Einstellung an einer Seite, sondern die Struktur selbst. Eine Einstellung
kann man vergessen zu setzen. Eine Struktur nicht.

Konkret heißt das:

- Eltern sehen die Seite ihrer eigenen Klasse — und keine andere.
- Wer in zwei beteiligten Klassen Kinder hat, sieht beide, mit einem Zugang.
- Wer zu keiner der Klassen gehört, sieht die Anmeldeseite und sonst nichts.
- **Auch die Ablagen dahinter sind privat.** Sie sind nicht öffentlich
  einsehbar, und das mitgelieferte fertige Programmpaket ebenfalls nicht —
  denn die Inhalte stecken darin.

Öffentlich ist genau eine Sache: diese Erklärseite hier. Sie enthält
absichtlich keine personenbezogenen Daten außer dem Namen und der
E-Mail-Adresse des Ansprechpartners.

## Dürfen Elternabend-Protokolle da überhaupt hinein?

Ja — geschützt, nur für die eigene Klasse einsehbar. **Genau dafür ist das
gebaut.**

Ein Elternabend-Protokoll enthält typischerweise Namen von Eltern, manchmal
Absprachen über Kinder, gelegentlich Konflikte. Es ist heute meistens
schlechter geschützt als hier: als E-Mail-Anhang in ungezählten Postfächern,
teils bei Anbietern außerhalb Europas, weitergeleitet an Leute, die gar nicht
mehr zur Klasse gehören.

Ein Ort, zu dem nur die aktuelle Klassenelternschaft Zugang hat und aus dem
ein Zugang beim Weggang wieder entfernt wird, ist dem gegenüber ein
Fortschritt — kein zusätzliches Risiko.

Was trotzdem gilt: Ein Protokoll sollte nicht mehr Personenbezogenes
enthalten, als es muss. Das ist eine Frage an die Protokollführung, nicht an
die Technik.

## Und Kontaktdaten? Klassenlisten? Telefonnummern?

**Was heute dort liegt**, ist das, was der Betrieb braucht: der Zugang einer
Person, ihre Zugehörigkeit zu einer Klasse und die E-Mail-Adresse, unter der
sie auf dem Klassenverteiler steht. Das steht in der Datenbank hinter dem
Anmeldedienst, und es lässt sich dort auch wieder löschen.

**Was heute nicht dort liegt**, ist die vollständige Klassenliste mit
Telefonnummern und Anschriften. Technisch wäre sie möglich — sie wäre
vermutlich sogar der offensichtlichste Nutzen von allen. Sie kommt trotzdem
erst, wenn drei Dinge stehen:

1. **Ein Sicherungskonzept**, das nicht nur beschreibt, wie gesichert wird,
   sondern auch, wie eine Löschung in die Sicherungen durchschlägt. Eine
   Löschung, die die Sicherung überlebt, ist keine.
2. **Ein Löschkonzept**, das festlegt, was beim Weggang einer Familie
   passiert, wann es passiert und wer es auslöst.
3. **Ein Auftragsverarbeitungsvertrag** mit dem Server-Anbieter (siehe
   unten).

Die Reihenfolge ist Absicht: nicht „machen wir und regeln es später",
sondern „regeln wir und machen es dann". Wenn Sie eine Klassenliste
vermissen — der Wunsch ist berechtigt und notiert.

## Was ist ein Auftragsverarbeitungsvertrag, und warum brauchen wir einen?

Wenn Daten auf einer fremden Maschine liegen, kann deren Betreiber technisch
darauf zugreifen — nicht, weil er es tut, sondern weil ihm die Maschine
gehört. Datenschutzrechtlich verarbeitet er die Daten damit im Auftrag.

Ein **Auftragsverarbeitungsvertrag** (kurz AVV, in Artikel 28 DSGVO
geregelt) hält schriftlich fest, was er dabei darf und was nicht: dass er
die Daten nur weisungsgemäß verarbeitet, dass er sie nicht für eigene Zwecke
nutzt, dass er sie am Ende löscht, welche Sicherheitsmaßnahmen er einhält
und wen er seinerseits einschaltet.

Ohne diesen Vertrag ist die Verarbeitung rechtlich angreifbar, selbst wenn
technisch alles sauber ist.

**Stand heute:** Der Server wird über einen privaten Vertrag betrieben. Für
einen Betrieb, in dem personenbezogene Daten über den kleinen Elternkreis
hinaus verarbeitet werden — und erst recht für einen Betrieb durch die
Schule — muss ein AVV mit dem Anbieter geschlossen werden. netcup bietet
einen an. Das ist einer der Punkte, die bei einer Übernahme durch die Schule
ohnehin neu geschlossen werden müssten, weil dann die Schule Vertragspartner
wäre und nicht eine Privatperson.

Dasselbe gilt für die Dienste, die für die Mailinglisten vorgesehen sind.
Solange diese nicht produktiv laufen, laufen dort auch keine
personenbezogenen Daten.

## Was passiert mit den Daten, wenn eine Familie geht?

Der Zugang wird gelöscht. Weil es **einen** Zugang gibt und nicht einen pro
Website, ist das ein Vorgang und keine Suche über mehrere Systeme hinweg.
Nach der Löschung kommt die Person auf keine der Seiten mehr.

Was von den Inhalten bleibt: Ein Elternabend-Protokoll aus dem Jahr 2024
bleibt bestehen — auch wenn eine der darin genannten Familien die Schule
verlassen hat. Das ist der gleiche Umgang, den ein Papierordner im
Klassenschrank auch hätte, und es ist der Grund, weshalb ein Protokoll nicht
mehr Personenbezogenes enthalten sollte, als für seinen Zweck nötig ist.

Wer verlangt, dass sein Name aus einem bestehenden Protokoll entfernt wird,
bekommt das — es ist eine Textänderung. Was dabei ehrlich gesagt werden muss:
Die frühere Fassung bleibt in der Versionsgeschichte des Archivs auffindbar.
Genau deshalb gehören personenbezogene Daten nicht systematisch dorthin
(siehe oben). Für eine vollständige Tilgung müsste die Geschichte
umgeschrieben werden; das ist möglich, aber ein Eingriff, der einzeln
entschieden werden muss.

## Sind die Verbindungen verschlüsselt?

Ja, ausnahmslos. Jede Verbindung zu jeder dieser Seiten läuft über TLS — das
ist das, was Ihr Browser mit dem Schloss-Symbol anzeigt. Unverschlüsselte
Aufrufe werden auf die verschlüsselte Adresse umgeleitet.

Die Zertifikate stammen von Let's Encrypt und sind echte, von Browsern
anerkannte Zertifikate — keine selbst ausgestellten, bei denen der Browser
warnt. Sie werden **automatisch erneuert**, ohne dass jemand daran denken
muss. Das ist wichtiger, als es klingt: Der häufigste Grund für eine
Zertifikatswarnung ist ein Mensch, der einen Erneuerungstermin verpasst hat.

## Was passiert, wenn ich mich mit Google oder GitHub anmelde?

Diese Frage stellt sich zu Recht, denn es klingt zunächst so, als würde man
Google in die Klassenseite hineinlassen. Das Gegenteil ist der Fall.

**Was passiert:** Sie werden zu Google (oder GitHub) geschickt, melden sich
dort wie gewohnt an, und Google schickt Sie mit einer Bestätigung zurück:
„Diese Person hat sich erfolgreich angemeldet, ihre E-Mail-Adresse lautet
so-und-so." Unser Anmeldedienst erstellt daraufhin einen Zugang oder
erkennt einen bestehenden wieder.

**Was übertragen wird:** Ihr Name und Ihre E-Mail-Adresse, in manchen Fällen
das Profilbild. Mehr wird nicht abgefragt.

**Was Google dabei erfährt:** dass Sie sich bei einem Dienst angemeldet
haben, der `id.fws-maschsee-test.de` heißt. Das ist derselbe Umfang wie bei
jedem anderen Dienst, bei dem Sie sich mit Google anmelden.

**Was Google *nicht* erfährt:** was auf den Klassenseiten steht. Google sieht
keine Protokolle, keine Berichte, keine Termine, keine Putzpläne. Der Anbieter
bestätigt nur Ihre Identität; er bekommt keinen Zugang zu den Inhalten.

**Was Ihr Passwort angeht:** Es verlässt Google nie. Weder unser
Anmeldedienst noch die Klassenseiten sehen es jemals. Das ist der eigentliche
Sicherheitsgewinn dieses Verfahrens gegenüber „noch ein Passwort für noch
eine Website".

**Und wenn ich das nicht will:** Dann melden Sie sich mit E-Mail-Adresse und
eigenem Passwort an. Dieser Weg bleibt bestehen. Niemand muss ein Konto bei
einem großen Anbieter haben, um an die Unterlagen der eigenen Klasse zu
kommen.

## Gibt es Tracking, Statistik oder Werbung?

**Werbung:** nein. Es gibt kein Geschäftsmodell hinter diesem Projekt, an
das man Werbung anschließen könnte.

**Weitergabe an Dritte:** nein. Keine Daten werden verkauft, vermietet,
getauscht oder zu Werbezwecken weitergegeben.

**Tracking im Sinne von Wiedererkennung über Websites hinweg:** nein. Keine
Werbenetzwerke, keine eingebetteten Zählpixel, keine Profilbildung, keine
Cookie-Banner — es gibt schlicht nichts zuzustimmen.

**Was es technisch bedingt gibt:** Wie jeder Server im Internet verarbeitet
auch dieser beim Aufruf einer Seite die Verbindungsdaten, darunter die
IP-Adresse. Ohne das kann keine Antwort zugestellt werden. Sitzungsdaten
Ihrer Anmeldung werden gespeichert, solange Sie angemeldet sind — sonst
müssten Sie sich auf jeder Seite neu anmelden.

Diese Seite hier, die Sie gerade lesen, bindet **keinerlei** Statistik ein.
Auf den Klassenseiten ist eine cookiefreie, anonyme Besucherzählung
vorgesehen, die keine personenbezogenen Profile bildet.

## Wer betreibt das, und wen kann ich fragen?

Derzeit eine Privatperson: [Levin Keller](/kontakt), Vater an der Schule.
Nicht die Schule — sie hat das Projekt weder beauftragt noch geprüft.

Wenn Sie mit etwas nicht einverstanden sind, wenn Sie wissen wollen, welche
Daten über Sie gespeichert sind, oder wenn Sie deren Löschung wünschen:
Schreiben Sie an
[post@levinkeller.de](mailto:post@levinkeller.de). Sie bekommen eine
Antwort, und Sie bekommen sie ohne Diskussion darüber, ob Ihr Anliegen
berechtigt ist.

## Was fehlt noch — ehrlich

Damit niemand später überrascht wird, hier die offenen Punkte an einer
Stelle:

- **Ein förmlicher Auftragsverarbeitungsvertrag** mit dem Server-Anbieter
  ist noch nicht geschlossen.
- **Ein schriftliches Sicherungs- und Löschkonzept** existiert als
  Arbeitsstand, nicht als abgenommenes Dokument.
- **Ein Verzeichnis von Verarbeitungstätigkeiten** — das, was eine
  verantwortliche Stelle nach Artikel 30 DSGVO führen muss — gibt es noch
  nicht. Es wird gebraucht, sobald die Schule Verantwortliche wird.
- **Eine förmliche Datenschutzerklärung** im juristischen Sinne fehlt; diese
  Seite ersetzt sie nicht.
- **Eine unabhängige Prüfung** durch die Schule oder deren
  Datenschutzbeauftragte hat nicht stattgefunden. Wir wären froh darüber.

Genau deshalb liegt dort auch noch keine vollständige Klassenliste mit
Telefonnummern und Anschriften.
