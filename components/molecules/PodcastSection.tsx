import React from 'react';
import { Button } from '@/components/ui/button';
import { Podcast } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import FadeInSection from '../ui/FadeInSection';

interface PodcastSectionProps {
  title: string;
  subtitle: string;
  description: string;
  cta: string;
}

const PodcastSection: React.FC<PodcastSectionProps> = ({ title, subtitle, description, cta }) => {
  return (
    <FadeInSection>
      <section className="mx-2 mt-40 rounded-5xl bg-[linear-gradient(145deg,var(--tw-gradient-stops))] from-elevaPrimary from-[28%] via-elevaPrimary-light via-[70%] to-elevaPrimary px-6 py-12 lg:bg-[linear-gradient(115deg,var(--tw-gradient-stops))] lg:pb-24 lg:pt-20">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <div className="flex flex-row-reverse items-center gap-4 lg:gap-16">
            <div className="-mt-24 w-2/5 flex-auto justify-end lg:-mt-40">
              <div className="-m-4 aspect-square rounded-xl bg-elevaNeutral-100/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-elevaNeutral-900/5 max-lg:mx-auto max-lg:max-w-xs lg:rounded-4xl">
                <div className="rounded-xl p-2 shadow-md shadow-elevaNeutral-900/5 lg:rounded-4xl">
                  <div className="overflow-hidden rounded-xl shadow-2xl outline outline-1 -outline-offset-1 outline-elevaNeutral-900/10 lg:rounded-3xl">
                    <Image
                      src="/img/Elevating-Women-Health-Podcast.png"
                      alt="Eleva Care Podcast"
                      width={1200}
                      height={1200}
                      className="aspect-square rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-3/5 flex-auto space-y-4">
              <div className="mb-6">
                <h2 className="font-mono text-xs/5 font-semibold uppercase tracking-widest text-elevaNeutral-100 data-[dark]:text-elevaNeutral-100/60">
                  {subtitle}
                </h2>
                <h3 className="mt-2 text-pretty font-serif text-4xl font-light tracking-tighter text-elevaNeutral-100 data-[dark]:text-elevaNeutral-100 sm:text-6xl">
                  {title}
                </h3>
              </div>
              <p className="mt-8 text-pretty text-base font-light text-elevaNeutral-100">
                {description}
              </p>
              <div className="pt-4">
                <Button
                  className="h-9 rounded-full bg-elevaHighlight-red p-6 text-elevaNeutral-100 shadow-none hover:bg-elevaHighlight-purple"
                  asChild
                >
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
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default PodcastSection;
