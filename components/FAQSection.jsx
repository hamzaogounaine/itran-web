"use client";
import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// Removed: import { motion } from "framer-motion";

// Add CSS keyframes for a simple slide-in animation to your global CSS (e.g., globals.css):
/* @keyframes slide-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-in-up {
  animation: slide-in-up 0.6s ease-out forwards;
} 
*/

const FAQSection = () => {
  const t = useTranslations("faq");
  // Assuming 'items' is an array in your translation file
  const faqs = t.raw("items"); 

  return (
    <section className="relative py-32 px-6">
      {/* Background effects - Simplified for better mobile performance */}
  

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* 1. Header with CSS-only animation for a smooth entrance */}
        <div 
          className="text-center mb-20 animate-slide-in-up" 
          style={{ animationDuration: '0.6s' }}
        >
          <span className="text-primary font-semibold text-lg tracking-wide uppercase mb-4 block">
            FAQ
          </span>
          <h2 className="bg-gradient-to-tl from-white via-white to-gray-200 bg-clip-text text-4xl md:text-5xl lg:text-6xl font-bold text-transparent mb-6 leading-tight">
            {t("title").split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-primary">
              {t("title").split(" ").slice(-1)}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* 2. Accordion Container with an initial animation */}
        <div 
          className="animate-slide-in-up" 
          style={{ animationDuration: '0.6s', animationDelay: '0.2s' }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              // 3. Individual Accordion Item with staggered animation 
              // (Set a simple delay for staggered effect)
              <div 
                key={index} 
                className="animate-slide-in-up" 
                style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  // CRITICAL FIX: Removed backdrop-blur-sm for mobile performance.
                  // Used a slightly less transparent background for visual effect.
                  className="bg-foreground/80 rounded-xl border border-border/30 px-6 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-semibold text-white hover:text-primary py-6 [&>svg]:text-white hover:[&>svg]:text-primary">
                    {faq.q}
                  </AccordionTrigger>

                  <AccordionContent className="text-gray-300 leading-relaxed pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;