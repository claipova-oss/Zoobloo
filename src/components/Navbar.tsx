import React from 'react';
import { Compass } from 'lucide-react';

interface NavbarProps {
  onQuizClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onQuizClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E6E1D8] transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single Brand Wordmark */}
        <a 
          href="#top" 
          className="flex items-center gap-2.5 text-lg font-serif font-bold tracking-tight text-[#1C1917] hover:text-[#1B4332] transition-colors whitespace-nowrap shrink-0"
        >
          <Compass className="w-5 h-5 text-[#2D6A4F]" />
          <span>Zoological Guide</span>
        </a>

        {/* Zone 2: 5 Concise Single-line Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#57534E]">
          <a href="#about" className="hover:text-[#1B4332] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0">
            What is a Zoo?
          </a>
          <a href="#evolution" className="hover:text-[#1B4332] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0">
            Then vs Now
          </a>
          <a href="#pillars" className="hover:text-[#1B4332] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0">
            Four Pillars
          </a>
          <a href="#biomes" className="hover:text-[#1B4332] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0">
            Living Biomes
          </a>
          <a href="#rewilding" className="hover:text-[#1B4332] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0">
            Rewilding Impact
          </a>
          <a href="#etiquette" className="hover:text-[#1B4332] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0">
            Visitor Guide
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onQuizClick}
            className="px-4 py-2 text-xs font-semibold tracking-wide text-white bg-[#1B4332] rounded-lg hover:bg-[#143225] active:scale-[0.98] transition-all whitespace-nowrap shrink-0 cursor-pointer shadow-sm"
          >
            Test Your Knowledge
          </button>
        </div>
      </div>
    </header>
  );
};
