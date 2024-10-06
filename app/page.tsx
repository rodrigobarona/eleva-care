'use client';

import React, { useState } from 'react'; // Add this line at the top of each file

import { translations as en } from '../public/locales/en';
import { translations as pt } from '../public/locales/pt';
import { translations as es } from '../public/locales/es';

import Header from '@/components/molecules/Header'; // Import the NavBar component
import Hero from '@/components/molecules/Hero'; // Import the Hero component
import ApproachSection from '@/components/molecules/ApproachSection'; // Import the new component
import MissionSection from '@/components/molecules/MissionSection'; // Import the new component
import TeamSection, { TeamMember } from '@/components/molecules/TeamSection';
import ServiceSection from '@/components/molecules/Services';
import PodcastSection from '@/components/molecules/PodcastSection'; // Corrected import statement
import NewsletterSection from '@/components/molecules/NewsletterSection';
import SocialSection from '@/components/molecules/SocialSection';
import Footer from '@/components/molecules/Footer';

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

        <PodcastSection
          title={t.podcast.title}
          description={t.podcast.description}
          cta={t.podcast.cta}
        />
        <NewsletterSection
          title={t.newsletter.title}
          description={t.newsletter.description}
          placeholder={t.newsletter.placeholder}
          cta={t.newsletter.cta}
          privacy={t.newsletter.privacy}
        />

        <SocialSection
          title={t.social.title}
          linkedin={t.social.linkedin}
          instagram={t.social.instagram}
          facebook={t.social.facebook}
          twitter={t.social.twitter}
          scholar={t.social.scholar}
        />
      </main>
      <Footer copyright={t.footer.copyright} terms={t.footer.terms} privacy={t.footer.privacy} />
    </div>
  );
}
