import React, { useState, useEffect } from "react"; // Added useState import
import Link from "next/link"; // Adjusted import to default export
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, ChevronDown } from "lucide-react";
import Image from "next/image"; // Ensure correct import for Image component

type Language = "en" | "pt" | "es"; // Use 'type' to import as a type

// Define the props type for Header
type HeaderProps = {
  // eslint-disable-next-line
  t: any;
  setLang: (lang: Language) => void; // Ensure setLang accepts Language type
};

const Header: React.FC<HeaderProps> = ({ t, setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Set isScrolled based on scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);
  return (
    <header
      className={`fixed z-50 flex h-16 w-full items-center border-b border-[#0d6c70]/10 px-4 transition-colors lg:px-6 ${
        isScrolled
          ? "backdrop-blur supports-[backdrop-filter]:bg-white/60"
          : "bg-transparent"
      }`}
    >
      <Link
        className="flex items-center justify-center"
        href="https://eleva.care"
      >
        <Image
          src="/img/eleva-care-logo.svg"
          alt="Eleva Care"
          width={1863}
          height={316}
          className="h-8 w-auto"
          loading="eager"
        />
      </Link>
      <nav className="ml-auto flex items-center gap-4 sm:gap-6">
        <Link
          className="hidden text-sm font-medium text-[#576d69] transition-colors hover:text-[#0d6c70] md:block"
          href="#services"
        >
          {t.nav.services}
        </Link>
        <Link
          className="hidden text-sm font-medium text-[#576d69] transition-colors hover:text-[#0d6c70] md:block"
          href="#approach"
        >
          {t.nav.approach}
        </Link>
        <Link
          className="hidden text-sm font-medium text-[#576d69] transition-colors hover:text-[#0d6c70] md:block"
          href="#mission"
        >
          {t.nav.mission}
        </Link>
        <Link
          className="hidden text-sm font-medium text-[#576d69] transition-colors hover:text-[#0d6c70] md:block"
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
              <Globe className="mr-2 h-5 w-5" />
              {t.language}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setLang("en")}>
              English
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLang("pt")}>
              Português
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLang("es")}>
              Español
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  );
};

export default Header;
