import React, { useState } from 'react';
import { DAILY_ROUTINE } from '../data/zooData';
import { Clock, HeartPulse, Apple, Lightbulb, GraduationCap, Eye } from 'lucide-react';

export const DailyRoutineSection: React.FC = () => {
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
  const activeItem = DAILY_ROUTINE[activeItemIndex];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Nutrition':
        return <Apple className="w-4 h-4 text-[#D97706]" />;
      case 'Welfare':
        return <Eye className="w-4 h-4 text-[#2563EB]" />;
      case 'Enrichment':
        return <Lightbulb className="w-4 h-4 text-[#7C3AED]" />;
      case 'Veterinary':
        return <HeartPulse className="w-4 h-4 text-[#DC2626]" />;
      case 'Education':
        return <GraduationCap className="w-4 h-4 text-[#16A34A]" />;
      default:
        return <Clock className="w-4 h-4 text-[#57534E]" />;
    }
  };

  return (
    <section className="py-20 border-b border-[#E6E1D8] bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#57534E] mb-2">
            <span>Behind the Glass</span>
            <span aria-hidden="true">·</span>
            <span>24-Hour Zoological Care</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1C1917] tracking-tight text-balance">
            A Day in the Life of a <span className="italic text-[#1B4332]">Modern Sanctuary</span>
          </h2>
          <p className="mt-4 text-base text-[#57534E] leading-relaxed">
            Public viewing hours represent only a fraction of daily operations. From predawn commissary diet mixing to midnight thermal baby monitoring, explore how zoological caretakers operate around the clock.
          </p>
        </div>

        {/* Interactive Schedule Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {DAILY_ROUTINE.map((item, idx) => (
            <button
              key={item.time}
              onClick={() => setActiveItemIndex(idx)}
              className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                activeItemIndex === idx
                  ? 'bg-white border-[#1B4332] shadow-sm'
                  : 'bg-white/60 border-[#E6E1D8] hover:bg-white hover:border-[#DDD5C7]'
              }`}
            >
              <div className="flex items-center justify-between gap-1 mb-2">
                <span className="text-sm font-mono font-bold text-[#1B4332]">{item.time}</span>
                {getCategoryIcon(item.category)}
              </div>
              <span className="block text-xs font-semibold text-[#1C1917] line-clamp-1">{item.title}</span>
              <span className="block text-[11px] text-[#78716C] mt-0.5">{item.category}</span>
            </button>
          ))}
        </div>

        {/* Active Schedule Showcase */}
        <div className="bg-white rounded-2xl border border-[#E6E1D8] p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E6E1D8] pb-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-mono font-bold text-[#1B4332] tabular-nums">{activeItem.time}</span>
              <div className="h-6 w-[1px] bg-stone-300" />
              <div>
                <h3 className="text-xl font-serif font-bold text-[#1C1917]">{activeItem.title}</h3>
                <span className="text-xs uppercase tracking-wider font-mono text-[#57534E]">{activeItem.category} Protocol</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold px-3 py-1 bg-[#E8F2EC] text-[#1B4332] rounded-lg border border-[#CDE3D5]">
              {getCategoryIcon(activeItem.category)}
              <span>Active Care Routine</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#78716C] mb-2">Standard Protocol</h4>
              <p className="text-sm sm:text-base text-[#332F2B] leading-relaxed">
                {activeItem.description}
              </p>
            </div>

            <div className="md:col-span-5 bg-[#FAF8F5] border border-[#E6E1D8] rounded-xl p-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B4332] mb-2 flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5" />
                <span>Behind the Scenes Insight</span>
              </h4>
              <p className="text-xs text-[#57534E] leading-relaxed">
                {activeItem.behindTheScenesDetail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
