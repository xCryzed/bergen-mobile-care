import {Header} from "@/components/Header.tsx";
import {Footer} from "@/components/Footer.tsx";
import {useEffect} from "react";
import { FileText, User, MapPin, Phone, Mail, Briefcase } from "lucide-react";

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
                                    Angaben gemäß § 5 DDG (ehemals TMG):
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
                                    <p className="text-clamp-base text-gray-700 dark:text-gray-300">
                                        Regina Bergen
                                    </p>
                                </div>

                                {/* Geschäftsbezeichnung */}
                                <div>
                                    <div className="flex items-center mb-4">
                                        <Briefcase className="w-6 h-6 text-soft-blue-600 mr-3" />
                                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                            Geschäftsbezeichnung
                                        </h2>
                                    </div>
                                    <p className="text-clamp-base text-gray-700 dark:text-gray-300">
                                        Mobile Fußpflege Regina Bergen
                                    </p>
                                </div>

                                {/* Anschrift */}
                                <div className="bg-soft-blue-50 dark:bg-gray-800 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <MapPin className="w-6 h-6 text-soft-blue-600 mr-3" />
                                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                            Anschrift
                                        </h2>
                                    </div>
                                    <div className="text-clamp-base text-gray-700 dark:text-gray-300 space-y-1">
                                        <p>Zum Kirschbäumchen 24</p>
                                        <p>52070 Aachen</p>
                                        <p>Deutschland</p>
                                    </div>
                                </div>

                                {/* Kontakt */}
                                <div>
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
                                            <span>E-Mail: infot@fusspflegebergen.de</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Berufsbezeichnung */}
                                <div className="bg-soft-blue-50 dark:bg-gray-800 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <Briefcase className="w-6 h-6 text-soft-blue-600 mr-3" />
                                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                            Berufsbezeichnung
                                        </h2>
                                    </div>
                                    <p className="text-clamp-base text-gray-700 dark:text-gray-300">
                                        Mobile Fußpflegerin
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

export default Imprint;