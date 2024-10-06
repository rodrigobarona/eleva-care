import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'; // Adjust the import path as necessary
import { Card, CardContent } from '@/components/ui/card'; // Adjust the import path as necessary
import Image from 'next/image';

import FadeInSection from '../ui/FadeInSection'; // Adjust the import path based on your types definition

// Define the type for team members
export type TeamMember = {
  name: string;
  role: string;
  image: string;
  quote: string;
  description?: string; // Add description as an optional property
  socialLinks?: {
    // Change socialLinks to an object with optional properties
    linkedin?: string;
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
};

type TeamSectionProps = {
  title: string;
  subtitle: string;
  description: string;
  members: TeamMember[]; // Assuming you have a TeamMember type defined
};

const TeamSection: React.FC<TeamSectionProps> = ({ title, subtitle, description, members }) => {
  return (
    <FadeInSection>
      <section id="team" className="w-full px-6 py-12 md:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <div className="mb-12">
            <h2 className="font-mono text-xs/5 font-semibold uppercase tracking-widest text-gray-500 data-[dark]:text-gray-400">
              {title}
            </h2>
            <h3 className="mt-2 text-pretty font-serif text-4xl font-light tracking-tighter text-[#0d6c70] data-[dark]:text-white sm:text-6xl">
              {subtitle}
            </h3>
          </div>
          <p className="mt-6 text-xl font-light text-[#576d69]">{description}</p>
          <div className="embla">
            <Carousel className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-4xl xl:max-w-5xl">
              <CarouselContent>
                {members.map((member, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="border-border bg-background">
                        <CardContent className="flex flex-col items-center p-6">
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={200}
                            height={200}
                            className="mb-4 rounded-full"
                          />
                          <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                          <p className="mb-4 text-muted-foreground">{member.role}</p>
                          <p className="text-center italic text-muted-foreground">
                            &ldquo;{member.quote}&rdquo;
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default TeamSection;
