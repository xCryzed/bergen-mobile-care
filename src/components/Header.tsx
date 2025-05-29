
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string, retryCount = 0) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      return;
    }

    if (retryCount === 0) {
      navigate("/bergen-mobile-care/");
    }

    if (retryCount < 10) {
      setTimeout(() => {
        scrollToSection(sectionId, retryCount + 1);
      }, 300);
    } else {
      console.warn(`Element with ID "${sectionId}" was not found`);
    }
  };

  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-soft-blue-100 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-soft-blue-500 to-soft-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">RB</span>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800 leading-tight">
                Regina Bergen
              </h1>
              <p className="text-sm text-soft-blue-600 font-medium">Mobile Fußpflege</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-soft-blue-600 font-medium transition-colors"
            >
              Über mich
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-soft-blue-600 font-medium transition-colors"
            >
              Leistungen
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-gray-700 hover:text-soft-blue-600 font-medium transition-colors"
            >
              Vorteile
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-soft-blue-600 font-medium transition-colors"
            >
              Kontakt
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-soft-blue-600 hover:bg-soft-blue-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-4 h-4 mr-2" />
              Termin vereinbaren
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-soft-blue-50 rounded-lg font-medium transition-colors"
            >
              Über mich
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-soft-blue-50 rounded-lg font-medium transition-colors"
            >
              Leistungen
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-soft-blue-50 rounded-lg font-medium transition-colors"
            >
              Vorteile
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-soft-blue-50 rounded-lg font-medium transition-colors"
            >
              Kontakt
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="w-full bg-soft-blue-600 hover:bg-soft-blue-700 text-white py-3 rounded-lg font-semibold"
            >
              <Phone className="w-4 h-4 mr-2" />
              Termin vereinbaren
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};
