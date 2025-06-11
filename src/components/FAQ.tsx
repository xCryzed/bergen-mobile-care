import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState, useMemo, useEffect } from "react";

export const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<string[]>([]);

  const faqs = [
    {
      question: "Wer kann mobile Fußpflege in Anspruch nehmen?",
      answer: "Mobile Fußpflege ist für jeden geeignet, besonders aber für Senioren, Menschen mit eingeschränkter Mobilität, Berufstätige mit wenig Zeit und alle, die eine entspannte Behandlung in gewohnter Umgebung bevorzugen. Diabetiker bitte ich Podologen zu kontaktieren."
    },
    {
      question: "Was muss ich für den Hausbesuch vorbereiten?",
      answer: "Sie müssen nichts Besonderes vorbereiten. Ich bringe alle notwendigen Instrumente, Desinfektionsmittel und Pflegeprodukte mit. Wir benötigen lediglich etwas Platz und ein frisches Frotteehandtuch."
    },
    {
      question: "Wie läuft ein Hausbesuch ab?",
      answer: "Nach der Terminvereinbarung komme ich pünktlich zu Ihnen nach Hause. Wir führen zunächst ein kurzes Beratungsgespräch, dann bereite ich alles vor und beginne mit der Behandlung."
    },
    {
      question: "Was sind die Hygienestandards?",
      answer: "Jede Behandlung erfolgt nach strengen, gesetzlich festgelegten Hygienestandards von RKI, WHO und Gesundheitsbehörden zum Schutz der Gesundheit aller."
    },
    {
      question: "Welche Kosten entstehen und ist die Anfahrt kostenlos?",
      answer: "Die Anfahrt ist in Aachen und Umgebung kostenlos. Die Behandlungskosten richten sich nach der gewünschten Leistung und Aufwand."
    },
    {
      question: "Wie flexibel sind die Termine?",
      answer: "Ich biete sehr flexible Termine an. Folgetermine vereinbaren wir auf Wunsch sofort nach der Behandlung. Terminänderungen sind selbstverständlich möglich."
    },
    {
      question: "Wie ist meine telefonische Erreichbarkeit?",
      answer: "Sollten Sie mich während einer Behandlung nicht erreichen, hinterlassen Sie bitte eine Nachricht. Ich rufe Sie so bald wie möglich zurück."
    },
    {
      question: "Kann ich einen Gutschein verschenken?",
      answer: "Ja, sehr gerne können Sie Gutscheine für meine Leistungen erwerben. Dies ist ein wunderbares Geschenk für Ihre Liebsten. Sprechen Sie mich einfach darauf an."
    }
  ];

  const highlightText = (text: string, searchTerm: string) => {
    if (!searchTerm.trim()) return text;

    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) =>
        regex.test(part) ? (
            <span key={index} className="bg-gradient-to-r from-soft-blue-200 to-soft-blue-300 dark:from-soft-blue-800 dark:to-soft-blue-700 font-semibold px-1 py-0.5 rounded-sm animate-pulse">
          {part}
        </span>
        ) : part
    );
  };

  const filteredFaqs = useMemo(() => {
    if (!searchTerm.trim()) return faqs;

    return faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm.trim()) {
      setOpenItems(filteredFaqs.map((_, index) => `item-${index}`));
    } else {
      setOpenItems([]);
    }
  }, [searchTerm, filteredFaqs]);

  return (
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-clamp-2xl md:text-clamp-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Häufig gestellte Fragen
              </h2>
              <p className="text-clamp-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Hier finden Sie Antworten auf die wichtigsten Fragen zur mobilen Fußpflege
              </p>
            </div>

            {/* Enhanced Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-lg mx-auto">
                <div className="relative group">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-soft-blue-500 dark:text-soft-blue-400 w-5 h-5 transition-colors group-focus-within:text-soft-blue-600 dark:group-focus-within:text-soft-blue-300" />
                  <Input
                      type="text"
                      placeholder="Häufig gestellte Fragen durchsuchen..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-12 pr-6 py-4 w-full text-base bg-gradient-to-r from-white to-soft-blue-50 dark:from-gray-800 dark:to-gray-700 border-2 border-soft-blue-200 dark:border-gray-600 focus:border-soft-blue-500 dark:focus:border-soft-blue-400 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 focus:scale-[1.02] focus:shadow-soft-blue-200/50 dark:focus:shadow-soft-blue-800/50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-soft-blue-500/10 to-sage-500/10 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>

              {/* Animated Search Results Counter */}
              {searchTerm.trim() && (
                  <div className="text-center mt-4 animate-fade-in">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-soft-blue-100 to-sage-100 dark:from-soft-blue-900/50 dark:to-sage-900/50 rounded-full border border-soft-blue-200 dark:border-soft-blue-700 shadow-sm">
                      <p className="text-sm font-medium text-soft-blue-700 dark:text-soft-blue-300">
                        {filteredFaqs.length === 0 ? (
                            <span className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                          Keine Ergebnisse gefunden
                        </span>
                        ) : (
                            <span className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                              {filteredFaqs.length} {filteredFaqs.length === 1 ? 'Ergebnis' : 'Ergebnisse'} gefunden
                        </span>
                        )}
                      </p>
                    </div>
                  </div>
              )}
            </div>

            {/* FAQ Accordion with Enhanced Animations */}
            <div className="animate-fade-in">
              {filteredFaqs.length === 0 ? (
                  <div className="text-center py-16 animate-slide-up">
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-soft-blue-200 to-sage-200 dark:from-soft-blue-800 dark:to-sage-800 rounded-full flex items-center justify-center">
                        <Search className="w-8 h-8 text-soft-blue-600 dark:text-soft-blue-400" />
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">
                        Keine passenden FAQs gefunden
                      </p>
                      <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">
                        Versuchen Sie andere Suchbegriffe
                      </p>
                    </div>
                  </div>
              ) : (
                  <Accordion
                      type="multiple"
                      value={openItems}
                      onValueChange={setOpenItems}
                      className="space-y-4"
                  >
                    {filteredFaqs.map((faq, index) => (
                        <AccordionItem
                            key={`${searchTerm}-${index}`}
                            value={`item-${index}`}
                            className="bg-gradient-to-r from-soft-blue-50 via-white to-sage-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700 rounded-xl border border-soft-blue-100 dark:border-gray-700 shadow-lg hover:shadow-xl px-6 transition-all duration-300 hover:scale-[1.01] animate-fade-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <AccordionTrigger className="text-left hover:no-underline py-6 group">
                      <span className="font-semibold text-gray-800 dark:text-gray-100 text-clamp-base pr-4 group-hover:text-soft-blue-700 dark:group-hover:text-soft-blue-300 transition-colors duration-200">
                        {highlightText(faq.question, searchTerm)}
                      </span>
                          </AccordionTrigger>
                          <AccordionContent className="pb-6">
                            <div className="bg-gradient-to-r from-soft-blue-25 to-sage-25 dark:from-gray-900/50 dark:to-gray-800/50 rounded-lg p-4 border-l-4 border-soft-blue-400 dark:border-soft-blue-500">
                              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-clamp-sm">
                                {highlightText(faq.answer, searchTerm)}
                              </p>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                    ))}
                  </Accordion>
              )}
            </div>

            {/* Additional Help */}
            <div className="mt-12 text-center bg-gradient-to-r from-sage-50 to-soft-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 animate-fade-in">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Weitere Fragen?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Ich beantworte gerne alle Ihre Fragen persönlich
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                    href="tel:+491701212677"
                    className="inline-flex items-center justify-center px-6 py-3 bg-soft-blue-600 hover:bg-soft-blue-700 text-white rounded-full font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg"
                >
                  Jetzt anrufen: +49 170 1212677
                </a>
                <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-soft-blue-600 dark:border-soft-blue-400 text-soft-blue-600 dark:text-soft-blue-400 hover:bg-soft-blue-600 hover:text-white dark:hover:bg-soft-blue-400 dark:hover:text-gray-900 rounded-full font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg"
                >
                  Nachricht senden
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};