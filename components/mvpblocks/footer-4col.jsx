"use client";
import {
  Dribbble,
  Facebook,
  Github,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/itranweb" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/itranweb" },
  // { icon: Twitter, label: "Twitter", href: "https://twitter.com/mvpblocks" },
  // { icon: Github, label: "GitHub", href: "https://github.com/mvpblocks" },
  // { icon: Dribbble, label: "Dribbble", href: "https://dribbble.com/mvpblocks" },
];

export default function Footer4Col() {
  const t = useTranslations("footer");

  // Rebuild link arrays using translations
  const aboutLinks = [
    { text: t("about.history"), href: "/company-history" },
    { text: t("about.team"), href: "/meet-the-team" },
    { text: t("about.handbook"), href: "/employee-handbook" },
    { text: t("about.careers"), href: "/careers" },
  ];

  const serviceLinks = [
    { text: t("services.webdev"), href: "/services/1" },
    { text: t("services.webdesign"), href: "/services/2" },
    { text: t("services.marketing"), href: "/services/3" },
    { text: t("services.googleads"), href: "/services/4" },
  ];

  const helpfulLinks = [
    { text: t("help.faqs"), href: "/faq" },
    { text: t("help.support"), href: "/support" },
    { text: t("help.liveChat"), href: "/live-chat", hasIndicator: true },
  ];

  const contactInfo = [
    { icon: Mail, text: t("contact.email") },
    { icon: Phone, text: t("contact.phone") },
    { icon: MapPin, text: t("contact.address"), isAddress: true },
  ];

  const companyName = t("company.name");

  return (
    <footer className="mt-16 w-full place-self-end rounded-t-xl">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          
          {/* Brand Column */}
          <div>
            <div className="text-primary flex justify-center gap-2 sm:justify-start">
              <Image
                src="/logo-trans.png"
                alt={companyName}
                className="h-8 w-8 rounded-full"
                width={32}
                height={32}
              />
              <span className="text-2xl font-semibold text-white">
                {companyName}
              </span>
            </div>

            <p className="text-gray-400 mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left">
              {t("company.description")}
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link
                    prefetch={false}
                    href={href}
                    className="text-gray-400 hover:text-primary transition-colors"
                    aria-label={label}
                  >
                    <Icon className="size-6" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">{t("sections.aboutUs")}</p>
              <ul className="mt-8 space-y-4 text-sm">
                {aboutLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a href={href} className="text-gray-400 hover:text-primary transition-colors">
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">{t("sections.ourServices")}</p>
              <ul className="mt-8 space-y-4 text-sm">
                {serviceLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a href={href} className="text-gray-400 hover:text-primary transition-colors">
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">{t("sections.helpfulLinks")}</p>
              <ul className="mt-8 space-y-4 text-sm">
                {helpfulLinks.map(({ text, href, hasIndicator }) => (
                  <li key={text}>
                    <a
                      href={href}
                      className={`${
                        hasIndicator
                          ? "group flex justify-center gap-1.5 sm:justify-start"
                          : "text-gray-400 hover:text-primary transition-colors"
                      }`}
                    >
                      <span className="text-gray-400 hover:text-primary transition-colors">
                        {text}
                      </span>
                      {hasIndicator && (
                        <span className="relative flex size-2">
                          <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                          <span className="bg-primary relative inline-flex size-2 rounded-full" />
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">{t("sections.contactUs")}</p>
              <ul className="mt-8 space-y-4 text-sm">
                {contactInfo.map(({ icon: Icon, text, isAddress }) => (
                  <li key={text}>
                    <a
                      className="flex items-center justify-center gap-1.5 sm:justify-start"
                      href="#"
                    >
                      <Icon className="text-primary size-5 shrink-0" />
                      {isAddress ? (
                        <address className="text-gray-400 -mt-0.5 flex-1 not-italic">
                          {text}
                        </address>
                      ) : (
                        <span className="text-gray-400 flex-1">{text}</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-border pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-gray-500 text-sm">
              <span className="block sm:inline">{t("copyright.rights")}</span>
            </p>
            <p className="text-gray-500 mt-4 text-sm sm:order-first sm:mt-0">
              {t.rich("copyright.notice", { name: companyName })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}