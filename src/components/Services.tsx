
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scissors, Droplets, Stethoscope, Sparkles, Heart, Euro } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Basispflege",
      description: "Fußbad, Nägel schneiden und feilen, Hornhautentfernung",
      price: "45€",
      duration: "ca. 45 Min.",
      popular: true
    },
    {
      icon: Scissors,
      title: "Medizinische Fußpflege",
      description: "Behandlung von Hühneraugen, eingewachsenen Nägeln, Schwielen",
      price: "55€",
      duration: "ca. 60 Min.",
      popular: false
    },
    {
      icon: Stethoscope,
      title: "Diabetiker-Fußpflege",
      description: "Spezielle Behandlung für Diabetiker mit besonderer Vorsicht",
      price: "60€",
      duration: "ca. 60 Min.",
      popular: false
    },
    {
      icon: Droplets,
      title: "Pflege & Massage",
      description: "Entspannende Fußmassage mit pflegenden Cremes",
      price: "35€",
      duration: "ca. 30 Min.",
      popular: false
    },
    {
      icon: Heart,
      title: "Wellness-Paket",
      description: "Kombination aus Basispflege und entspannender Massage",
      price: "65€",
      duration: "ca. 75 Min.",
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
    <section id="services" className="py-20 bg-gradient-to-br from-soft-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-clamp-2xl md:text-clamp-3xl font-bold text-gray-800 mb-4">
              Meine Leistungen
            </h2>
            <p className="text-clamp-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Professionelle Fußpflege mit modernsten Methoden – bequem bei Ihnen zu Hause
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index} 
                  className={`p-6 hover:shadow-xl transition-all duration-300 animate-fade-in relative ${
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
                    <div className="w-16 h-16 bg-gradient-to-br from-soft-blue-100 to-soft-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-soft-blue-600" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">{service.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-center text-2xl font-bold text-soft-blue-600">
                        <Euro className="w-5 h-5 mr-1" />
                        {service.price}
                      </div>
                      <p className="text-sm text-gray-500">{service.duration}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-soft-blue-100">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Inklusive bei allen Behandlungen</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 text-sage-600" />
                </div>
                <h4 className="font-semibold text-gray-800">Anfahrt kostenlos</h4>
                <p className="text-sm text-gray-600">in Aachen und 15km Umkreis</p>
              </div>
              
              <div className="space-y-2">
                <div className="w-12 h-12 bg-warm-beige-100 rounded-full flex items-center justify-center mx-auto">
                  <Sparkles className="w-6 h-6 text-warm-beige-600" />
                </div>
                <h4 className="font-semibold text-gray-800">Sterile Instrumente</h4>
                <p className="text-sm text-gray-600">Höchste Hygienemaßnahmen</p>
              </div>
              
              <div className="space-y-2">
                <div className="w-12 h-12 bg-soft-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Stethoscope className="w-6 h-6 text-soft-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-800">Beratung inklusive</h4>
                <p className="text-sm text-gray-600">Tipps für die Fußgesundheit</p>
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
            <p className="text-sm text-gray-600 mt-4">
              Kostenlose Beratung • Flexible Terminzeiten • Auch am Wochenende
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
