import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProviderProps {
  children: React.ReactNode;
}

export const SEOProvider = ({ children }: SEOProviderProps) => {
  const location = useLocation();

  useEffect(() => {
    const updateMetadata = () => {
      const path = location.pathname;

      const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://fusspflegebergen.de/#business",
        name: "Regina Bergen - Mobile Fußpflege Aachen",
        alternateName: [
          "Mobile Fußpflege Aachen",
          "Fußpflege Bergen",
          "Fußpflege Hausbesuch Aachen",
        ],
        description:
          "Professionelle mobile Fußpflege in Aachen und Umgebung. Fachfußpflegerin Regina Bergen kommt zu Ihnen nach Hause. ✓ Über 11 Jahre Erfahrung ✓ Zertifiziert ✓ Kostenlose Anfahrt in Aachen",
        url: "https://fusspflegebergen.de",
        telephone: "+491701212677",
        email: "info@fusspflegebergen.de",
        image: [
          "https://fusspflegebergen.de/profile-picture.webp",
          "https://fusspflegebergen.de/logo.svg",
        ],
        logo: "https://fusspflegebergen.de/logo.svg",
        priceRange: "€€",
        currenciesAccepted: "EUR",
        paymentAccepted: "Cash, Bank Transfer",
        foundingDate: "2014",
        slogan:
          "Gepflegte Füße fördern, erhalten oder steigern die Lebensqualität",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Mobile Fußpflege Leistungen Aachen",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Mobile Fußpflege Aachen",
                description:
                  "Professionelle Fußpflege bei Ihnen zu Hause in Aachen",
                category: "Fußpflege",
                serviceType: "Mobile Dienstleistung",
              },
              areaServed: [
                "Aachen",
                "Herzogenrath",
                "Würselen",
                "Alsdorf",
                "Stolberg",
              ],
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Nagelkorrektur und Nagelpflege",
                description:
                  "Professionelle Nagelkorrektur und -pflege für gesunde Füße",
                category: "Nagelpflege",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Hornhautentfernung",
                description: "Schonende und professionelle Hornhautentfernung",
                category: "Hornhautbehandlung",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Diabetiker Fußpflege",
                description:
                  "Spezielle Fußpflege für Diabetiker mit besonderer Sorgfalt",
                category: "Medizinische Fußpflege",
              },
            },
          ],
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Zum Kirschbäumchen 24",
          addressLocality: "Aachen",
          postalCode: "52070",
          addressRegion: "Nordrhein-Westfalen",
          addressCountry: "DE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "50.7753",
          longitude: "6.0839",
        },
        openingHours: [
          "Mo 08:00-18:00",
          "Tu 08:00-18:00",
          "We 08:00-18:00",
          "Th 08:00-18:00",
          "Fr 08:00-18:00",
        ],
        serviceArea: [
          {
            "@type": "City",
            name: "Aachen",
            description: "Kostenlose Anfahrt in ganz Aachen",
          },
          {
            "@type": "City",
            name: "Herzogenrath",
            description: "Mobile Fußpflege in Herzogenrath",
          },
          {
            "@type": "City",
            name: "Würselen",
            description: "Hausbesuche für Fußpflege in Würselen",
          },
          {
            "@type": "City",
            name: "Alsdorf",
            description: "Professionelle Fußpflege in Alsdorf",
          },
          {
            "@type": "City",
            name: "Stolberg",
            description: "Mobile Fußpflege Stolberg",
          },
        ],
        sameAs: ["https://g.page/r/CcgHNP9uD2ZPEAE"],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "47",
          bestRating: "5",
          worstRating: "1",
        },
        specialties: [
          "Mobile Fußpflege",
          "Hausbesuche",
          "Seniorenpflege",
          "Nagelkorrektur",
          "Hornhautentfernung",
          "Diabetiker Fußpflege",
        ],
      };

      // Person Schema für Regina Bergen
      const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://fusspflegebergen.de/#person",
        name: "Regina Bergen",
        givenName: "Regina",
        familyName: "Bergen",
        jobTitle: "Fachfußpflegerin",
        description:
          "Erfahrene Fachfußpflegerin mit über 11 Jahren Erfahrung und Spezialisierung auf mobile Fußpflege in Aachen. Staatlich examinierte Altenpflegehelferin seit 2010.",
        image: "https://fusspflegebergen.de/profile-picture.webp",
        telephone: "+491701212677",
        email: "info@fusspflegebergen.de",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Aachen",
          addressRegion: "Nordrhein-Westfalen",
          addressCountry: "DE",
        },
        worksFor: {
          "@id": "https://fusspflegebergen.de/#business",
        },
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            name: "Fachfußpflegerin",
            description: "Zertifizierte Ausbildung zur Fachfußpflegerin",
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "Staatlich examinierte Altenpflegehelferin",
            description: "Staatliche Prüfung zur Altenpflegehelferin seit 2010",
          },
        ],
      };

      // Service Schema
      const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://fusspflegebergen.de/#service",
        name: "Mobile Fußpflege Aachen",
        alternateName: [
          "Fußpflege Hausbesuch Aachen",
          "Mobile Fußpflege zu Hause",
          "Fußpflege Bergen",
        ],
        description:
          "Professionelle mobile Fußpflege direkt bei Ihnen zu Hause in Aachen und Umgebung. Alle Behandlungen werden nach höchsten Hygienestandards durchgeführt. Über 11 Jahre Erfahrung, zertifizierte Fachfußpflegerin, kostenlose Anfahrt in Aachen.",
        provider: {
          "@id": "https://fusspflegebergen.de/#business",
        },
        areaServed: [
          {
            "@type": "City",
            name: "Aachen",
            alternateName: ["AC", "Aix-la-Chapelle"],
          },
          {
            "@type": "City",
            name: "Herzogenrath",
          },
          {
            "@type": "City",
            name: "Würselen",
          },
          {
            "@type": "City",
            name: "Alsdorf",
          },
          {
            "@type": "City",
            name: "Stolberg",
          },
        ],
        serviceType: "Mobile Fußpflege",
        category: "Gesundheitsdienstleistung",
        audience: {
          "@type": "Audience",
          name: "Senioren, Menschen mit eingeschränkter Mobilität, Berufstätige",
        },
        hasOfferCatalog: {
          "@id": "https://fusspflegebergen.de/#business",
        },
      };

      // FAQ Schema erweitert
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Wer kann mobile Fußpflege in Aachen in Anspruch nehmen?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Mobile Fußpflege in Aachen ist für jeden geeignet, besonders aber für Senioren, Menschen mit eingeschränkter Mobilität, Berufstätige mit wenig Zeit und alle, die eine entspannte Behandlung in gewohnter Umgebung bevorzugen. Diabetiker bitte ich, sich an spezialisierte Podologen zu wenden.",
            },
          },
          {
            "@type": "Question",
            name: "Was kostet mobile Fußpflege in Aachen und ist die Anfahrt kostenlos?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Die Anfahrt ist in Aachen komplett kostenlos. Die Behandlungskosten richten sich nach der gewünschten Leistung und dem Aufwand. Rufen Sie einfach an unter +49 170 1212677 für ein unverbindliches Beratungsgespräch.",
            },
          },
          {
            "@type": "Question",
            name: "Welche Stadtteile in Aachen werden für mobile Fußpflege bedient?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ich biete mobile Fußpflege in ganz Aachen an, einschließlich aller Stadtteile wie Innenstadt, Brand, Kornelimünster, Richterich, Laurensberg und viele mehr. Auch Herzogenrath, Würselen, Alsdorf und Stolberg gehören zu meinem Einzugsgebiet.",
            },
          },
          {
            "@type": "Question",
            name: "Wie lange dauert ein Termin für mobile Fußpflege?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ein Termin für mobile Fußpflege dauert in der Regel 45-60 Minuten, je nach Behandlungsumfang. Ich nehme mir ausreichend Zeit für eine gründliche und entspannte Behandlung.",
            },
          },
          {
            "@type": "Question",
            name: "Was muss ich für den Hausbesuch der mobilen Fußpflege vorbereiten?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sie müssen nichts Besonderes vorbereiten. Ich bringe alle notwendigen Instrumente, Desinfektionsmittel und Pflegeprodukte mit. Wir benötigen lediglich etwas Platz und ein frisches Frotteehandtuch.",
            },
          },
        ],
      };

      // WebSite Schema für bessere Sitelinks
      const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://fusspflegebergen.de/#website",
        name: "Mobile Fußpflege Regina Bergen Aachen",
        alternateName: [
          "Fußpflege Bergen",
          "Mobile Fußpflege Aachen",
          "Fußpflege Hausbesuch Aachen",
        ],
        description:
          "Professionelle mobile Fußpflege in Aachen - Regina Bergen kommt zu Ihnen nach Hause. Über 11 Jahre Erfahrung, zertifizierte Fachfußpflegerin.",
        url: "https://fusspflegebergen.de",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://fusspflegebergen.de/?search={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
        publisher: {
          "@id": "https://fusspflegebergen.de/#business",
        },
        inLanguage: "de-DE",
        copyrightYear: "2024",
        keywords:
          "mobile fußpflege aachen, fußpflege hausbesuch, podologie aachen, fußpflege zu hause, nagelpflege aachen",
      };

      // BreadcrumbList Schema
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://fusspflegebergen.de",
          },
        ],
      };

      // Bestehende Schema-Tags entfernen
      const existingSchemas = document.querySelectorAll(
        'script[type="application/ld+json"]'
      );
      existingSchemas.forEach((schema) => {
        if (schema.textContent?.includes('"@context": "https://schema.org"')) {
          schema.remove();
        }
      });

      // Neue Schema-Tags hinzufügen
      const schemas = [
        localBusinessSchema,
        personSchema,
        serviceSchema,
        faqSchema,
        websiteSchema,
        breadcrumbSchema,
      ];

      schemas.forEach((schema) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });

      // Meta-Tags für verschiedene Seiten aktualisieren
      const updateMetaTag = (name: string, content: string) => {
        let meta =
          document.querySelector(`meta[name="${name}"]`) ||
          document.querySelector(`meta[property="${name}"]`);

        if (!meta) {
          meta = document.createElement("meta");
          if (name.startsWith("og:") || name.startsWith("twitter:")) {
            meta.setAttribute("property", name);
          } else {
            meta.setAttribute("name", name);
          }
          document.head.appendChild(meta);
        }
        meta.setAttribute("content", content);
      };

      // Seitenspezifische Metadaten mit erweiterten Keywords
      if (path === "/impressum") {
        document.title =
          "Impressum - Mobile Fußpflege Regina Bergen Aachen | Rechtliche Angaben";
        updateMetaTag(
          "description",
          "Impressum und rechtliche Angaben zur mobilen Fußpflege Regina Bergen in Aachen. Kontaktdaten, Geschäftsangaben und weitere Informationen zur Fußpflege-Praxis."
        );
        updateMetaTag(
          "keywords",
          "impressum, rechtliche angaben, mobile fußpflege aachen, regina bergen, kontaktdaten"
        );
      } else if (path === "/datenschutz") {
        document.title =
          "Datenschutz - Mobile Fußpflege Regina Bergen Aachen | Datenschutzerklärung";
        updateMetaTag(
          "description",
          "Datenschutzerklärung der mobilen Fußpflege Regina Bergen. Umfassende Informationen zum Umgang mit Ihren persönlichen Daten bei der Fußpflege-Behandlung."
        );
        updateMetaTag(
          "keywords",
          "datenschutz, datenschutzerklärung, mobile fußpflege aachen, regina bergen, dsgvo"
        );
      } else {
        document.title =
          "Mobile Fußpflege Aachen ✓ Regina Bergen ✓ Hausbesuch Fußpflege ✓ Kostenlose Anfahrt";
        updateMetaTag(
          "description",
          "🦶 Mobile Fußpflege in Aachen ✓ Über 11 Jahre Erfahrung ✓ Zertifizierte Fachfußpflegerin ✓ Kostenlose Anfahrt ✓ Hausbesuch ✓ Jetzt Termin vereinbaren: ☎️ +49 170 1212677"
        );
        updateMetaTag(
          "keywords",
          "mobile fußpflege aachen, fußpflege hausbesuch aachen, podologie aachen, fußpflege zu hause, nagelpflege aachen, hornhaut entfernen aachen, fußpflege senioren aachen, diabetiker fußpflege aachen, regina bergen, fachfußpflegerin aachen, mobile fußpflege herzogenrath, fußpflege würselen, fußpflege alsdorf, fußpflege stolberg, mobile podologie, fußpflege termine aachen, professionelle fußpflege, medizinische fußpflege aachen"
        );
      }

      // Erweiterte SEO Meta-Tags
      updateMetaTag(
        "robots",
        "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      );
      updateMetaTag(
        "googlebot",
        "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      );
      updateMetaTag("bingbot", "index, follow");
      updateMetaTag("language", "de-DE");
      updateMetaTag("content-language", "de-DE");
      updateMetaTag("geo.region", "DE-NW");
      updateMetaTag("geo.placename", "Aachen");
      updateMetaTag("geo.position", "50.7753;6.0839");
      updateMetaTag("ICBM", "50.7753, 6.0839");
      updateMetaTag("distribution", "global");
      updateMetaTag("rating", "general");
      updateMetaTag("revisit-after", "7 days");

      // Lokale SEO Meta-Tags
      updateMetaTag("geo.locality", "Aachen");
      updateMetaTag("geo.region", "Nordrhein-Westfalen");
      updateMetaTag("geo.country", "Deutschland");

      // Business-spezifische Meta-Tags
      updateMetaTag(
        "business:contact_data:street_address",
        "Zum Kirschbäumchen 24"
      );
      updateMetaTag("business:contact_data:locality", "Aachen");
      updateMetaTag("business:contact_data:postal_code", "52070");
      updateMetaTag("business:contact_data:country_name", "Deutschland");
      updateMetaTag("business:contact_data:phone_number", "+491701212677");
      updateMetaTag("business:contact_data:email", "info@fusspflegebergen.de");

      // Open Graph erweitert
      updateMetaTag(
        "og:title",
        "Mobile Fußpflege Aachen ✓ Regina Bergen ✓ Hausbesuch Fußpflege"
      );
      updateMetaTag(
        "og:description",
        "🦶 Mobile Fußpflege in Aachen ✓ Über 11 Jahre Erfahrung ✓ Zertifizierte Fachfußpflegerin ✓ Kostenlose Anfahrt ✓ Jetzt Termin: ☎️ +49 170 1212677"
      );
      updateMetaTag("og:type", "website");
      updateMetaTag("og:locale", "de_DE");
      updateMetaTag("og:site_name", "Mobile Fußpflege Regina Bergen Aachen");
      updateMetaTag(
        "og:image",
        "https://fusspflegebergen.de/profile-picture.webp"
      );
      updateMetaTag("og:image:width", "1200");
      updateMetaTag("og:image:height", "630");
      updateMetaTag(
        "og:image:alt",
        "Regina Bergen - Fachfußpflegerin für mobile Fußpflege in Aachen"
      );
      updateMetaTag("og:url", `https://fusspflegebergen.de${path}`);

      // Twitter Card erweitert
      updateMetaTag("twitter:card", "summary_large_image");
      updateMetaTag(
        "twitter:title",
        "Mobile Fußpflege Aachen ✓ Regina Bergen ✓ Hausbesuch"
      );
      updateMetaTag(
        "twitter:description",
        "🦶 Mobile Fußpflege in Aachen ✓ Über 11 Jahre Erfahrung ✓ Zertifizierte Fachfußpflegerin ✓ Kostenlose Anfahrt"
      );
      updateMetaTag(
        "twitter:image",
        "https://fusspflegebergen.de/profile-picture.webp"
      );
      updateMetaTag(
        "twitter:image:alt",
        "Regina Bergen - Mobile Fußpflege Aachen"
      );
      updateMetaTag("twitter:site", "@fusspflegebergen");
      updateMetaTag("twitter:creator", "@reginabergen");

      // Additional SEO Meta-Tags
      updateMetaTag("theme-color", "#3B82F6");
      updateMetaTag("msapplication-TileColor", "#3B82F6");
      updateMetaTag("application-name", "Mobile Fußpflege Regina Bergen");
      updateMetaTag("apple-mobile-web-app-title", "Fußpflege Bergen");
      updateMetaTag("apple-mobile-web-app-capable", "yes");
      updateMetaTag("apple-mobile-web-app-status-bar-style", "default");
      updateMetaTag("format-detection", "telephone=yes");

      // Canonical URL
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", `https://fusspflegebergen.de${path}`);

      // Alternate language tags
      let alternateDe = document.querySelector(
        'link[rel="alternate"][hreflang="de"]'
      );
      if (!alternateDe) {
        alternateDe = document.createElement("link");
        alternateDe.setAttribute("rel", "alternate");
        alternateDe.setAttribute("hreflang", "de");
        document.head.appendChild(alternateDe);
      }
      alternateDe.setAttribute("href", `https://fusspflegebergen.de${path}`);

      let alternateXDefault = document.querySelector(
        'link[rel="alternate"][hreflang="x-default"]'
      );
      if (!alternateXDefault) {
        alternateXDefault = document.createElement("link");
        alternateXDefault.setAttribute("rel", "alternate");
        alternateXDefault.setAttribute("hreflang", "x-default");
        document.head.appendChild(alternateXDefault);
      }
      alternateXDefault.setAttribute(
        "href",
        `https://fusspflegebergen.de${path}`
      );

      // Preconnect für Performance
      const preconnectDomains = [
        "https://static.elfsight.com",
        "https://fonts.googleapis.com",
        "https://fonts.gstatic.com",
        "https://www.google.com",
        "https://www.googletagmanager.com",
      ];

      preconnectDomains.forEach((domain) => {
        let preconnect = document.querySelector(
          `link[rel="preconnect"][href="${domain}"]`
        );
        if (!preconnect) {
          preconnect = document.createElement("link");
          preconnect.setAttribute("rel", "preconnect");
          preconnect.setAttribute("href", domain);
          document.head.appendChild(preconnect);
        }
      });

      // DNS-Prefetch für weitere Performance-Optimierung
      const dnsPrefetchDomains = [
        "https://www.google-analytics.com",
        "https://maps.googleapis.com",
      ];

      dnsPrefetchDomains.forEach((domain) => {
        let dnsPrefetch = document.querySelector(
          `link[rel="dns-prefetch"][href="${domain}"]`
        );
        if (!dnsPrefetch) {
          dnsPrefetch = document.createElement("link");
          dnsPrefetch.setAttribute("rel", "dns-prefetch");
          dnsPrefetch.setAttribute("href", domain);
          document.head.appendChild(dnsPrefetch);
        }
      });
    };

    updateMetadata();
  }, [location.pathname]);

  return <>{children}</>;
};
