import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Star } from "lucide-react";

export const QuickActions = () => {
  const handleGoogleReview = () => {
    const googleReviewUrl = "https://g.page/r/CcgHNP9uD2ZPEAE/review";
    window.open(googleReviewUrl, "_blank");
  };

  return (
    <div className="grid gap-4">
      <Button
        size="lg"
        className="w-full bg-soft-blue-600 hover:bg-soft-blue-700 dark:bg-soft-blue-600 dark:hover:bg-soft-blue-700 text-white py-4 rounded-xl font-semibold text-lg shadow-lg"
        onClick={() => window.open("tel:+491701212677")}
      >
        <Phone className="w-5 h-5 mr-3" />
        Jetzt anrufen: +49 170 1212677
      </Button>

      <Button
        size="lg"
        variant="outline"
        className="w-full border-2 border-sage-600 dark:border-sage-400 text-sage-600 dark:text-sage-400 hover:bg-sage-600 hover:text-white dark:hover:bg-sage-600 dark:hover:text-white py-4 rounded-xl font-semibold text-lg"
        onClick={() => window.open("https://wa.me/491701212677", "_blank")}
      >
        <MessageCircle className="w-5 h-5 mr-3" />
        WhatsApp Nachricht
      </Button>

      <Button
        size="lg"
        variant="outline"
        className="w-full border-2 border-yellow-500 dark:border-yellow-400 text-yellow-600 dark:text-yellow-400 hover:bg-yellow-500 hover:text-white dark:hover:bg-yellow-500 dark:hover:text-white py-4 rounded-xl font-semibold text-lg"
        onClick={handleGoogleReview}
      >
        <Star className="w-5 h-5 mr-3" />
        Google Bewertung abgeben
      </Button>
    </div>
  );
};
