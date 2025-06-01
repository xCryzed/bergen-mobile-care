import { Heart, Sparkles } from "lucide-react";

export const Philosophy = () => {
    return (
        <section id="philosophy" className="py-20 bg-gradient-to-br from-sage-50 to-soft-blue-50 dark:from-gray-800 dark:to-gray-900">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-clamp-2xl md:text-clamp-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                            Meine Philosophie
                        </h2>
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-1 bg-gradient-to-r from-soft-blue-500 to-sage-500 rounded-full"></div>
                        </div>
                    </div>

                    {/* Main Content Card */}
                    <div className="relative">
                        {/* Background decoration */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-soft-blue-200 dark:bg-soft-blue-800 rounded-full opacity-20 animate-pulse"></div>
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-sage-200 dark:bg-sage-800 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>

                        {/* Main card */}
                        <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-soft-blue-100 dark:border-gray-700">
                            <div className="flex items-start space-x-4 mb-6">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 bg-gradient-to-br from-soft-blue-500 to-sage-500 rounded-2xl flex items-center justify-center shadow-lg">
                                        <Heart className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <div className="flex-grow">
                                    <div className="flex items-center space-x-2 mb-4">
                                        <Sparkles className="w-5 h-5 text-soft-blue-600 dark:text-soft-blue-400" />
                                        <span className="text-soft-blue-600 dark:text-soft-blue-400 font-semibold text-sm uppercase tracking-wide">
                      Mein Leitgedanke
                    </span>
                                    </div>
                                </div>
                            </div>

                            <blockquote className="text-clamp-lg md:text-clamp-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium italic text-center">
                                "Gesunde und schmerzfreie Füße tragen entscheidend zu einem aktiven und
                                selbstbestimmten Leben bei. Denn wer sich gut bewegen kann, bleibt mobiler
                                und fühlt sich wohler."
                            </blockquote>

                            {/* Bottom accent */}
                            <div className="mt-8 flex justify-center">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 bg-soft-blue-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-sage-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-warm-beige-500 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Supporting text */}
                    <div className="mt-12 text-center">
                        <p className="text-clamp-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Diese Überzeugung leitet mich bei jeder Behandlung und motiviert mich,
                            Ihnen mit Fachwissen und Einfühlungsvermögen zu helfen
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};