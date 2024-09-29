import { Card, CardContent } from "@/components/ui/card"; // Ensure you import Card components
import Image from "next/image";
import FadeInSection from "@/components/ui/FadeInSection"; // Ensure FadeInSection is imported

// Define the type for service items
type ServiceItem = {
  image: string;
  title: string;
  description: string;
  icon: JSX.Element; // Adjust type as necessary
};

const ServiceSection = ({
  t,
}: {
  t: { services: { title: string; subtitle: string; items: ServiceItem[] } };
}) => {
  return (
    <FadeInSection>
      <section
        id="services"
        className="w-full py-12 md:py-24 lg:py-32 bg-white"
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-4 text-[#0d6c70]">
            {t.services.title}
          </h2>
          <p className="text-xl text-center mb-8 text-[#576d69]">
            {t.services.subtitle}
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.services.items.map(
              (
                service: ServiceItem,
                index: number // Specify the type here
              ) => (
                <Card
                  key={index}
                  className="bg-white border-[#0d6c70]/10 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {service.icon}
                      <h3 className="text-xl font-bold ml-4 text-[#0d6c70]">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-[#576d69]">{service.description}</p>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default ServiceSection;
