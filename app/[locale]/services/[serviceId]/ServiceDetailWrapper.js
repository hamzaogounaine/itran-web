import { notFound } from "next/navigation";
import { getServiceDetailsById, getServices } from "@/lib/services";
import ServiceDetailClient from "./ServiceDetailClient";

export default async function ServiceDetailWrapper({ params }) {
  const { serviceId, locale } = await params;

  const service = await getServiceDetailsById(serviceId);
  if (!service) return notFound();

  const services = await getServices();
  const otherServices = services.filter((s) => s.id.toString() !== serviceId);

  return (
    <ServiceDetailClient 
      service={service} 
      otherServices={otherServices} 
      locale={locale}
    />
  );
}
