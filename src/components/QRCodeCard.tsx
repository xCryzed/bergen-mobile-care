import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QrCode, Smartphone, Download, Contact } from "lucide-react";

export const QRCodeCard = () => {
    const handleDownloadVCard = () => {
        const link = document.createElement('a');
        link.href = '/contact-v-card.vcf';
        link.download = 'Regina Bergen - Kontakt.vcf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Card className="p-8 shadow-lg border-l-4 border-l-sage-500 dark:bg-gray-800 dark:border-gray-700">
            <div className="text-center">
                <div className="flex items-center justify-center mb-6">
                    <div className="w-12 h-12 bg-sage-100 dark:bg-sage-900 rounded-full flex items-center justify-center mr-3">
                        <QrCode className="w-6 h-6 text-sage-600 dark:text-sage-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                        Kontakt speichern
                    </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    Wählen Sie Ihre bevorzugte Methode, um alle Kontaktdaten in Ihr Adressbuch zu übernehmen
                </p>

                {/* QR Code Container */}
                <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-inner mb-4 mx-auto max-w-xs">
                    <img src="/contact-qr-code.svg" />
                </div>

                {/* QR Code Instructions */}
                <div className="mb-6">
                    <div className="flex items-center justify-center space-x-3 text-sage-600 dark:text-sage-400 mb-4">
                        <Smartphone className="w-5 h-5" />
                        <span className="text-sm font-medium">
                            QR-Code mit Kamera scannen
                        </span>
                    </div>
                </div>

                {/* Divider */}
                <div className="flex items-center mb-6">
                    <div className="flex-1 border-t border-gray-200 dark:border-gray-600"></div>
                    <span className="px-4 text-sm text-gray-500 dark:text-gray-400 font-medium">oder</span>
                    <div className="flex-1 border-t border-gray-200 dark:border-gray-600"></div>
                </div>

                {/* Download Button */}
                <div className="mb-6">
                    <Button
                        onClick={handleDownloadVCard}
                        className="bg-sage-600 hover:bg-sage-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md"
                    >
                        <Contact className="w-5 h-5 mr-2" />
                        Kontakt speichern
                    </Button>
                </div>

                {/* Alternative action */}
                <div className="mt-4 pt-4">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        Funktioniert mit allen modernen Smartphones und Computern
                    </p>
                </div>
            </div>
        </Card>
    );
};