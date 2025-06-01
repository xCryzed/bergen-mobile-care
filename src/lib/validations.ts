import { z } from "zod";

export const contactFormSchema = z.object({
    name: z
        .string()
        .min(2, "Name muss mindestens 2 Zeichen lang sein")
        .max(50, "Name darf nicht länger als 50 Zeichen sein")
        .regex(/^[a-zA-ZäöüÄÖÜß\s-]+$/, "Name darf nur Buchstaben, Leerzeichen und Bindestriche enthalten"),

    phone: z
        .string()
        .min(1, "Telefonnummer ist erforderlich")
        .regex(/^[\d\s\-\+\(\)\/]+$/, "Ungültige Telefonnummer")
        .min(8, "Telefonnummer muss mindestens 8 Zeichen haben")
        .max(20, "Telefonnummer darf nicht länger als 20 Zeichen sein"),

    email: z
        .string()
        .email("Ungültige E-Mail-Adresse")
        .max(100, "E-Mail darf nicht länger als 100 Zeichen sein")
        .optional()
        .or(z.literal("")),

    preferredTime: z
        .string()
        .optional(),

    callbackTime: z
        .string()
        .optional(),

    message: z
        .string()
        .max(1000, "Nachricht darf nicht länger als 1000 Zeichen sein")
        .optional(),

    privacy: z
        .boolean()
        .refine(val => val === true, {
            message: "Sie müssen der Datenschutzerklärung zustimmen"
        })
});

export type ContactFormData = z.infer<typeof contactFormSchema>;