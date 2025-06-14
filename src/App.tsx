import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/use-theme";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Imprint from "@/pages/Imprint.tsx";
import Privacy from "@/pages/Privacy.tsx";
import { CookieBanner } from "@/components/CookieBanner.tsx";
import { SEOProvider } from "@/components/SEOProvier.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="bergen-mobile-care-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SEOProvider>
            <Routes>
              <Route path={"/"} element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="/impressum" element={<Imprint />} />
              <Route path="/datenschutz" element={<Privacy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </SEOProvider>
        </BrowserRouter>
        <CookieBanner />
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
