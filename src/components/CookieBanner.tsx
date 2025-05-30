import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { X, Settings, Shield } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';

interface CookiePreferences {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
}

export function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [preferences, setPreferences] = useState<CookiePreferences>({
        necessary: true,
        analytics: false,
        marketing: false,
    });

    useEffect(() => {
        const cookieConsent = localStorage.getItem('cookie-consent');
        if (!cookieConsent) {
            setShowBanner(true);
        } else {
            const savedPreferences = JSON.parse(cookieConsent);
            setPreferences(savedPreferences);
        }
    }, []);

    const handleAcceptAll = () => {
        const allAccepted = {
            necessary: true,
            analytics: true,
            marketing: true,
        };
        setPreferences(allAccepted);
        localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
        setShowBanner(false);
    };

    const handleAcceptNecessary = () => {
        const necessaryOnly = {
            necessary: true,
            analytics: false,
            marketing: false,
        };
        setPreferences(necessaryOnly);
        localStorage.setItem('cookie-consent', JSON.stringify(necessaryOnly));
        setShowBanner(false);
    };

    const handleSavePreferences = () => {
        localStorage.setItem('cookie-consent', JSON.stringify(preferences));
        setShowBanner(false);
        setShowSettings(false);
    };

    const updatePreference = (key: keyof CookiePreferences, value: boolean) => {
        setPreferences(prev => ({ ...prev, [key]: value }));
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
            <Card className="max-w-4xl mx-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg">
                <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-2 mb-2">
                            <Shield className="w-5 h-5 text-soft-blue-600" />
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                Cookie-Einstellungen
                            </h3>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setShowBanner(false)}
                            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        >
                            <X className="w-4 h-4" />
                        </Button>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        Wir verwenden Cookies, um Ihnen die beste Erfahrung auf unserer Website zu bieten.
                        Einige Cookies sind notwendig für den Betrieb der Website, während andere uns helfen,
                        die Website zu verbessern und Ihnen personalisierte Inhalte anzuzeigen. Sie können
                        Ihre Einstellungen jederzeit anpassen.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
                        <div className="flex flex-wrap gap-2 order-2 sm:order-1">
                            <Dialog open={showSettings} onOpenChange={setShowSettings}>
                                <DialogTrigger asChild>
                                    <Button variant="outline" size="sm">
                                        <Settings className="w-4 h-4 mr-2" />
                                        Einstellungen
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-md bg-white dark:bg-gray-800">
                                    <DialogHeader>
                                        <DialogTitle className="text-gray-800 dark:text-white">
                                            Cookie-Einstellungen verwalten
                                        </DialogTitle>
                                    </DialogHeader>
                                    <div className="space-y-6">
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="font-medium text-gray-800 dark:text-white">Notwendige Cookies</p>
                                                    <p className="text-sm text-gray-600 dark:text-gray-300">
                                                        Diese Cookies sind für den Betrieb der Website erforderlich.
                                                    </p>
                                                </div>
                                                <Switch
                                                    checked={preferences.necessary}
                                                    disabled
                                                    className="data-[state=checked]:bg-soft-blue-600"
                                                />
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="font-medium text-gray-800 dark:text-white">Analyse-Cookies</p>
                                                    <p className="text-sm text-gray-600 dark:text-gray-300">
                                                        Helfen uns zu verstehen, wie Besucher mit der Website interagieren.
                                                    </p>
                                                </div>
                                                <Switch
                                                    checked={preferences.analytics}
                                                    onCheckedChange={(checked) => updatePreference('analytics', checked)}
                                                    className="data-[state=checked]:bg-soft-blue-600"
                                                />
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="font-medium text-gray-800 dark:text-white">Marketing-Cookies</p>
                                                    <p className="text-sm text-gray-600 dark:text-gray-300">
                                                        Werden verwendet, um Ihnen relevante Werbung zu zeigen.
                                                    </p>
                                                </div>
                                                <Switch
                                                    checked={preferences.marketing}
                                                    onCheckedChange={(checked) => updatePreference('marketing', checked)}
                                                    className="data-[state=checked]:bg-soft-blue-600"
                                                />
                                            </div>
                                        </div>

                                        <Button
                                            onClick={handleSavePreferences}
                                            className="w-full bg-soft-blue-600 hover:bg-soft-blue-700 text-white"
                                        >
                                            Einstellungen speichern
                                        </Button>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>

                        <div className="flex gap-2 order-1 sm:order-2">
                            <Button
                                variant="outline"
                                onClick={handleAcceptNecessary}
                                size="sm"
                                className="text-gray-700 dark:text-gray-200"
                            >
                                Nur Notwendige
                            </Button>
                            <Button
                                onClick={handleAcceptAll}
                                size="sm"
                                className="bg-soft-blue-600 hover:bg-soft-blue-700 text-white"
                            >
                                Alle akzeptieren
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}