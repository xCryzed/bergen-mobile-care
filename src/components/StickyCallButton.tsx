import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export const StickyCallButton = () => {
  return (
    <div className="fixed bottom-24 right-6 z-50 md:hidden">
      <Button
        size="lg"
        className="w-16 h-16 rounded-full bg-soft-blue-600 hover:bg-soft-blue-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300"
        onClick={() => window.open("tel:+491701212677")}
      >
        <Phone className="w-6 h-6" />
      </Button>
    </div>
  );
};
