import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Wer kann mobile Fußpflege in Anspruch nehmen?",
      answer: "Mobile Fußpflege ist für jeden geeignet, besonders aber für Senioren, Menschen mit eingeschränkter Mobilität, Berufstätige mit wenig Zeit und alle, die eine entspannte Behandlung in gewohnter Umgebung bevorzugen. Auch für Diabetiker biete ich spezielle Behandlungen an."
    },
    {
      question: "Was muss ich für den Hausbesuch vorbereiten?",
      answer: "Sie müssen nichts Besonderes vorbereiten. Ich bringe alle notwendigen Instrumente, Desinfektionsmittel und Pflegeprodukte mit. Wir benötigen lediglich einen ruhigen Platz mit gutem Licht und Zugang zu Wasser. Ein bequemer Stuhl reicht völlig aus."
    },
    {
      question: "Wie läuft ein Hausbesuch ab?",
      answer: "Nach der Terminvereinbarung komme ich pünktlich zu Ihnen nach Hause. Wir führen zunächst ein kurzes Beratungsgespräch, dann bereite ich alles vor und beginne mit der Behandlung. Je nach gebuchter Leistung dauert ein Termin zwischen 30-75 Minuten."
    },
    {
      question: "Wie sind die Hygienestandards?",
      answer: "Ich arbeite ausschließlich mit sterilen, desinfizierten Instrumenten. Alle Werkzeuge werden nach jedem Kunden professionell aufbereitet. Ich trage Handschuhe und achte auf höchste Hygienemaßnahmen nach medizinischen Standards."
    },
    {
      question: "Welche Kosten entstehen und ist die Anfahrt kostenlos?",
      answer: "Die Anfahrt ist im Umkreis von 15 km um Aachen kostenlos. Die Behandlungskosten richten sich nach der gewünschten Leistung und beginnen bei 35€ für eine entspannende Fußmassage bis 65€ für das Wellness-Paket."
    },
    {
      question: "Wie flexibel sind die Termine?",
      answer: "Ich biete sehr flexible Termine an, auch abends und am Wochenende. Regelmäßige Termine können gerne vereinbart werden. Bei Bedarf sind auch kurzfristige Termine möglich."
    },
    {
      question: "Behandeln Sie auch Diabetiker?",
      answer: "Ja, ich habe eine spezielle Ausbildung für die Diabetiker-Fußpflege. Diese erfordert besondere Vorsicht und Expertise, da Diabetiker ein erhöhtes Risiko für Wundheilungsstörungen haben. Ich arbeite hier besonders sanft und achtsam."
    },
    {
      question: "Kann ich einen Gutschein verschenken?",
      answer: "Ja, gerne können Sie Gutscheine für meine Leistungen verschenken. Das ist ein wunderbares Geschenk für Ihre Liebsten. Sprechen Sie mich einfach darauf an, und wir finden eine schöne Lösung."
    }
  ];

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

            {/* FAQ Accordion */}
            <div className="animate-fade-in">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                    <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="bg-gradient-to-r from-soft-blue-50 to-white dark:from-gray-800 dark:to-gray-800 rounded-lg border border-soft-blue-100 dark:border-gray-700 shadow-sm px-6"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold text-gray-800 dark:text-gray-100 text-clamp-base pr-4">
                      {faq.question}
                    </span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-6">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-clamp-sm">
                          {faq.answer}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Additional Help */}
            <div className="mt-12 text-center bg-gradient-to-r from-sage-50 to-soft-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Weitere Fragen?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Ich beantworte gerne alle Ihre Fragen persönlich. Rufen Sie mich an oder schreiben Sie mir eine Nachricht.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                    href="tel:+491701212677"
                    className="inline-flex items-center justify-center px-6 py-3 bg-soft-blue-600 hover:bg-soft-blue-700 text-white rounded-full font-semibold transition-colors"
                >
                  Jetzt anrufen: +49 170 1212677
                </a>
                <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-soft-blue-600 dark:border-soft-blue-400 text-soft-blue-600 dark:text-soft-blue-400 hover:bg-soft-blue-600 hover:text-white dark:hover:bg-soft-blue-400 dark:hover:text-gray-900 rounded-full font-semibold transition-colors"
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