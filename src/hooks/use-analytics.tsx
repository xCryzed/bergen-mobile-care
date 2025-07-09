import { useEffect } from "react";
import { initializeGA, disableGA, enableGA } from "@/lib/analytics";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export const useAnalytics = () => {
  useEffect(() => {
    const checkAnalyticsConsent = () => {
      const cookieConsent = localStorage.getItem("cookie-consent");

      if (cookieConsent) {
        const preferences: CookiePreferences = JSON.parse(cookieConsent);

        if (preferences.analytics) {
          // Analytics erlaubt - GA initialisieren
          initializeGA();
          enableGA();
        } else {
          // Analytics nicht erlaubt - GA deaktivieren
          disableGA();
        }
      } else {
        // Noch keine Einwilligung - GA deaktivieren
        disableGA();
      }
    };

    // Initial check
    checkAnalyticsConsent();

    // Listen for storage changes (wenn Cookie-Einstellungen geändert werden)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "cookie-consent") {
        checkAnalyticsConsent();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
};
