import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogOverlay,
  DialogPortal,
} from '@/components/ui/dialog';
import MuxPlayer from '@mux/mux-video-react'; // Change to MuxPlayer
import ReactMarkdown from 'react-markdown';
import { ClipboardList } from 'lucide-react';

type HeroProps = {
  // eslint-disable-next-line
  t: any;
};

const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section
      className="lg:rounded-4xl relative m-2 overflow-hidden rounded-2xl bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#11999e] from-[28%] to-[#40514e]"
      data-component-name="hero"
    >
      <MuxPlayer
        style={{ height: '100%', width: '100%' }}
        playbackId="ZCCYPtpN3Aatp8DLw00ziOgKjHv02gMsST"
        poster="https://image.mux.com/ZCCYPtpN3Aatp8DLw00ziOgKjHv02gMsST/thumbnail.webp?height=1080&fit_mode=preserve&time=5"
        stream-type="on-demand"
        loop
        autoPlay="muted"
        muted
        preload="auto"
        playsInline
        className="lg:rounded-4xl absolute rounded-2xl object-cover"
      />

      <div className="relative px-4 lg:px-6">
        <div className="z-20 mx-auto flex max-w-2xl flex-col justify-end pt-44 lg:max-w-7xl lg:justify-between lg:pt-72">
          <div>
            <h1 className="max-w-3xl text-balance font-serif text-5xl/[0.9] font-light tracking-tight text-white lg:text-8xl/[.9]">
              <ReactMarkdown>{t.hero.title}</ReactMarkdown>
            </h1>
          </div>
          <div>
            <p className="mb-14 mt-8 max-w-md font-sans text-xl/6 font-light text-white lg:mb-8 lg:mt-16 lg:text-2xl/7">
              {t.hero.subtitle}
            </p>
          </div>
          <div className="flex flex-col justify-between lg:mb-20 lg:flex-row">
            <div className="items-center gap-x-4 sm:flex">
              <div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-full border border-transparent bg-white px-8 py-[1.3rem] text-base font-semibold text-neutral-950 shadow-md hover:bg-white/70 lg:w-min lg:py-6 lg:text-lg lg:font-bold"
                      data-mode="dark"
                    >
                      {t.hero.cta2}
                    </Button>
                  </DialogTrigger>
                  <DialogPortal>
                    <DialogOverlay className="bg-green-500/20">
                      <DialogContent className="h-screen w-screen">
                        <iframe
                          src="https://cal.com/patimota/consulta-de-fisioterapia"
                          width="100%"
                          height="100%"
                          frameBorder="0"
                        ></iframe>
                      </DialogContent>
                    </DialogOverlay>
                  </DialogPortal>
                </Dialog>
              </div>
              <div className="mt-2 text-center text-xs font-normal text-white lg:mt-0 lg:text-left lg:text-sm/[1.3] lg:font-medium">
                {t.hero.cta2Help} <br className="hidden sm:inline" />
                {t.hero.cta2Help2}
              </div>
            </div>
            <div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="mb-6 mt-8 inline-flex items-center justify-center whitespace-nowrap rounded-full border border-transparent bg-white/30 p-5 text-sm font-medium text-neutral-950 shadow-sm hover:bg-white/30 lg:my-0 lg:bg-transparent lg:p-6 lg:text-white lg:shadow-none">
                    <ClipboardList className="mr-2 h-5 w-5" />
                    {t.hero.cta1}
                  </Button>
                </DialogTrigger>
                <DialogPortal>
                  <DialogOverlay className="bg-green-500/20">
                    <DialogContent className="h-screen w-screen">
                      <iframe
                        src="https://patimota.typeform.com/to/XNQHJbgT?utm_source=eleva-care&utm_medium=website&utm_campaign=ongoing&utm_term=physical%2Btherapy&utm_content=temp_home_btn"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                      ></iframe>
                    </DialogContent>
                  </DialogOverlay>
                </DialogPortal>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
