import {Header} from "@/components/Header.tsx";
import {Footer} from "@/components/Footer.tsx";
import {useEffect} from "react";
import { Shield, Lock, Eye, UserCheck, FileText, AlertTriangle } from "lucide-react";

const Privacy = () => {
    useEffect(() => {
        const element = document.getElementById("datenschutz");
        const isMobile = window.innerWidth < 768;
        const headerHeight = isMobile ? 450 : 100;
        const elementPosition = element.offsetTop - headerHeight;

        if (element) {
            window.scrollTo({ behavior: 'smooth', top: elementPosition });
            return;
        }
    }, []);

    return (
        <>
            <Header/>
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
                                    Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und informieren Sie transparent über unsere Datenverarbeitung.
                                </p>
                            </div>

                            <div className="space-y-12 text-left">
                                {/* 1. Verantwortlicher */}
                                <div className="bg-soft-blue-50 dark:bg-gray-800 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <UserCheck className="w-6 h-6 text-soft-blue-600 mr-3" />
                                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                            1. Verantwortlicher
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
                                        Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Personenbezogene Daten werden auf dieser Website nur im technisch notwendigen Umfang erhoben. Die Verarbeitung erfolgt gemäß den Bestimmungen der Datenschutz-Grundverordnung (DSGVO) und des Bundesdatenschutzgesetzes (BDSG).
                                    </p>
                                </div>

                                {/* 3. Erhebung und Speicherung */}
                                <div>
                                    <div className="flex items-center mb-4">
                                        <Eye className="w-6 h-6 text-soft-blue-600 mr-3" />
                                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                            3. Erhebung und Speicherung personenbezogener Daten
                                        </h2>
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
                                                a) Beim Besuch der Website
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                                Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sogenannten Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:
                                            </p>
                                            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                                                <li>IP-Adresse des anfragenden Rechners</li>
                                                <li>Datum und Uhrzeit des Zugriffs</li>
                                                <li>Name und URL der abgerufenen Datei</li>
                                                <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                                                <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers</li>
                                            </ul>
                                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                                Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet:
                                            </p>
                                            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                                                <li>Gewährleistung eines reibungslosen Verbindungsaufbaus der Website</li>
                                                <li>Gewährleistung einer komfortablen Nutzung unserer Website</li>
                                                <li>Auswertung der Systemsicherheit und -stabilität sowie</li>
                                                <li>zu weiteren administrativen Zwecken</li>
                                            </ul>
                                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                                Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Unser berechtigtes Interesse folgt aus oben aufgelisteten Zwecken zur Datenerhebung.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
                                                b) Bei Nutzung unseres Kontaktformulars
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                                Auf unserer Website ist ein Kontaktformular vorhanden, welches für die elektronische Kontaktaufnahme genutzt werden kann. Nimmt ein Nutzer diese Möglichkeit wahr, so werden die in der Eingabemaske eingegeben Daten an uns übermittelt und gespeichert. Diese Daten sind:
                                            </p>
                                            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                                                <li>Name</li>
                                                <li>E-Mail-Adresse</li>
                                                <li>Nachricht</li>
                                            </ul>
                                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                                Die Verarbeitung der personenbezogenen Daten aus der Eingabemaske dient uns allein zur Bearbeitung der Kontaktaufnahme.
                                            </p>
                                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                                Die Datenverarbeitung zum Zwecke der Kontaktaufnahme mit uns erfolgt nach Art. 6 Abs. 1 S. 1 lit. a DSGVO auf Grundlage Ihrer freiwillig erteilten Einwilligung.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 4. Weitergabe von Daten */}
                                <div>
                                    <div className="flex items-center mb-4">
                                        <AlertTriangle className="w-6 h-6 text-soft-blue-600 mr-3" />
                                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                            4. Weitergabe von Daten
                                        </h2>
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                        Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten Zwecken findet nicht statt.
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                        Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:
                                    </p>
                                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                                        <li>Sie Ihre nach Art. 6 Abs. 1 S. 1 lit. a DSGVO ausdrückliche Einwilligung dazu erteilt haben,</li>
                                        <li>die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. f DSGVO zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben,</li>
                                        <li>für den Fall, dass für die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. c DSGVO eine gesetzliche Verpflichtung besteht, sowie</li>
                                        <li>dies gesetzlich zulässig und nach Art. 6 Abs. 1 S. 1 lit. b DSGVO für die Abwicklung von Vertragsverhältnissen mit Ihnen erforderlich ist.</li>
                                    </ul>
                                </div>

                                {/* 5. Cookies */}
                                <div className="bg-soft-blue-50 dark:bg-gray-800 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <Lock className="w-6 h-6 text-soft-blue-600 mr-3" />
                                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                            5. Cookies und Analyse-Tools
                                        </h2>
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                        Beim Besuch unserer Website werden Cookies eingesetzt. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden und die Ihr Browser speichert. Der Einsatz von Cookies erfolgt entweder aufgrund technischer Notwendigkeit oder auf Grundlage Ihrer ausdrücklichen Einwilligung.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                                a) Technisch notwendige Cookies
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                                Diese Cookies sind erforderlich, damit die Website korrekt funktioniert und grundlegende Funktionen, wie die Seitennavigation oder das Ausfüllen von Formularen, möglich sind. Sie können in unseren Systemen nicht deaktiviert werden. Die Rechtsgrundlage für die Verwendung dieser Cookies ist Art. 6 Abs. 1 lit. f DSGVO i. V. m. § 25 Abs. 2 Nr. 2 TTDSG (berechtigtes Interesse an der fehlerfreien Darstellung und Sicherheit der Website).
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                                b) Einwilligungspflichtige Cookies
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                                Darüber hinaus verwenden wir Cookies, um das Nutzerverhalten auf unserer Website statistisch zu erfassen und unser Angebot fortlaufend zu verbessern. Diese Cookies kommen erst nach Ihrer ausdrücklichen Zustimmung zum Einsatz. Die Rechtsgrundlage ist Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                                c) Matomo (geplant)
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                                Wir planen den Einsatz von Matomo, einer Open-Source-Webanalyseplattform. Matomo setzt Cookies, die eine Analyse Ihrer Benutzung unserer Website ermöglichen. Die dabei erhobenen Informationen über die Nutzung werden auf unserem eigenen Server gespeichert und nicht an Dritte weitergegeben. Ihre IP-Adresse wird vor der Speicherung anonymisiert.
                                            </p>
                                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                                Der Einsatz erfolgt nur nach Ihrer vorherigen Einwilligung. Diese Einwilligung können Sie jederzeit über die Cookie-Einstellungen widerrufen.
                                            </p>
                                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                                                Zweck der Datenverarbeitung:
                                            </p>
                                            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
                                                <li>Reichweitenmessung</li>
                                                <li>Analyse des Nutzerverhaltens zur Optimierung unserer Inhalte</li>
                                                <li>Verbesserung der technischen und inhaltlichen Qualität der Website</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                                d) Cookie-Einwilligungsmanagement
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                                Beim ersten Besuch unserer Website werden Sie über ein Cookie-Banner um Ihre Einwilligung gebeten. Sie können dort einzelne Kategorien (z. B. Statistik) aktivieren oder deaktivieren. Sie können Ihre Cookie-Einstellungen jederzeit über den entsprechenden Button in der Fußzeile ändern oder widerrufen.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 6. Betroffenenrechte */}
                                <div>
                                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                                        6. Betroffenenrechte
                                    </h2>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                        Sie haben das Recht:
                                    </p>
                                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                                        <li>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen;</li>
                                        <li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen;</li>
                                        <li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen;</li>
                                        <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen;</li>
                                        <li>gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesebaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen;</li>
                                        <li>gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit gegenüber uns zu widerrufen;</li>
                                        <li>gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren.</li>
                                    </ul>
                                </div>

                                {/* 7. Widerspruchsrecht */}
                                <div>
                                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                                        7. Widerspruchsrecht
                                    </h2>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen.
                                    </p>
                                </div>

                                {/* 8. Datensicherheit */}
                                <div>
                                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                                        8. Datensicherheit
                                    </h2>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird.
                                    </p>
                                </div>

                                {/* 9. Aktualität */}
                                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                                        9. Aktualität und Änderung dieser Datenschutzerklärung
                                    </h2>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Mai 2025. Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    )
}

export default Privacy;