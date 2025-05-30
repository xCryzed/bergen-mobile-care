import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria K.",
      age: "78 Jahre",
      location: "Aachen-Brand",
      rating: 5,
      text: "Frau Bergen ist ein Engel! Sie kommt immer pünktlich, ist sehr einfühlsam und meine Füße fühlen sich nach der Behandlung wie neu an. Die Anfahrt zu einem Fußpflegestudio wäre für mich sehr beschwerlich gewesen.",
      highlight: "Sehr einfühlsam und professionell"
    },
    {
      name: "Klaus H.",
      age: "65 Jahre",
      location: "Aachen-Laurensberg",
      rating: 5,
      text: "Als Diabetiker bin ich auf spezielle Fußpflege angewiesen. Frau Bergen kennt sich bestens aus und behandelt mich mit der nötigen Vorsicht. Ich fühle mich in besten Händen.",
      highlight: "Expertise bei Diabetiker-Fußpflege"
    },
    {
      name: "Elisabeth R.",
      age: "82 Jahre",
      location: "Herzogenrath",
      rating: 5,
      text: "Endlich kann ich wieder entspannt die Fußpflege genießen, ohne das Haus verlassen zu müssen. Frau Bergen bringt alles mit und arbeitet so sauber und gründlich. Absolute Empfehlung!",
      highlight: "Entspannte Behandlung zu Hause"
    },
    {
      name: "Andrea M.",
      age: "45 Jahre",
      location: "Aachen-Forst",
      rating: 5,
      text: "Als berufstätige Mutter mit wenig Zeit ist die mobile Fußpflege perfekt für mich. Frau Bergen kommt auch am Wochenende und ist immer freundlich und zuverlässig.",
      highlight: "Flexible Termine, auch am Wochenende"
    }
  ];

  return (
      <section className="py-20 bg-gradient-to-br from-sage-50 to-soft-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-clamp-2xl md:text-clamp-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Was meine Kunden sagen
              </h2>
              <p className="text-clamp-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Vertrauen Sie den Erfahrungen zufriedener Kunden aus Aachen und Umgebung
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {testimonials.map((testimonial, index) => (
                  <Card
                      key={index}
                      className="p-8 hover:shadow-xl transition-all duration-300 animate-fade-in relative bg-white dark:bg-gray-800"
                      style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6">
                      <Quote className="w-8 h-8 text-soft-blue-200 dark:text-soft-blue-600" />
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Highlight */}
                    <div className="bg-soft-blue-50 dark:bg-gray-700 rounded-lg p-3 mb-4">
                      <p className="text-soft-blue-700 dark:text-soft-blue-300 font-medium text-sm text-center">
                        "{testimonial.highlight}"
                      </p>
                    </div>

                    {/* Customer Info */}
                    <div className="border-t dark:border-gray-600 pt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-gray-800 dark:text-gray-200">{testimonial.name}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.age}</p>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.location}</p>
                      </div>
                    </div>
                  </Card>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-3">
                  <div className="text-3xl font-bold text-soft-blue-600 dark:text-soft-blue-400">4.9/5</div>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Durchschnittliche Bewertung</p>
                </div>

                <div className="space-y-3">
                  <div className="text-3xl font-bold text-sage-600 dark:text-sage-400">500+</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Zufriedene Kunden</p>
                </div>

                <div className="space-y-3">
                  <div className="text-3xl font-bold text-warm-beige-600 dark:text-warm-beige-400">95%</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Weiterempfehlungsrate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};