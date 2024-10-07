import React from 'react';
import FadeInSection from '../ui/FadeInSection';
import Image from 'next/image';

type ApproachSectionProps = {
  title: string;
  items: string[];
};

const ApproachSection: React.FC<ApproachSectionProps> = ({ title, items }) => {
  return (
    <FadeInSection>
      <section
        id="approach"
        className="mx-2 rounded-t-4xl bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#16c6cc] from-[28%] to-[#11999e] px-6 py-10 sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))] lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <div className="grid grid-cols-2">
            <div className="-m-2 rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:max-w-xs">
              <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                  <Image
                    alt=""
                    src="/img/Three-Women-Posing-Photo.jpg"
                    width={1920}
                    height={1280}
                    className="aspect-[3/4] w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="max-lg:mt-16 lg:px-16">
              <div>
                <h2 className="mt-2 text-pretty font-serif text-4xl font-light tracking-tighter text-white data-[dark]:text-white sm:text-6xl">
                  {title}
                </h2>
              </div>
              <ol className="mx-auto max-w-3xl list-none space-y-6 text-white marker:text-[#40514e]">
                {items.map((item, index) => (
                  <li key={index} className="flex flex-row items-center">
                    <span className="flex w-8 text-right text-5xl">{index + 1}</span>
                    <span className="ml-6 block py-6 text-2xl">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default ApproachSection;
