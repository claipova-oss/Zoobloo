import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/zooData';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw } from 'lucide-react';

export const KnowledgeQuiz: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSelect = (questionId: number, optionIdx: number) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIdx,
    }));
  };

  const calculateScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  const allAnswered = QUIZ_QUESTIONS.every((q) => selectedAnswers[q.id] !== undefined);

  return (
    <section id="quiz" className="py-20 border-b border-[#E6E1D8] bg-[#F7F4EE]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Curatorial Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-[#57534E] mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-[#1B4332]" />
            <span>Interactive Comprehension</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1C1917] tracking-tight">
            Test Your <span className="italic text-[#1B4332]">Wildlife Knowledge</span>
          </h2>
          <p className="mt-3 text-sm text-[#57534E] leading-relaxed">
            Verify what you have learned about zoological etymology, veterinary animal care, and historic species survival.
          </p>
        </div>

        {/* Quiz Cards */}
        <div className="space-y-6">
          {QUIZ_QUESTIONS.map((q, qIdx) => {
            const userAnswer = selectedAnswers[q.id];
            const isCorrect = userAnswer === q.correctIndex;

            return (
              <div
                key={q.id}
                className="bg-white rounded-2xl border border-[#E6E1D8] p-6 sm:p-7 shadow-xs"
              >
                <div className="flex items-start gap-3 mb-4">
                  <span className="w-6 h-6 rounded-full bg-[#E8F2EC] text-[#1B4332] font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {qIdx + 1}
                  </span>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-[#1C1917]">
                    {q.question}
                  </h3>
                </div>

                <div className="space-y-2.5 mb-4">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = userAnswer === optIdx;
                    let optionStyle = 'bg-[#FAF8F5] border-[#E6E1D8] text-[#332F2B] hover:bg-[#F4EFE6]';

                    if (submitted) {
                      if (optIdx === q.correctIndex) {
                        optionStyle = 'bg-[#E8F2EC] border-[#A7D7B9] text-[#14532D] font-medium';
                      } else if (isSelected && !isCorrect) {
                        optionStyle = 'bg-[#FEE2E2] border-[#FCA5A5] text-[#991B1B]';
                      }
                    } else if (isSelected) {
                      optionStyle = 'bg-[#E8F2EC] border-[#1B4332] text-[#1B4332] font-semibold';
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelect(q.id, optIdx)}
                        disabled={submitted}
                        className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between gap-3 cursor-pointer ${optionStyle}`}
                      >
                        <span>{opt}</span>
                        {submitted && optIdx === q.correctIndex && (
                          <CheckCircle2 className="w-4 h-4 text-[#166534] shrink-0" />
                        )}
                        {submitted && isSelected && !isCorrect && (
                          <XCircle className="w-4 h-4 text-[#991B1B] shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {submitted && (
                  <div className={`p-4 rounded-xl text-xs leading-relaxed border ${
                    isCorrect ? 'bg-[#E8F2EC]/60 border-[#CDE3D5] text-[#14532D]' : 'bg-[#FFFBEB] border-[#FDE68A] text-[#92400E]'
                  }`}>
                    <span className="font-bold block mb-0.5">{isCorrect ? 'Correct!' : 'Scientific Insight:'}</span>
                    <span>{q.explanation}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Controls & Score Display */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-[#E6E1D8]">
          {submitted ? (
            <div className="flex items-center gap-3">
              <span className="text-xl font-serif font-bold text-[#1C1917]">
                Score: {calculateScore()} / {QUIZ_QUESTIONS.length}
              </span>
              <span className="text-xs text-[#57534E]">
                {calculateScore() === QUIZ_QUESTIONS.length
                  ? 'Outstanding! You understand the true conservation role of modern zoos.'
                  : 'Well done! Review the answers above to deepen your wildlife knowledge.'}
              </span>
            </div>
          ) : (
            <span className="text-xs text-[#78716C]">
              {allAnswered ? 'All questions answered. Submit to check your results.' : 'Select an answer for each question to submit.'}
            </span>
          )}

          <div className="flex items-center gap-3">
            {submitted ? (
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-[#1C1917] bg-[#EBE5DA] hover:bg-[#DDD5C7] transition-all cursor-pointer whitespace-nowrap"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Quiz</span>
              </button>
            ) : (
              <button
                onClick={() => setSubmitted(true)}
                disabled={!allAnswered}
                className="px-6 py-2.5 rounded-xl text-xs font-semibold tracking-wide text-white bg-[#1B4332] hover:bg-[#143225] disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-sm whitespace-nowrap"
              >
                Check Answers
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
