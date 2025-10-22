import { getTranslations } from "next-intl/server";
import FAQSection from "@/components/FAQSection";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "faq" });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function FAQPage({ params }) {
  const { locale } = await params;

  return (
    <main className="min-h-screen pt-20">
      <FAQSection />
    </main>
  );
}
