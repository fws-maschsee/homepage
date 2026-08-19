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

Eine Klassenliste mit Telefonnummern und Anschriften gehört nicht dazu. Sie
ist der offensichtlichste Nutzen von allen — und zugleich der Teil, bei dem
ein Fehler am meisten anrichtet. Deshalb entsteht sie nicht als Tabelle, die
jemand befüllt, sondern als eigener Dienst unter einer eigenen Adresse. Wie
er gebaut ist, steht hier vorab, damit man es nach dem Start nachprüfen
kann. Warum es ihn überhaupt geben soll, steht ohne Fachbegriffe unter
[Warum soll es ein Kontaktbuch geben?](/docs/eltern#warum-soll-es-ein-kontaktbuch-geben).

**Jeder pflegt seine eigenen Angaben — und nur die.** Anschrift,
Telefonnummer, Kontaktadresse und die Vornamen der eigenen Kinder würde jede
Person selbst eintragen. Niemand trüge etwas für jemand anderen ein, und es
würde nichts aus einer bestehenden Klassenliste übernommen. Der Dienst
begänne leer: Wer nichts einträgt, steht nirgends.

**Freigegeben wird je Klasse, und der Schalter geht in beide Richtungen.**
Wer seine Angaben der einen Klasse zeigen möchte und der anderen nicht,
stellt das so ein; wer die Freigabe zurücknehmen möchte, benutzt denselben
Schalter. Die Freigabe wäre auch keine Bedingung dafür, die Angaben der
anderen zu sehen — eine Freigabe, ohne die man nicht hineinkommt, ist keine
freiwillige.

**Sichtbar wäre ein Eintrag nur für Menschen, die in diesem Moment zu
derselben Klasse gehören.** Die Zugehörigkeit würde bei jedem Aufruf frisch
beim Anmeldedienst erfragt und nicht als Kopie mitgeführt. Wer die Klasse
verlässt, verschwände damit von selbst aus den Listen der anderen. Das ist
der eigentliche Grund für diesen Aufbau: Es gäbe keinen Aufräumvorgang, den
jemand anstoßen müsste — und deshalb auch keinen, den jemand vergessen kann.

**Es gäbe keine Freitextfelder.** Nur benannte Felder, bei denen feststeht,
was hineingehört. Damit kann nichts hineingeraten, wofür es keine Spalte
gibt. Das ist Erfahrung und nicht Vorsicht: Im Adressbuch der Klassen gab es
einmal ein freies Notizfeld. Es sammelte Kindernamen und Geburtsdaten ein
und wurde deshalb wieder entfernt.

**Die Vornamen der Kinder stehen bewusst darin.** Eine Klassenliste ohne sie
verfehlt ihren Zweck — man ruft wegen eines Kindes an, nicht wegen einer
Anschrift. Es sind Daten von Minderjährigen, und genau deshalb sind sie ein
benanntes Feld, das Eltern für ihr eigenes Kind ausfüllen oder leer lassen,
und kein Nebenprodukt von irgendetwas anderem. Nachname und Geburtsdatum
gehören nicht dazu.

**Selbstauskunft und Löschen sind je ein Knopf.** Eine Seite zeigt, was über
die eigene Person gespeichert ist und wo es sichtbar ist; ein Knopf daneben
löscht alles davon in einem Vorgang. Kein Antrag, keine Rückfrage, keine
Wartezeit. Wer lieber schreibt, schreibt an die Adresse weiter unten —
beides führt zum selben Ergebnis.

**Die Daten blieben auf dem Server in Nürnberg, und dort allein.** Dieser
Dienst verschickt nichts und reicht nichts weiter. Die Kontaktdaten kämen
deshalb an keinem der Anbieter vorbei, die für die Mailinglisten vorgesehen
sind — AWS SES für den Versand, ein Cloudflare-Worker für den Empfang. Das
ist erwähnenswert, weil das Argument von ganz oben — europäischer Standort,
europäische Eigentümerkette — bei diesen beiden nicht trägt. Für die
Kontaktdaten wird es gar nicht erst gebraucht.

### Was aus den drei Vorbedingungen geworden ist

An dieser Stelle standen drei Bedingungen, die erfüllt sein sollten, bevor
Kontaktdaten hinzukommen: ein Sicherungskonzept, ein Löschkonzept, ein
Auftragsverarbeitungsvertrag. Keine davon ist stillschweigend entfallen.
Zwei sind allerdings anders ausgegangen als gedacht.

**Der Auftragsverarbeitungsvertrag** mit dem Server-Anbieter wird
geschlossen. netcup bietet einen an; was ein solcher Vertrag regelt, steht
im nächsten Abschnitt. Er ist Voraussetzung für den Start und nicht etwas,
das danebenherläuft.

**Das Sicherungskonzept** ist zur unbequemsten der drei Antworten geworden:
Es gibt keine automatische Sicherung, und vorerst ist auch keine vorgesehen.
Die ursprüngliche Frage — wie schlägt eine Löschung in die Sicherungen
durch? — erledigt sich damit, denn es gibt keine, die sie überleben könnte.
Der Preis dafür steht weiter unten unter „Was fehlt noch" und wird dort
nicht beschönigt.

**Das Löschkonzept** gibt es nicht als abgenommenes Dokument, und eines zu
behaupten wäre unredlich. Es gibt stattdessen das, wofür ein Löschkonzept
sonst da ist: einen Knopf, mit dem jede Person ihre Daten selbst und
vollständig löscht, und einen Ansprechpartner, der erreichbar ist und
antwortet. Was beim Weggang aus einer Klasse geschieht, muss dabei gar nicht
geregelt werden — der Eintrag wird dann nicht mehr angezeigt, ohne dass
jemand etwas tut.

Der Grundsatz bleibt derselbe: erst regeln, dann machen. An einer Stelle
lautet die Regelung, dass es keine Sicherung gibt.

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

**Stand heute:** Der Server wird über einen privaten Vertrag betrieben.
netcup bietet einen AVV an, und er wird geschlossen — er ist die
Voraussetzung dafür, dass Kontaktdaten überhaupt dazukommen. Unterschrieben
ist er nicht, und bis dahin steht er unten bei den offenen Punkten.

Das ändert nichts daran, dass er bei einer Übernahme durch die Schule
ohnehin neu geschlossen werden müsste, weil dann die Schule Vertragspartner
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

- **Es gibt keine automatische Sicherung der Datenbank**, und vorerst ist
  auch keine vorgesehen. Die Folge im Klartext: Geht der Datenträger
  verloren, sind die Kontaktdaten weg und müssten bei allen neu erfragt
  werden. Die Inhalte der Klassenseiten trifft das nicht — sie liegen im
  Archiv und in jeder Arbeitskopie.
- **Ein förmlicher Auftragsverarbeitungsvertrag** mit dem Server-Anbieter
  wird geschlossen; unterschrieben ist er nicht.
- **Ein schriftliches Sicherungs- und Löschkonzept** existiert als
  Arbeitsstand, nicht als abgenommenes Dokument. Was es stattdessen gibt,
  steht oben: einen Löschknopf für jede Person und einen erreichbaren
  Ansprechpartner.
- **Ein Verzeichnis von Verarbeitungstätigkeiten** — das, was eine
  verantwortliche Stelle nach Artikel 30 DSGVO führen muss — gibt es noch
  nicht. Es wird gebraucht, sobald die Schule Verantwortliche wird.
- **Eine förmliche Datenschutzerklärung** im juristischen Sinne fehlt; diese
  Seite ersetzt sie nicht.
- **Eine unabhängige Prüfung** durch die Schule oder deren
  Datenschutzbeauftragte hat nicht stattgefunden. Wir wären froh darüber.

Der erste Punkt wiegt bei den Kontaktdaten am schwersten, und deshalb steht
er oben: Diese Angaben sind gegen einen Verlust nicht gesichert. Sie sind
allerdings von allem, was hier liegt, das am ehesten Wiederbeschaffbare —
indem man fragt.
