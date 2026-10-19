import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { EvolutionSection } from './components/EvolutionSection';
import { PillarsSection } from './components/PillarsSection';
import { BiomeExplorer } from './components/BiomeExplorer';
import { RewildingSection } from './components/RewildingSection';
import { DailyRoutineSection } from './components/DailyRoutineSection';
import { VisitorEtiquetteSection } from './components/VisitorEtiquetteSection';
import { KnowledgeQuiz } from './components/KnowledgeQuiz';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToQuiz = () => {
    const el = document.getElementById('quiz');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1C1917]">
      <Navbar onQuizClick={scrollToQuiz} />
      <main className="flex-1">
        <HeroSection />
        <EvolutionSection />
        <PillarsSection />
        <BiomeExplorer />
        <RewildingSection />
        <DailyRoutineSection />
        <VisitorEtiquetteSection />
        <KnowledgeQuiz />
      </main>
      <Footer />
    </div>
  );
}
