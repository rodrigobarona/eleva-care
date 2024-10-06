import React from 'react';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import FadeInSection from '@/components/ui/FadeInSection';

import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { ChevronRight } from 'lucide-react';

// Define the type for service items
type ServiceItem = {
  image: string;
  title: string;
  description: string;
  icon: JSX.Element; // Adjust the type based on your icon component
  items: string[]; // Assuming items are strings, adjust if necessary
};

const ServiceSection: React.FC<{
  t: {
    services: {
      title: string;
      subtitle: string;
      items: ServiceItem[];
      item: string;
      itemIndex: number;
    };
  }; // Updated types
}> = ({ t }) => {
  return (
    <FadeInSection>
      <section id="services" className="w-full bg-white px-6 py-12 md:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <h2 className="mb-4 text-center font-serif text-3xl font-normal tracking-tighter text-[#0d6c70] sm:text-4xl md:text-5xl">
            {t.services.title}
          </h2>
          <div className="mb-8 text-center text-xl text-[#576d69]">
            <ReactMarkdown>{t.services.subtitle}</ReactMarkdown>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.services.items.map(
              (
                service: ServiceItem,
                index, // Specify the type here
              ) => (
                <Card
                  key={index}
                  className="overflow-hidden border-[#0d6c70]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={300}
                    height={450}
                    className="w-full object-cover"
                  />
                  <CardContent className="flex flex-col justify-between p-6">
                    <div className="flex flex-col">
                      <div className="mb-4 flex items-center">
                        {service.icon}
                        <h3 className="ml-2 text-xl font-bold text-[#0d6c70]">{service.title}</h3>
                      </div>
                      <p className="text-[#576d69]">{service.description}</p>
                    </div>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Learn more</AccordionTrigger>
                        <AccordionContent>
                          <ul className="mt-4 list-inside list-disc text-[#576d69]">
                            {service.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start pb-2">
                                <ChevronRight className="mr-2 h-4 w-4 text-[#1999e]" />
                                <ReactMarkdown>{item}</ReactMarkdown>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              ),
            )}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};
export default ServiceSection;