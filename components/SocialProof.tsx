import React from 'react';
import { ShieldCheck, MessageSquare, Star } from 'lucide-react';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-black text-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <div className="inline-block p-2 px-4 rounded-full bg-brand-orange/10 text-brand-orange font-bold text-sm mb-6 uppercase tracking-wider">
            Proven Results
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Don't Trust Our Words. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-orange">Trust Their Results.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Real professionals with real jobs, kids, and stress. If they can do it, so can you.
          </p>
        </div>

        {/* Section 1: SMS Screenshots / The "Relationship" */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
            {/* SMS 1 */}
            <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-brand-blue"></div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                    <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold">A</div>
                    <div>
                        <p className="text-white font-bold text-sm">Aaron (Coach)</p>
                        <p className="text-slate-500 text-xs">iMessage</p>
                    </div>
                </div>
                <div className="space-y-4 flex-grow">
                    <div className="bg-slate-800 rounded-2xl rounded-tl-none p-4 max-w-[85%]">
                        <p className="text-sm text-slate-300">Check in morning! Scale hasn't moved in 3 days but look at these measurements.</p>
                    </div>
                     <div className="bg-brand-blue text-white rounded-2xl rounded-tr-none p-4 max-w-[85%] ml-auto">
                        <p className="text-sm">Dude. You lost 2 inches off your waist. The scale is a liar. Trust the process. You are literally melting fat.</p>
                    </div>
                    <div className="bg-slate-800 rounded-2xl rounded-tl-none p-4 max-w-[85%]">
                        <p className="text-sm text-slate-300">Okay needed to hear that. Sticking to the plan today 100%.</p>
                    </div>
                </div>
            </div>

             {/* SMS 2 */}
             <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 flex flex-col relative overflow-hidden lg:translate-y-8">
                <div className="absolute top-0 left-0 w-full h-2 bg-brand-orange"></div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                    <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-white font-bold">S</div>
                    <div>
                        <p className="text-white font-bold text-sm">Sarah (Client)</p>
                        <p className="text-slate-500 text-xs">iMessage</p>
                    </div>
                </div>
                <div className="space-y-4 flex-grow">
                    <div className="bg-brand-blue text-white rounded-2xl rounded-tr-none p-4 max-w-[85%] ml-auto">
                        <p className="text-sm">How did the dress fitting go??</p>
                    </div>
                     <div className="bg-slate-800 rounded-2xl rounded-tl-none p-4 max-w-[85%]">
                        <p className="text-sm text-slate-300">I AM CRYING. It zips up. It actually is loose. I haven't been this size since college.</p>
                    </div>
                    <div className="bg-brand-blue text-white rounded-2xl rounded-tr-none p-4 max-w-[85%] ml-auto">
                        <p className="text-sm">That is what I'm talking about!! So proud of you.</p>
                    </div>
                </div>
            </div>

             {/* SMS 3 */}
             <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-brand-blue"></div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                    <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-white font-bold">M</div>
                    <div>
                        <p className="text-white font-bold text-sm">Mike (Client)</p>
                        <p className="text-slate-500 text-xs">iMessage</p>
                    </div>
                </div>
                <div className="space-y-4 flex-grow">
                    <div className="bg-brand-blue text-white rounded-2xl rounded-tr-none p-4 max-w-[85%] ml-auto">
                        <p className="text-sm">You've been quiet. Everything okay?</p>
                    </div>
                     <div className="bg-slate-800 rounded-2xl rounded-tl-none p-4 max-w-[85%]">
                        <p className="text-sm text-slate-300">Honestly? I wanted to binge tonight. Stressful day at work.</p>
                    </div>
                    <div className="bg-brand-blue text-white rounded-2xl rounded-tr-none p-4 max-w-[85%] ml-auto">
                        <p className="text-sm">Don't do it. Go for a 10 min walk right now. Send me a pic of your shoes.</p>
                    </div>
                    <div className="bg-slate-800 rounded-2xl rounded-tl-none p-4 max-w-[85%]">
                        <p className="text-sm text-slate-300">Done. Walking now. Thanks for the push coach.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Section 2: The Wall of Wins (Masonryish Layout) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {/* Testimonial 1 */}
            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
                <div className="flex gap-1 text-brand-orange mb-4">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">"I lost 30 lbs in 16 weeks WITHOUT being perfect. The support was incredible and knowing I had a team behind me changed everything."</p>
                <div className="flex items-center gap-4">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Christina" className="w-12 h-12 rounded-full object-cover" />
                    <div>
                        <h4 className="text-white font-bold">Christina</h4>
                        <p className="text-xs text-brand-orange">Lost 30 lbs</p>
                    </div>
                </div>
            </div>

            {/* Testimonial 2 */}
             <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 lg:row-span-2 flex flex-col justify-between">
                <div>
                    <div className="flex gap-1 text-brand-orange mb-4">
                        {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                    </div>
                    <p className="text-slate-300 mb-6 leading-relaxed font-medium text-lg">"If you are thinking you're too old or your body is broken, listen to me: You can do this. Just start. The methodology just works."</p>
                </div>
                <div className="mt-4">
                     <div className="w-full h-48 bg-slate-900 rounded-lg overflow-hidden relative group mb-4">
                        <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" alt="Transformation" />
                        <span className="absolute inset-0 flex items-center justify-center font-bold text-white bg-black/40">Leslie's Results</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Leslie" className="w-12 h-12 rounded-full object-cover" />
                        <div>
                            <h4 className="text-white font-bold">Leslie</h4>
                            <p className="text-xs text-brand-orange">Age 54 Transformation</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
                <div className="flex gap-1 text-brand-orange mb-4">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">"Achieved an amazing transformation following the plan only about 20% of the time. It proved to me that consistency beats intensity."</p>
                <div className="flex items-center gap-4">
                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Xochitl" className="w-12 h-12 rounded-full object-cover" />
                    <div>
                        <h4 className="text-white font-bold">Xochitl</h4>
                        <p className="text-xs text-brand-orange">Lifestyle Change</p>
                    </div>
                </div>
            </div>

            {/* Testimonial 4 */}
             <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 lg:col-span-2">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1">
                        <div className="flex gap-1 text-brand-orange mb-4">
                            {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                        </div>
                        <p className="text-slate-300 mb-6 leading-relaxed">"I was a skeptic. I've tried everything. Keto, Paleo, Fasting. Nothing stuck. This program fixed my relationship with food first, then the weight just fell off. 45lbs down and kept it off for a year."</p>
                         <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold">D</div>
                            <div>
                                <h4 className="text-white font-bold">Dr. Chad Cherry</h4>
                                <p className="text-xs text-brand-orange">Down 45lbs</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-48 h-32 bg-slate-900 rounded-lg flex-shrink-0 overflow-hidden relative">
                         <img src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover opacity-70" alt="Transformation" />
                    </div>
                </div>
            </div>
        </div>

        {/* Guarantee Block */}
        <div className="bg-gradient-to-br from-brand-blue to-brand-blueDark rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
             {/* Background Pattern */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
             
             <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0 bg-white text-brand-blue p-6 rounded-full shadow-lg">
                    <ShieldCheck size={48} />
                </div>
                <div className="text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">The 100% Execution Guarantee</h3>
                    <p className="text-blue-100 text-lg leading-relaxed">
                        If you execute the plan at <span className="font-bold underline decoration-brand-orange underline-offset-4">85% consistency</span> and see NO results in the first 30 days, we will give you a <span className="font-bold">FULL REFUND</span>. We are that confident in our process.
                    </p>
                </div>
             </div>
        </div>

      </div>
    </section>
  );
};