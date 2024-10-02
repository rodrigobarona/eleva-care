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

type HeroProps = {
  // eslint-disable-next-line
  t: any;
};

const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section
      className="grid-cols-full relative m-2 grid border-spacing-2 gap-y-0 overflow-hidden rounded-3xl border-red-500 bg-cover bg-center bg-no-repeat max-[480px]:bg-[length:auto_101.5%] max-[480px]:bg-[54.8%_center]"
      style={{
        backgroundImage:
          'url(https://image.mux.com/ZCCYPtpN3Aatp8DLw00ziOgKjHv02gMsST/thumbnail.webp?height=640&fit_mode=preserve&time=5)',
      }}
      data-component-name="hero"
    >
      <MuxPlayer
        style={{ height: '100%', maxWidth: '100%' }}
        playbackId="ZCCYPtpN3Aatp8DLw00ziOgKjHv02gMsST"
        poster="https://image.mux.com/ZCCYPtpN3Aatp8DLw00ziOgKjHv02gMsST/thumbnail.webp?height=640&fit_mode=preserve&time=5"
        stream-type="on-demand"
        loop
        autoPlay="muted"
        muted
        preload="auto"
        playsInline
        className="absolute inset-0 h-full w-full rounded-3xl object-cover ring-1 ring-inset ring-black"
      />

      <div className="relative px-6 lg:px-8">
        <div className="touch-device:min-h-[calc(100svh-var(--header-height))] gap-y-lg z-20 mx-auto flex h-[calc(100vh-50px)] max-w-2xl flex-col justify-end sm:min-h-min sm:pt-[165px] lg:max-w-7xl lg:justify-between">
          <div>
            <h1 className="font-display max-w-2xl text-balance text-5xl/[0.9] font-medium tracking-tight text-white sm:text-6xl/[0.8] md:text-8xl/[0.9]">
              {t.hero.title}
            </h1>
          </div>
          <div>
            <p className="mt-8 max-w-lg text-xl/7 font-medium text-white sm:text-2xl/8">
              {t.hero.subtitle}
            </p>
          </div>
          <div className="space-x-4">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
