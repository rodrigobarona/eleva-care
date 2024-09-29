import React from "react"; // Ensure React is imported
import FadeInSection from "@/components/ui/FadeInSection"; // Import FadeInSection
import { Button } from "@/components/ui/button"; // Import Button
import { ChevronRight } from "lucide-react"; // Import ChevronRight icon

const MissionSection = ({
  t,
}: {
  t: {
    mission: {
      title: string;
      subtitle: string;
      description: string;
      vision: { title: string; description: string };
      beliefs: { title: string; items: string[] };
      stats: { value: string; label: string }[];
      cta: string;
    };
  };
}) => {
  return (
    <FadeInSection>
      <section id="mission" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0d6c70]">
              {t.mission.title}
            </h2>
            <p className="mt-4 text-xl text-[#576d69]">{t.mission.subtitle}</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div>
              <p className="text-xl mb-6 text-[#576d69]">
                {t.mission.description}
              </p>
              <h3 className="text-2xl font-bold mb-2 text-[#0d6c70]">
                {t.mission.vision.title}
              </h3>
              <p className="text-xl mb-6 text-[#576d69]">
                {t.mission.vision.description}
              </p>
              <div className="mb-6">
                <h4 className="text-xl font-bold mb-2 text-[#0d6c70]">
                  {t.mission.beliefs.title}
                </h4>
                <ul className="list-disc list-inside text-[#576d69]">
                  {t.mission.beliefs.items.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-[#1999e]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Button className="mt-4 bg-[#0d6c70] text-white hover:bg-[#0d6c70]/90">
                {t.mission.cta}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {t.mission.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-[#f0f8f8] p-6 rounded-lg text-center"
                >
                  <div className="text-3xl font-bold text-[#0d6c70]">
                    {stat.value}
                  </div>
                  <div className="text-[#576d69]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default MissionSection; // Export the MissionSection component
