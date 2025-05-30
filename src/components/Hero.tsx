import { Button } from "@/components/ui/button";
import { Phone, MapPin, Heart } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const displayCustomerCount = () => {
    const startCount = 500;
    const startDate = "2025-01-01";
    const incrementPerDay = 0.5;

    const start = new Date(startDate);
    const today = new Date();

    const diffInDays = Math.floor((today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return Math.floor(startCount + diffInDays * incrementPerDay);
  }

  return (
      <section className="relative bg-gradient-to-br from-soft-blue-50 via-white to-warm-beige-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-16 md:py-24 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-soft-blue-100/20 to-transparent dark:from-soft-blue-900/20 dark:to-transparent"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-soft-blue-200 dark:border-gray-600 shadow-sm mb-8 animate-fade-in">
              <Heart className="w-4 h-4 text-soft-blue-600 dark:text-soft-blue-400 mr-2" />
              <span className="text-soft-blue-700 dark:text-soft-blue-300 font-medium text-sm">Einfühlsam • Professionell • Zuverlässig</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-clamp-3xl md:text-clamp-4xl font-bold text-gray-800 dark:text-gray-100 mb-6 leading-tight animate-slide-up">
              <span className="block">Mobile Fußpflege in Aachen</span>
              <span className="text-soft-blue-600 dark:text-soft-blue-400">Regina Bergen kommt zu Ihnen nach Hause</span>
            </h1>

            {/* Subheadline */}
            <p className="text-clamp-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-in text-balance">
              Einfühlsam, professionell & bequem – für gepflegte Füße und mehr Lebensqualität.
              Ich biete medizinische Fußpflege direkt bei Ihnen zu Hause.
            </p>

            {/* Location indicator */}
            <div className="flex items-center justify-center mb-10 text-soft-blue-700 dark:text-soft-blue-300 animate-fade-in">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="font-medium">Aachen und Umgebung • Hausbesuche nach Terminvereinbarung</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
              <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="bg-soft-blue-600 hover:bg-soft-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <Phone className="w-5 h-5 mr-3 group-hover:animate-pulse" />
                Termin vereinbaren
              </Button>
              <Button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  variant="outline"
                  size="lg"
                  className="border-2 border-soft-blue-600 text-soft-blue-600 hover:bg-soft-blue-600 hover:text-white dark:border-soft-blue-400 dark:text-soft-blue-400 dark:hover:bg-soft-blue-600 dark:hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                Leistungen ansehen
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-in">
              <div className="text-center">
                <div className="text-2xl font-bold text-soft-blue-600 dark:text-soft-blue-400">{new Date().getFullYear() - 2014}+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Jahre Erfahrung</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-soft-blue-600 dark:text-soft-blue-400">{displayCustomerCount()}+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Zufriedene Kunden</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-soft-blue-600 dark:text-soft-blue-400">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Mobile Betreuung</div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};