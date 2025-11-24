import React from 'react';
import { ShieldCheck, Check } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-blue relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-2xl text-center border border-white/10">
          
          <div className="inline-flex items-center justify-center p-4 bg-brand-orange/10 text-brand-orange rounded-full mb-8">
            <ShieldCheck size={48} strokeWidth={1.5} />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            The 100% Execution Guarantee
          </h2>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
            We are so confident in our coaching methodology that we remove the financial risk for you. You simply need to show up.
          </p>

          <div className="bg-slate-50 rounded-2xl p-6 md:p-10 border border-slate-200 max-w-4xl mx-auto mb-10 shadow-inner">
             <p className="text-lg md:text-2xl font-medium text-slate-800 leading-relaxed">
                If you execute the plan at <span className="font-bold text-brand-blue border-b-4 border-brand-orange/30">85% consistency</span> and see <span className="font-bold text-red-500">NO results</span> in the first 30 days, we will give you a <span className="font-bold text-slate-900">FULL REFUND</span>.
             </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12 text-slate-700">
              <div className="flex items-center justify-center gap-3 font-bold">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                      <Check size={14} strokeWidth={4} />
                  </div>
                  No Questions Asked
              </div>
              <div className="flex items-center justify-center gap-3 font-bold">
                   <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                      <Check size={14} strokeWidth={4} />
                  </div>
                  No Hard Feelings
              </div>
          </div>

        </div>
      </div>
    </section>
  );
};