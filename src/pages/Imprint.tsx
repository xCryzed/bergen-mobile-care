import {Header} from "@/components/Header.tsx";
import {Footer} from "@/components/Footer.tsx";
import {useEffect} from "react";
import { FileText, User, MapPin, Phone, Mail, Briefcase, Building2, Scale, Shield, ExternalLink } from "lucide-react";

const Imprint = () => {
    useEffect(() => {
        const element = document.getElementById("impressum");
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
                <section id="impressum" className="py-20 bg-white dark:bg-gray-900">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="mb-8 text-center">
                                <div className="flex items-center justify-center mb-4">
                                    <FileText className="w-12 h-12 text-soft-blue-600 mr-4" />
                                    <h1 className="text-clamp-2xl md:text-clamp-3xl font-bold text-gray-800 dark:text-gray-100">
                                        Impressum
                                    </h1>
                                </div>
                                <p className="text-clamp-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                                    Angaben gemäß § 5 TMG
                                </p>
                            </div>

                            <div className="space-y-8 text-left">
                                {/* Unternehmer */}
                                <div className="bg-soft-blue-50 dark:bg-gray-800 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <User className="w-6 h-6 text-soft-blue-600 mr-3" />
                                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                            Unternehmer
                                        </h2>
                                    </div>
                                    <div className="text-clamp-base text-gray-700 dark:text-gray-300 space-y-1">
                                        <p>Regina Bergen</p>
                                        <p>Mobile Fachfußpflege</p>
                                    </div>
                                </div>

                                {/* Anschrift */}
                                <div>
                                    <div className="flex items-center mb-4">
                                        <MapPin className="w-6 h-6 text-soft-blue-600 mr-3" />
                                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                            Anschrift
                                        </h2>
                                    </div>
                                    <div className="text-clamp-base text-gray-700 dark:text-gray-300 space-y-1">
                                        <p>Zum Kirschbäumchen 24</p>
                                        <p>52070 Aachen</p>
                                    </div>
                                </div>

                                {/* Kontakt */}
                                <div className="bg-soft-blue-50 dark:bg-gray-800 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <Phone className="w-6 h-6 text-soft-blue-600 mr-3" />
                                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                            Kontakt
                                        </h2>
                                    </div>
                                    <div className="text-clamp-base text-gray-700 dark:text-gray-300 space-y-2">
                                        <div className="flex items-center space-x-3">
                                            <Phone className="w-4 h-4 text-soft-blue-600" />
                                            <span>Telefon: +49 170 1212677</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <Mail className="w-4 h-4 text-soft-blue-600" />
                                            <span>E-Mail: info@fusspflegebergen.de</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Gewerbeanmeldung */}
                                <div>
                                    <div className="flex items-center mb-4">
                                        <Building2 className="w-6 h-6 text-soft-blue-600 mr-3" />
                                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                            Gewerbeanmeldung
                                        </h2>
                                    </div>
                                    <div className="text-clamp-base text-gray-700 dark:text-gray-300 space-y-1">
                                        <p>Gewerbeanmeldung gemäß § 14 GewO erfolgt bei:</p>
                                        <p className="font-semibold mt-2">Stadt Aachen – Gewerbemeldestelle</p>
                                        <p>Lagerhausstraße 20</p>
                                        <p>52064 Aachen</p>
                                        <p>Deutschland</p>
                                    </div>
                                </div>

                                {/* Tätigkeitsbeschreibung */}
                                <div className="bg-soft-blue-50 dark:bg-gray-800 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <Briefcase className="w-6 h-6 text-soft-blue-600 mr-3" />
                                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                            Tätigkeitsbeschreibung
                                        </h2>
                                    </div>
                                    <p className="text-clamp-base text-gray-700 dark:text-gray-300">
                                        Fachfußpflegerin
                                    </p>
                                </div>

                                {/* Zuständige Kammer */}
                                <div>
                                    <div className="flex items-center mb-4">
                                        <Scale className="w-6 h-6 text-soft-blue-600 mr-3" />
                                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                            Zuständige Kammer
                                        </h2>
                                    </div>
                                    <div className="text-clamp-base text-gray-700 dark:text-gray-300 space-y-1">
                                        <p className="font-semibold">Handwerkskammer Aachen</p>
                                        <p>Sandkaulbach 17–21</p>
                                        <p>52062 Aachen</p>
                                        <p>Deutschland</p>
                                    </div>
                                </div>

                                {/* Verantwortlich für den Inhalt */}
                                <div className="bg-soft-blue-50 dark:bg-gray-800 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <User className="w-6 h-6 text-soft-blue-600 mr-3" />
                                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                                        </h2>
                                    </div>
                                    <div className="text-clamp-base text-gray-700 dark:text-gray-300 space-y-1">
                                        <p>Regina Bergen</p>
                                        <p>Zum Kirschbäumchen 24</p>
                                        <p>52070 Aachen</p>
                                    </div>
                                </div>

                                {/* Betriebs-/Berufshaftpflichtversicherung */}
                                <div>
                                    <div className="flex items-center mb-4">
                                        <Shield className="w-6 h-6 text-soft-blue-600 mr-3" />
                                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                            Betriebs-/Berufshaftpflichtversicherung
                                        </h2>
                                    </div>
                                    <div className="text-clamp-base text-gray-700 dark:text-gray-300 space-y-1">
                                        <p>ALTE LEIPZIGER Vers.AG</p>
                                        <p>61435 Oberursel (Taunus)</p>
                                    </div>
                                </div>

                                {/* Online-Streitbeilegung */}
                                <div className="bg-soft-blue-50 dark:bg-gray-800 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <ExternalLink className="w-6 h-6 text-soft-blue-600 mr-3" />
                                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                            Online-Streitbeilegung
                                        </h2>
                                    </div>
                                    <div className="text-clamp-base text-gray-700 dark:text-gray-300 space-y-3">
                                        <p>Online-Streitbeilegung gemäß Art. 14 Abs. 1 ODR-VO:</p>
                                        <p>
                                            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                                            <a
                                                href="https://ec.europa.eu/consumers/odr"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-soft-blue-600 dark:text-soft-blue-400 hover:text-soft-blue-700 dark:hover:text-soft-blue-300 underline"
                                            >
                                                https://ec.europa.eu/consumers/odr
                                            </a>
                                        </p>
                                        <p>
                                            Ich bin nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                                        </p>
                                    </div>
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

export default Imprint;