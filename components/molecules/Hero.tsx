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

type HeroProps = {
  // eslint-disable-next-line
  t: any;
};

const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section
      className="rounded-4xl relative m-2 overflow-hidden bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#11999e] from-[28%] to-[#40514e]"
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
        className="rounded-4xl absolute object-cover"
      />

      <div className="relative px-6 lg:px-8">
        <div className="touch-device:min-h-[calc(100svh-var(--header-height))] gap-y-lg z-20 mx-auto flex max-w-2xl flex-col justify-end pt-96 sm:min-h-min lg:max-w-7xl lg:justify-between lg:pt-80">
          <div>
            <h1 className="max-w-3xl text-balance font-serif text-6xl/[0.8] font-light tracking-tight text-white md:text-8xl/[0.9] lg:text-8xl/[.9]">
              <ReactMarkdown>{t.hero.title}</ReactMarkdown>
            </h1>
          </div>
          <div>
            <p className="mb-8 mt-16 max-w-md font-sans text-2xl/8 font-light text-white lg:text-2xl/7">
              {t.hero.subtitle}
            </p>
          </div>
          <div className="mb-20 flex justify-between">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-[#0d6c70] text-white hover:bg-[#0d6c70]/90">
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
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-[#0d6c70] text-white hover:bg-[#0d6c70]/90">
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
    </section>
  );
};

export default Hero;
