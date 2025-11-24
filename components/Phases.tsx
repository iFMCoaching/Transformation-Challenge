import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Phases: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Path to Execution</h2>
            <p className="text-slate-400 max-w-3xl mx-auto text-lg">
                The real difference between success and failure is <strong>execution</strong>. Our 16-week program is split into two phases to master this skill.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
            {/* Phase 1 */}
            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 relative">
                <div className="absolute -top-5 left-8 bg-brand-blue px-4 py-2 rounded-lg font-bold text-sm uppercase tracking-wide shadow-lg">
                    Weeks 1-8
                </div>
                <h3 className="text-2xl font-bold mb-4 mt-4 text-white">Phase 1: Habit Building</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                    The goal is simply to <strong>build consistency</strong>. You will focus on <strong>one line item at a time</strong> from your customized Habit Plan, starting with the easiest ones to master and building momentum.
                </p>
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                    <p className="text-sm text-brand-blue font-bold">Goal:</p>
                    <p className="text-sm text-slate-400">Comfortably doing at least 8-9 high-impact behaviors.</p>
                </div>
            </div>

             {/* Phase 2 */}
             <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 relative">
                <div className="absolute -top-5 left-8 bg-brand-orange px-4 py-2 rounded-lg font-bold text-sm uppercase tracking-wide shadow-lg text-white">
                    Weeks 9-16
                </div>
                <h3 className="text-2xl font-bold mb-4 mt-4 text-white">Phase 2: The Intentional Phase</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                    This is where we <strong>push to the extreme limit</strong>. The focus shifts to an intentional <strong>90% execution rate</strong> on core behaviors. The hardest part is overcoming the thoughts to quit.
                </p>
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                    <p className="text-sm text-brand-orange font-bold">Goal:</p>
                    <p className="text-sm text-slate-400">Guaranteed radical body change through intense execution.</p>
                </div>
            </div>
        </div>

        <div className="mt-12 text-center">
            <ArrowDown className="mx-auto text-slate-600 animate-bounce w-8 h-8" />
        </div>

      </div>
    </section>
  );
};