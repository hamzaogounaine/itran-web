"use client";
import { getServices } from "@/lib/services";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function ServicesPage({ params }) {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [locale, setLocale] = useState(null);
  const t = useTranslations("services");

  useEffect(() => {
    const loadData = async () => {
      try {
        const resolvedParams = await params;
        setLocale(resolvedParams.locale);
        
        const servicesData = await getServices();
        setServices(servicesData);
      } catch (error) {
        console.error('Error loading services data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [params]);

  if (loading) {
    return (
      <main className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-white/5 to-white/5"></div>
          <div className="bg-primary/5 absolute top-0 left-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-tl from-white via-white to-gray-200 bg-clip-text text-4xl tracking-tighter text-transparent sm:text-5xl md:text-6xl lg:text-7xl mb-6"
            >
              {t("hero.title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-300 text-xl max-w-3xl mx-auto"
            >
              {t("hero.description")}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl border border-border/30 bg-foreground/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:scale-[1.02] hover:shadow-xl"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title[locale]}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {service.title[locale]}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {service.description[locale]}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="flex text-primary">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(service.rating) ? 'fill-current' : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-400 text-sm">({service.reviews})</span>
                    </div>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                      {service.targetAudience[locale]}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-white">
                      {service.price}
                    </div>
                    <Link
                      href={`/services/${service.id}`}
                      className="text-primary font-medium hover:text-primary/80 transition-colors flex items-center gap-1 group/link"
                    >
                      {t("learnMore")}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white mb-4"
          >
            {t("cta.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-300 text-lg mb-8"
          >
            {t("cta.description")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="https://wa.me/0669909179"
              className="group inline-flex items-center px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center">
                {t("cta.button")}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="from-primary via-primary/90 to-primary/80 absolute inset-0 z-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-full"></span>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
