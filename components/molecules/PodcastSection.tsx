"use client";

import { Button } from "@/components/ui/button";
import { Podcast } from "lucide-react"; // Ensure you import the Podcast icon
import Image from "next/image";
import Link from "next/link";
import FadeInSection from "../ui/FadeInSection";

type PodcastSectionProps = {
  t: {
    podcast: {
      title: string;
      description: string;
      cta: string;
    };
  };
};

const PodcastSection = ({ t }: PodcastSectionProps) => {
  return (
    <FadeInSection>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f0f8f8]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#0d6c70]">
                {t.podcast.title}
              </h2>
              <p className="text-[#576d69] md:text-lg">
                {t.podcast.description}
              </p>
              <Button
                className="bg-[#0d6c70] text-white hover:bg-[#0d6c70]/90"
                asChild
              >
                <Link
                  href="https://podcasters.spotify.com/pod/show/elevacare"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Podcast className="mr-2 h-4 w-4" />
                  {t.podcast.cta}
                </Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <Image
                src="/img/Elevating-Women-Health-Podcast.png"
                alt="Eleva Care Podcast"
                width={300}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default PodcastSection;
