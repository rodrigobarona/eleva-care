'use client';

import React from 'react'; // Add this line at the top of each file

import { Button } from '@/components/ui/button';
import { translations as en } from '../public/locales/en';
import { translations as pt } from '../public/locales/pt';
import { translations as es } from '../public/locales/es';

import ServiceSection from '@/components/molecules/Services';

import { Podcast, Linkedin, Instagram, Facebook, Twitter, BookOpen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import FadeInSection from '@/components/ui/FadeInSection';

import Header from '@/components/molecules/Header'; // Import the NavBar component
import Hero from '@/components/molecules/Hero'; // Import the Hero component
import ApproachSection from '@/components/molecules/ApproachSection'; // Import the new component
import MissionSection from '@/components/molecules/MissionSection'; // Import the new component
import TeamSection, { TeamMember } from '@/components/molecules/TeamSection'; // Corrected import statement

// Define the type for supported languages
type Language = 'en' | 'pt' | 'es';

const languageMap = {
  en: en,
  pt: pt,
  es: es,
};

export default function Home() {
  const [lang, setLang] = useState<Language>('en'); // Use the defined type
  const t = languageMap[lang]; // Now TypeScript knows lang is a valid key

  return (
    <div className="relative overflow-hidden">
      <Header t={t} setLang={(lang: Language) => setLang(lang)} />

      <main role="main" id="main" tabIndex={-1} className="focus-visible:outline-none">
        <Hero t={t} />

        <ServiceSection
          t={{
            ...t,
            services: {
              ...t.services,
              item: '',
              itemIndex: 0,
            },
          }}
        />

        <ApproachSection title={t.approach.title} items={t.approach.items} />

        <MissionSection
          title={t.mission.title}
          subtitle={t.mission.subtitle}
          description={t.mission.description}
          vision={t.mission.vision}
          cta={t.mission.cta}
          stats={t.mission.stats}
        />

        <TeamSection
          title={t.team.title}
          subtitle={t.team.subtitle}
          description={t.team.description}
          members={t.team.members.map((member: TeamMember) => ({
            ...member,
            description: member.description || '', // Provide a default value if missing
            socialLinks: member.socialLinks || undefined, // Ensure socialLinks is either an object or undefined
          }))}
        />

        <FadeInSection>
          <section className="lg-px-8 w-full bg-[#f0f8f8] px-6 py-12 md:py-24 lg:py-32">
            <div className="mx-auto max-w-2xl lg:max-w-7xl">
              <div className="grid items-center gap-6 lg:grid-cols-2">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter text-[#0d6c70] sm:text-4xl">
                    {t.podcast.title}
                  </h2>
                  <p className="text-[#576d69] md:text-lg">{t.podcast.description}</p>
                  <Button className="bg-[#0d6c70] text-white hover:bg-[#0d6c70]/90" asChild>
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
        <FadeInSection>
          <section className="w-full bg-white px-6 py-12 md:py-24 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-7xl">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tighter text-[#0d6c70] sm:text-4xl">
                  {t.newsletter.title}
                </h2>
                <p className="mb-8 text-[#576d69]">{t.newsletter.description}</p>
                <form
                  action="https://app.beehiiv.com/forms/YOUR_FORM_ID_HERE"
                  method="POST"
                  className="space-y-4"
                >
                  <div className="flex gap-2">
                    <Input
                      type="email"
                      name="email"
                      placeholder={t.newsletter.placeholder}
                      required
                      className="flex-grow"
                    />
                    <Button type="submit" className="bg-[#0d6c70] text-white hover:bg-[#0d6c70]/90">
                      {t.newsletter.cta}
                    </Button>
                  </div>
                  <p className="text-xs text-[#576d69]">{t.newsletter.privacy}</p>
                </form>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="w-full bg-[#f0f8f8] px-6 py-12 md:py-24 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-7xl">
              <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter text-[#0d6c70] sm:text-4xl">
                {t.social.title}
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="outline"
                  className="border-[#0d6c70] text-[#0d6c70] hover:bg-[#0d6c70] hover:text-white"
                  asChild
                >
                  <Link
                    href="https://www.linkedin.com/in/patimota/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    {t.social.linkedin}
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-[#0d6c70] text-[#0d6c70] hover:bg-[#0d6c70] hover:text-white"
                  asChild
                >
                  <Link
                    href="https://www.instagram.com/patricia_mota_pt_phd/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="mr-2 h-4 w-4" />
                    {t.social.instagram}
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-[#0d6c70] text-[#0d6c70] hover:bg-[#0d6c70] hover:text-white"
                  asChild
                >
                  <Link
                    href="https://facebook.com/eleva.care"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="mr-2 h-4 w-4" />
                    {t.social.facebook}
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-[#0d6c70] text-[#0d6c70] hover:bg-[#0d6c70] hover:text-white"
                  asChild
                >
                  <Link href="https://x.com/eleva.care" target="_blank" rel="noopener noreferrer">
                    <Twitter className="mr-2 h-4 w-4" />
                    {t.social.twitter}
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-[#0d6c70] text-[#0d6c70] hover:bg-[#0d6c70] hover:text-white"
                  asChild
                >
                  <Link
                    href="https://scholar.google.pt/citations?user=fNJsrScAAAAJ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BookOpen className="mr-2 h-4 w-4" />
                    {t.social.scholar}
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </FadeInSection>
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t border-[#0d6c70]/10 bg-white px-6 py-6 sm:flex-row lg:px-8">
        <p className="text-xs text-[#576d69]">{t.footer.copyright}</p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link className="text-xs text-[#576d69] underline-offset-4 hover:underline" href="#">
            {t.footer.terms}
          </Link>
          <Link className="text-xs text-[#576d69] underline-offset-4 hover:underline" href="#">
            {t.footer.privacy}
          </Link>
        </nav>
      </footer>
    </div>
  );
}
