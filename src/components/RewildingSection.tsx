import React from 'react';
import { REWILDING_STORIES } from '../data/zooData';
import { Award, ArrowRight } from 'lucide-react';

export const RewildingSection: React.FC = () => {
  return (
    <section id="rewilding" className="py-20 border-b border-[#E6E1D8] bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#57534E] mb-2">
            <span>Conservation Success Stories</span>
            <span aria-hidden="true">·</span>
            <span>Species Saved from Extinction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1C1917] tracking-tight text-balance">
            Brought Back from the <span className="italic text-[#1B4332]">Brink of Extinction</span>
          </h2>
          <p className="mt-4 text-base text-[#57534E] leading-relaxed">
            Without accredited zoological breeding programs, multiple iconic species on Earth would today exist only in museum sketches. Discover three historic rewilding triumphs spearheaded by zoos.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Visual Feature Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-[#E6E1D8] overflow-hidden shadow-xs">
            <div className="aspect-[4/3] relative">
              <img
                src="/src/assets/images/rewilding_wildlife_release_1792412697683.jpg"
                alt="Golden lion tamarin monkey in wild rainforest canopy"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md text-xs font-mono text-[#D8F3DC] border border-white/20">
                Rewilding Milestone
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1B4332] mb-1">
                <Award className="w-4 h-4" />
                <span>The Global Golden Lion Tamarin Coalition</span>
              </div>
              <h3 className="text-lg font-serif font-bold text-[#1C1917] mb-2">
                Restoring Brazil&apos;s Atlantic Forest Primates
              </h3>
              <p className="text-xs text-[#57534E] leading-relaxed mb-4">
                Over 140 accredited zoos collaborated across four decades to breed genetically sound family troops. Keepers conditioned monkeys to climb wild canopy vines and forage for hidden insect larvae before transferring them to protected reserves in Rio de Janeiro.
              </p>

              <div className="p-3 bg-[#F4EFE6] rounded-xl border border-[#DDD5C7] text-xs">
                <span className="font-semibold text-[#1C1917] block">The Metric Result:</span>
                <span className="text-[#57534E]">Today, over 2,500 golden lion tamarins roam wild—with nearly one-third directly descended from zoo-born ancestors.</span>
              </div>
            </div>
          </div>

          {/* Secondary Rewilding Stories */}
          <div className="lg:col-span-7 space-y-5">
            {REWILDING_STORIES.map((story) => (
              <div
                key={story.id}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E6E1D8] shadow-xs hover:border-[#1B4332]/40 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-[#1C1917]">{story.species}</h3>
                    <p className="text-xs italic text-[#78716C] font-serif">{story.scientificName}</p>
                  </div>
                  <span className="text-xs font-mono text-[#1B4332] font-semibold">{story.yearMilestone}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3 text-xs bg-[#FAF8F5] p-3 rounded-xl border border-[#E6E1D8]">
                  <div>
                    <span className="font-bold text-[#991B1B] uppercase tracking-wider block text-[10px]">Crisis Point:</span>
                    <span className="text-[#44403C]">{story.statusThen}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#166534] uppercase tracking-wider block text-[10px]">Recovery Today:</span>
                    <span className="text-[#44403C]">{story.statusNow}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed mb-3">
                  {story.story}
                </p>

                <div className="pt-3 border-t border-[#E6E1D8] flex items-center gap-1.5 text-xs text-[#2D6A4F] font-semibold">
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  <span>Key Intervention: {story.keyStrategy}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
