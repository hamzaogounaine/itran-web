import { getServices } from "@/lib/services";

export async function generateStaticParams() {
  const services = await getServices();
  const { routing } = await import('@/i18n/routing');
  return routing.locales.flatMap((locale) =>
    services.map((service) => ({
      locale,
      serviceId: service.id.toString(),
    }))
  );
}
