declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GA_TRACKING_ID = "G-W17HS18Z55";

// Initialisiert Google Analytics
export const initializeGA = () => {
  // Google Analytics Script laden
  const script1 = document.createElement("script");
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  document.head.appendChild(script1);

  // Google Analytics konfigurieren
  const script2 = document.createElement("script");
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_TRACKING_ID}', {
      page_title: document.title,
      page_location: window.location.href,
    });
  `;
  document.head.appendChild(script2);

  console.log("Google Analytics initialized");
};

// Deaktiviert Google Analytics
export const disableGA = () => {
  window[`ga-disable-${GA_TRACKING_ID}`] = true;
  console.log("Google Analytics disabled");
};

// Aktiviert Google Analytics
export const enableGA = () => {
  window[`ga-disable-${GA_TRACKING_ID}`] = false;
  console.log("Google Analytics enabled");
};

// Prüft ob Google Analytics aktiviert ist
export const isGAEnabled = () => {
  return !window[`ga-disable-${GA_TRACKING_ID}`];
};

// Sendet ein Event an Google Analytics (nur wenn aktiviert)
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window.gtag !== "undefined" && isGAEnabled()) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Sendet eine Seitenansicht an Google Analytics (nur wenn aktiviert)
export const trackPageView = (url: string, title?: string) => {
  if (typeof window.gtag !== "undefined" && isGAEnabled()) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
      page_title: title || document.title,
    });
  }
};
