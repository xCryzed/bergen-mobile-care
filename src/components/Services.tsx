import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Stethoscope, Sparkles, Heart, Info, ShieldPlus, Hand, Brush, Footprints, Slice } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Footprints,
      title: "Basis Fußpflege",
      description: "Schneiden und Formen der Nägel, Reinigung des Nagelfalzes, Hornhautentfernung, Fußmassage",
      popular: true
    },
    {
      icon: Slice,
      title: "Erweiterte Fußpflege",
      description: "Behandlung von Hühneraugen, Schwielen und eingewachsenen Nägeln, inkl. Basis Fußpflege",
      popular: false
    },
    {
      icon: ShieldPlus,
      title: "Nagelprothetik",
      description: "Anfertigung künstlicher Nägel bei beschädigten oder teilweise fehlenden Nagelplatten",
      popular: false
    },
    {
      icon: Hand,
      title: "Maniküre",
      description: "Kürzen und Formen der Fingernägel und Glätten der Nageloberfläche",
      popular: false
    },
    {
      icon: Brush,
      title: "Lackieren",
      description: "Auftragen von Farblack auf Finger- oder Fußnägel nach Wunsch",
      popular: false
    }
  ];


  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <section id="services" className="py-20 bg-gradient-to-br from-soft-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-clamp-2xl md:text-clamp-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Meine Leistungen
              </h2>
              <p className="text-clamp-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Fachgerechte Fußpflege mit modernsten Methoden – bei Ihnen zu Hause - oder dort, wo Sie
                sich gerade aktuell in Aachen aufhalten
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                    <Card
                        key={index}
                        className={`p-6 hover:shadow-xl transition-all duration-300 animate-fade-in relative dark:bg-gray-800 dark:border-gray-700 ${
                            service.popular ? 'ring-2 ring-soft-blue-500 shadow-lg' : ''
                        }`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {service.popular && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-soft-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Beliebt
                      </span>
                          </div>
                      )}

                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-soft-blue-100 to-soft-blue-200 dark:from-soft-blue-800 dark:to-soft-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="w-8 h-8 text-soft-blue-600 dark:text-soft-blue-300" />
                        </div>

                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">{service.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">{service.description}</p>
                      </div>
                    </Card>
                );
              })}
            </div>

            {/* Important Notice */}
            <div className="relative mb-12">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border-l-4 border-blue-400 dark:border-blue-500 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center">
                      <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      Information
                    </h4>
                    <p className="text-blue-700 dark:text-blue-300 leading-relaxed">
                      Ich bin keine Podologin und führe keine ärztlich verordnete Fußpflege durch
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-soft-blue-100 dark:border-gray-700">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Inklusive bei allen Behandlungen</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-sage-100 dark:bg-sage-800 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="w-6 h-6 text-sage-600 dark:text-sage-400" />
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100">Anfahrt kostenlos</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">in Aachen und 15 km Umkreis</p>
                </div>

                <div className="space-y-2">
                  <div className="w-12 h-12 bg-warm-beige-100 dark:bg-warm-beige-800 rounded-full flex items-center justify-center mx-auto">
                    <Sparkles className="w-6 h-6 text-warm-beige-600 dark:text-warm-beige-400" />
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100">Sterile Instrumente</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Höchste Hygienemaßnahmen</p>
                </div>

                <div className="space-y-2">
                  <div className="w-12 h-12 bg-soft-blue-100 dark:bg-soft-blue-800 rounded-full flex items-center justify-center mx-auto">
                    <Stethoscope className="w-6 h-6 text-soft-blue-600 dark:text-soft-blue-400" />
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100">Beratung inklusive</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Tipps für die Fußgesundheit</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="bg-soft-blue-600 hover:bg-soft-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Jetzt Termin vereinbaren
              </Button>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                Kostenlose Beratung • Flexible Terminzeiten
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};