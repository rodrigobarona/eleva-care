import React from 'react';
import { Button } from '@/components/ui/button';
import { Podcast } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import FadeInSection from '../ui/FadeInSection';

interface PodcastSectionProps {
  title: string;
  description: string;
  cta: string;
}

const PodcastSection: React.FC<PodcastSectionProps> = ({ title, description, cta }) => {
  return (
    <FadeInSection>
      <section className="lg-px-8 w-full bg-[#f0f8f8] px-6 py-12 md:py-24 lg:py-32">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <div className="grid items-center gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter text-[#0d6c70] sm:text-4xl">
                {title}
              </h2>
              <p className="text-[#576d69] md:text-lg">{description}</p>
              <Button className="bg-[#0d6c70] text-white hover:bg-[#0d6c70]/90" asChild>
                <Link
                  href="https://podcasters.spotify.com/pod/show/elevacare"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Podcast className="mr-2 h-4 w-4" />
                  {cta}
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
