import React from 'react';
import { Check, X, ArrowRight } from 'lucide-react';

export const ProgramDefinition: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">The Premium Coaching Solution</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
                The <strong>16-Week Transformation Challenge</strong> addresses the <em>why</em> you fail, not just the <em>what</em> to eat. 
                It is a comprehensive system built on <strong>science, math, and real coaching</strong> to help you build improved mindsets that create sustainable fat loss.
            </p>
        </div>

        <div className="overflow-hidden bg-white rounded-3xl shadow-xl border border-slate-200 mb-12">
            <div className="grid md:grid-cols-2">
                
                {/* What It Is */}
                <div className="p-8 md:p-12 bg-brand-blue/5">
                    <h3 className="text-2xl font-bold text-brand-blue mb-8 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center shrink-0"><Check size={18} strokeWidth={3} /></div>
                        What This Program IS
                    </h3>
                    <ul className="space-y-6">
                        <li className="flex gap-4">
                            <Check className="w-6 h-6 text-brand-blue shrink-0 mt-1" />
                            <p className="text-slate-700 font-medium">A PROVEN way to help you get <strong>long-term results</strong>.</p>
                        </li>
                        <li className="flex gap-4">
                            <Check className="w-6 h-6 text-brand-blue shrink-0 mt-1" />
                            <p className="text-slate-700 font-medium">A full program designed to help you build <strong>self-discipline and resiliency</strong>.</p>
                        </li>
                        <li className="flex gap-4">
                            <Check className="w-6 h-6 text-brand-blue shrink-0 mt-1" />
                            <p className="text-slate-700 font-medium">A high-touch coaching system where you receive <strong>direct text access</strong> to your coach.</p>
                        </li>
                        <li className="flex gap-4">
                            <Check className="w-6 h-6 text-brand-blue shrink-0 mt-1" />
                            <p className="text-slate-700 font-medium">Designed to help you <strong>lose fat sustainably</strong> without sacrificing your lifestyle.</p>
                        </li>
                        <li className="flex gap-4">
                            <Check className="w-6 h-6 text-brand-blue shrink-0 mt-1" />
                            <p className="text-slate-700 font-medium">Guaranteed to give you results if you execute at <strong>85%</strong>.</p>
                        </li>
                    </ul>
                </div>

                {/* What It Is Not - LOUD AND BOLD */}
                <div className="p-8 md:p-12 bg-red-50 border-t md:border-t-0 md:border-l border-red-100">
                    <h3 className="text-2xl font-black text-red-600 mb-8 flex items-center gap-3 uppercase tracking-tight">
                         <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg shrink-0"><X size={24} strokeWidth={4} /></div>
                        What This Is NOT
                    </h3>
                    <ul className="space-y-6">
                         <li className="flex gap-4 items-center">
                            <X className="w-8 h-8 text-red-600 shrink-0 stroke-[3px]" />
                            <p className="text-slate-900 font-bold text-lg">NOT your normal "here is a meal plan" program.</p>
                        </li>
                        <li className="flex gap-4 items-center">
                            <X className="w-8 h-8 text-red-600 shrink-0 stroke-[3px]" />
                            <p className="text-slate-900 font-bold text-lg">NOT a short-term, 4 week type of deal.</p>
                        </li>
                        <li className="flex gap-4 items-center">
                            <X className="w-8 h-8 text-red-600 shrink-0 stroke-[3px]" />
                            <p className="text-slate-900 font-bold text-lg">NOT an impersonal service with Automated Bots.</p>
                        </li>
                        <li className="flex gap-4 items-center">
                            <X className="w-8 h-8 text-red-600 shrink-0 stroke-[3px]" />
                            <p className="text-slate-900 font-bold text-lg">NOT a program where you have to count calories.</p>
                        </li>
                         <li className="flex gap-4 items-center">
                            <X className="w-8 h-8 text-red-600 shrink-0 stroke-[3px]" />
                            <p className="text-slate-900 font-bold text-lg">NOT for those who do not want a coach.</p>
                        </li>
                    </ul>
                </div>

            </div>
        </div>

        <div className="flex justify-center">
             <a href="#join-details" className="inline-flex items-center justify-center px-6 py-4 sm:px-8 text-lg font-bold text-white bg-brand-orange rounded-lg hover:bg-brand-orange/90 transition-all shadow-lg transform hover:-translate-y-1 w-full sm:w-auto">
                Book Your Call with Coach Aaron
                <ArrowRight className="ml-2 h-5 w-5" />
            </a>
        </div>

      </div>
    </section>
  );
};