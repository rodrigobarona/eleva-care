import React from "react"; // Ensure React is imported
import { Button } from "@/components/ui/button"; // Import Button
import { Linkedin, Instagram, Facebook, Twitter, BookOpen } from "lucide-react"; // Import social icons
import Link from "next/link"; // Import Link from Next.js
import FadeInSection from "@/components/ui/FadeInSection"; // Import FadeInSection

const FollowUsSection = ({
  t,
}: {
  t: {
    social: {
      title: string;
      linkedin: string;
      instagram: string;
      facebook: string;
      twitter: string;
      scholar: string;
    };
  };
}) => {
  return (
    <FadeInSection>
      <section className="w-full py-12 md:py-24 bg-[#f0f8f8]">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8 text-[#0d6c70]">
            {t.social.title}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              className="text-[#0d6c70] border-[#0d6c70] hover:bg-[#0d6c70] hover:text-white"
              asChild
            >
              <Link
                href="https://www.linkedin.com/in/patimota/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                {t.social.linkedin}
              </Link>
            </Button>
            <Button
              variant="outline"
              className="text-[#0d6c70] border-[#0d6c70] hover:bg-[#0d6c70] hover:text-white"
              asChild
            >
              <Link
                href="https://www.instagram.com/patricia_mota_pt_phd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="mr-2 h-4 w-4" />
                {t.social.instagram}
              </Link>
            </Button>
            <Button
              variant="outline"
              className="text-[#0d6c70] border-[#0d6c70] hover:bg-[#0d6c70] hover:text-white"
              asChild
            >
              <Link
                href="https://facebook.com/eleva.care"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="mr-2 h-4 w-4" />
                {t.social.facebook}
              </Link>
            </Button>
            <Button
              variant="outline"
              className="text-[#0d6c70] border-[#0d6c70] hover:bg-[#0d6c70] hover:text-white"
              asChild
            >
              <Link
                href="https://x.com/eleva.care"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="mr-2 h-4 w-4" />
                {t.social.twitter}
              </Link>
            </Button>
            <Button
              variant="outline"
              className="text-[#0d6c70] border-[#0d6c70] hover:bg-[#0d6c70] hover:text-white"
              asChild
            >
              <Link
                href="https://scholar.google.pt/citations?user=fNJsrScAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BookOpen className="mr-2 h-4 w-4" />
                {t.social.scholar}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default FollowUsSection; // Export the FollowUsSection component
