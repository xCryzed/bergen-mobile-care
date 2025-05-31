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
                    <span className="text-white font-bold text-xl">RB</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Regina Bergen</h3>
                    <p className="text-soft-blue-300">Mobile Fußpflege Aachen</p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                  Professionelle mobile Fußpflege in Aachen und Umgebung. Einfühlsame Betreuung
                  direkt bei Ihnen zu Hause für gepflegte Füße und mehr Lebensqualität.
                </p>

                <div className="flex items-center text-soft-blue-300">
                  <Heart className="w-4 h-4 mr-2" />
                  <span className="text-sm">Mit Liebe und Fachkompetenz für Ihre Fußgesundheit</span>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-soft-blue-400" />
                    <a href="tel:+491701212677" className="hover:text-soft-blue-300 transition-colors">
                      +49 170 1212677
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-soft-blue-400" />
                    <a href="mailto:kontakt@fusspflegebergen.de" className="hover:text-soft-blue-300 transition-colors text-sm">
                      kontakt@fusspflegebergen.de
                    </a>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-soft-blue-400 mt-1" />
                    <div>
                      <p>Einsatzgebiet:</p>
                      <p className="text-sm text-gray-400">Aachen und 20 km Umkreis</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Leistungen</h4>
                <ul className="space-y-2 text-sm">
                  <li className="text-gray-300 hover:text-white transition-colors cursor-pointer">Basispflege</li>
                  <li className="text-gray-300 hover:text-white transition-colors cursor-pointer">Medizinische Fußpflege</li>
                  <li className="text-gray-300 hover:text-white transition-colors cursor-pointer">Diabetiker-Fußpflege</li>
                  <li className="text-gray-300 hover:text-white transition-colors cursor-pointer">Pflege & Massage</li>
                  <li className="text-gray-300 hover:text-white transition-colors cursor-pointer">Wellness-Pakete</li>
                </ul>
              </div>
            </div>

            {/* SEO Content */}
            <div className="mt-12 pt-8 border-t border-gray-700">
              <div className="bg-gray-700 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4 text-soft-blue-300">Mobile Fußpflege in Aachen</h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Regina Bergen bietet professionelle mobile Fußpflege in Aachen und Umgebung. Als erfahrene
                  medizinische Fußpflegerin komme ich direkt zu Ihnen nach Hause und sorge für gepflegte,
                  gesunde Füße. Meine Leistungen umfassen die komplette Fußpflege von der Basisbehandlung
                  bis zur speziellen Diabetiker-Fußpflege. Besonders Senioren, Menschen mit eingeschränkter
                  Mobilität und Berufstätige schätzen den Komfort der mobilen Fußpflege. Vereinbaren Sie
                  noch heute Ihren Termin für professionelle Fußpflege in Aachen, Herzogenrath, Würselen
                  und der gesamten Städteregion Aachen.
                </p>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-400 mb-4 md:mb-0">
                © {new Date().getFullYear()} Regina Bergen - Mobile Fußpflege. Alle Rechte vorbehalten.
              </p>
              <div className="flex items-center space-x-6">
                <a onClick={() => handleNavigate("/bergen-mobile-care/impressum")} className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">Impressum</a>
                <a onClick={() => handleNavigate("/bergen-mobile-care/datenschutz")} className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">Datenschutz</a>
                <a className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">AGB</a>
                <CookieSettings />
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};