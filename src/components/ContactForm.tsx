import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { initEmailJS, sendEmail } from "@/lib/emailjs";
import { useNavigate } from "react-router-dom";

export const ContactForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        preferredTime: "",
        callbackTime: "",
        message: "",
        privacy: false
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        initEmailJS();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.privacy) {
            toast({
                title: "Datenschutz erforderlich",
                description: "Bitte bestätigen Sie die Datenschutzerklärung.",
                variant: "destructive"
            });
            return;
        }

        setIsSubmitting(true);

        const templateParams = {
            from_name: formData.name,
            from_phone: formData.phone,
            from_email: formData.email || 'Keine E-Mail angegeben',
            preferred_service: formData.preferredTime || 'Nicht angegeben',
            callback_time: formData.callbackTime || 'Nicht angegeben',
            message: formData.message || 'Keine zusätzliche Nachricht',
            to_name: 'Regina Bergen'
        };

        try {
            const result = await sendEmail(templateParams);

            if (result.success) {
                toast({
                    title: "Nachricht erfolgreich gesendet!",
                    description: "Vielen Dank für Ihre Anfrage. Ich melde mich schnellstmöglich bei Ihnen.",
                });

                // Formular zurücksetzen
                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    preferredTime: "",
                    callbackTime: "",
                    message: "",
                    privacy: false
                });
            } else {
                throw new Error('EmailJS Error');
            }
        } catch (error) {
            console.error("Fehler beim Senden der E-Mail:", error);
            toast({
                title: "Fehler beim Senden",
                description: "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder rufen Sie direkt an.",
                variant: "destructive"
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <Card className="p-8 shadow-lg animate-slide-up dark:bg-gray-800 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Termin anfragen</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="name" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                            Name *
                        </Label>
                        <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="mt-2 text-clamp-base dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                            placeholder="Ihr vollständiger Name"
                        />
                    </div>

                    <div>
                        <Label htmlFor="phone" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                            Telefon *
                        </Label>
                        <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="mt-2 text-clamp-base dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                            placeholder="Ihre Telefonnummer"
                        />
                    </div>
                </div>

                <div>
                    <Label htmlFor="email" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        E-Mail (optional)
                    </Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-2 text-clamp-base dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                        placeholder="Ihre E-Mail Adresse"
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <Label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                            Gewünschte Leistung
                        </Label>
                        <Select value={formData.preferredTime} onValueChange={(value) => setFormData(prev => ({...prev, preferredTime: value}))}>
                            <SelectTrigger className="mt-2 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
                                <SelectValue placeholder="Bitte wählen" />
                            </SelectTrigger>
                            <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                                <SelectItem value="basispflege" className="dark:text-gray-100 dark:hover:bg-gray-700">Basispflege (45€)</SelectItem>
                                <SelectItem value="medizinisch" className="dark:text-gray-100 dark:hover:bg-gray-700">Medizinische Fußpflege (55€)</SelectItem>
                                <SelectItem value="diabetiker" className="dark:text-gray-100 dark:hover:bg-gray-700">Diabetiker-Fußpflege (60€)</SelectItem>
                                <SelectItem value="massage" className="dark:text-gray-100 dark:hover:bg-gray-700">Pflege & Massage (35€)</SelectItem>
                                <SelectItem value="wellness" className="dark:text-gray-100 dark:hover:bg-gray-700">Wellness-Paket (65€)</SelectItem>
                                <SelectItem value="beratung" className="dark:text-gray-100 dark:hover:bg-gray-700">Erst Beratung gewünscht</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <Label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                            Wann erreichen wir Sie?
                        </Label>
                        <Select value={formData.callbackTime} onValueChange={(value) => setFormData(prev => ({...prev, callbackTime: value}))}>
                            <SelectTrigger className="mt-2 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
                                <SelectValue placeholder="Rückrufzeit wählen" />
                            </SelectTrigger>
                            <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                                <SelectItem value="morgens" className="dark:text-gray-100 dark:hover:bg-gray-700">Morgens (8:00-12:00)</SelectItem>
                                <SelectItem value="mittags" className="dark:text-gray-100 dark:hover:bg-gray-700">Mittags (12:00-15:00)</SelectItem>
                                <SelectItem value="nachmittags" className="dark:text-gray-100 dark:hover:bg-gray-700">Nachmittags (15:00-18:00)</SelectItem>
                                <SelectItem value="abends" className="dark:text-gray-100 dark:hover:bg-gray-700">Abends (18:00-20:00)</SelectItem>
                                <SelectItem value="wochenende" className="dark:text-gray-100 dark:hover:bg-gray-700">Am Wochenende</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div>
                    <Label htmlFor="message" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Ihre Nachricht (optional)
                    </Label>
                    <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="mt-2 text-clamp-base dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                        rows={4}
                        placeholder="Haben Sie besondere Wünsche oder Fragen? Teilen Sie mir gerne mit..."
                    />
                </div>

                <div className="flex items-start space-x-3">
                    <Checkbox
                        id="privacy"
                        checked={formData.privacy}
                        onCheckedChange={(checked) => setFormData(prev => ({...prev, privacy: checked as boolean}))}
                        className="mt-1 dark:border-gray-600"
                    />
                    <Label htmlFor="privacy" className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
                        <a className="text-soft-blue-600 dark:text-soft-blue-400 hover:text-soft-blue-700 dark:hover:text-soft-blue-300 underline cursor-pointer" onClick={() => navigate("datenschutz")}>
                            Datenschutzerklärung
                        </a>{" "}
                        zu. *
                    </Label>
                </div>

                <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-soft-blue-600 hover:bg-soft-blue-700 dark:bg-soft-blue-600 dark:hover:bg-soft-blue-700 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? "Wird gesendet..." : "Termin anfragen"}
                </Button>
            </form>
        </Card>
    );
};