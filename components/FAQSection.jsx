"use client";
import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// Removed: import { motion } from "framer-motion";

const FAQSection = () => {
  const t = useTranslations("faq");
  // Assuming 'items' is an array in your translation file, e.g., "faq.items": [{ "q": "...", "a": "..." }, ...]
  // Note: t.raw() is a next-intl-specific method to fetch non-string data
  const faqs = t.raw("items"); 

  return (
    <section className="relative py-32 px-6">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-white/5 to-white/5"></div>
        <div className="bg-primary/5 absolute top-0 left-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Replaced motion.div with a standard div */}
        <div className="text-center mb-20"> 
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

        {/* Replaced motion.div with a standard div */}
        {/* The original 'animate-slide-up' class is kept if it provides CSS-based animation */}
        <div className="animate-slide-up"> 
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <div> 
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-foreground/50 backdrop-blur-sm rounded-xl border border-border/30 px-6 hover:border-primary/40 hover:shadow-xl transition-all duration-300"
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