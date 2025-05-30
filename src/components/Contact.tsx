import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    preferredTime: "",
    callbackTime: "",
    message: "",
    privacy: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacy) {
      toast({
        title: "Datenschutz erforderlich",
        description: "Bitte bestätigen Sie die Datenschutzerklärung.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Nachricht gesendet!",
      description: "Vielen Dank für Ihre Anfrage. Ich melde mich schnellstmöglich bei Ihnen.",
    });

    console.log("Kontaktformular gesendet:", formData);

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      preferredTime: "",
      callbackTime: "",
      message: "",
      privacy: false
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
      <section id="contact" className="py-20 bg-gradient-to-br from-soft-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-clamp-2xl md:text-clamp-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Kontakt & Termin vereinbaren
              </h2>
              <p className="text-clamp-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Ich freue mich auf Ihre Nachricht. Gerne beantworte ich alle Fragen und vereinbare einen Termin mit Ihnen.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8 animate-fade-in">
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
                        <p className="text-gray-600 dark:text-gray-300">Aachen und 15 km Umkreis</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-soft-blue-100 dark:bg-soft-blue-900 rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-soft-blue-600 dark:text-soft-blue-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-gray-100">Termine</p>
                        <p className="text-gray-600 dark:text-gray-300">Mo-Sa 8:00-18:00</p>
                        <p className="text-gray-600 dark:text-gray-300">Auch Wochenende möglich</p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Quick Actions */}
                <div className="grid gap-4">
                  <Button
                      size="lg"
                      className="w-full bg-soft-blue-600 hover:bg-soft-blue-700 dark:bg-soft-blue-600 dark:hover:bg-soft-blue-700 text-white py-4 rounded-xl font-semibold text-lg shadow-lg"
                      onClick={() => window.open('tel:+491701212677')}
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    Jetzt anrufen: +49 170 1212677
                  </Button>

                  <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-2 border-sage-600 dark:border-sage-400 text-sage-600 dark:text-sage-400 hover:bg-sage-600 hover:text-white dark:hover:bg-sage-600 dark:hover:text-white py-4 rounded-xl font-semibold text-lg"
                      onClick={() => window.open('https://wa.me/491701212677', '_blank')}
                  >
                    <MessageCircle className="w-5 h-5 mr-3" />
                    WhatsApp Nachricht
                  </Button>
                </div>
              </div>

              {/* Contact Form */}
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
                      <a href="#" className="text-soft-blue-600 dark:text-soft-blue-400 hover:text-soft-blue-700 dark:hover:text-soft-blue-300 underline">
                        Datenschutzerklärung
                      </a>{" "}
                      zu. *
                    </Label>
                  </div>

                  <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-soft-blue-600 hover:bg-soft-blue-700 dark:bg-soft-blue-600 dark:hover:bg-soft-blue-700 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Termin anfragen
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
  );
};