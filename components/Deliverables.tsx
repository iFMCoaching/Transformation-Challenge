import React from 'react';
import { Brain, MessageSquare, Sliders, Activity } from 'lucide-react';

export const Deliverables: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Power Trio: Habits, Mindsets, Adaptability</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
                We utilize <strong>science, math, and real coaching</strong> to ensure we improve your mindsets, which improves your habits, which improves your execution.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
             {/* Card 1 */}
             <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow flex gap-6">
                <div className="shrink-0">
                    <div className="w-12 h-12 bg-brand-orange/10 text-brand-orange rounded-lg flex items-center justify-center">
                        <Brain size={24} />
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">8 Mindset Coaching Sessions</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Built in because if we improve your mindsets, we improve your execution. We work on overcoming obstacles and <strong>self-limiting beliefs</strong>.
                    </p>
                </div>
            </div>

             {/* Card 2 */}
             <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow flex gap-6">
                <div className="shrink-0">
                    <div className="w-12 h-12 bg-brand-orange/10 text-brand-orange rounded-lg flex items-center justify-center">
                        <Activity size={24} />
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Personalized Accountability</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Bi-weekly progress analysis, and weekly check-ins to prevent you from trying to <strong>figure it out on your own</strong>.
                    </p>
                </div>
            </div>

             {/* Card 3 */}
             <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow flex gap-6">
                 <div className="shrink-0">
                    <div className="w-12 h-12 bg-brand-orange/10 text-brand-orange rounded-lg flex items-center justify-center">
                        <MessageSquare size={24} />
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Direct Access to Me</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        I will <strong>personally text you (NOT a BOT)</strong> and walk you through the program.
                    </p>
                </div>
            </div>

            {/* Card 4 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow flex gap-6">
                 <div className="shrink-0">
                    <div className="w-12 h-12 bg-brand-orange/10 text-brand-orange rounded-lg flex items-center justify-center">
                        <Sliders size={24} />
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Ultra Customized Plans</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Meal Plan and Workout Program that fit your lifestyle and schedule. No template work here.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};