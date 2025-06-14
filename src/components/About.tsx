import { Card } from "@/components/ui/card";
import { Award, Heart, Shield, Clock } from "lucide-react";

export const About = () => {
  return (
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-clamp-2xl md:text-clamp-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Über mich
              </h2>
              <p className="text-clamp-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Mit Fachwissen und Sorgfalt für Ihre Fußgesundheit
              </p>
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column: Profile card and text content */}
              <div className="space-y-8 animate-slide-up">
                {/* Profile Card */}
                <div className="bg-gradient-to-br from-soft-blue-100 to-warm-beige-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-soft-blue-500 to-soft-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <img
                        src="/profile-picture.webp"
                        alt="Profilbild"
                        className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 text-center mb-4">Regina Bergen</h3>
                  <p className="text-center text-soft-blue-600 dark:text-soft-blue-400 font-semibold mb-4">Zertifzierte Fachfußpflegerin</p>
                </div>

                {/* Text content */}
                <div className="animate-fade-in">
                  <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p className="text-clamp-base">
                      Willkommen, Ihre Fußpflege in besten Händen.
                    </p>
                    <p className="text-clamp-base">
                      Ich bin Regina Bergen, seit mehr als 11 Jahren mobile Fachfußpflegerin mit
                      zertifizierter Ausbildung und staatlich examinierte Altenpflegehelferin.
                    </p>
                    <p className="text-clamp-base">
                      Besonders am Herzen liegt mir die Betreuung von Senioren, Menschen mit eingeschränkter
                      Mobilität und allen, die sich eine bequeme Behandlung in vertrauter Umgebung wünschen.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Qualifications section */}
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Qualifikationen & Werte</h3>

                <div className="grid gap-4">
                  <Card className="p-6 border-l-4 border-l-soft-blue-500 hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-600">
                    <div className="flex items-start space-x-4">
                      <Award className="w-6 h-6 text-soft-blue-600 dark:text-soft-blue-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Zertifizierte Ausbildung</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          Staatlich examinierte Altenpflegehelferin seit 2010 und Fußpflegeexpertin seit 2014
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-l-4 border-l-sage-500 hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-600">
                    <div className="flex items-start space-x-4">
                      <Heart className="w-6 h-6 text-sage-600 dark:text-sage-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Einfühlsame Betreuung</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          Besondere Sensibilität für die Bedürfnisse älterer Menschen und hilfebedürftiger Menschen
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-l-4 border-l-warm-beige-500 hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-600">
                    <div className="flex items-start space-x-4">
                      <Shield className="w-6 h-6 text-warm-beige-600 dark:text-warm-beige-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Höchste Hygiene</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          Professionelle Fußpflege unter Einhaltung strengster Hygienestandards
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-l-4 border-l-soft-blue-500 hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-600">
                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-soft-blue-600 dark:text-soft-blue-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Flexible Termine</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          Die Terminvereinbarung erfolgt flexibel innerhalb Ihrer verfügbaren Zeitfenster
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};