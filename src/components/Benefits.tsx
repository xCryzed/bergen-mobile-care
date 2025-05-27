
import { Card } from "@/components/ui/card";
import { Home, Clock, Heart, Shield, Users, Star } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: Home,
      title: "Komfort zu Hause",
      description: "Entspannte Behandlung in Ihrer gewohnten Umgebung ohne Anfahrt oder Wartezeiten",
      color: "soft-blue"
    },
    {
      icon: Clock,
      title: "Zeitersparnis",
      description: "Keine Anfahrt, keine Parkplatzsuche – ich komme pünktlich zu Ihrem Wunschtermin",
      color: "sage"
    },
    {
      icon: Heart,
      title: "Für Senioren ideal",
      description: "Besonders geeignet für ältere Menschen und Personen mit eingeschränkter Mobilität",
      color: "warm-beige"
    },
    {
      icon: Shield,
      title: "Hygiene & Sicherheit",
      description: "Sterile Instrumente und höchste Hygienestandards für Ihre Gesundheit",
      color: "soft-blue"
    },
    {
      icon: Users,
      title: "Persönliche Betreuung",
      description: "Individuelle Behandlung und einfühlsamer Umgang in entspannter Atmosphäre",
      color: "sage"
    },
    {
      icon: Star,
      title: "Professionelle Qualität",
      description: "Medizinische Fußpflege auf höchstem Niveau mit modernsten Methoden",
      color: "warm-beige"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-clamp-2xl md:text-clamp-3xl font-bold text-gray-800 mb-4">
              Warum mobile Fußpflege?
            </h2>
            <p className="text-clamp-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Entdecken Sie die Vorteile der professionellen Fußpflege direkt bei Ihnen zu Hause
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              const colorClasses = {
                'soft-blue': 'from-soft-blue-100 to-soft-blue-200 text-soft-blue-600',
                'sage': 'from-sage-100 to-sage-200 text-sage-600',
                'warm-beige': 'from-warm-beige-100 to-warm-beige-200 text-warm-beige-600'
              };
              
              return (
                <Card 
                  key={index}
                  className="p-8 hover:shadow-xl transition-all duration-300 animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center">
                    <div className={`w-20 h-20 bg-gradient-to-br ${colorClasses[benefit.color as keyof typeof colorClasses]} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-10 h-10" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-soft-blue-600 transition-colors">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Additional Benefits Section */}
          <div className="mt-20 bg-gradient-to-r from-soft-blue-50 to-sage-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Besonders geeignet für
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <Users className="w-8 h-8 text-soft-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">Senioren</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Bequeme Behandlung ohne beschwerliche Anfahrt oder lange Wartezeiten
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <Clock className="w-8 h-8 text-sage-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">Berufstätige</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Flexible Termine auch abends und am Wochenende nach Ihrem Zeitplan
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <Heart className="w-8 h-8 text-warm-beige-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">Menschen mit Einschränkungen</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Professionelle Fußpflege trotz eingeschränkter Mobilität oder gesundheitlicher Probleme
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
