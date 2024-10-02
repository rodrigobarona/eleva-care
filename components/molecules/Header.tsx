import React, { useState, useEffect } from 'react'; // Added useState import
import Link from 'next/link'; // Adjusted import to default export
import { Button } from '@/components/ui/button';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe, ChevronDown } from 'lucide-react';
import ElevaCareLogoSVG from '@/components/ui/eleva-care-logo';
import Image from 'next/image'; // Ensure correct import for Image component

type Language = 'en' | 'pt' | 'es'; // Use 'type' to import as a type

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, []);
  return (
    <header
      className={`fixed z-50 w-full justify-between px-6 py-4 transition-colors lg:px-8 ${
        isScrolled ? 'backdrop-blur supports-[backdrop-filter]:bg-white/60' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-2xl lg:max-w-7xl">
        <Link href="https://eleva.care" className="h-8 w-auto">
          <ElevaCareLogoSVG
            className={` ${isScrolled ? 'text-[#576d69] hover:text-[#0d6c70]' : 'text-white hover:text-white/80'}`}
          />
        </Link>
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          <Link
            className={`hidden text-base font-medium transition-colors md:block ${isScrolled ? 'text-[#576d69] hover:text-[#0d6c70]' : 'text-white hover:text-white/80'}`}
            href="#services"
          >
            {t.nav.services}
          </Link>
          <Link
            className={`hidden text-base font-medium transition-colors md:block ${isScrolled ? 'text-[#576d69] hover:text-[#0d6c70]' : 'text-white hover:text-white/80'}`}
            href="#approach"
          >
            {t.nav.approach}
          </Link>
          <Link
            className={`hidden text-base font-medium transition-colors md:block ${isScrolled ? 'text-[#576d69] hover:text-[#0d6c70]' : 'text-white hover:text-white/80'}`}
            href="#mission"
          >
            {t.nav.mission}
          </Link>
          <Link
            className={`hidden text-base font-medium transition-colors md:block ${isScrolled ? 'text-[#576d69] hover:text-[#0d6c70]' : 'text-white hover:text-white/80'}`}
            href="#team"
          >
            {t.nav.team}
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="default"
                className={`${isScrolled ? 'text-[#576d69] hover:text-[#0d6c70]' : 'text-white hover:text-[#0d6c70]'}`}
              >
                <Globe className="mr-2 h-5 w-5" />
                {t.language}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLang('en')}>English</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLang('pt')}>Português</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLang('es')}>Español</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
};

export default Header;
