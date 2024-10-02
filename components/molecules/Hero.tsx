import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogOverlay,
  DialogPortal,
} from '@/components/ui/dialog';
import FadeInSection from '@/components/ui/FadeInSection';
import MuxPlayer from '@mux/mux-video-react'; // Change to MuxPlayer

type HeroProps = {
  // eslint-disable-next-line
  t: any;
};

const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section
      className="grid-cols-full bg-section-dark-bg text-section-dark-text pt-hero-top after:h-3xl after:rounded-t-5xl after:shadow-hero-ab-card-edge relative grid gap-y-0 overflow-hidden bg-cover bg-center bg-no-repeat pb-0 after:relative after:inset-x-0 after:bottom-[-1px] after:mt-auto after:box-content after:bg-black max-[480px]:bg-[length:auto_101.5%] max-[480px]:bg-[54.8%_center]"
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
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-500 to-slate-100 opacity-60"></div>
      <div className="touch-device:min-h-[calc(100svh-var(--header-height))] gap-y-lg pt-4xl pb-3xl z-20 mx-auto flex h-[700px] max-w-2xl flex-col justify-between sm:min-h-min sm:justify-end sm:pt-[165px] lg:max-w-7xl lg:pt-[225px]">
        <FadeInSection>
          <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none">
            {t.hero.title}
          </h1>

          <div>
            <p className="text-white md:text-xl">{t.hero.subtitle}</p>
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
        </FadeInSection>
      </div>
    </section>
  );
};

export default Hero;
