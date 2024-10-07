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
      className={`fixed z-50 w-full justify-between px-6 transition-all lg:px-8 ${
        isScrolled
          ? 'pb-2 pt-2 shadow backdrop-blur supports-[backdrop-filter]:bg-elevaNeutral-100/70'
          : 'bg-transparent pb-4 pt-6'
      }`}
    >
      <div className={`mx-auto flex max-w-2xl lg:max-w-7xl`}>
        <Link
          href="https://eleva.care"
          className={`h-8 w-auto lg:h-12 ${isScrolled ? 'hover:text-elevaPrimary-light text-elevaPrimary' : 'text-elevaNeutral-100 hover:text-elevaNeutral-100/60'}`}
        >
          <ElevaCareLogoSVG className="h-8 w-auto lg:h-12" />
        </Link>
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          <Link
            className={`hidden text-base font-medium transition-colors md:block ${isScrolled ? 'hover:text-elevaPrimary-light text-elevaPrimary' : 'text-elevaNeutral-100 hover:text-elevaNeutral-100/60'}`}
            href="#services"
          >
            {t.nav.services}
          </Link>
          <Link
            className={`hidden text-base font-medium transition-colors md:block ${isScrolled ? 'hover:text-elevaPrimary-light text-elevaPrimary' : 'text-elevaNeutral-100 hover:text-elevaNeutral-100/60'}`}
            href="#approach"
          >
            {t.nav.approach}
          </Link>
          <Link
            className={`hidden text-base font-medium transition-colors md:block ${isScrolled ? 'hover:text-elevaPrimary-light text-elevaPrimary' : 'text-elevaNeutral-100 hover:text-elevaNeutral-100/60'}`}
            href="#mission"
          >
            {t.nav.mission}
          </Link>
          <Link
            className={`hidden text-base font-medium transition-colors md:block ${isScrolled ? 'hover:text-elevaPrimary-light text-elevaPrimary' : 'text-elevaNeutral-100 hover:text-elevaNeutral-100/60'}`}
            href="#team"
          >
            {t.nav.team}
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="default"
                className={`${isScrolled ? 'hover:text-elevaPrimary-light text-elevaPrimary' : 'text-elevaNeutral-100 hover:text-elevaPrimary'}`}
              >
                <Globe className="mr-2 h-5 w-5" />
                {t.language}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => setLang('en')}
                className="hover:bg-elevaPrimary-light cursor-pointer"
              >
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLang('pt')} className="cursor-pointer">
                Português
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLang('es')} className="cursor-pointer">
                Español
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
};

export default Header;
