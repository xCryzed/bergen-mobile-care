import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { StickyCallButton } from "@/components/StickyCallButton";

const Index = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-soft-blue-50 dark:from-gray-900 dark:to-gray-800">
            <Header />
            <main>
                <Hero />
                <About />
                <Services />
                <Benefits />
                <Testimonials />
                <FAQ />
                <Contact />
            </main>
            <Footer />
            <StickyCallButton />
        </div>
    );
};

export default Index;