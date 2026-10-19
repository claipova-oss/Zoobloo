import React from 'react';
import { Compass, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1917] text-[#D6D3D1] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Brand & Editorial Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 text-lg font-serif font-bold text-white">
              <Compass className="w-5 h-5 text-[#74C69D]" />
              <span>Zoological Guide</span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              An educational monograph illustrating the science, history, and veterinary conservation of accredited zoological gardens worldwide.
            </p>
            <blockquote className="text-xs italic font-serif text-stone-300 border-l border-stone-700 pl-3 py-1">
              &ldquo;In the end, we will conserve only what we love; we will love only what we understand; and we will understand only what we are taught.&rdquo;
              <cite className="block not-italic text-[10px] text-stone-500 font-sans mt-1">— Baba Dioum, Senegalese Conservationist</cite>
            </blockquote>
          </div>

          {/* Quick Curatorial Navigation */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs uppercase tracking-wider font-mono text-stone-400 font-semibold block">Topics</span>
            <ul className="text-xs space-y-2 text-stone-300">
              <li><a href="#about" className="hover:text-white transition-colors">What is a Zoo? (Definition &amp; Roots)</a></li>
              <li><a href="#evolution" className="hover:text-white transition-colors">Menageries vs Modern Sanctuaries</a></li>
              <li><a href="#pillars" className="hover:text-white transition-colors">Four Pillars: Conservation, Research &amp; Welfare</a></li>
              <li><a href="#biomes" className="hover:text-white transition-colors">Micro-Climate Biomes &amp; Species</a></li>
              <li><a href="#rewilding" className="hover:text-white transition-colors">Species Saved from Extinction</a></li>
              <li><a href="#etiquette" className="hover:text-white transition-colors">Conscientious Visitor Etiquette</a></li>
            </ul>
          </div>

          {/* Accreditation Standards */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-wider font-mono text-stone-400 font-semibold block">Global Standards</span>
            <p className="text-xs text-stone-400 leading-relaxed">
              Supporting accredited members of the World Association of Zoos and Aquariums (WAZA), AZA, and EAZA dedicated to transparent conservation finance and cruelty-free husbandry.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <span>Zoological Guide &middot; Educational Wildlife Publication</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Return to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
