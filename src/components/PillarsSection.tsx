import React from 'react';
import { ZOO_PILLARS } from '../data/zooData';

export const PillarsSection: React.FC = () => {
  return (
    <section id="pillars" className="py-20 border-b border-[#E6E1D8] bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#57534E] mb-2">
            <span>The Four Core Mandates</span>
            <span aria-hidden="true">·</span>
            <span>Accredited Operations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1C1917] tracking-tight text-balance">
            The Four Pillars of the <span className="italic text-[#1B4332]">Modern Zoo</span>
          </h2>
          <p className="mt-4 text-base text-[#57534E] leading-relaxed">
            Every accredited zoological institution operates under a strict four-fold mission. Without these four interconnected pillars, an animal facility is simply an attraction—not a true zoological garden.
          </p>
        </div>

        {/* 2-Column Split: Image Feature + 4 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Veterinary / Conservation Spotlight Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#F4EFE6] border border-[#DDD5C7] rounded-2xl overflow-hidden p-6 sm:p-8">
            <div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6 border border-[#DDD5C7]">
                <img
                  src="/src/assets/images/zoo_conservation_care_1792412697186.jpg"
                  alt="A wildlife veterinarian and conservationist gently checking the health of an alert red panda"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <span className="text-xs uppercase tracking-wider font-mono text-[#57534E]">Veterinary Excellence</span>
              <h3 className="text-xl font-serif font-semibold text-[#1C1917] mt-1 mb-3">
                Preventative Medicine &amp; Compassionate Science
              </h3>
              <p className="text-sm text-[#44403C] leading-relaxed">
                Modern zoo medicine pioneers life-saving advancements: from neonatal incubator formulas for orphaned marsupials to specialized CT scans and non-invasive fecal hormone analysis that uncovers pregnancy and stress without touching the animal.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#DDD5C7] flex items-center justify-between text-xs text-[#57534E]">
              <span>Association of Zoos &amp; Aquariums (AZA)</span>
              <span className="font-semibold text-[#1B4332]">Gold Standard Audited</span>
            </div>
          </div>

          {/* Right Column: 4 Pillars Accordion/Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-5">
            {ZOO_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-white p-6 rounded-2xl border border-[#E6E1D8] shadow-xs hover:border-[#1B4332]/40 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-serif font-bold text-[#1B4332] tabular-nums shrink-0 mt-0.5">
                    {pillar.number}.
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-serif font-semibold text-[#1C1917]">
                      {pillar.title}
                    </h3>
                    <p className="text-sm font-medium text-[#292524] leading-snug">
                      {pillar.summary}
                    </p>
                    <p className="text-xs text-[#57534E] leading-relaxed">
                      {pillar.details}
                    </p>
                    <div className="pt-2 text-xs font-semibold text-[#2D6A4F] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A4F]" />
                      <span>{pillar.impactStat}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
