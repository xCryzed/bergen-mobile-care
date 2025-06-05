import { Card } from "@/components/ui/card";
import { Home, Clock, Heart, Shield, Users, Star, Footprints, HandHelping } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: Footprints,
      title: "Fußpflege mit Wirkung",
      description: "Bedeutet Gesundheitsvorsorge für Füße und Beine und erhöht die Lebensqualität. Gepflegte Füße wirken attraktiv und fördern das Wohlbefinden. Ich unterstütze Sie durch Haut- und Nagelpflege",
      color: "soft-blue"
    },
    {
      icon: Users,
      title: "Persönliche Betreuung",
      description: "Ich biete Ihnen eine ausführliche Beratung, eine regelmäßig abgestimmte Behandlung für langfristig gesunde Füße, denn Ihre Zufriedenheit ist mein Ziel",
      color: "sage"
    },
    {
      icon: Star,
      title: "Professionelle Qualität",
      description: "Ich verwende ausschließlich hochwertige, hautverträgliche Produkte aus dem Fachhandel und wähle die Pflege individuell nach den Bedürfnissen Ihrer Füße aus für eine gezielte und wirksame Unterstützung",
      color: "warm-beige"
    },
    {
      icon: Shield,
      title: "Hygiene & Sicherheit",
      description: "Hygiene und Sicherheit haben für mich höchste Priorität. Ich arbeite mit modernen Geräten, hochwertigen Materialien und sterilisierten Instrumenten, um Ihnen eine sichere und verantwortungsvolle Behandlung zu garantieren",
      color: "soft-blue"
    },
    {
      icon: Home,
      title: "Komfort bei Ihnen",
      description: "Genießen Sie Ihre Fußpflege entspannt in Ihrer gewohnten Umgebung. Ohne Hektik, in vertrauter Atmosphäre und ganz ohne Zeitdruck – dort, wo Sie sich am wohlsten fühlen",
      color: "sage"
    },
    {
      icon: Clock,
      title: "Zeitersparnis",
      description: "Sie haben keine mühsamen Anfahrtswege, Parkplatzsuche oder Wartezeiten. Sie sparen wertvolle Zeit – für einen entspannten Alltag",
      color: "warm-beige"
    }
  ];

  return (
      <section id="benefits" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-clamp-2xl md:text-clamp-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Warum mobile Fußpflege?
              </h2>
              <p className="text-clamp-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Entdecken Sie die Vorteile der professionellen Fußpflege direkt bei Ihnen
              </p>
              <p className="text-clamp-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mt-4">
                Zuhause · Seniorenheim · Krankenhaus · Kurzzeitpflege · Hospiz
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                const colorClasses = {
                  'soft-blue': 'from-soft-blue-100 to-soft-blue-200 text-soft-blue-600 dark:from-soft-blue-800 dark:to-soft-blue-700 dark:text-soft-blue-300',
                  'sage': 'from-sage-100 to-sage-200 text-sage-600 dark:from-sage-800 dark:to-sage-700 dark:text-sage-300',
                  'warm-beige': 'from-warm-beige-100 to-warm-beige-200 text-warm-beige-600 dark:from-warm-beige-800 dark:to-warm-beige-700 dark:text-warm-beige-300'
                };

                return (
                    <Card
                        key={index}
                        className="p-8 hover:shadow-xl transition-all duration-300 animate-fade-in group dark:bg-gray-800 dark:border-gray-700"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="text-center">
                        <div className={`w-20 h-20 bg-gradient-to-br ${colorClasses[benefit.color as keyof typeof colorClasses]} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-10 h-10" />
                        </div>

                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 group-hover:text-soft-blue-600 dark:group-hover:text-soft-blue-400 transition-colors">
                          {benefit.title}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </Card>
                );
              })}
            </div>

            {/* Additional Benefits Section */}
            <div className="mt-20 bg-gradient-to-r from-soft-blue-50 to-sage-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                  Für wen ist die Fußpflege geeignet?
                </h3>
                <p className="text-clamp-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Meine mobile Fußpflege richtet sich an alle, die ihren Füßen eine zuverlässige, fachgerechte und empathische Pflege ermöglichen möchten – ganz gleich in welchem Alter
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <Heart className="w-8 h-8 text-warm-beige-600 dark:text-warm-beige-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Alle Menschen</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Die Wert auf Wohlbefinden und Lebensqualität legen und sich mit professioneller Fußpflege bewusst etwas Gutes gönnen
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <Users className="w-8 h-8 text-soft-blue-600 dark:text-soft-blue-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Senioren</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Die regelmäßige Pflege schätzen und trotz eventuell eingeschränkter Mobilität oder gesundheitlichen Probleme auf Fußpflege nicht verzichten wollen
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <HandHelping className="w-8 h-8 text-sage-600 dark:text-sage-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Hilfsbedürftige Menschen</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Die auf Unterstützung angewiesen sind und die Vorteile einer einfühlsamen Behandlung in ihrer vertrauten Umgebung besonders schätzen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};