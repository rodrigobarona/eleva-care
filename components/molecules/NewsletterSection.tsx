"use client";

import React from "react"; // Ensure React is imported
import { Button } from "@/components/ui/button"; // Import Button
import { Input } from "@/components/ui/input"; // Import Input
import FadeInSection from "@/components/ui/FadeInSection"; // Import FadeInSection

const NewsletterSection = ({
  t,
}: {
  t: {
    newsletter: {
      title: string;
      description: string;
      placeholder: string;
      cta: string;
      privacy: string;
    };
  };
}) => {
  return (
    <FadeInSection>
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#0d6c70] mb-4">
              {t.newsletter.title}
            </h2>
            <p className="text-[#576d69] mb-8">{t.newsletter.description}</p>
            <form
              action="https://app.beehiiv.com/forms/YOUR_FORM_ID_HERE"
              method="POST"
              className="space-y-4"
            >
              <div className="flex gap-2">
                <Input
                  type="email"
                  name="email"
                  placeholder={t.newsletter.placeholder}
                  required
                  className="flex-grow"
                />
                <Button
                  type="submit"
                  className="bg-[#0d6c70] text-white hover:bg-[#0d6c70]/90"
                >
                  {t.newsletter.cta}
                </Button>
              </div>
              <p className="text-xs text-[#576d69]">{t.newsletter.privacy}</p>
            </form>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default NewsletterSection; // Export the NewsletterSection component
