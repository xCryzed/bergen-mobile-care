import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { initEmailJS, sendEmail } from "@/lib/emailjs";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { useEffect, useState } from "react";

export const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            preferredTime: "",
            callbackTime: "",
            message: "",
            privacy: false
        }
    });

    useEffect(() => {
        initEmailJS();
    }, []);

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);

        const templateParams = {
            from_name: data.name.trim(),
            from_phone: data.phone.trim(),
            from_email: data.email?.trim() || 'Keine E-Mail angegeben',
            preferred_service: data.preferredTime || 'Nicht angegeben',
            callback_time: data.callbackTime || 'Nicht angegeben',
            message: data.message?.trim() || 'Keine zusätzliche Nachricht',
            to_name: 'Regina Bergen',
        };

        try {
            const result = await sendEmail(templateParams);

            if (result.success) {
                toast({
                    title: "Nachricht erfolgreich gesendet!",
                    description: "Vielen Dank für Ihre Anfrage. Ich melde mich schnellstmöglich bei Ihnen.",
                });

                form.reset();
            } else {
                throw new Error('EmailJS Error');
            }
        } catch (error) {
            toast({
                title: "Fehler beim Senden",
                description: "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder rufen Sie direkt an.",
                variant: "destructive"
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Card className="p-8 shadow-lg animate-slide-up dark:bg-gray-800 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Termin anfragen</h3>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                        Name *
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Ihr vollständiger Name"
                                            className="mt-2 text-clamp-base dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                        Telefon *
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            type="tel"
                                            placeholder="Ihre Telefonnummer"
                                            className="mt-2 text-clamp-base dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                    E-Mail (optional)
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="Ihre E-Mail Adresse"
                                        className="mt-2 text-clamp-base dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="preferredTime"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                        Gewünschte Leistung
                                    </FormLabel>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="mt-2 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
                                                <SelectValue placeholder="Bitte wählen" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                                            <SelectItem value="Basis Fußpflege" className="dark:text-gray-100 dark:hover:bg-gray-700">Basis Fußpflege</SelectItem>
                                            <SelectItem value="Erweiterte Fußpflege" className="dark:text-gray-100 dark:hover:bg-gray-700">Erweiterte Fußpflege</SelectItem>
                                            <SelectItem value="Nagelprothetik" className="dark:text-gray-100 dark:hover:bg-gray-700">Nagelprothetik</SelectItem>
                                            <SelectItem value="Maniküre" className="dark:text-gray-100 dark:hover:bg-gray-700">Maniküre</SelectItem>
                                            <SelectItem value="Lackieren" className="dark:text-gray-100 dark:hover:bg-gray-700">Lackieren</SelectItem>
                                            <SelectItem value="Beratung" className="dark:text-gray-100 dark:hover:bg-gray-700">Beratung</SelectItem>
                                            <SelectItem value="Erstgespräch" className="dark:text-gray-100 dark:hover:bg-gray-700">Erstgespräch</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="callbackTime"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                        Wann erreichen wir Sie?
                                    </FormLabel>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="mt-2 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
                                                <SelectValue placeholder="Rückrufzeit wählen" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                                            <SelectItem value="Morgens (8:00-12:00)" className="dark:text-gray-100 dark:hover:bg-gray-700">Morgens (8:00-12:00)</SelectItem>
                                            <SelectItem value="Mittags (12:00-15:00)" className="dark:text-gray-100 dark:hover:bg-gray-700">Mittags (12:00-15:00)</SelectItem>
                                            <SelectItem value="Nachmittags (15:00-18:00)" className="dark:text-gray-100 dark:hover:bg-gray-700">Nachmittags (15:00-18:00)</SelectItem>
                                            <SelectItem value="Abends (18:00-20:00)" className="dark:text-gray-100 dark:hover:bg-gray-700">Abends (18:00-20:00)</SelectItem>
                                            <SelectItem value="Am Wochenende" className="dark:text-gray-100 dark:hover:bg-gray-700">Am Wochenende</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                    Ihre Nachricht (optional)
                                </FormLabel>
                                <FormControl>
                                    <Textarea
                                        className="mt-2 text-clamp-base dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                                        rows={4}
                                        placeholder="Haben Sie besondere Wünsche oder Fragen? Teilen Sie mir diese gerne mit"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="privacy"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        className="mt-1 dark:border-gray-600"
                                    />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                    <FormLabel className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                        Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
                                        <a href="#" className="text-soft-blue-600 dark:text-soft-blue-400 hover:text-soft-blue-700 dark:hover:text-soft-blue-300 underline">
                                            Datenschutzerklärung
                                        </a>{" "}
                                        zu. *
                                    </FormLabel>
                                    <FormMessage />
                                </div>
                            </FormItem>
                        )}
                    />

                    <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-soft-blue-600 hover:bg-soft-blue-700 dark:bg-soft-blue-600 dark:hover:bg-soft-blue-700 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? "Wird gesendet..." : "Termin anfragen"}
                    </Button>
                </form>
            </Form>
        </Card>
    );
};