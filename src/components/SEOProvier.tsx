import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProviderProps {
    children: React.ReactNode;
}

export const SEOProvider = ({ children }: SEOProviderProps) => {
    const location = useLocation();

    useEffect(() => {
        // Dynamische Metadaten basierend auf der Route
        const updateMetadata = () => {
            const path = location.pathname;

            // Strukturierte Daten für lokale Unternehmen
            const localBusinessSchema = {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://fusspflegebergen.de/#business",
                "name": "Regina Bergen - Mobile Fußpflege",
                "description": "Professionelle mobile Fußpflege in Aachen und Umgebung. Fachfußpflegerin Regina Bergen kommt zu Ihnen nach Hause. Termin vereinbaren: +49 170 1212677",
                "url": "https://fusspflegebergen.de",
                "telephone": "+491701212677",
                "email": "info@fusspflegebergen.de",
                "image": "https://fusspflegebergen.de/profile-picture.webp",
                "logo": "https://fusspflegebergen.de/logo.svg",
                "priceRange": "$$",
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Mobile Fußpflege Leistungen",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Mobile Fußpflege",
                                "description": "Professionelle Fußpflege bei Ihnen zu Hause"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Nagelkorrektur",
                                "description": "Professionelle Nagelkorrektur und -pflege"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Hornhautentfernung",
                                "description": "Schonende Hornhautentfernung"
                            }
                        }
                    ]
                },
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Zum Kirschbäumchen 24",
                    "addressLocality": "Aachen",
                    "postalCode": "52070",
                    "addressRegion": "Nordrhein-Westfalen",
                    "addressCountry": "DE"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "50.7753",
                    "longitude": "6.0839"
                },
                "openingHours": "Mo-Fr 08:00-18:00",
                "serviceArea": [
                    {
                        "@type": "City",
                        "name": "Aachen"
                    },
                    {
                        "@type": "City",
                        "name": "Herzogenrath"
                    },
                    {
                        "@type": "City",
                        "name": "Würselen"
                    },
                    {
                        "@type": "City",
                        "name": "Alsdorf"
                    }
                ],
                "sameAs": [
                    "https://g.page/r/CcgHNP9uD2ZPEAE"
                ],
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5.0",
                    "reviewCount": "47",
                    "bestRating": "5",
                    "worstRating": "1"
                }
            };

            // Person Schema für Regina Bergen
            const personSchema = {
                "@context": "https://schema.org",
                "@type": "Person",
                "@id": "https://fusspflegebergen.de/#person",
                "name": "Regina Bergen",
                "jobTitle": "Fachfußpflegerin",
                "description": "Erfahrene Fachfußpflegerin mit Spezialisierung auf mobile Fußpflege in Aachen und Umgebung",
                "image": "https://fusspflegebergen.de/profile-picture.webp",
                "telephone": "+491701212677",
                "email": "info@fusspflegebergen.de",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Aachen",
                    "addressRegion": "Nordrhein-Westfalen",
                    "addressCountry": "DE"
                },
                "worksFor": {
                    "@id": "https://fusspflegebergen.de/#business"
                }
            };

            // Service Schema
            const serviceSchema = {
                "@context": "https://schema.org",
                "@type": "Service",
                "@id": "https://fusspflegebergen.de/#service",
                "name": "Mobile Fußpflege",
                "description": "Professionelle mobile Fußpflege direkt bei Ihnen zu Hause in Aachen und Umgebung. Alle Behandlungen werden nach höchsten Hygienestandards durchgeführt.",
                "provider": {
                    "@id": "https://fusspflegebergen.de/#business"
                },
                "areaServed": [
                    {
                        "@type": "City",
                        "name": "Aachen"
                    },
                    {
                        "@type": "City",
                        "name": "Herzogenrath"
                    },
                    {
                        "@type": "City",
                        "name": "Würselen"
                    }
                ],
                "serviceType": "Fußpflege",
                "category": "Gesundheitsdienstleistung",
                "hasOfferCatalog": {
                    "@id": "https://fusspflegebergen.de/#business"
                }
            };

            // FAQ Schema
            const faqSchema = {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Wer kann mobile Fußpflege in Anspruch nehmen?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Mobile Fußpflege ist für jeden geeignet, besonders aber für Senioren, Menschen mit eingeschränkter Mobilität, Berufstätige mit wenig Zeit und alle, die eine entspannte Behandlung in gewohnter Umgebung bevorzugen. Diabetiker bitte ich Podologen zu kontaktieren."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Was muss ich für den Hausbesuch vorbereiten?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Sie müssen nichts Besonderes vorbereiten. Ich bringe alle notwendigen Instrumente, Desinfektionsmittel und Pflegeprodukte mit. Wir benötigen lediglich etwas Platz und ein frisches Frotteehandtuch."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Welche Kosten entstehen und ist die Anfahrt kostenlos?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Die Anfahrt ist in Aachen und Umgebung kostenlos. Die Behandlungskosten richten sich nach der gewünschten Leistung und Aufwand."
                        }
                    }
                ]
            };

            // WebSite Schema für bessere Sitelinks
            const websiteSchema = {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://fusspflegebergen.de/#website",
                "name": "Mobile Fußpflege Regina Bergen",
                "description": "Professionelle mobile Fußpflege in Aachen - Regina Bergen kommt zu Ihnen nach Hause",
                "url": "https://fusspflegebergen.de",
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://fusspflegebergen.de/?search={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                },
                "publisher": {
                    "@id": "https://fusspflegebergen.de/#business"
                }
            };

            // Bestehende Schema-Tags entfernen
            const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
            existingSchemas.forEach(schema => {
                if (!schema.textContent?.includes('"@context": "https://schema.org"')) {
                    return; // Ursprüngliches Schema aus index.html behalten
                }
                schema.remove();
            });

            // Neue Schema-Tags hinzufügen
            const schemas = [localBusinessSchema, personSchema, serviceSchema, faqSchema, websiteSchema];

            schemas.forEach(schema => {
                const script = document.createElement('script');
                script.type = 'application/ld+json';
                script.textContent = JSON.stringify(schema);
                document.head.appendChild(script);
            });

            // Meta-Tags für verschiedene Seiten aktualisieren
            const updateMetaTag = (name: string, content: string) => {
                let meta = document.querySelector(`meta[name="${name}"]`) ||
                    document.querySelector(`meta[property="${name}"]`);

                if (!meta) {
                    meta = document.createElement('meta');
                    if (name.startsWith('og:') || name.startsWith('twitter:')) {
                        meta.setAttribute('property', name);
                    } else {
                        meta.setAttribute('name', name);
                    }
                    document.head.appendChild(meta);
                }
                meta.setAttribute('content', content);
            };

            // Seitenspezifische Metadaten
            if (path === '/impressum') {
                document.title = 'Impressum - Mobile Fußpflege Regina Bergen Aachen';
                updateMetaTag('description', 'Impressum und rechtliche Angaben zur mobilen Fußpflege Regina Bergen in Aachen. Kontaktdaten und Geschäftsangaben.');
            } else if (path === '/datenschutz') {
                document.title = 'Datenschutz - Mobile Fußpflege Regina Bergen Aachen';
                updateMetaTag('description', 'Datenschutzerklärung der mobilen Fußpflege Regina Bergen. Informationen zum Umgang mit Ihren persönlichen Daten.');
            } else {
                document.title = 'Mobile Fußpflege in Aachen – Regina Bergen – Hausbesuche für Ihre Fußgesundheit';
                updateMetaTag('description', 'Professionelle mobile Fußpflege in Aachen. Regina Bergen kommt zu Ihnen nach Hause. Jetzt Termin vereinbaren für gepflegte, gesunde Füße.');
            }

            // Erweiterte SEO Meta-Tags
            updateMetaTag('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
            updateMetaTag('googlebot', 'index, follow');
            updateMetaTag('bingbot', 'index, follow');
            updateMetaTag('language', 'de-DE');
            updateMetaTag('geo.region', 'DE-NW');
            updateMetaTag('geo.placename', 'Aachen');
            updateMetaTag('geo.position', '50.7753;6.0839');
            updateMetaTag('ICBM', '50.7753, 6.0839');

            // Business-spezifische Meta-Tags
            updateMetaTag('business:contact_data:street_address', 'Zum Kirschbäumchen 24');
            updateMetaTag('business:contact_data:locality', 'Aachen');
            updateMetaTag('business:contact_data:postal_code', '52070');
            updateMetaTag('business:contact_data:country_name', 'Deutschland');
            updateMetaTag('business:contact_data:phone_number', '+491701212677');

            // Open Graph erweitert
            updateMetaTag('og:title', 'Mobile Fußpflege in Aachen – Regina Bergen');
            updateMetaTag('og:description', 'Professionelle mobile Fußpflege in Aachen. Regina Bergen kommt zu Ihnen nach Hause. Jetzt Termin vereinbaren für gepflegte, gesunde Füße.');
            updateMetaTag('og:type', 'website');
            updateMetaTag('og:locale', 'de_DE');
            updateMetaTag('og:site_name', 'Mobile Fußpflege Regina Bergen');
            updateMetaTag('og:image', 'https://fusspflegebergen.de/profile-picture.webp');
            updateMetaTag('og:image:width', '1200');
            updateMetaTag('og:image:height', '630');
            updateMetaTag('og:image:alt', 'Regina Bergen - Fachfußpflegerin für mobile Fußpflege in Aachen');

            // Twitter Card erweitert
            updateMetaTag('twitter:card', 'summary_large_image');
            updateMetaTag('twitter:title', 'Mobile Fußpflege in Aachen – Regina Bergen');
            updateMetaTag('twitter:description', 'Professionelle mobile Fußpflege in Aachen. Regina Bergen kommt zu Ihnen nach Hause.');
            updateMetaTag('twitter:image', 'https://fusspflegebergen.de/profile-picture.webp');
            updateMetaTag('twitter:image:alt', 'Regina Bergen - Mobile Fußpflege Aachen');

            // Canonical URL
            let canonical = document.querySelector('link[rel="canonical"]');
            if (!canonical) {
                canonical = document.createElement('link');
                canonical.setAttribute('rel', 'canonical');
                document.head.appendChild(canonical);
            }
            canonical.setAttribute('href', `https://fusspflegebergen.de${path}`);

            // Preconnect für Performance
            const preconnectDomains = ['https://static.elfsight.com'];
            preconnectDomains.forEach(domain => {
                let preconnect = document.querySelector(`link[rel="preconnect"][href="${domain}"]`);
                if (!preconnect) {
                    preconnect = document.createElement('link');
                    preconnect.setAttribute('rel', 'preconnect');
                    preconnect.setAttribute('href', domain);
                    document.head.appendChild(preconnect);
                }
            });
        };

        updateMetadata();
    }, [location.pathname]);

    return <>{children}</>;
};