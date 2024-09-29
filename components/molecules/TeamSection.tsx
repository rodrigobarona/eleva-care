"use client";

import React from "react"; // Ensure React is imported
import FadeInSection from "@/components/ui/FadeInSection"; // Import FadeInSection
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"; // Import Carousel components
import { Card, CardContent } from "@/components/ui/card"; // Import Card components
import Image from "next/image"; // Import Image from Next.js

const TeamSection = ({
  t,
}: {
  t: {
    team: {
      title: string;
      subtitle: string;
      description: string;
      members: { image: string; name: string; role: string; quote: string }[];
    };
  };
}) => {
  return (
    <FadeInSection>
      <section
        id="team"
        className="w-full py-12 md:py-24 lg:py-32 bg-[#f0f8f8]"
      >
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0d6c70]">
              {t.team.title}
            </h2>
            <p className="mt-4 text-xl text-[#576d69]">{t.team.subtitle}</p>
          </div>
          <p className="text-center text-xl mb-12 text-[#576d69]">
            {t.team.description}
          </p>
          <div className="embla">
            <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-4xl xl:max-w-5xl mx-auto">
              <CarouselContent>
                {t.team.members.map((member, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card className="bg-background border-border">
                        <CardContent className="flex flex-col items-center p-6">
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={200}
                            height={200}
                            className="rounded-full mb-4"
                          />
                          <h3 className="text-xl font-bold text-primary">
                            {member.name}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {member.role}
                          </p>
                          <p className="text-center italic text-muted-foreground">
                            "{member.quote}"
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

export default TeamSection; // Export the TeamSection component
