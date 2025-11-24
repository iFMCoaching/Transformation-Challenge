import React from 'react';
import { Calendar, Users, Trophy, Flame, MessageSquare, ArrowRight } from 'lucide-react';

export const Pillars: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">The 4 Pillars of Execution</h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
            After years of coaching the elite bikini and fitness models, I learned, their results came down to 1 thing; <strong>EXECUTION</strong>. 
            And the secret to their execution were these 4 pillars. If I can get you to execute, you win every time.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
            
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calendar size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">1. Hard Deadline</h3>
                <p className="text-slate-600">
                    This cannot be moved. Without a deadline, there is no urgency. This creates the focus needed to start NOW, not "next Monday".
                </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">2. Community</h3>
                <p className="text-slate-600">
                    You are side-by-side with others. Healthy peer pressure motivates people to move mountains when they see others winning.
                </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center mx-auto mb-6">
                    <Flame size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">3. Healthy Fear</h3>
                <p className="text-slate-600">
                    The fear of the photoshoot provides the necessary leverage. It creates consequences for not executing, lighting a fire in you.
                </p>
            </div>

             <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center mx-auto mb-6">
                    <Trophy size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">4. Grand Event</h3>
                <p className="text-slate-600">
                    The Photoshoot and Banquet. A non-negotiable celebration. This makes the journey about more than just a scale number; it's a victory lap.
                </p>
            </div>

        </div>
        
        <div className="mt-12 bg-brand-blue text-white p-6 md:p-8 rounded-2xl text-center max-w-4xl mx-auto">
            <p className="text-base md:text-lg font-medium leading-relaxed">
                "Take the photoshoot away, and now you have something you’re no longer scared of, which naturally lowers a person’s execution. By making the photoshoot NON negotiable, this will light a fire in you to EXECUTE like you never have before."
            </p>
        </div>

        {/* Social Proof */}
        <div className="mt-20 mb-16">
             <h3 className="text-2xl font-bold text-center mb-10 text-slate-900">The Pillars in Action</h3>
             <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl max-w-5xl mx-auto relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-2 bg-brand-orange"></div>
                 <div className="grid md:grid-cols-2 gap-8 items-center">
                     <div>
                         <div className="flex gap-2 mb-4 text-brand-orange">
                             <MessageSquare size={24} fill="currentColor" />
                         </div>
                         <h4 className="text-xl font-bold mb-4">"I wanted to quit in Week 12."</h4>
                         <p className="text-slate-300 leading-relaxed italic mb-4">
                             "The 'Healthy Fear' pillar saved me. If I didn't have that photoshoot booked, I would have skipped my workouts when work got crazy. Knowing the date wasn't moving made me show up. The community wouldn't let me fail either. These pillars are the real deal."
                         </p>
                         <div className="flex items-center gap-3">
                             <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center font-bold">D</div>
                             <div>
                                 <p className="font-bold">David K.</p>
                                 <p className="text-xs text-slate-400">Entrepreneur</p>
                             </div>
                         </div>
                     </div>
                     <div className="h-48 md:h-64 bg-slate-800 rounded-xl overflow-hidden">
                         <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Community Support" className="w-full h-full object-cover opacity-80" />
                     </div>
                 </div>
             </div>
        </div>

        <div className="flex justify-center">
             <a href="#join-details" className="inline-flex items-center justify-center px-6 py-4 sm:px-8 text-lg font-bold text-white bg-brand-orange rounded-lg hover:bg-brand-orange/90 transition-all shadow-lg transform hover:-translate-y-1 w-full sm:w-auto">
                Talk to Aaron About Your Execution Plan
                <ArrowRight className="ml-2 h-5 w-5" />
            </a>
        </div>

      </div>
    </section>
  );
};