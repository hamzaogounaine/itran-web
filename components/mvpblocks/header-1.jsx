"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, Sparkles, Globe } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Header1() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("EN");
  const { theme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations('header');

  const languages = [
    { code: "en", label: t('language.english'), flag: "🇬🇧", display: "EN" },
    { code: "fr", label: t('language.french'), flag: "🇫🇷", display: "FR" },
    { code: "ar", label: t('language.arabic'), flag: "🇲🇦", display: "AR" },
  ];

  // Navigation items with translations
  const navItems = [
    { name: t('nav.home'), href: "/" },
    { name: t('nav.features'), href: "/features" },
    { name: t('nav.services'), href: "/services" },
    {
      name: t('nav.products'),
      href: "/products",
      hasDropdown: true,
      dropdownItems: [
        { 
          name: t('products.analytics.name'), 
          href: "/analytics", 
          description: t('products.analytics.description')
        },
        { 
          name: t('products.dashboard.name'), 
          href: "/dashboard", 
          description: t('products.dashboard.description')
        },
        { 
          name: t('products.reports.name'), 
          href: "/reports", 
          description: t('products.reports.description')
        },
      ],
    },
    { name: t('nav.pricing'), href: "/pricing" },
    { name: t('nav.about'), href: "/about" },
  ];

  // Detect current locale from pathname
  useEffect(() => {
    const locale = pathname.split('/')[1];
    const currentLanguage = languages.find(lang => lang.code === locale);
    if (currentLanguage) {
      setCurrentLang(currentLanguage.display);
    }
  }, [pathname]);

  function handleLocaleChange(newLocale) {
    const newPathname = pathname.replace(/^\/(en|fr|ar)/, `/${newLocale}`);
    router.push(newPathname);
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? ' backdrop-blur-lg border-b border-white/10'
          : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link prefetch={false} href="/" className="flex items-center space-x-3">
              <Image src={'/logo-trans.png'} width={50} height={50} alt="itran web" />
              <span className="text-white text-2xl">Itran Web</span>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden items-center space-x-2 lg:flex">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  prefetch={false}
                  href={item.href}
                  className="group relative flex items-center space-x-1 px-4 py-2 font-medium text-white/90 transition-all duration-300 hover:text-white"
                >
                  <span className="relative z-10">{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`relative z-10 h-4 w-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                  {/* Hover background effect */}
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-white/10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  {/* Bottom accent line */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 h-0.5 w-0 "
                    whileHover={{ width: '80%', x: '-50%' }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>

                {item.hasDropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 w-72 overflow-hidden rounded-2xl border border-white/10 bg-black/95 shadow-2xl backdrop-blur-xl"
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                      >
                        <div className="p-2">
                          {item.dropdownItems?.map((dropdownItem, index) => (
                            <motion.div
                              key={dropdownItem.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05, duration: 0.2 }}
                            >
                              <Link
                                prefetch={false}
                                href={dropdownItem.href}
                                className="group relative block overflow-hidden rounded-xl px-4 py-3 transition-all duration-300 hover:bg-white/5"
                              >
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                  layoutId={`dropdown-hover-${dropdownItem.name}`}
                                />
                                <div className="relative flex items-start justify-between">
                                  <div>
                                    <div className="font-semibold text-white transition-colors duration-300 group-hover:text-[var(--primary)]">
                                      {dropdownItem.name}
                                    </div>
                                    {dropdownItem.description && (
                                      <div className="mt-1 text-sm text-white/60">{dropdownItem.description}</div>
                                    )}
                                  </div>
                                  <ArrowRight className="h-4 w-4 text-white/40 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 group-hover:text-[var(--primary)]" />
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center space-x-4 lg:flex">
            {/* Language Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsLangDropdownOpen(true)}
              onMouseLeave={() => setIsLangDropdownOpen(false)}
            >
              <motion.button
                className="group relative flex items-center space-x-2 rounded-lg px-3 py-2 text-white/90 transition-all duration-300 hover:text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe className="h-4 w-4" />
                <span className="font-medium">{currentLang}</span>
                <ChevronDown
                  className={`h-3 w-3 transition-transform duration-300 ${
                    isLangDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
                <motion.div
                  className="absolute inset-0 rounded-lg bg-white/10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>

              <AnimatePresence>
                {isLangDropdownOpen && (
                  <motion.div
                    className="absolute top-full right-0 mt-2 w-48 overflow-hidden rounded-xl border border-white/10 bg-black/95 shadow-2xl backdrop-blur-xl"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <div className="p-2">
                      {languages.map((lang, index) => (
                        <motion.button
                          key={lang.code}
                          onClick={() => {
                            setCurrentLang(lang.display);
                            handleLocaleChange(lang.code);
                            setIsLangDropdownOpen(false);
                          }}
                          className={`group relative block w-full overflow-hidden rounded-lg px-4 py-3 text-left transition-all duration-300 hover:bg-white/5 ${
                            currentLang === lang.display ? 'bg-white/5' : ''
                          }`}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05, duration: 0.2 }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          />
                          <div className="relative flex items-center space-x-3">
                            <span className="text-2xl">{lang.flag}</span>
                            <div>
                              <div className={`font-semibold transition-colors duration-300 ${
                                currentLang === lang.display ? 'text-[var(--primary)]' : 'text-white group-hover:text-[var(--primary)]'
                              }`}>
                                {lang.label}
                              </div>
                              <div className="text-xs text-white/60">{lang.display}</div>
                            </div>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                prefetch={false}
                href="/signup"
                className="inline-flex items-center space-x-2 rounded-full bg-[var(--primary)] px-6 py-2.5 font-medium text-white transition-all duration-200 hover:shadow-lg"
              >
                <span>{t('cta.getQuote')}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="rounded-lg p-2 transition-colors duration-200 hover:bg-muted lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}
              />

              {/* Mobile Menu Panel */}
              <motion.div
                className="fixed inset-x-0 top-20 mx-4 overflow-hidden rounded-2xl border border-white/10 bg-black/90 shadow-2xl backdrop-blur-xl lg:hidden"
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="max-h-[calc(100vh-120px)] overflow-y-auto p-6">
                  {/* Navigation Items */}
                  <div className="space-y-1">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      >
                        <Link
                          prefetch={false}
                          href={item.href}
                          className="group relative block overflow-hidden rounded-xl px-4 py-4 font-medium text-white transition-all duration-300 hover:bg-white/5"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <motion.div
                            className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            layoutId={`mobile-menu-hover-${item.name}`}
                          />
                          <span className="relative flex items-center justify-between">
                            {item.name}
                            <ArrowRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Divider */}
                  <motion.div
                    className="my-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  />

                  {/* Language Selector Mobile */}
                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55, duration: 0.3 }}
                  >
                    <div className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-white/50">
                      {t('language.label')}
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {languages.map((lang) => (
                        <motion.button
                          key={lang.code}
                          onClick={() => {
                            setCurrentLang(lang.display);
                            handleLocaleChange(lang.code);
                          }}
                          className={`group relative overflow-hidden rounded-xl px-4 py-3 text-left transition-all duration-300 ${
                            currentLang === lang.display
                              ? 'bg-gradient-to-r from-[var(--primary)] to-[var(--primary)]/80 shadow-lg shadow-[var(--primary)]/25'
                              : 'bg-white/5 hover:bg-white/10'
                          }`}
                          whileTap={{ scale: 0.95 }}
                        >
                          <div className="relative flex items-center space-x-2">
                            <span className="text-xl">{lang.flag}</span>
                            <div>
                              <div className={`text-sm font-semibold ${
                                currentLang === lang.display ? 'text-white' : 'text-white/90'
                              }`}>
                                {lang.label}
                              </div>
                              <div className={`text-xs ${
                                currentLang === lang.display ? 'text-white/80' : 'text-white/50'
                              }`}>
                                {lang.display}
                              </div>
                            </div>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                  >
                    <Link
                      prefetch={false}
                      href="/signup"
                      className="group relative block overflow-hidden rounded-xl bg-gradient-to-r from-[var(--primary)] to-[var(--primary)]/80 px-6 py-4 text-center font-semibold text-white shadow-lg shadow-[var(--primary)]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[var(--primary)]/40"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                      <span className="relative flex items-center justify-center space-x-2">
                        <span>{t('cta.getQuote')}</span>
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}