import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const ContactInfo = () => {
    return (
        <Card className="p-8 shadow-lg border-l-4 border-l-soft-blue-500 dark:bg-gray-800 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Regina Bergen</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Ihre Expertin für mobile Fußpflege in Aachen und Umgebung.
                Ich bringe professionelle Fußpflege direkt zu Ihnen nach Hause.
            </p>

            <div className="space-y-4">
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-soft-blue-100 dark:bg-soft-blue-900 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-soft-blue-600 dark:text-soft-blue-400" />
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800 dark:text-gray-100">Telefon</p>
                        <a href="tel:+491701212677" className="text-soft-blue-600 dark:text-soft-blue-400 hover:text-soft-blue-700 dark:hover:text-soft-blue-300 font-medium">
                            +49 170 1212677
                        </a>
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-sage-100 dark:bg-sage-900 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-sage-600 dark:text-sage-400" />
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800 dark:text-gray-100">E-Mail</p>
                        <a href="mailto:kontakt@fusspflegebergen.de" className="text-sage-600 dark:text-sage-400 hover:text-sage-700 dark:hover:text-sage-300 font-medium">
                            kontakt@fusspflegebergen.de
                        </a>
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-warm-beige-100 dark:bg-warm-beige-900 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-warm-beige-600 dark:text-warm-beige-400" />
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800 dark:text-gray-100">Einsatzgebiet</p>
                        <p className="text-gray-600 dark:text-gray-300">Aachen und 10 km Umkreis</p>
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-soft-blue-100 dark:bg-soft-blue-900 rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-soft-blue-600 dark:text-soft-blue-400" />
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800 dark:text-gray-100">Termine</p>
                        <p className="text-gray-600 dark:text-gray-300">Mo-Fr 8:00-17:00</p>
                    </div>
                </div>
            </div>
        </Card>
    );
};