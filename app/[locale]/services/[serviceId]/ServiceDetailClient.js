"use client";
import { Link } from "@/i18n/navigation";
import { ArrowBigRight, Star, CheckCircle } from "lucide-react";
import ServiceImages from "@/components/ServiceImages";
import { motion } from "framer-motion";

export default function ServiceDetailClient({ service, otherServices, locale }) {
  return (
    <main className="min-h-screen pt-20">
      {/* Main Service Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-white/5 to-white/5"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ServiceImages 
                mainImage={service.image} 
                additionalImages={service.additionalImages} 
              />
            </motion.div>

            {/* Right: Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-4xl font-bold text-white mb-4">{service.title[locale]}</h1>
                <p className="text-lg text-gray-300">{service.description[locale]}</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(service.rating) ? 'fill-current' : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-400">({service.reviews} reviews)</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {service.targetAudience[locale]}
                </span>
              </div>

              {/* Packages */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  {locale === 'fr' ? 'Choisir un forfait' : locale === 'ar' ? 'اختر الباقة' : 'Choose Package'}
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {service.packages.map((pkg, idx) => (
                    <button key={idx} className="border border-border/30 bg-foreground/50 rounded-lg p-3 text-center hover:border-primary/40 hover:bg-primary/5 transition-all duration-300">
                      <span className="font-semibold text-white text-sm">{pkg.name[locale]}</span>
                      <p className="text-xs text-gray-400 mt-1">{pkg.duration[locale]}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Add-ons */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  {locale === 'fr' ? 'Options' : locale === 'ar' ? 'إضافات' : 'Add-ons'}
                </label>
                <div className="flex gap-3 flex-wrap">
                  {service.addons[locale].map((addon, idx) => (
                    <button key={idx} className="border border-border/30 bg-foreground/50 rounded-lg px-4 py-2 text-sm text-gray-300 hover:border-primary/40 hover:bg-primary/5 hover:text-primary transition-all duration-300">
                      {addon}
                    </button>
                  ))}
                </div>
              </div>

              <Link href="https://wa.me/0669909179">
                <button className="group w-full bg-primary text-white font-bold mt-6 py-4 rounded-full shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                  <span className="relative z-10 flex items-center">
                    {locale === 'fr' ? 'Commencer maintenant' : locale === 'ar' ? 'ابدأ الآن' : 'Get Started Now'}
                    <ArrowBigRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <span className="from-primary via-primary/90 to-primary/80 absolute inset-0 z-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-full"></span>
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-foreground/50 backdrop-blur-sm rounded-2xl border border-border/30 p-8 shadow-xl"
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              {locale === 'fr' ? 'Points forts du service' : locale === 'ar' ? 'أبرز الخدمات' : 'Service Highlights'}
            </h2>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">
                {locale === 'fr' ? 'Fonctionnalités' : locale === 'ar' ? 'الميزات' : 'Features'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-foreground/30 border border-border/20">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">{feature.title[locale]}</h4>
                      <p className="text-sm text-gray-300">{feature.description[locale]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">
                {locale === 'fr' ? 'Comment ça marche' : locale === 'ar' ? 'كيف تعمل' : 'How It Works'}
              </h3>
              <div className="space-y-4">
                {service.process[locale].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <span className="bg-primary text-white font-bold px-3 py-1 rounded-full text-sm flex-shrink-0">{idx + 1}</span>
                    <p className="text-gray-300">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">
                {locale === 'fr' ? 'Avantages' : locale === 'ar' ? 'الفوائد' : 'Benefits'}
              </h3>
              <div className="space-y-3">
                {service.benefits[locale].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Services Section */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center text-white mb-12"
          >
            {locale === 'fr' ? 'Découvrir nos autres services' : locale === 'ar' ? 'استكشف الخدمات الأخرى' : 'Explore Other Services'}
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {otherServices.map((s, index) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl border border-border/30 bg-foreground/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:scale-[1.02] hover:shadow-xl"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img src={s.image} alt={s.title[locale]} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{s.title[locale]}</h3>
                  <p className="text-sm text-gray-300 mb-4 line-clamp-2">{s.description[locale]}</p>
                  <div className="flex justify-between items-center">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">{s.targetAudience[locale]}</span>
                    <Link href={`/services/${s.id}`} className="text-primary font-medium hover:text-primary/80 transition-colors">
                      {locale === 'fr' ? 'En savoir plus →' : locale === 'ar' ? 'المزيد →' : 'Learn More →'}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
