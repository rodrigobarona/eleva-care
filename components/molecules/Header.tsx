import Link from "next/link"; // Adjusted import to default export
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, ChevronDown, Sparkles } from "lucide-react";
import Image from "next/image"; // Ensure correct import for Image component

const Header: React.FC<{ t: any; setLang: (lang: string) => void }> = ({
  t,
  setLang,
}) => {
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
        />
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
  );
};

export default Header;
