import { ServiceCard } from "@/components/services/ServiceCard";
import { SERVICES } from "@/lib/content";

export function ServicesGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
      {SERVICES.map((service, index) => (
        <ServiceCard
          key={service.index}
          service={service}
          detailed={detailed}
          delay={index * 0.05}
        />
      ))}
    </div>
  );
}
