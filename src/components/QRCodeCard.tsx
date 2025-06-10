import { Card } from "@/components/ui/card";
import { QrCode, Smartphone, Download } from "lucide-react";

export const QRCodeCard = () => {
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
                    Scannen Sie den QR-Code mit Ihrem Smartphone, um alle Kontaktdaten direkt in Ihr Adressbuch zu übernehmen
                </p>

                {/* QR Code Container */}
                <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-inner mb-6 mx-auto max-w-xs">
                    <img src="/contact-qr-code.svg" />
                </div>

                {/* Instructions */}
                <div className="space-y-4">
                    <div className="flex items-center justify-center space-x-3 text-sage-600 dark:text-sage-400">
                        <Smartphone className="w-5 h-5" />
                        <span className="text-sm font-medium">
                            Kamera-App öffnen und QR-Code scannen
                        </span>
                    </div>

                    <div className="flex items-center justify-center space-x-3 text-soft-blue-600 dark:text-soft-blue-400">
                        <Download className="w-5 h-5" />
                        <span className="text-sm font-medium">
                            Kontakt automatisch speichern
                        </span>
                    </div>
                </div>

                {/* Alternative action */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        Funktioniert mit allen modernen Smartphones
                    </p>
                </div>
            </div>
        </Card>
    );
};