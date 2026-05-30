import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Check, ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { initEmailJS, sendEmail } from "@/lib/emailjs";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      location: "",
      preferredTime: [],
      callbackTime: "",
      message: "",
      privacy: false,
    },
  });

  useEffect(() => {
    initEmailJS();
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    const templateParams = {
      from_name: data.name.trim(),
      from_phone: data.phone.trim(),
      from_email: data.email?.trim() || "Keine E-Mail angegeben",
      location: data.location?.trim() || "Nicht angegeben",
      preferred_service:
        data.preferredTime && data.preferredTime.length > 0
          ? data.preferredTime.join(", ")
          : "Nicht angegeben",
      callback_time: data.callbackTime || "Nicht angegeben",
      message: data.message?.trim() || "Keine zusätzliche Nachricht",
      to_name: "Regina Bergen",
    };

    try {
      const result = await sendEmail(templateParams);

      if (result.success) {
        toast({
          title: "Nachricht erfolgreich gesendet!",
          description:
            "Vielen Dank für Ihre Anfrage. Ich melde mich schnellstmöglich bei Ihnen.",
        });

        form.reset();
      } else {
        throw new Error("EmailJS Error");
      }
    } catch (error) {
      toast({
        title: "Fehler beim Senden",
        description:
          "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder rufen Sie direkt an.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="p-8 shadow-lg animate-slide-up dark:bg-gray-800 dark:border-gray-700">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        Termin anfragen
      </h3>

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

          <div className="grid md:grid-cols-2 gap-4">
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

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Einsatzort (optional)
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Adresse oder Stadtteil"
                      className="mt-2 text-clamp-base dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="preferredTime"
              render={({ field }) => {
                const options = [
                  "Basis Fußpflege",
                  "Erweiterte Fußpflege",
                  "Nagelprothetik",
                  "Maniküre",
                  "Lackieren",
                  "Beratung",
                  "Erstgespräch",
                ];
                const selected: string[] = field.value || [];
                const toggle = (value: string) => {
                  if (selected.includes(value)) {
                    field.onChange(selected.filter((v) => v !== value));
                  } else {
                    field.onChange([...selected, value]);
                  }
                };
                const remove = (value: string) => {
                  field.onChange(selected.filter((v) => v !== value));
                };
                return (
                  <FormItem>
                    <FormLabel className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Gewünschte Leistungen
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <button
                          type="button"
                          className="mt-2 flex min-h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                        >
                          <div className="flex flex-wrap gap-1.5 flex-1 text-left">
                            {selected.length === 0 ? (
                              <span className="text-muted-foreground">
                                Bitte wählen
                              </span>
                            ) : (
                              selected.map((value) => (
                                <Badge
                                  key={value}
                                  variant="secondary"
                                  className="gap-1 pr-1"
                                >
                                  {value}
                                  <span
                                    role="button"
                                    tabIndex={0}
                                    aria-label={`${value} entfernen`}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      remove(value);
                                    }}
                                    onKeyDown={(e) => {
                                      if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        remove(value);
                                      }
                                    }}
                                    className="ml-0.5 rounded-sm hover:bg-muted-foreground/20 p-0.5 cursor-pointer inline-flex"
                                  >
                                    <X className="h-3 w-3" />
                                  </span>
                                </Badge>
                              ))
                            )}
                          </div>
                          <ChevronDown className="h-4 w-4 opacity-50 ml-2 shrink-0" />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-[--radix-popover-trigger-width] p-1 dark:bg-gray-800 dark:border-gray-700"
                        align="start"
                      >
                        {options.map((option) => {
                          const isSelected = selected.includes(option);
                          return (
                            <button
                              key={option}
                              type="button"
                              onClick={() => toggle(option)}
                              className={cn(
                                "flex w-full items-center justify-between rounded-sm px-2 py-1.5 text-sm text-left hover:bg-accent hover:text-accent-foreground dark:text-gray-100 dark:hover:bg-gray-700",
                                isSelected && "bg-accent/50"
                              )}
                            >
                              <span>{option}</span>
                              {isSelected && <Check className="h-4 w-4" />}
                            </button>
                          );
                        })}
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                );
              }}
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
                      <SelectItem
                        value="Morgens (8:00-12:00)"
                        className="dark:text-gray-100 dark:hover:bg-gray-700"
                      >
                        Morgens (8:00-12:00)
                      </SelectItem>
                      <SelectItem
                        value="Mittags (12:00-15:00)"
                        className="dark:text-gray-100 dark:hover:bg-gray-700"
                      >
                        Mittags (12:00-15:00)
                      </SelectItem>
                      <SelectItem
                        value="Nachmittags (15:00-18:00)"
                        className="dark:text-gray-100 dark:hover:bg-gray-700"
                      >
                        Nachmittags (15:00-18:00)
                      </SelectItem>
                      <SelectItem
                        value="Abends (18:00-20:00)"
                        className="dark:text-gray-100 dark:hover:bg-gray-700"
                      >
                        Abends (18:00-20:00)
                      </SelectItem>
                      <SelectItem
                        value="Am Wochenende"
                        className="dark:text-gray-100 dark:hover:bg-gray-700"
                      >
                        Am Wochenende
                      </SelectItem>
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
                    placeholder="Was möchten Sie mir mitteilen?"
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
                    <a
                      className="text-soft-blue-600 dark:text-soft-blue-400 hover:text-soft-blue-700 dark:hover:text-soft-blue-300 underline cursor-pointer"
                      onClick={() => navigate("datenschutz")}
                    >
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
