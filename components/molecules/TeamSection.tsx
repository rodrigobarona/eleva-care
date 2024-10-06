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
type TeamMember = {
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
      <section id="team" className="w-full bg-[#f0f8f8] px-6 py-12 md:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-[#0d6c70] sm:text-4xl md:text-5xl">
              {title}
            </h2>
            <p className="mt-4 text-xl text-[#576d69]">{subtitle}</p>
          </div>
          <p className="mb-12 text-center text-xl text-[#576d69]">{description}</p>
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
