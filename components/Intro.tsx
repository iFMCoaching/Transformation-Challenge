import React from 'react';
import { UserCheck, AlertTriangle, RefreshCw, Ban, HeartCrack, Star } from 'lucide-react';

export const Intro: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Credibility Section */}
        <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/10 text-brand-blue rounded-full font-bold text-sm uppercase tracking-wide mb-6">
                <UserCheck size={16} />
                Meet Aaron Zambrano
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
                Change Creator. Impact Maker. <br/><span className="text-brand-orange">Transformation Coach.</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
                Aaron Zambrano is an award winning coach, published writer, and human biomechanics expert trusted by high performers for over 25 years. A decorated bikini and fitness model and pageant coach, he has trained 35 world champions and earned top international fitness model placements, with features on FOX and KLIF DFW radio. Aaron now helps busy professionals get lean, strong, and confident through simple, sustainable systems.
            </p>
        </div>

        {/* Social Proof */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 mb-20 max-w-5xl mx-auto shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0 w-full md:w-48 h-64 md:h-48 rounded-xl overflow-hidden relative">
                     <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Transformation Proof" className="w-full h-full object-cover" />
                     <div className="absolute bottom-0 left-0 right-0 bg-brand-blue/90 text-white text-xs font-bold text-center py-1">Real Client Result</div>
                </div>
                <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-1 text-brand-orange mb-3">
                        <Star size={20} fill="currentColor" />
                        <Star size={20} fill="currentColor" />
                        <Star size={20} fill="currentColor" />
                        <Star size={20} fill="currentColor" />
                        <Star size={20} fill="currentColor" />
                    </div>
                    <p className="text-slate-700 text-lg italic font-medium mb-4">
                        "I've worked with trainers before, but Aaron is different. He didn't just give me a plan; he changed how I think about food and myself. The 16 weeks flew by because I finally had a system that worked."
                    </p>
                    <p className="text-slate-900 font-bold">— Sarah M., 16-Week Challenger</p>
                </div>
            </div>
        </div>

        <hr className="border-slate-200 mb-20" />

        {/* Problem / Pain Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">Are you exhausted by the <span className="text-red-600">cycle of disappointment?</span></h3>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    We know that many clients carry the painful belief that their <strong>body is "broken"</strong> or that <strong>"genetics"</strong> won't allow them to see changes. You’re wasting effort and wasting years trying to solve the impossible riddle of losing fat sustainably.
                </p>
                
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="shrink-0 w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center">
                            <RefreshCw size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-lg">Starting Over on Monday</h4>
                            <p className="text-slate-600">Finding yourself constantly resetting, never building real momentum.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="shrink-0 w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center">
                            <HeartCrack size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-lg">Guilt & Shame</h4>
                            <p className="text-slate-600">Feeling guilty about skipping workouts or not sticking to your plan perfectly.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="shrink-0 w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center">
                            <Ban size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-lg">Self-Guided Failure</h4>
                            <p className="text-slate-600">Realizing that your self-guided approach is simply <strong>NOT going to work</strong>.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Agitation Block */}
            <div className="bg-slate-900 text-white p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 blur-[80px] rounded-full pointer-events-none"></div>
                
                <div className="relative z-10">
                    <div className="flex items-center gap-2 text-brand-orange font-bold uppercase tracking-wider mb-4">
                        <AlertTriangle size={18} />
                        The Consequences
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">What happens if you stay on this path?</h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                        You risk looking back with major <strong>regret</strong> for not pushing yourself harder. When you constantly stop, you miss out on the mental breakthroughs that show you, once and for all, that your body <strong>IS capable</strong>.
                    </p>
                    <div className="bg-white/10 p-6 rounded-xl border border-white/10 mb-8">
                        <p className="font-serif italic text-lg text-blue-100">
                            "Is there something wrong with my body and why I can't lose fat?"
                        </p>
                    </div>
                    <p className="font-bold text-white text-lg">
                        We guarantee to answer those questions by forcing you to <span className="text-brand-orange underline decoration-2 underline-offset-4">finish the sixteen weeks</span>.
                    </p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};