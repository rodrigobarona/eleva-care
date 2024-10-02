import React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogOverlay,
  DialogPortal,
} from "@/components/ui/dialog";
import FadeInSection from "@/components/ui/FadeInSection";
import MuxPlayer from "@mux/mux-video-react"; // Change to MuxPlayer

type HeroProps = {
  // eslint-disable-next-line
  t: any;
};

const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#e6f3f3] to-[#f0f8f8] py-12 md:py-24 lg:py-32 xl:py-48">
      <MuxPlayer
        style={{ height: "100%", maxWidth: "100%" }}
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
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-100 to-pink-100 opacity-60"></div>
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <FadeInSection>
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none">
              {t.hero.title}
            </h1>
            <p className="mx-auto max-w-[700px] text-white md:text-xl">
              {t.hero.subtitle}
            </p>
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
      </div>
    </section>
  );
};

export default Hero;
