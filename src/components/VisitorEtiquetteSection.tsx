import React from 'react';
import { VISITOR_ETIQUETTE } from '../data/zooData';
import { AlertCircle, CheckCircle2, ShieldCheck } from 'lucide-react';

export const VisitorEtiquetteSection: React.FC = () => {
  return (
    <section id="etiquette" className="py-20 border-b border-[#E6E1D8] bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#57534E] mb-2">
            <span>Ethical Stewardship</span>
            <span aria-hidden="true">·</span>
            <span>Visitor Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1C1917] tracking-tight text-balance">
            The Conscientious <span className="italic text-[#1B4332]">Visitor&apos;s Guide</span>
          </h2>
          <p className="mt-4 text-base text-[#57534E] leading-relaxed">
            Human behavior directly affects animal stress levels. Understanding the scientific reasoning behind zoo regulations transforms casual visits into respectful wildlife encounters.
          </p>
        </div>

        {/* Etiquette Rules Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {VISITOR_ETIQUETTE.slice(0, 3).map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#E6E1D8] p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-[#DC2626] text-xs font-bold uppercase tracking-wider mb-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Vital Rule</span>
                </div>
                <h3 className="text-base font-serif font-bold text-[#1C1917] mb-2">
                  {item.rule}
                </h3>
                <p className="text-xs text-[#57534E] leading-relaxed mb-4">
                  {item.reason}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E6E1D8] bg-[#F9F7F2] -mx-6 -mb-6 p-4 rounded-b-2xl">
                <span className="flex items-center gap-1.5 text-xs font-semibold text-[#166534] mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Best Practice</span>
                </span>
                <p className="text-xs text-[#44403C] leading-snug">{item.positiveBehavior}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Accreditation Banner */}
        <div className="bg-[#1B4332] text-white rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#D8F3DC] mb-2 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>How to Spot a Real Sanctuary</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold mb-2">
              Always Verify Recognized Accreditation
            </h3>
            <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
              Unregulated roadside exhibits often exploit animals for profit. Legitimate modern zoos are accredited by the <strong>Association of Zoos and Aquariums (AZA)</strong>, the <strong>European Association of Zoos and Aquaria (EAZA)</strong>, or the <strong>World Association (WAZA)</strong>. These organizations mandate independent inspections of physical habitats, financial support for wild conservation, and genetic registry compliance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <div className="px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-center">
              <span className="block text-sm font-bold font-mono">AZA / EAZA</span>
              <span className="block text-[10px] text-stone-300 uppercase tracking-wider">Peer Audited</span>
            </div>
            <div className="px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-center">
              <span className="block text-sm font-bold font-mono">WAZA Global</span>
              <span className="block text-[10px] text-stone-300 uppercase tracking-wider">Species Survival</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
