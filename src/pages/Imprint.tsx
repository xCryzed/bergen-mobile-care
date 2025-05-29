import {Header} from "@/components/Header.tsx";
import {Footer} from "@/components/Footer.tsx";

const Imprint = () => {
    return (
        <>
            <Header/>
            <div className="min-h-screen bg-gradient-to-b from-white to-soft-blue-50">
                <section id="impressum" className="py-20 bg-white">
                    <div className="container mx-auto px-4 text-center">
                        <div className="max-w-6xl mx-auto">
                            <div className="mb-4">
                                <h2 className="text-clamp-2xl md:text-clamp-3xl font-bold text-gray-800 mb-4">
                                    Impressum
                                </h2>
                                <p className="text-clamp-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                    Angaben gemäß § 5 DDG (ehemals TMG):
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 text-gray-700 leading-relaxed">
                            <h3 className="text-xl font-bold text-gray-800 mb-3">
                                Unternehmer:
                            </h3>
                            <p className="text-clamp-base">
                                Regina Bergen
                            </p>
                        </div>

                        <div className="mt-8 text-gray-700 leading-relaxed">
                            <h3 className="text-xl font-bold text-gray-800 mb-3">
                                Geschäftsbezeichnung:
                            </h3>
                            <p className="text-clamp-base">
                                Mobile Fußpflege Regina Bergen
                            </p>
                        </div>

                        <div className="mt-8 text-gray-700 leading-relaxed">
                            <h3 className="text-xl font-bold text-gray-800 mb-3">
                                Anschrift:
                            </h3>
                            <p className="text-clamp-base">
                                Zum Kirschbäumchen 24
                            </p>
                            <p className="text-clamp-base">
                                52070 Aachen
                            </p>
                            <p className="text-clamp-base">
                                Deutschland
                            </p>
                        </div>

                        <div className="mt-8  text-gray-700 leading-relaxed">
                            <h3 className="text-xl font-bold text-gray-800 mb-3">
                                Kontakt:
                            </h3>
                            <p className="text-clamp-base">
                                Telefon: +49 170 1212677
                            </p>
                            <p className="text-clamp-base">
                                E-Mail: kontakt@fusspflegebergen.de
                            </p>
                        </div>

                        <div className="mt-8 text-gray-700 leading-relaxed">
                            <h3 className="text-xl font-bold text-gray-800 mb-3">
                                Berufsbezeichnung
                            </h3>
                            <p className="text-clamp-base">
                                Mobile Fußpflegerin
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    )
}

export default Imprint;