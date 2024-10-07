import React from 'react';
import Link from 'next/link';

interface FooterProps {
  copyright: string;
  terms: string;
  privacy: string;
}

const Footer: React.FC<FooterProps> = ({ copyright, terms, privacy }) => {
  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t border-[#0d6c70]/10 bg-elevaNeutral-100 px-6 py-6 sm:flex-row lg:px-8">
      <p className="text-xs text-elevaNeutral-900">{copyright}</p>
      <nav className="flex gap-4 sm:ml-auto sm:gap-6">
        <Link className="text-xs text-elevaNeutral-900 underline-offset-4 hover:underline" href="#">
          {terms}
        </Link>
        <Link className="text-xs text-elevaNeutral-900 underline-offset-4 hover:underline" href="#">
          {privacy}
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
