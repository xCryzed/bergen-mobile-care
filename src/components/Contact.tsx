import { ContactInfo } from "./ContactInfo";
import { QuickActions } from "./QuickActions";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  return (
      <section id="contact" className="py-20 bg-gradient-to-br from-soft-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-clamp-2xl md:text-clamp-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Kontakt & Termin vereinbaren
              </h2>
              <p className="text-clamp-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Ich freue mich auf Ihre Nachricht. Gerne beantworte ich alle Fragen und vereinbare einen Termin mit Ihnen.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8 animate-fade-in">
                <ContactInfo />
                <QuickActions />
              </div>

              {/* Contact Form */}
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
  );
};