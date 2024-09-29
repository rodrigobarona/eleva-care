import React from "react"; // Ensure React is imported
import Link from "next/link"; // Import Link from Next.js

const Footer = ({
  t,
}: {
  t: { footer: { copyright: string; terms: string; privacy: string } };
}) => {
  return (
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
  );
};

export default Footer; // Export the Footer component
