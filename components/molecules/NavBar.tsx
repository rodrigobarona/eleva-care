"use client";

import { useEffect, useState } from "react"; // Import useEffect and useState
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
  t: any; // Adjust this type as needed
};

const Header: React.FC<HeaderProps> = ({ t }) => {
  const [lang, setLang] = useState<Language>("en"); // Default to English

  useEffect(() => {
    // Read the language from the cookie
    const langCookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('lang='))
      ?.split('=')[1];

    if (langCookie) {
      setLang(langCookie as Language); // Set the language from the cookie
    }
  }, []);

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 fixed w-full z-50 border-b border-[#0d6c70]/10">
      <Link
        className="flex items-center justify-center"
        href="https://eleva.care"
      >
        <Image
          src="/img/eleva-care-logo.svg"
          alt="Eleva Care"
          width={1863}
          height={316}
          className="w-auto h-8"
          loading="eager"
        />
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        <Link
          className="hidden md:block text-sm font-medium text-[#576d69] hover:text-[#0d6c70] transition-colors"
          href="#services"
        >
          {t.nav.services}
        </Link>
        <Link
          className="hidden md:block text-sm font-medium text-[#576d69] hover:text-[#0d6c70] transition-colors"
          href="#approach"
        >
          {t.nav.approach}
        </Link>
        <Link
          className="hidden md:block text-sm font-medium text-[#576d69] hover:text-[#0d6c70] transition-colors"
          href="#mission"
        >
          {t.nav.mission}
        </Link>
        <Link
          className="hidden md:block text-sm font-medium text-[#576d69] hover:text-[#0d6c70] transition-colors"
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
