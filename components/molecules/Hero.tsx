import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import FadeInSection from "@/components/ui/FadeInSection";
import MuxPlayer from "@mux/mux-video-react"; // Change to MuxPlayer

type HeroProps = {
  t: any; // Adjust this type as needed
  setIsHalfPageModalOpen: (open: boolean) => void; // Function to control modal state
};

const Hero: React.FC<HeroProps> = ({ t, setIsHalfPageModalOpen }) => {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-[#e6f3f3] to-[#f0f8f8]">
      <MuxPlayer
        style={{ height: "100%", maxWidth: "100%" }}
        playbackId="spiirAKtzZ7TGB01MH8JSz8i101bjm2kU3"
        stream-type="on-demand"
        loop
        autoPlay="muted"
        muted
        preload="auto"
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-100 to-pink-100 opacity-60"></div>
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <FadeInSection>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
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
                <DialogContent className="sm:max-w-[425px]">
                  <iframe
                    src="https://patimota.typeform.com/to/XNQHJbgT?utm_source=eleva-care&utm_medium=website&utm_campaign=ongoing&utm_term=physical%2Btherapy&utm_content=temp_home_btn"
                    width="100%"
                    height="500px"
                    frameBorder="0"
                  ></iframe>
                </DialogContent>
              </Dialog>
              <Button
                variant="outline"
                className="border-[#0d6c70] text-[#0d6c70] hover:bg-[#0d6c70] hover:text-white"
                onClick={() => setIsHalfPageModalOpen(true)}
              >
                {t.hero.cta2}
              </Button>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
