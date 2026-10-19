import React, { useState } from 'react';
import { THEN_VS_NOW_COMPARISON } from '../data/zooData';
import { History, ShieldCheck, Sparkles } from 'lucide-react';

export const EvolutionSection: React.FC = () => {
  const [activeMode, setActiveMode] = useState<'side-by-side' | 'modern-focus'>('side-by-side');

  return (
    <section id="evolution" className="py-20 border-b border-[#E6E1D8] bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#57534E] mb-2">
            <span>Historical Paradigm Shift</span>
            <span aria-hidden="true">·</span>
            <span>1850 vs 2026</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1C1917] tracking-tight text-balance">
            From Imperial Menagerie to <span className="italic text-[#1B4332]">Conservation Biopark</span>
          </h2>
          <p className="mt-4 text-base text-[#57534E] leading-relaxed">
            The fundamental premise of why zoos exist has undergone a 180-degree revolution. Explore the contrast between early industrial exhibitions and contemporary accredited science sanctuaries.
          </p>

          {/* Interactive Mode Toggle */}
          <div className="mt-6 inline-flex p-1 bg-[#EBE5DA] rounded-lg border border-[#DDD5C7]">
            <button
              onClick={() => setActiveMode('side-by-side')}
              className={`px-4 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                activeMode === 'side-by-side'
                  ? 'bg-white text-[#1C1917] shadow-sm font-semibold'
                  : 'text-[#6A655C] hover:text-[#1C1917]'
              }`}
            >
              Side-by-Side Comparison
            </button>
            <button
              onClick={() => setActiveMode('modern-focus')}
              className={`px-4 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                activeMode === 'modern-focus'
                  ? 'bg-white text-[#1C1917] shadow-sm font-semibold'
                  : 'text-[#6A655C] hover:text-[#1C1917]'
              }`}
            >
              Modern Sanctuary Innovations
            </button>
          </div>
        </div>

        {/* Comparison Content */}
        {activeMode === 'side-by-side' ? (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pb-2 border-b border-[#DDD5C7] text-xs font-semibold uppercase tracking-wider text-[#78716C]">
              <div className="md:col-span-3">Dimension</div>
              <div className="md:col-span-4 flex items-center gap-1.5 text-[#854D0E]">
                <History className="w-4 h-4" />
                <span>Victorian Menagerie (1800s - 1920s)</span>
              </div>
              <div className="md:col-span-5 flex items-center gap-1.5 text-[#1B4332]">
                <ShieldCheck className="w-4 h-4" />
                <span>Modern Accredited Sanctuary (2020s)</span>
              </div>
            </div>

            {THEN_VS_NOW_COMPARISON.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 py-4 border-b border-[#E6E1D8] items-baseline hover:bg-white/40 transition-colors rounded-lg px-2"
              >
                <div className="md:col-span-3 text-sm font-serif font-semibold text-[#1C1917]">
                  {item.aspect}
                </div>
                <div className="md:col-span-4 text-sm text-[#78716C] leading-relaxed pr-2">
                  <span className="inline md:hidden text-xs font-bold text-[#854D0E] mr-1.5 uppercase">Past:</span>
                  {item.historic}
                </div>
                <div className="md:col-span-5 text-sm text-[#1C1917] font-medium leading-relaxed bg-[#E8F2EC]/60 p-3 rounded-lg border border-[#CDE3D5]">
                  <span className="inline md:hidden text-xs font-bold text-[#1B4332] mr-1.5 uppercase">Today:</span>
                  {item.modern}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-[#E6E1D8] shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#E8F2EC] flex items-center justify-center text-[#1B4332] mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-[#1C1917] mb-2">Landscape Immersion</h3>
              <p className="text-sm text-[#57534E] leading-relaxed">
                Rather than putting animals behind cold iron bars, landscape immersion places visitors inside the simulated ecosystem. Subtle concealed moats, elevation changes, and reinforced laminated glass give animals natural sightlines and private retreat zones.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E6E1D8] shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#E8F2EC] flex items-center justify-center text-[#1B4332] mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-[#1C1917] mb-2">Cognitive Choice Architecture</h3>
              <p className="text-sm text-[#57534E] leading-relaxed">
                Animals are given autonomy over their daily lives: choices between sun and shade, heated limestone rocks or cool burrows, and indoor or outdoor access. If an animal chooses not to be seen by the public, their choice is respected.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E6E1D8] shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#E8F2EC] flex items-center justify-center text-[#1B4332] mb-4">
                <History className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-[#1C1917] mb-2">Cryopreserved Frozen Arks</h3>
              <p className="text-sm text-[#57534E] leading-relaxed">
                Modern zoological centers preserve living cell lines, DNA, and gametes in liquid nitrogen. This &ldquo;frozen ark&rdquo; safeguards genetic diversity for centuries, ensuring that even if wild populations crash, genetic rescue remains viable.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
