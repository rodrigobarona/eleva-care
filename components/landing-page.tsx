"use client";

import { Button } from "@/components/ui/button";
import { translations as en } from "../public/locales/en";
import { translations as pt } from "../public/locales/pt-PT";
import { translations as es } from "../public/locales/es-ES";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  ChevronRight,
  Sparkles,
  Globe,
  ChevronDown,
  Podcast,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  BookOpen,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react"; // Ensure React is imported
import FadeInSection from "@/components/ui/FadeInSection"; // Update the import path
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Import the Carousel component

// Define the type for supported languages
type Language = "en" | "pt-PT" | "es-ES";

const languageMap = {
  en: en,
  "pt-PT": pt,
  "es-ES": es,
};

export default function LandingPage() {
  const [lang, setLang] = useState<Language>("en"); // Use the defined type
  const t = languageMap[lang]; // Now TypeScript knows lang is a valid key
  const [isHalfPageModalOpen, setIsHalfPageModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-[#e6f3f3]">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 fixed w-full z-50 border-b border-[#0d6c70]/10">
        <Link className="flex items-center justify-center" href="#">
          <Sparkles className="h-6 w-6 text-[#0d6c70]" />
          <span className="ml-2 text-2xl font-bold text-[#0d6c70]">
            Eleva Care
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link
            className="text-sm font-medium text-[#576d69] hover:text-[#0d6c70] transition-colors"
            href="#services"
          >
            {t.nav.services}
          </Link>
          <Link
            className="text-sm font-medium text-[#576d69] hover:text-[#0d6c70] transition-colors"
            href="#approach"
          >
            {t.nav.approach}
          </Link>
          <Link
            className="text-sm font-medium text-[#576d69] hover:text-[#0d6c70] transition-colors"
            href="#mission"
          >
            {t.nav.mission}
          </Link>
          <Link
            className="text-sm font-medium text-[#576d69] hover:text-[#0d6c70] transition-colors"
            href="#team"
          >
            {t.nav.team}
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="text-[#576d69] hover:text-[#0d6c70]"
              >
                <Globe className="h-5 w-5 mr-2" />
                {t.language}
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLang("en")}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLang("pt-PT")}>
                Português
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLang("es-ES")}>
                Español
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </header>
      <main className="flex-1 pt-16">
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-[#e6f3f3] to-[#f0f8f8]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <FadeInSection>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#0d6c70]">
                  {t.hero.title}
                </h1>
                <p className="mx-auto max-w-[700px] text-[#576d69] md:text-xl">
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
        {isHalfPageModalOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="bg-white w-full max-w-2xl h-1/2 rounded-t-lg overflow-hidden flex flex-col">
              <div className="flex justify-between items-center p-4 border-b border-[#0d6c70]/10">
                <h2 className="text-xl font-bold text-[#0d6c70]">
                  {t.hero.cta2}
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsHalfPageModalOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex-1 overflow-auto">
                <iframe
                  src="https://cal.com/patimota/consulta-de-fisioterapia"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                ></iframe>
              </div>
            </div>
          </div>
        )}
        <FadeInSection>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f0f8f8]">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#0d6c70]">
                    {t.podcast.title}
                  </h2>
                  <p className="text-[#576d69] md:text-lg">
                    {t.podcast.description}
                  </p>
                  <Button
                    className="bg-[#0d6c70] text-white hover:bg-[#0d6c70]/90"
                    asChild
                  >
                    <Link
                      href="https://podcasters.spotify.com/pod/show/elevacare"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Podcast className="mr-2 h-4 w-4" />
                      {t.podcast.cta}
                    </Link>
                  </Button>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Eleva Care Podcast"
                    width={300}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section
            id="services"
            className="w-full py-12 md:py-24 lg:py-32 bg-white"
          >
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-4 text-[#0d6c70]">
                {t.services.title}
              </h2>
              <p className="text-xl text-center mb-8 text-[#576d69]">
                {t.services.subtitle}
              </p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {t.services.items.map((service, index) => (
                  <Card
                    key={index}
                    className="bg-white border-[#0d6c70]/10 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        {service.icon}
                        <h3 className="text-xl font-bold ml-4 text-[#0d6c70]">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-[#576d69]">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section
            id="approach"
            className="w-full py-12 md:py-24 lg:py-32 bg-[#f0f8f8]"
          >
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#0d6c70]">
                {t.approach.title}
              </h2>
              <p className="text-xl text-center max-w-[800px] mx-auto text-[#576d69]">
                {t.approach.description}
              </p>
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section
            id="mission"
            className="w-full py-12 md:py-24 lg:py-32 bg-white"
          >
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0d6c70]">
                  {t.mission.title}
                </h2>
                <p className="mt-4 text-xl text-[#576d69]">
                  {t.mission.subtitle}
                </p>
              </div>
              <div className="grid gap-6 lg:grid-cols-2 items-center">
                <div>
                  <p className="text-xl mb-6 text-[#576d69]">
                    {t.mission.description}
                  </p>
                  <h3 className="text-2xl font-bold mb-2 text-[#0d6c70]">
                    {t.mission.vision.title}
                  </h3>
                  <p className="text-xl mb-6 text-[#576d69]">
                    {t.mission.vision.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-xl font-bold mb-2 text-[#0d6c70]">
                      {t.mission.beliefs.title}
                    </h4>
                    <ul className="list-disc list-inside text-[#576d69]">
                      {t.mission.beliefs.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <Button className="mt-4 bg-[#0d6c70] text-white hover:bg-[#0d6c70]/90">
                    {t.mission.cta}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {t.mission.stats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-[#f0f8f8] p-6 rounded-lg text-center"
                    >
                      <div className="text-3xl font-bold text-[#0d6c70]">
                        {stat.value}
                      </div>
                      <div className="text-[#576d69]">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section
            id="team"
            className="w-full py-12 md:py-24 lg:py-32 bg-[#f0f8f8]"
          >
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0d6c70]">
                  {t.team.title}
                </h2>
                <p className="mt-4 text-xl text-[#576d69]">{t.team.subtitle}</p>
              </div>
              <p className="text-center text-xl mb-12 text-[#576d69]">
                {t.team.description}
              </p>
              <div className="embla">
                <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-4xl xl:max-w-5xl mx-auto">
                  <CarouselContent>
                    {t.team.members.map((member, index) => (
                      <CarouselItem
                        key={index}
                        className="md:basis-1/2 lg:basis-1/3"
                      >
                        <div className="p-1">
                          <Card className="bg-background border-border">
                            <CardContent className="flex flex-col items-center p-6">
                              <Image
                                src={member.image}
                                alt={member.name}
                                width={200}
                                height={200}
                                className="rounded-full mb-4"
                              />
                              <h3 className="text-xl font-bold text-primary">
                                {member.name}
                              </h3>
                              <p className="text-muted-foreground mb-4">
                                {member.role}
                              </p>
                              <p className="text-center italic text-muted-foreground">
                                "{member.quote}"
                              </p>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section className="w-full py-12 md:py-24 bg-white">
            <div className="container px-4 md:px-6">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#0d6c70] mb-4">
                  {t.newsletter.title}
                </h2>
                <p className="text-[#576d69] mb-8">
                  {t.newsletter.description}
                </p>
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
                  <p className="text-xs text-[#576d69]">
                    {t.newsletter.privacy}
                  </p>
                </form>
              </div>
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section className="w-full py-12 md:py-24 bg-white">
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
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-[#0d6c70]/10 bg-white">
        <p className="text-xs text-[#576d69]">{t.footer.copyright}</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 text-[#576d69]"
            href="#"
          >
            {t.footer.terms}
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-[#576d69]"
            href="#"
          >
            {t.footer.privacy}
          </Link>
        </nav>
      </footer>
    </div>
  );
}
