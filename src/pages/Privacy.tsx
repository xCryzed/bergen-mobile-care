import { Header } from "@/components/Header.tsx";
import { Footer } from "@/components/Footer.tsx";
import { useEffect } from "react";
import {
  Shield,
  Lock,
  Eye,
  UserCheck,
  FileText,
  AlertTriangle,
  Server,
  Mail,
  ExternalLink,
} from "lucide-react";

const Privacy = () => {
  useEffect(() => {
    const element = document.getElementById("datenschutz");
    const isMobile = window.innerWidth < 768;
    const headerHeight = isMobile ? 450 : 100;
    const elementPosition = element.offsetTop - headerHeight;

    if (element) {
      window.scrollTo({ behavior: "smooth", top: elementPosition });
      return;
    }
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-white to-soft-blue-50 dark:from-gray-900 dark:to-gray-800">
        <section id="datenschutz" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <Shield className="w-12 h-12 text-soft-blue-600 mr-4" />
                  <h1 className="text-clamp-2xl md:text-clamp-3xl font-bold text-gray-800 dark:text-gray-100">
                    Datenschutzerklärung
                  </h1>
                </div>
                <p className="text-clamp-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und
                  informieren Sie transparent über unsere Datenverarbeitung.
                </p>
              </div>

              <div className="space-y-12 text-left">
                {/* 1. Verantwortlicher */}
                <div className="bg-soft-blue-50 dark:bg-gray-800 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <UserCheck className="w-6 h-6 text-soft-blue-600 mr-3" />
                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                      1. Verantwortlicher im Sinne der DSGVO
                    </h2>
                  </div>
                  <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p className="font-semibold">Regina Bergen</p>
                    <p>Mobile Fußpflege</p>
                    <p>Zum Kirschbäumchen 24</p>
                    <p>52070 Aachen</p>
                    <p>Deutschland</p>
                    <br />
                    <p>Telefon: +49 170 1212677</p>
                    <p>E-Mail: info@fusspflegebergen.de</p>
                  </div>
                </div>

                {/* 2. Allgemeine Hinweise */}
                <div>
                  <div className="flex items-center mb-4">
                    <FileText className="w-6 h-6 text-soft-blue-600 mr-3" />
                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                      2. Allgemeine Hinweise zur Datenverarbeitung
                    </h2>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
                    Personenbezogene Daten werden auf dieser Website nur im
                    technisch notwendigen Umfang erhoben. Die Verarbeitung
                    erfolgt gemäß den Bestimmungen der
                    EU-Datenschutz-Grundverordnung (DSGVO) und des
                    Bundesdatenschutzgesetzes (BDSG). Diese Datenschutzerklärung
                    klärt Sie über Art, Umfang und Zweck der Erhebung und
                    Verwendung personenbezogener Daten auf unserer Website auf.
                  </p>
                </div>

                {/* 3. Hosting und technische Bereitstellung */}
                <div className="bg-soft-blue-50 dark:bg-gray-800 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Server className="w-6 h-6 text-soft-blue-600 mr-3" />
                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                      3. Hosting und technische Bereitstellung
                    </h2>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
                        GitHub Pages
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        Diese Website wird über GitHub Pages bereitgestellt,
                        einen Dienst der GitHub, Inc., 88 Colin P Kelly Jr St,
                        San Francisco, CA 94107, USA.
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        <strong>Verarbeitete Daten:</strong> IP-Adresse, Datum
                        und Uhrzeit des Abrufs, übertragene Datenmenge,
                        Browsertyp und -version, Betriebssystem, Referrer-URL
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        <strong>Zweck:</strong> Technische Bereitstellung und
                        Sicherheit der Website
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f
                        DSGVO (berechtigtes Interesse an der technischen
                        Bereitstellung der Website)
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        <strong>Drittlandübermittlung:</strong> Die Daten werden
                        in die USA übertragen. GitHub ist zertifiziert unter dem
                        EU-US Data Privacy Framework.
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        <strong>Weitere Informationen:</strong>{" "}
                        <a
                          href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-soft-blue-600 dark:text-soft-blue-400 hover:text-soft-blue-700 dark:hover:text-soft-blue-300 underline"
                        >
                          GitHub Privacy Statement
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4. Erhebung und Speicherung */}
                <div>
                  <div className="flex items-center mb-4">
                    <Eye className="w-6 h-6 text-soft-blue-600 mr-3" />
                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                      4. Erhebung und Speicherung personenbezogener Daten
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
                        a) Beim Besuch der Website
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        Beim Aufrufen unserer Website werden durch den auf Ihrem
                        Endgerät zum Einsatz kommenden Browser automatisch
                        Informationen an den Server unserer Website gesendet.
                        Diese Informationen werden temporär in einem sogenannten
                        Logfile gespeichert. Folgende Informationen werden dabei
                        ohne Ihr Zutun erfasst und bis zur automatisierten
                        Löschung gespeichert:
                      </p>
                      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                        <li>IP-Adresse des anfragenden Rechners</li>
                        <li>Datum und Uhrzeit des Zugriffs</li>
                        <li>Name und URL der abgerufenen Datei</li>
                        <li>
                          Website, von der aus der Zugriff erfolgt
                          (Referrer-URL)
                        </li>
                        <li>
                          Verwendeter Browser und ggf. das Betriebssystem Ihres
                          Rechners sowie der Name Ihres Access-Providers
                        </li>
                      </ul>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        Die genannten Daten werden durch uns zu folgenden
                        Zwecken verarbeitet:
                      </p>
                      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                        <li>
                          Gewährleistung eines reibungslosen Verbindungsaufbaus
                          der Website
                        </li>
                        <li>
                          Gewährleistung einer komfortablen Nutzung unserer
                          Website
                        </li>
                        <li>
                          Auswertung der Systemsicherheit und -stabilität sowie
                        </li>
                        <li>zu weiteren administrativen Zwecken</li>
                      </ul>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6
                        Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse folgt
                        aus oben aufgelisteten Zwecken zur Datenerhebung.
                      </p>
                    </div>

                    <div className="bg-soft-blue-50 dark:bg-gray-800 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <Mail className="w-6 h-6 text-soft-blue-600 mr-3" />
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                          b) Bei Nutzung unseres Kontaktformulars
                        </h3>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        Auf unserer Website ist ein Kontaktformular vorhanden,
                        welches für die elektronische Kontaktaufnahme genutzt
                        werden kann. Nimmt ein Nutzer diese Möglichkeit wahr, so
                        werden die in der Eingabemaske eingegeben Daten an uns
                        übermittelt und gespeichert. Diese Daten sind:
                      </p>
                      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                        <li>Name (Pflichtfeld)</li>
                        <li>Telefonnummer (Pflichtfeld)</li>
                        <li>E-Mail-Adresse (optional)</li>
                        <li>Einsatzort (optional)</li>
                        <li>Gewünschte Leistung (optional)</li>
                        <li>Bevorzugte Rückrufzeit (optional)</li>
                        <li>Nachricht (optional)</li>
                        <li>Zeitpunkt der Absendung</li>
                      </ul>

                      <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-3 mt-6">
                        Verwendung von EmailJS
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        Für die Übermittlung der Kontaktformular-Daten nutzen
                        wir den Dienst EmailJS der EmailJS Ltd., 25 Colmore Row,
                        Birmingham, B3 2BS, United Kingdom.
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        <strong>Verarbeitete Daten:</strong> Alle über das
                        Kontaktformular übermittelten Daten werden zur
                        E-Mail-Zustellung an EmailJS übertragen.
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        <strong>Zweck:</strong> Technische Zustellung der
                        Kontaktanfragen per E-Mail
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a
                        DSGVO (Einwilligung durch Absenden des Formulars)
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        <strong>Drittlandübermittlung:</strong> EmailJS kann
                        Daten in Drittländer übertragen. Die Übertragung erfolgt
                        auf Basis von Standardvertragsklauseln der
                        EU-Kommission.
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        <strong>Speicherdauer bei EmailJS:</strong> EmailJS
                        speichert gesendete E-Mails für 30 Tage zur
                        Zustellungsüberwachung und Fehlerbehebung.
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        <strong>Speicherdauer bei uns:</strong> Die über das
                        Kontaktformular übermittelten Daten werden von uns auf
                        unbestimmte Zeit gespeichert, da es sich um
                        geschäftliche Korrespondenz handelt. Eine automatisierte
                        Löschung findet nicht statt. Sie können jederzeit die
                        Löschung Ihrer Daten verlangen.
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        <strong>Weitere Informationen:</strong>{" "}
                        <a
                          href="https://www.emailjs.com/legal/privacy-policy/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-soft-blue-600 dark:text-soft-blue-400 hover:text-soft-blue-700 dark:hover:text-soft-blue-300 underline"
                        >
                          EmailJS Privacy Policy
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* 5. Weitergabe von Daten */}
                <div>
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-soft-blue-600 mr-3" />
                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                      5. Weitergabe von Daten
                    </h2>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Eine Übermittlung Ihrer persönlichen Daten an Dritte zu
                    anderen als den im Folgenden aufgeführten Zwecken findet
                    nicht statt.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Wir geben Ihre persönlichen Daten nur an Dritte weiter,
                    wenn:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                    <li>
                      Sie Ihre nach Art. 6 Abs. 1 lit. a DSGVO ausdrückliche
                      Einwilligung dazu erteilt haben,
                    </li>
                    <li>
                      die Weitergabe nach Art. 6 Abs. 1 lit. f DSGVO zur
                      Geltendmachung, Ausübung oder Verteidigung von
                      Rechtsansprüchen erforderlich ist und kein Grund zur
                      Annahme besteht, dass Sie ein überwiegendes schutzwürdiges
                      Interesse an der Nichtweitergabe Ihrer Daten haben,
                    </li>
                    <li>
                      für den Fall, dass für die Weitergabe nach Art. 6 Abs. 1
                      lit. c DSGVO eine gesetzliche Verpflichtung besteht, sowie
                    </li>
                    <li>
                      dies gesetzlich zulässig und nach Art. 6 Abs. 1 lit. b
                      DSGVO für die Abwicklung von Vertragsverhältnissen mit
                      Ihnen erforderlich ist.
                    </li>
                  </ul>
                </div>

                {/* 6. Cookies */}
                <div className="bg-soft-blue-50 dark:bg-gray-800 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Lock className="w-6 h-6 text-soft-blue-600 mr-3" />
                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                      6. Cookies und lokale Speicherung
                    </h2>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Unsere Website verwendet Cookies und lokale
                    Speichertechnologien. Cookies sind kleine Textdateien, die
                    auf Ihrem Endgerät gespeichert werden. Wir unterscheiden
                    zwischen verschiedenen Kategorien:
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                        a) Technisch notwendige Speicherung
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        Wir speichern folgende Informationen lokal in Ihrem
                        Browser:
                      </p>
                      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                        <li>
                          <strong>Theme-Einstellungen</strong> (Schlüssel:
                          "bergen-mobile-care-theme"): Speichert Ihre bevorzugte
                          Darstellung (Hell-/Dunkelmodus)
                        </li>
                        <li>
                          <strong>Cookie-Einstellungen</strong> (Schlüssel:
                          "cookie-consent"): Speichert Ihre Cookie-Präferenzen
                          zur Vermeidung wiederholter Abfragen
                        </li>
                      </ul>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f
                        DSGVO i. V. m. § 25 Abs. 2 Nr. 2 TTDSG (berechtigtes
                        Interesse an der nutzerfreundlichen Darstellung und
                        Funktionalität der Website)
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Diese Speicherungen sind für die Grundfunktionalität der
                        Website erforderlich und können nicht deaktiviert
                        werden.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                        b) Einwilligungspflichtige Cookies
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        Darüber hinaus haben wir die Möglichkeit vorgesehen,
                        einwilligungspflichtige Cookies für folgende Zwecke zu
                        verwenden:
                      </p>
                      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                        <li>
                          <strong>Analyse-Cookies:</strong> Zur statistischen
                          Auswertung der Website-Nutzung
                        </li>
                        <li>
                          <strong>Marketing-Cookies:</strong> Zur
                          interessensbasierten Werbung (aktuell nicht verwendet)
                        </li>
                      </ul>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        <strong>Aktueller Status:</strong> Derzeit werden keine
                        einwilligungspflichtigen Cookies oder Analyse-Tools
                        eingesetzt.
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a
                        DSGVO und § 25 Abs. 1 TTDSG (nur nach Ihrer
                        ausdrücklichen Einwilligung)
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                        c) Cookie-Einstellungen verwalten
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Sie können Ihre Cookie-Einstellungen jederzeit über den
                        entsprechenden Link in der Fußzeile der Website
                        anpassen. Beim ersten Besuch unserer Website werden Sie
                        über ein Cookie-Banner um Ihre Einwilligung für
                        optionale Cookies gebeten.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 7. Externe Links */}
                <div>
                  <div className="flex items-center mb-4">
                    <ExternalLink className="w-6 h-6 text-soft-blue-600 mr-3" />
                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                      7. Externe Links und Dienste
                    </h2>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                        Google-Dienste
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        Unsere Website enthält Links zu Google-Diensten (Google
                        Reviews). Beim Klick auf diese Links werden Sie zu
                        externen Websites weitergeleitet. Wir haben keinen
                        Einfluss auf die Datenverarbeitung durch diese Dienste.
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        <strong>Hinweis:</strong> Für die Datenverarbeitung
                        durch Google gelten die Datenschutzbestimmungen von
                        Google:{" "}
                        <a
                          href="https://policies.google.com/privacy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-soft-blue-600 dark:text-soft-blue-400 hover:text-soft-blue-700 dark:hover:text-soft-blue-300 underline"
                        >
                          https://policies.google.com/privacy
                        </a>
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                        WhatsApp
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Unsere Website enthält einen direkten Link zu WhatsApp.
                        Beim Klick wird die WhatsApp-Anwendung geöffnet, ohne
                        dass vorher Daten an WhatsApp übertragen werden. Die
                        Datenverarbeitung erfolgt erst nach Ihrem aktiven
                        Handeln in der WhatsApp-Anwendung gemäß den
                        Datenschutzbestimmungen von WhatsApp.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 8. Betroffenenrechte */}
                <div className="bg-soft-blue-50 dark:bg-gray-800 rounded-lg p-6">
                  <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                    8. Ihre Rechte als betroffene Person
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Sie haben folgende Rechte bezüglich Ihrer personenbezogenen
                    Daten:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                    <li>
                      <strong>Recht auf Auskunft</strong> (Art. 15 DSGVO): Sie
                      können Auskunft über Ihre von uns verarbeiteten
                      personenbezogenen Daten verlangen
                    </li>
                    <li>
                      <strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO):
                      Sie können die unverzügliche Berichtigung unrichtiger oder
                      Vervollständigung Ihrer bei uns gespeicherten
                      personenbezogenen Daten verlangen
                    </li>
                    <li>
                      <strong>Recht auf Löschung</strong> (Art. 17 DSGVO): Sie
                      können die Löschung Ihrer bei uns gespeicherten
                      personenbezogenen Daten verlangen, soweit nicht die
                      Verarbeitung zur Ausübung des Rechts auf freie
                      Meinungsäußerung und Information, zur Erfüllung einer
                      rechtlichen Verpflichtung, aus Gründen des öffentlichen
                      Interesses oder zur Geltendmachung, Ausübung oder
                      Verteidigung von Rechtsansprüchen erforderlich ist
                    </li>
                    <li>
                      <strong>Recht auf Einschränkung der Verarbeitung</strong>{" "}
                      (Art. 18 DSGVO): Sie können die Einschränkung der
                      Verarbeitung Ihrer personenbezogenen Daten verlangen
                    </li>
                    <li>
                      <strong>Recht auf Datenübertragbarkeit</strong> (Art. 20
                      DSGVO): Sie können Ihre personenbezogenen Daten, die Sie
                      uns bereitgestellt haben, in einem strukturierten,
                      gängigen und maschinenlesbaren Format erhalten oder die
                      Übermittlung an einen anderen Verantwortlichen verlangen
                    </li>
                    <li>
                      <strong>Recht auf Widerruf</strong> (Art. 7 Abs. 3 DSGVO):
                      Sie können Ihre einmal erteilte Einwilligung jederzeit
                      gegenüber uns widerrufen. Dies hat zur Folge, dass wir die
                      Datenverarbeitung, die auf dieser Einwilligung beruhte,
                      für die Zukunft nicht mehr fortführen dürfen
                    </li>
                    <li>
                      <strong>Recht auf Beschwerde</strong> (Art. 77 DSGVO): Sie
                      haben das Recht, sich bei einer Aufsichtsbehörde zu
                      beschweren. In der Regel können Sie sich hierfür an die
                      Aufsichtsbehörde insbesondere in dem Mitgliedstaat Ihres
                      Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des
                      mutmaßlichen Verstoßes wenden
                    </li>
                  </ul>
                </div>

                {/* 9. Widerspruchsrecht */}
                <div>
                  <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                    9. Widerspruchsrecht
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Sofern Ihre personenbezogenen Daten auf Grundlage von
                    berechtigten Interessen gemäß Art. 6 Abs. 1 lit. f DSGVO
                    verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO
                    Widerspruch gegen die Verarbeitung Ihrer personenbezogenen
                    Daten einzulegen, soweit dafür Gründe vorliegen, die sich
                    aus Ihrer besonderen Situation ergeben oder sich der
                    Widerspruch gegen Direktwerbung richtet.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Im letzteren Fall haben Sie ein generelles
                    Widerspruchsrecht, das ohne Angabe einer besonderen
                    Situation von uns umgesetzt wird.
                  </p>
                </div>

                {/* 10. Datensicherheit */}
                <div>
                  <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                    10. Datensicherheit
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Wir verwenden innerhalb des Website-Besuchs das verbreitete
                    SSL-Verfahren (Secure Socket Layer) in Verbindung mit der
                    jeweils höchsten Verschlüsselungsstufe, die von Ihrem
                    Browser unterstützt wird. In der Regel handelt es sich dabei
                    um eine 256-Bit-Verschlüsselung. Falls Ihr Browser keine
                    256-Bit-Verschlüsselung unterstützt, greifen wir stattdessen
                    auf 128-Bit v3 Technologie zurück. Ob eine einzelne Seite
                    unseres Internetauftrittes verschlüsselt übertragen wird,
                    erkennen Sie an der geschlossenen Darstellung des Schüssel-
                    beziehungsweise Schloss-Symbols in der unteren Statusleiste
                    Ihres Browsers.
                  </p>
                </div>

                {/* 11. Aktualität */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                    11. Aktualität und Änderung dieser Datenschutzerklärung
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Diese Datenschutzerklärung ist aktuell gültig und hat den
                    Stand Juni 2025. Durch die Weiterentwicklung unserer Website
                    und Angebote darüber oder aufgrund geänderter gesetzlicher
                    beziehungsweise behördlicher Vorgaben kann es notwendig
                    werden, diese Datenschutzerklärung zu ändern. Die jeweils
                    aktuelle Datenschutzerklärung kann jederzeit auf der Website
                    unter "Datenschutzerklärung" von Ihnen abgerufen und
                    ausgedruckt werden.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
