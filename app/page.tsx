import { translations as en } from "../public/locales/en";
import { translations as pt } from "../public/locales/pt";
import { translations as es } from "../public/locales/es";

import React from "react"; // Ensure React is imported
import NavBar from "@/components/molecules/NavBar"; // Import the NavBar component
import Hero from "@/components/molecules/Hero"; // Import the Hero component
import ServiceSection from "@/components/molecules/ServiceSection";
import ApproachSection from "@/components/molecules/ApproachSection";
import MissionSection from "@/components/molecules/MissionSection";
import TeamSection from "@/components/molecules/TeamSection";
import PodcastSection from "@/components/molecules/PodcastSection";
import NewsletterSection from "@/components/molecules/NewsletterSection";
import FollowUsSection from "@/components/molecules/FollowUsSection"; // Import the new FollowUsSection component
import Footer from "@/components/molecules/Footer"; // Import the new Footer component

const languageMap = {
  en: en,
  pt: pt,
  es: es,
};

export default function Home() {
  const t = languageMap["en"]; // Default to English or handle language selection in NavBar

  return (
    <div className="overflow-hidden">
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-[#e6f3f3]">
        <NavBar t={t} /> {/* Pass only the translation object */}
        <main className="flex-1 pt-16">
          <Hero t={t} />
          <ServiceSection t={t} />
          <ApproachSection t={t} />
          <MissionSection t={t} />
          <TeamSection t={t} />
          <PodcastSection t={t} />
          <NewsletterSection t={t} />
          <FollowUsSection t={t} />
          <Footer t={t} />
        </main>
      </div>
    </div>
  );
}
