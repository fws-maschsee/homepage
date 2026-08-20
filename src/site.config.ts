/**
 * Zentrale Stelle für alle Bezeichnungen dieser Website.
 *
 * Alles, was Code ist (`astro.config.mjs`, die Seiten unter `src/pages/`),
 * importiert seine Bezeichnungen von hier. Markdown-Dateien unter
 * `src/content/` können nichts importieren — dort stehen Namen und Zahlen
 * ausgeschrieben im Text.
 */

/** Anzeigename des Projekts. Erscheint in der Kopfzeile und im Seitentitel. */
export const PROJECT_NAME = 'Klassen-Websites Maschsee'

/**
 * Name der Schule, um deren Elternschaft es geht.
 *
 * Wichtig: Diese Seite ist KEIN Angebot der Schule. Der Name steht hier, weil
 * er zur Einordnung nötig ist — nicht als Absender.
 */
export const SCHOOL_NAME = 'Freie Waldorfschule Hannover-Maschsee'

/**
 * Domain dieser Website — der Apex, nicht eine Subdomain.
 *
 * Technischer Bezeichner. Daran hängen der A-Record im DNS, das
 * TLS-Zertifikat und der Ingress im Cluster.
 *
 * Das `-test` im Namen ist Absicht und bleibt: Es macht auf den ersten Blick
 * sichtbar, dass hier kein offizieller Schulauftritt liegt. Wer es entfernen
 * will, muss vorher die Schule an Bord haben — vorher wäre es eine
 * Irreführung.
 */
export const SITE_DOMAIN = 'fws-maschsee-test.de'

/** Vollständige Basis-URL der Website. */
export const SITE_URL = `https://${SITE_DOMAIN}`

/** GitHub-Repository dieser Website. Öffentlich — die Seite ist es auch. */
export const REPO_URL = 'https://github.com/fws-maschsee/homepage'

/** GitHub-Organisation des Projekts. */
export const ORG_URL = 'https://github.com/fws-maschsee'

/** Copier-Vorlage, mit der eine weitere Klassenseite entsteht. */
export const TEMPLATE_URL =
	'https://github.com/fws-maschsee/klassen-website-template'

/** Verantwortlich, ansprechbar, haftbar. */
export const CONTACT_NAME = 'Levin Keller'
export const CONTACT_MAIL = 'post@levinkeller.de'

/**
 * Die ladungsfaehige Anschrift der Anbieterkennzeichnung nach Paragraph 5 DDG.
 * Sie steht auf der Kontaktseite und im Fuss JEDER Seite — dieselbe Zeile, die
 * die Klassenseiten und `konto` schon fuehren, damit ueberall dasselbe steht.
 */
export const CONTACT_ADDRESS = 'Hohenzollerndamm 152, 14199 Berlin'

/** Anbieterkennzeichnung in einer Zeile, fuer den Fuss jeder Seite. */
export const BETREIBER = `${CONTACT_NAME}, ${CONTACT_ADDRESS}`

/** Zentraler Anmeldedienst (ZITADEL). */
export const IDENTITY_URL = 'https://id.fws-maschsee-test.de'

/**
 * Zahl der Klassengemeinschaften, die den Betrieb produktiv nutzen.
 *
 * HIER STEHT BEWUSST NUR EINE ZAHL UND KEINE LISTE.
 *
 * Diese Seite ist öffentlich. Wer hier Klassennamen, Lehrkräfte oder die
 * Hostnamen der geschützten Klassenseiten aufführt, gibt preis, welche
 * Klasse an welcher Adresse welche Inhalte liegen hat — Angaben über
 * Menschen, die niemand gefragt hat und die nichts davon haben. Die
 * Zugriffskontrolle bleibt zwar wirksam, aber die Zuordnung selbst gehört
 * nicht ins offene Netz.
 *
 * Die Zahl trägt das Argument vollständig: Sie belegt, dass der Betrieb
 * läuft und nicht bloß gedacht ist. Der Name trägt nichts bei.
 *
 * Nachgezählt am 4. August 2026.
 */
export const CLASS_COUNT = 2

/**
 * Der Status-Hinweis. Steht als nicht wegklickbarer Balken über jeder Seite
 * und zusätzlich ausgeschrieben auf der Startseite.
 *
 * Er ist keine Formalie und gehört nicht ins Impressum. Wer ihn kürzt, nimmt
 * der Seite die Aussage, für die sie gebaut ist.
 */
export const DISCLAIMER_SHORT =
	'Privates Elternprojekt — kein offizielles Angebot der Freien Waldorfschule Hannover-Maschsee.'
