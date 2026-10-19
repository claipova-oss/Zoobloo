import React from 'react';
import { ArrowDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="about" className="pt-12 pb-16 border-b border-[#E6E1D8]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#57534E] mb-3">
            <span>Natural History & Wildlife Science</span>
            <span aria-hidden="true">·</span>
            <span>Educational Monograph</span>
            <span aria-hidden="true">·</span>
            <span>Est. 1828</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#1C1917] tracking-tight leading-[1.15] text-balance">
            Understanding the Modern <span className="italic font-light text-[#2D6A4F]">Zoological Sanctuary</span>
          </h1>

          <p className="mt-6 text-lg text-[#44403C] leading-relaxed">
            A comprehensive, one-page guide to how modern zoological gardens evolved from historical royal curiosities into global arks for biodiversity conservation, genetics research, and environmental stewardship.
          </p>
        </div>

        {/* Hero Visual Asset with Scrim & Caption */}
        <div className="relative rounded-2xl overflow-hidden border border-[#E6E1D8] shadow-sm mb-12 bg-[#EDE8DF]">
          <img
            src="/src/assets/images/hero_wildlife_sanctuary_1792412696427.jpg"
            alt="Expansive naturalistic zoological savanna habitat with zebras and giraffes grazing at dawn"
            className="w-full h-[360px] sm:h-[480px] lg:h-[540px] object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-wider font-mono text-[#D8F3DC]">Landscape Immersion Biome</span>
              <p className="text-sm font-light text-stone-200 mt-1">
                Multi-species open grassland sanctuary. Natural geological barriers, non-invasive moats, and native browse sustain mixed herds of giraffes, zebras, and impalas.
              </p>
            </div>
            <a
              href="#pillars"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-stone-900 bg-white/95 rounded-lg hover:bg-white transition-colors shrink-0 shadow"
            >
              <span>Explore The 4 Pillars</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#1B4332]" />
            </a>
          </div>
        </div>

        {/* Editorial Essay & Drop Cap Definition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-serif text-[#1C1917] mb-4">
              What is a Zoo?
            </h2>
            <div className="text-[#332F2B] text-base leading-relaxed space-y-4">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-normal first-letter:text-[#1B4332] first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none">
                The word <em className="font-serif">zoo</em> is a conversational abbreviation for <strong>zoological garden</strong>—stemming from the ancient Greek <em>zōion</em> (living creature or animal) and <em>logos</em> (the systematic study or understanding of). In contemporary science, a true zoo is far more than an exhibition park: it is an accredited biological sanctuary, an ecological research station, and an active gene repository dedicated to the preservation of Earth's endangered species.
              </p>
              <p>
                Historically, wild beasts were captured across colonial frontiers and exhibited in cramped royal menageries as symbols of dominion. Today, accredited zoological institutions operate under strict international oversight (such as the Association of Zoos and Aquariums, or AZA, and the European Association of Zoos and Aquaria, or EAZA). Modern zoos do not pluck animals from wild jungles for amusement; instead, more than 95% of mammals residing in modern facilities were born within collaborative global conservation networks.
              </p>
              <p>
                As industrialization and deforestation drive habitat loss across the globe, zoos function as &ldquo;modern Noah&rsquo;s Arks.&rdquo; They safeguard vital genetic insurance colonies, pioneer non-invasive veterinary medicine, and provide immersive educational encounters that teach hundreds of millions of people why wild spaces must be fiercely protected.
              </p>
            </div>
          </div>

          {/* Curatorial Callout & Fast Facts */}
          <div className="lg:col-span-5 bg-[#F4EFE6] border border-[#DDD5C7] rounded-xl p-6 lg:p-8 space-y-5">
            <div className="border-b border-[#DDD5C7] pb-4">
              <span className="text-xs uppercase tracking-widest font-mono text-[#6A655C]">At A Glance</span>
              <h3 className="text-lg font-serif font-medium text-[#1C1917] mt-1">Core Zoological Realities</h3>
            </div>

            <dl className="space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-[#1C1917]">Linguistic Etymology</dt>
                <dd className="text-[#57534E] mt-0.5">Greek: <em>zōion</em> (animal) + <em>logos</em> (study). First popularized in 1828 in London.</dd>
              </div>
              <div className="border-t border-[#E5DEC-border border-stone-200] pt-3">
                <dt className="font-semibold text-[#1C1917]">Primary Conservation Vehicle</dt>
                <dd className="text-[#57534E] mt-0.5">Species Survival Plans (SSPs) coordinating genetic diversity across hundreds of bioparks worldwide.</dd>
              </div>
              <div className="border-t border-stone-200 pt-3">
                <dt className="font-semibold text-[#1C1917]">Animal Sourcing</dt>
                <dd className="text-[#57534E] mt-0.5">Over 95% born within supervised accredited zoological programs; wild capture for display is prohibited.</dd>
              </div>
              <div className="border-t border-stone-200 pt-3">
                <dt className="font-semibold text-[#1C1917]">Welfare Protocol</dt>
                <dd className="text-[#57534E] mt-0.5">Choice-based habitats, sensory puzzle feeders, and voluntary positive reinforcement healthcare.</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* 4-Column Operational Utility Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-[#E6E1D8]">
          <div className="p-4 bg-white/70 rounded-xl border border-[#E6E1D8]">
            <span className="block text-2xl sm:text-3xl font-serif font-bold text-[#1B4332] tabular-nums">1828</span>
            <span className="block text-xs uppercase tracking-wider text-[#57534E] font-medium mt-1">First Scientific Zoo</span>
            <p className="text-xs text-[#78716C] mt-1">London&apos;s Regent&apos;s Park established for scientific investigation.</p>
          </div>
          <div className="p-4 bg-white/70 rounded-xl border border-[#E6E1D8]">
            <span className="block text-2xl sm:text-3xl font-serif font-bold text-[#1B4332] tabular-nums">700M+</span>
            <span className="block text-xs uppercase tracking-wider text-[#57534E] font-medium mt-1">Annual Visitors</span>
            <p className="text-xs text-[#78716C] mt-1">The largest active environmental education audience worldwide.</p>
          </div>
          <div className="p-4 bg-white/70 rounded-xl border border-[#E6E1D8]">
            <span className="block text-2xl sm:text-3xl font-serif font-bold text-[#1B4332] tabular-nums">1,000+</span>
            <span className="block text-xs uppercase tracking-wider text-[#57534E] font-medium mt-1">Species Survival Plans</span>
            <p className="text-xs text-[#78716C] mt-1">Active genetic registries preventing inbreeding &amp; extinction.</p>
          </div>
          <div className="p-4 bg-white/70 rounded-xl border border-[#E6E1D8]">
            <span className="block text-2xl sm:text-3xl font-serif font-bold text-[#1B4332] tabular-nums">100%</span>
            <span className="block text-xs uppercase tracking-wider text-[#57534E] font-medium mt-1">Voluntary Training</span>
            <p className="text-xs text-[#78716C] mt-1">Zero coercive punishment; positive reward-based medical participation.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
