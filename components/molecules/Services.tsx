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
      description: string;
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
          <div className="mb-12">
            <h2 className="font-mono text-xs/5 font-semibold uppercase tracking-widest text-gray-500 data-[dark]:text-gray-400">
              {t.services.title}
            </h2>
            <h3 className="mt-2 text-pretty font-serif text-4xl font-light tracking-tighter text-[#0d6c70] data-[dark]:text-white sm:text-6xl">
              {t.services.subtitle}
            </h3>
          </div>
          <p className="mt-6 text-xl font-light text-[#576d69]">{t.services.description}</p>
          <div className="mt-12 grid gap-2 md:grid-cols-2 lg:grid-cols-3">
            {t.services.items.map(
              (
                service: ServiceItem,
                index, // Specify the type here
              ) => (
                <Card
                  key={index}
                  className="overflow-hidden border-[#0d6c70]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-72 shrink-0">
                    <div className="absolute w-full object-cover">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={300}
                        height={450}
                        className="w-full object-cover"
                      />
                    </div>
                  </div>
                  <CardContent className="flex flex-col justify-between p-6 pt-2">
                    <div className="flex flex-col">
                      <div className="mb-4 flex items-center">
                        {service.icon}
                        <h3 className="ml-2 font-serif text-2xl font-normal text-[#0d6c70]">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-[#576d69]">{service.description}</p>
                    </div>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Learn more</AccordionTrigger>
                        <AccordionContent>
                          <ul className="mt-4 list-inside list-disc text-[#576d69]">
                            {service.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start pb-2 text-base">
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
