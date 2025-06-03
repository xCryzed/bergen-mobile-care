import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Cookie } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';

interface CookiePreferences {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
}

export function CookieSettings() {
    const [showSettings, setShowSettings] = useState(false);
    const [preferences, setPreferences] = useState<CookiePreferences>(() => {
        const saved = localStorage.getItem('cookie-consent');
        if (saved) {
            return JSON.parse(saved);
        }
        return {
            necessary: true,
            analytics: false,
            marketing: false,
        };
    });

    const updatePreference = (key: keyof CookiePreferences, value: boolean) => {
        setPreferences(prev => ({ ...prev, [key]: value }));
    };

    const handleSavePreferences = () => {
        localStorage.setItem('cookie-consent', JSON.stringify(preferences));
        setShowSettings(false);
    };

    return (
        <Dialog open={showSettings} onOpenChange={setShowSettings}>
            <DialogTrigger asChild>
                <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-2 hover:bg-soft-blue-100 dark:hover:bg-gray-700"
                    title="Cookie-Einstellungen verwalten"
                >
                    <Cookie className="h-4 w-4" />
                    <span className="sm:inline">Cookies</span>
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
    );
}