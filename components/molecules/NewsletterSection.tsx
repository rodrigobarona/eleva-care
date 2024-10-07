import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import FadeInSection from '@/components/ui/FadeInSection';

interface NewsletterSectionProps {
  title: string;
  description: string;
  placeholder: string;
  cta: string;
  privacy: string;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({
  title,
  description,
  placeholder,
  cta,
  privacy,
}) => {
  return (
    <FadeInSection>
      <section className="w-full bg-elevaNeutral-100 px-6 py-12 md:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tighter text-elevaPrimary sm:text-4xl">
              {title}
            </h2>
            <p className="mb-8 text-elevaNeutral-900">{description}</p>
            <form
              action="https://app.beehiiv.com/forms/YOUR_FORM_ID_HERE"
              method="POST"
              className="space-y-4"
            >
              <div className="flex gap-2">
                <Input
                  type="email"
                  name="email"
                  placeholder={placeholder}
                  required
                  className="flex-grow"
                />
                <Button
                  type="submit"
                  className="bg-[#0d6c70] text-elevaNeutral-100 hover:bg-[#0d6c70]/90"
                >
                  {cta}
                </Button>
              </div>
              <p className="text-xs text-elevaNeutral-900">{privacy}</p>
            </form>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default NewsletterSection;
