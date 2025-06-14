import { Heart, MapPin, Phone, Mail } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { CookieSettings } from "@/components/CookieSettings";

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigate = (path: string) => {
    if (location.pathname !== path) {
      navigate(path);
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-soft-blue-500 to-soft-blue-600 rounded-full flex items-center justify-center">
                  <img
                    src="/profile-picture.webp"
                    alt="Profilbild"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Regina Bergen</h3>
                  <p className="text-soft-blue-300">Mobile Fußpflege Aachen</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Professionelle mobile Fußpflege in Aachen. Einfühlsame Betreuung
                direkt bei Ihnen zu Hause für gepflegte Füße und mehr
                Lebensqualität.
              </p>

              <div className="flex items-center text-soft-blue-300">
                <Heart className="w-4 h-4 mr-2" />
                <span className="text-sm">
                  Mit Liebe und Fachkompetenz für Ihre Fußgesundheit
                </span>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-soft-blue-400" />
                  <a
                    href="tel:+491701212677"
                    className="hover:text-soft-blue-300 transition-colors"
                  >
                    +49 170 1212677
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-soft-blue-400" />
                  <a
                    href="mailto:info@fusspflegebergen.de"
                    className="hover:text-soft-blue-300 transition-colors text-sm"
                  >
                    info@fusspflegebergen.de
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-soft-blue-400 mt-1" />
                  <div>
                    <p>Einsatzgebiet:</p>
                    <p className="text-sm text-gray-400">Aachen</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Leistungen</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-300">Basis Fußpflege</li>
                <li className="text-gray-300">Erweiterte Fußpflege</li>
                <li className="text-gray-300">Nagelprothetik</li>
                <li className="text-gray-300">Maniküre</li>
                <li className="text-gray-300">Lackieren</li>
              </ul>
            </div>
          </div>

          {/* SEO Content */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="bg-gray-700 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4 text-soft-blue-300">
                Mobile Fußpflege in Aachen
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                Regina Bergen bietet professionelle mobile Fußpflege in Aachen
                und Umgebung. Als erfahrene Fachfußpflegerin komme ich direkt zu
                Ihnen nach Hause und sorge für gepflegte Füße. Meine Leistungen
                umfassen die komplette Fußpflege von der Basisbehandlung bis zum
                Lackieren. Besonders Senioren, Menschen mit eingeschränkter
                Mobilität und Berufstätige schätzen den Komfort der mobilen
                Fußpflege. Vereinbaren Sie noch heute Ihren Termin für
                professionelle Fußpflege in Aachen, Burtscheid, Brand,
                Eilendorf, Laurensberg, Richterich, Vaalserquartier, sowie in
                Seniorenheimen, Krankenhäusern und medizinischen Einrichtungen.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
              <p className="text-sm text-gray-400 mb-2">
                © {new Date().getFullYear()} Regina Bergen • Mobile Fußpflege.
                Alle Rechte vorbehalten.
              </p>
              <div className="flex items-center text-xs text-gray-500">
                <span>Developed with</span>
                <Heart className="w-3 h-3 mx-1 text-red-500 fill-current animate-pulse" />
                <span>by</span>
                <a
                  href="https://de.linkedin.com/in/nino-bergen-676139219"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 text-soft-blue-300 transition-colors flex items-center"
                >
                  Nino Bergen
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <a
                onClick={() => handleNavigate("/impressum")}
                className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Impressum
              </a>
              <a
                onClick={() => handleNavigate("/datenschutz")}
                className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Datenschutz
              </a>
              <CookieSettings />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
