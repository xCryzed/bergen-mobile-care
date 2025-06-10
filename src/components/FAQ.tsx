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
      answer: "Die Anfahrt ist im Umkreis von 10 km um Aachen kostenlos. Die Behandlungskosten richten sich nach der gewünschten Leistung und Aufwand."
    },
    {
      question: "Wie flexibel sind die Termine?",
      answer: "Ich biete sehr flexible Termine an. Folgetermine vereinbaren wir auf Wunsch sofort nach der Behandlung. Terminänderungen sind selbstverständlich möglich."
    },
    {
      question: "Wie ist meine telefonische Erreichbarkeit?",
      answer: "Während einer Behandlung kann ich Ihren Anruf leider nicht persönlich entgegennehmen. Bitte hinterlassen Sie eine Nachricht, ich melde mich schnellstmöglich zurück."
    },
    {
      question: "Kann ich einen Gutschein verschenken?",
      answer: "Ja, sehr gerne können Sie Gutscheine für meine Leistungen erwerben. Dies ist ein wunderbares Geschenk für Ihre Liebsten. Sprechen Sie mich einfach darauf an."
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
                Ich beantworte gerne alle Ihre Fragen persönlich
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