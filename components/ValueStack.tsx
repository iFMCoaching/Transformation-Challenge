import React from 'react';
import { Smartphone, Utensils, Brain, MessageSquare, Check } from 'lucide-react';

export const ValueStack: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-0 w-1/2 h-full bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              16 Weeks of <span className="text-brand-orange">Customized Transformation</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              The first 8 weeks focus on building unbreakable habits. The final 8 weeks are intense execution. 
              We don't give you a template; we build a program around your life.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-brand-orange shadow-[0_0_15px_rgba(243,99,46,0.2)]">
                  <Utensils size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Ultra Customized Plans</h4>
                  <p className="text-slate-400 text-sm mt-1">
                    Meal plans based on your age, goals, lifestyle, and psychology with food. Workout programs tailored to your fitness level, time availability, and equipment.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-brand-orange shadow-[0_0_15px_rgba(243,99,46,0.2)]">
                  <Brain size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">8 Mindset Coaching Sessions</h4>
                  <p className="text-slate-400 text-sm mt-1">
                    Strategy calls built-in, strictly focusing on transforming your mindset to improve execution and break self-sabotage.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-brand-orange shadow-[0_0_15px_rgba(243,99,46,0.2)]">
                  <Smartphone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Daily Accountability App</h4>
                  <p className="text-slate-400 text-sm mt-1">
                    Daily task tracking via the <span className="text-white font-medium">iFM Coaching App</span>. We see when you log your food and workouts.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-brand-orange shadow-[0_0_15px_rgba(243,99,46,0.2)]">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Direct Access (No Bots)</h4>
                  <p className="text-slate-400 text-sm mt-1">
                    Direct text access to your coach. Real human support when you struggle, not automated responses.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 shadow-2xl">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
                <h3 className="font-bold text-xl text-white">What You Get</h3>
                <span className="bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full">ALL INCLUSIVE</span>
              </div>
              <ul className="space-y-4">
                {[
                    "16 Week Custom Meal Plan",
                    "16 Week Custom Workout Program",
                    "8x Mindset Coaching Calls",
                    "Bi-Weekly Measurement Analysis",
                    "iFM App Access",
                    "Private Community Access",
                    "Event Day Photoshoot",
                    "Team Banquet Dinner"
                ].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-300">
                        <div className="mr-3 p-1 bg-brand-orange/10 rounded-full">
                            <Check className="w-4 h-4 text-brand-orange" />
                        </div>
                        {item}
                    </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-slate-800">
                <div className="text-center">
                    <p className="text-sm text-slate-500 mb-2">Total Value: <span className="line-through">$4,500+</span></p>
                    <a href="sms:+13233793480?body=I'm interested in the challenge" className="block w-full py-4 bg-brand-orange text-white font-bold rounded-lg hover:bg-brand-orange/90 transition-colors shadow-lg">
                        Join The Challenge
                    </a>
                </div>
              </div>
            </div>
            {/* Visual Decoration */}
            <div className="absolute -z-10 top-12 -right-12 w-full h-full border-2 border-brand-blue/20 rounded-2xl hidden md:block"></div>
          </div>

        </div>
      </div>
    </section>
  );
};