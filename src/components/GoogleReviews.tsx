import { useEffect, useState } from "react";
import { displayCustomerCount } from "@/lib/utils.ts";

export const GoogleReviews = () => {
    const [isWidgetVisible, setIsWidgetVisible] = useState(true);

    useEffect(() => {
        if (!document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]')) {
            const script = document.createElement('script');
            script.src = 'https://static.elfsight.com/platform/platform.js';
            script.async = true;
            document.head.appendChild(script);
        }

        const handleError = (event: ErrorEvent) => {
            if (event.message && event.message.includes('APP_VIEWS_LIMIT_REACHED')) {
                setIsWidgetVisible(false);
            }
        };

        const originalConsoleError = console.error;
        console.error = (...args) => {
            const message = args.join(' ');
            if (message.includes('APP_VIEWS_LIMIT_REACHED') || message.includes('32654581-d9fe-4f6e-bdbb-bfcf579df1b3')) {
                setIsWidgetVisible(false);
            }
            originalConsoleError.apply(console, args);
        };

        window.addEventListener('error', handleError);

        const checkWidget = () => {
            const widgetContainer = document.querySelector('.elfsight-app-32654581-d9fe-4f6e-bdbb-bfcf579df1b3');
            if (widgetContainer) {
                const iframe = widgetContainer.querySelector('iframe');
                if (!iframe || iframe.style.display === 'none') {
                    setTimeout(() => {
                        const updatedIframe = widgetContainer.querySelector('iframe');
                        if (!updatedIframe || updatedIframe.style.display === 'none') {
                            setIsWidgetVisible(false);
                        }
                    }, 5000);
                }
            }
        };

        setTimeout(checkWidget, 3000);

        return () => {
            window.removeEventListener('error', handleError);
            console.error = originalConsoleError;
        };
    }, []);

    if (!isWidgetVisible) {
        return null;
    }

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
                            Echte Google-Bewertungen von zufriedenen Kunden aus Aachen
                        </p>
                    </div>

                    {/* Google Reviews Widget Container */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                        <div
                            className="elfsight-app-32654581-d9fe-4f6e-bdbb-bfcf579df1b3"
                            data-elfsight-app-lazy
                        ></div>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div className="space-y-3">
                                <div className="text-3xl font-bold text-soft-blue-600 dark:text-soft-blue-400">Google</div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Verifizierte Bewertungen</p>
                            </div>

                            <div className="space-y-3">
                                <div className="text-3xl font-bold text-sage-600 dark:text-sage-400">{displayCustomerCount()}+</div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Zufriedene Kunden</p>
                            </div>

                            <div className="space-y-3">
                                <div className="text-3xl font-bold text-warm-beige-600 dark:text-warm-beige-400">100%</div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Echt & Transparent</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom CSS for Elfsight widget styling */}
            <style>{`
        .elfsight-app-32654581-d9fe-4f6e-bdbb-bfcf579df1b3 {
          border-radius: 12px;
          overflow: hidden;
        }

        /* Dark mode adjustments for Elfsight widget */
        .dark .elfsight-app-32654581-d9fe-4f6e-bdbb-bfcf579df1b3 {
          filter: brightness(0.9) contrast(1.1);
        }

        /* Ensure the widget is responsive */
        .elfsight-app-32654581-d9fe-4f6e-bdbb-bfcf579df1b3 iframe {
          width: 100% !important;
          border-radius: 12px;
        }
      `}</style>
        </section>
    );
};