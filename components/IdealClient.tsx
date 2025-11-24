import React from 'react';
import { Check, X } from 'lucide-react';

export const IdealClient: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/10 skew-x-12"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* The Hopeful */}
          <div className="bg-white rounded-2xl p-10 shadow-2xl">
            <h3 className="text-3xl font-bold mb-2 text-brand-blue">Who This Is For</h3>
            <p className="text-slate-500 mb-8 font-medium uppercase tracking-wide text-sm">The Hopeful</p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-1 shrink-0"><Check size={16} strokeWidth={3} /></div>
                <p className="text-slate-700 text-lg">You are ready to break through a <strong>lifetime's worth of belief systems</strong>.</p>
              </li>
              <li className="flex gap-4">
                 <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-1 shrink-0"><Check size={16} strokeWidth={3} /></div>
                <p className="text-slate-700 text-lg">You feel like you've tried every program and <strong>nothing works</strong>.</p>
              </li>
              <li className="flex gap-4">
                 <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-1 shrink-0"><Check size={16} strokeWidth={3} /></div>
                <p className="text-slate-700 text-lg">You need a full program that helps you <strong>build self-discipline</strong>.</p>
              </li>
               <li className="flex gap-4">
                 <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-1 shrink-0"><Check size={16} strokeWidth={3} /></div>
                <p className="text-slate-700 text-lg">You are ready to stop operating from frustration and start knowing: <strong>"Just tell me what I need to do."</strong></p>
              </li>
            </ul>
          </div>

          {/* The Unwilling */}
          <div className="bg-slate-800 rounded-2xl p-10 shadow-2xl border border-slate-700">
            <h3 className="text-3xl font-bold mb-2 text-brand-orange">Who This Is NOT For</h3>
             <p className="text-slate-400 mb-8 font-medium uppercase tracking-wide text-sm">The Unwilling</p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-red-900/50 flex items-center justify-center text-red-500 mt-1 shrink-0"><X size={16} strokeWidth={3} /></div>
                <p className="text-slate-300 text-lg">You are seeking <strong>just another quick fix</strong>.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-red-900/50 flex items-center justify-center text-red-500 mt-1 shrink-0"><X size={16} strokeWidth={3} /></div>
                <p className="text-slate-300 text-lg">You are <strong>unwilling to be coached, to be guided, and to be directed</strong>.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-red-900/50 flex items-center justify-center text-red-500 mt-1 shrink-0"><X size={16} strokeWidth={3} /></div>
                <p className="text-slate-300 text-lg">You think you can achieve a transformation by letting your <strong>feelings and emotions</strong> dictate your actions.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-red-900/50 flex items-center justify-center text-red-500 mt-1 shrink-0"><X size={16} strokeWidth={3} /></div>
                <p className="text-slate-300 text-lg">You are <strong>unwilling to be held accountable</strong>.</p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};