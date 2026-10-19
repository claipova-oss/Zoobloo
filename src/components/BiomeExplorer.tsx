import React, { useState } from 'react';
import { BIOMES, Biome } from '../data/zooData';
import { playAnimalSound } from '../utils/audioSynthesizer';
import { Volume2, Thermometer, Droplets, ShieldAlert, Sparkles, Check } from 'lucide-react';

export const BiomeExplorer: React.FC = () => {
  const [selectedBiomeId, setSelectedBiomeId] = useState<string>('savanna');
  const [selectedSpeciesIndex, setSelectedSpeciesIndex] = useState<number>(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  const activeBiome: Biome = BIOMES.find((b) => b.id === selectedBiomeId) || BIOMES[0];
  const activeSpecies = activeBiome.keySpecies[selectedSpeciesIndex] || activeBiome.keySpecies[0];

  const handleBiomeChange = (id: string) => {
    setSelectedBiomeId(id);
    setSelectedSpeciesIndex(0);
  };

  const handlePlaySound = () => {
    if (isPlayingAudio) return;
    setIsPlayingAudio(true);
    playAnimalSound(activeBiome.soundType, () => {
      setIsPlayingAudio(false);
    });
  };

  return (
    <section id="biomes" className="py-20 border-b border-[#E6E1D8] bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#57534E] mb-2">
            <span>Habitat Engineering</span>
            <span aria-hidden="true">·</span>
            <span>Micro-Climate Biomes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1C1917] tracking-tight text-balance">
            Recreating Earth&apos;s <span className="italic text-[#1B4332]">Living Biomes</span>
          </h2>
          <p className="mt-4 text-base text-[#57534E] leading-relaxed">
            Modern enclosures do not mimic cages—they engineer complete living micro-climates. Explore how accredited facilities balance humidity, soil chemistry, social herds, and cognitive puzzles.
          </p>
        </div>

        {/* Interactive Biome Tabs (Functional Buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {BIOMES.map((b) => (
            <button
              key={b.id}
              onClick={() => handleBiomeChange(b.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-2 ${
                selectedBiomeId === b.id
                  ? 'bg-[#1B4332] text-white shadow-sm'
                  : 'bg-white text-[#57534E] hover:text-[#1C1917] hover:bg-[#EBE5DA] border border-[#E6E1D8]'
              }`}
            >
              <span>{b.name}</span>
              {selectedBiomeId === b.id && <Check className="w-4 h-4 text-[#74C69D]" />}
            </button>
          ))}
        </div>

        {/* Biome Showcase Card */}
        <div className="bg-white rounded-2xl border border-[#E6E1D8] overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual Habitat Image + Microclimate Ribbon */}
            <div className="lg:col-span-5 relative flex flex-col justify-between bg-stone-900 min-h-[380px] lg:min-h-full">
              <img
                src={activeBiome.image}
                alt={activeBiome.name}
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />

              {/* Climate Overlay Tags */}
              <div className="relative z-10 p-6 flex items-center justify-between gap-4">
                <span className="px-3 py-1 rounded-md bg-black/50 backdrop-blur-md text-xs font-mono text-[#D8F3DC] border border-white/20">
                  {activeBiome.name}
                </span>

                <button
                  onClick={handlePlaySound}
                  disabled={isPlayingAudio}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold backdrop-blur-md transition-all cursor-pointer whitespace-nowrap ${
                    isPlayingAudio
                      ? 'bg-[#2D6A4F] text-white animate-pulse'
                      : 'bg-white/90 hover:bg-white text-[#1C1917]'
                  }`}
                  title={activeBiome.soundLabel}
                >
                  <Volume2 className={`w-3.5 h-3.5 ${isPlayingAudio ? 'text-[#D8F3DC]' : 'text-[#1B4332]'}`} />
                  <span>{isPlayingAudio ? 'Acoustic Playing...' : 'Listen to Call'}</span>
                </button>
              </div>

              {/* Bottom Habitat Specs */}
              <div className="relative z-10 p-6 text-white space-y-3">
                <p className="text-sm text-stone-200 line-clamp-2">{activeBiome.description}</p>
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/20 text-xs">
                  <div className="flex items-center gap-1.5">
                    <Thermometer className="w-4 h-4 text-[#74C69D]" />
                    <span className="text-stone-300">Temp:</span>
                    <span className="font-semibold text-white">{activeBiome.temperature}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Droplets className="w-4 h-4 text-[#74C69D]" />
                    <span className="text-stone-300">Humidity:</span>
                    <span className="font-semibold text-white">{activeBiome.humidity}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Species Selection & In-Depth Details */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E6E1D8] mb-6">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-mono text-[#78716C]">Resident Species</span>
                    <h3 className="text-xl font-serif font-bold text-[#1C1917]">{activeBiome.subtitle}</h3>
                  </div>
                </div>

                {/* Species Selector Buttons */}
                <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
                  {activeBiome.keySpecies.map((species, sIdx) => (
                    <button
                      key={species.name}
                      onClick={() => setSelectedSpeciesIndex(sIdx)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                        selectedSpeciesIndex === sIdx
                          ? 'bg-[#E8F2EC] text-[#1B4332] font-semibold border border-[#B7E4C7]'
                          : 'bg-[#F5F2EB] text-[#57534E] hover:text-[#1C1917]'
                      }`}
                    >
                      {species.name}
                    </button>
                  ))}
                </div>

                {/* Active Species Profile */}
                <div className="bg-[#FAF8F5] border border-[#E6E1D8] rounded-xl p-5 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#E6E1D8] pb-3">
                    <div>
                      <h4 className="text-lg font-serif font-bold text-[#1C1917]">{activeSpecies.name}</h4>
                      <p className="text-xs italic text-[#78716C] font-serif">{activeSpecies.scientificName}</p>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#B45309]">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      <span>IUCN Red List: {activeSpecies.iucnStatus}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="font-semibold text-[#1C1917] block mb-1">Scientific Diet Formulation</span>
                      <p className="text-[#57534E] leading-relaxed">{activeSpecies.diet}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-[#1C1917] block mb-1">Daily Cognitive Enrichment</span>
                      <p className="text-[#57534E] leading-relaxed">{activeSpecies.habitatEnrichment}</p>
                    </div>
                  </div>

                  <div className="bg-[#E8F2EC]/60 border border-[#CDE3D5] rounded-lg p-3 text-xs text-[#1C1917] flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#1B4332]">Wildlife Science Fact: </span>
                      <span>{activeSpecies.funFact}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conservation Action Footnote */}
              <div className="pt-6 mt-6 border-t border-[#E6E1D8] text-xs text-[#57534E] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="font-semibold text-[#1C1917]">Wild Habitat Sponsorship: </span>
                  <span>{activeBiome.conservationAction}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
