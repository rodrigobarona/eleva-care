import React from "react"; // Ensure React is imported
import FadeInSection from "@/components/ui/FadeInSection"; // Import FadeInSection

const ApproachSection = ({
  t,
}: {
  t: { approach: { title: string; description: string } };
}) => {
  return (
    <FadeInSection>
      <section
        id="approach"
        className="w-full py-12 md:py-24 lg:py-32 bg-[#f0f8f8]"
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#0d6c70]">
            {t.approach.title}
          </h2>
          <p className="text-xl text-center max-w-[800px] mx-auto text-[#576d69]">
            {t.approach.description}
          </p>
        </div>
      </section>
    </FadeInSection>
  );
};

export default ApproachSection; // Export the ApproachSection component
