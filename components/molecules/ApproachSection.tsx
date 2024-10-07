import React from 'react';
import FadeInSection from '../ui/FadeInSection';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

type ApproachSectionProps = {
  title: string;
  items: string[];
};

const ApproachSection: React.FC<ApproachSectionProps> = ({ title, items }) => {
  return (
    <FadeInSection>
      <section
        id="approach"
        className="mx-2 mt-24 rounded-5xl bg-[linear-gradient(145deg,var(--tw-gradient-stops))] from-elevaHighlight-yellow from-[28%] via-elevaHighlight-red via-[70%] to-elevaHighlight-purple py-10 lg:mt-32 lg:bg-[linear-gradient(115deg,var(--tw-gradient-stops))] lg:pb-32 lg:pt-20"
      >
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <div className="grid grid-flow-row-dense grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="col-span-12 -mt-24 lg:col-span-5 lg:-mt-52">
              <div className="-m-4 aspect-[3/4] rounded-4xl bg-elevaNeutral-100/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-elevaNeutral-900/5 max-lg:mx-auto max-lg:max-w-xs lg:-m-10">
                <div className="rounded-4xl p-2 shadow-md shadow-elevaNeutral-900/5">
                  <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-elevaNeutral-900/10">
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
            </div>

            <div className="col-span-12 pl-6 lg:col-span-7 lg:pl-16">
              <div>
                <h2 className="text-pretty font-serif text-3xl font-light tracking-tighter text-elevaNeutral-100 data-[dark]:text-elevaNeutral-100 lg:text-6xl">
                  {title}
                </h2>
              </div>
              <ol className="mx-auto mt-6 list-none text-elevaNeutral-100 marker:text-[#40514e] lg:mt-8">
                {items.map((item, index) => (
                  <li
                    key={index}
                    className="flex flex-row items-start pr-4 sm:text-balance lg:items-center lg:pr-0"
                  >
                    <span className="flex w-5 pt-2 text-right font-serif text-xl italic lg:w-8 lg:pt-0 lg:text-5xl">
                      {index + 1}
                    </span>
                    <span className="ml-1 block py-2 text-base lg:ml-6 lg:py-6 lg:text-2xl">
                      <ReactMarkdown>{item}</ReactMarkdown>
                    </span>
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
