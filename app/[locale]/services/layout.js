import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default function ServicesLayout({ children }) {
  return children;
}
