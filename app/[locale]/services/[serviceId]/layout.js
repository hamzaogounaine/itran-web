import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }) {
  const { locale, serviceId } = await params;
  const t = await getTranslations({ locale, namespace: "services" });

  return {
    title: `${t("metadata.title")} - Service ${serviceId}`,
    description: t("metadata.description"),
  };
}

export default function ServiceDetailLayout({ children }) {
  return children;
}
