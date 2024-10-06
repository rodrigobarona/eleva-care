import React from 'react';
import { ChevronRight } from 'lucide-react';
import FadeInSection from '../ui/FadeInSection';

type ApproachSectionProps = {
  title: string;
  items: string[];
};

const ApproachSection: React.FC<ApproachSectionProps> = ({ title, items }) => {
  return (
    <FadeInSection>
      <section
        id="approach"
        className="md:py-22 mx-auto w-full bg-[#f0f8f8] px-6 py-10 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <h2 className="mx-auto mb-8 max-w-3xl text-left text-3xl font-bold tracking-tighter text-[#0d6c70] sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <ul className="mx-auto max-w-3xl list-inside list-disc text-[#576d69]">
            {items.map((item, index) => (
              <li key={index} className="mb-4 flex items-center text-2xl">
                <ChevronRight className="mr-2 h-4 w-4 text-[#1999e]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </FadeInSection>
  );
};

export default ApproachSection;
