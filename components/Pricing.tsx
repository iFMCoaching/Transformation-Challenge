import React from 'react';
import { ShieldCheck, Calendar, CheckCircle } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Urgency/Bonus Block */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-16 max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stop Wasting Time with Short Term Programs</h3>
            <p className="text-slate-400 mb-6">The deadline is rapidly approaching. We have room for <strong>only twenty spots</strong>.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-bold text-white">
                <div className="bg-brand-blue/20 px-4 py-2 rounded border border-brand-blue/30">Start: July 21</div>
                <div className="bg-brand-blue/20 px-4 py-2 rounded border border-brand-blue/30">Finish: Nov 8</div>
                <div className="bg-red-500/20 px-4 py-2 rounded border border-red-500/30 text-red-400 animate-pulse">Deadline: July 18</div>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-800 text-brand-orangeLight text-sm">
                <span className="font-bold">BONUS:</span> Instant access to Dining Out Guidelines, Meal Prep Videos, and 40+ Video Trainings.
            </div>
        </div>

        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Your Investment</h2>
            <p className="text-slate-400">A total of <strong>$5,000 value</strong> including 16-Week Program, Photoshoot, and Coaching.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-20">
            {/* Option 1 */}
            <div className="bg-white rounded-2xl p-8 text-slate-900 flex flex-col">
                <h3 className="text-xl font-bold mb-2">Monthly Pay</h3>
                <div className="text-4xl font-extrabold mb-6">
                    $397 <span className="text-lg text-slate-500 font-normal">/month</span>
                </div>
                <p className="text-slate-600 text-sm mb-8">For 4 months. Total commitment $1,588.</p>
                <button className="w-full py-4 bg-slate-200 text-slate-900 font-bold rounded-lg hover:bg-slate-300 transition-colors mt-auto">
                    Choose Monthly
                </button>
            </div>

            {/* Option 2 */}
            <div className="bg-brand-orange rounded-2xl p-8 text-white relative transform md:-translate-y-4 shadow-2xl flex flex-col ring-4 ring-brand-orange/20">
                <div className="absolute top-0 right-0 bg-white text-brand-orange text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                    SAVE $400
                </div>
                <h3 className="text-xl font-bold mb-2">One-Time Fee</h3>
                <div className="text-4xl font-extrabold mb-6">
                    $1,200 <span className="text-lg text-white/80 font-normal">/one-time</span>
                </div>
                <p className="text-white/90 text-sm mb-8">Pay once, save big. Total commitment.</p>
                <button className="w-full py-4 bg-white text-brand-orange font-bold rounded-lg hover:bg-slate-100 transition-colors mt-auto shadow-lg">
                    Choose One-Time
                </button>
            </div>
        </div>

        {/* Guarantee */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 to-slate-900 rounded-3xl p-8 md:p-12 border border-slate-800 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-2 bg-green-500"></div>
             <div className="flex flex-col md:flex-row gap-8 items-start">
                 <div className="shrink-0 bg-green-500/10 p-4 rounded-full text-green-500">
                     <ShieldCheck size={48} />
                 </div>
                 <div>
                     <h3 className="text-2xl font-bold text-white mb-4">The 100% Execution Guarantee</h3>
                     <p className="text-slate-300 leading-relaxed mb-4">
                         If you execute the plan at <strong>85% consistency</strong> for the first 30 days and <strong>do not see results</strong>, we will give you a <strong>full refund, no questions asked</strong>.
                     </p>
                     <div className="flex items-center gap-2 text-sm text-slate-400">
                         <CheckCircle size={16} className="text-green-500" />
                         <span>If you struggle, I promise to do EVERYTHING in my power to get you consistent.</span>
                     </div>
                 </div>
             </div>
        </div>

      </div>
    </section>
  );
};