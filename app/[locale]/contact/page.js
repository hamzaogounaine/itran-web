// app/[locale]/contact/page.tsx
import ContactUs from "@/components/mvpblocks/contact-us-1";
import { getTranslations } from "next-intl/server";

// Generate localized metadata
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "contact" });
  return {
    title: `${t("title")} ${t("us")}`,
    description: t("globeText"),
  };
}

export default async function ContactPage() {
  // Fetch a set of translations, including the description and info texts
  // const t = await getTranslations({ locale, namespace: "contact" });

  return (
    <>
    <h1>Contact Us</h1>
      <ContactUs />
    </>
  );
}
