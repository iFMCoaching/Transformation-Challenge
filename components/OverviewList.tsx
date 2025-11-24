import React from 'react';
import { Check, Plus } from 'lucide-react';

export const OverviewList: React.FC = () => {
  const mainItems = [
    "16 Week Ultra Customized Meal Plan",
    "16 Weeks Workout Program (Weights & Cardio)",
    "8 Mindset Coaching Sessions",
    "Community and Accountability",
    "Event Day (Professional Photoshoot)",
    "Team Banquet Dinner",
    "iFM Coaching App",
    "Progress and Measurement Feedback Every Two Weeks"
  ];

  const bonusItems = [
    "Dining Out Guidelines",
    "Supplement Guides",
    "Meal Prep Videos",
    "Access to Membership Portal",
    "Recipe Packs (120+ Recipes)",
    "Podcasts",
    "40+ Video Trainings",
    "eBooks",
    "Cheat Sheets"
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Overview: What You Get</h2>
          <p className="text-slate-600">Everything you need to guarantee your transformation.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
            <div className="grid md:grid-cols-2">
                
                {/* Main Program */}
                <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-100">
                    <h3 className="text-xl font-bold text-brand-blue mb-8 uppercase tracking-wide">The Program</h3>
                    <ul className="space-y-4">
                        {mainItems.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <div className="mt-1 w-5 h-5 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
                                    <Check size={12} strokeWidth={3} />
                                </div>
                                <span className="text-slate-700 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Bonuses */}
                <div className="p-8 md:p-12 bg-slate-50">
                    <h3 className="text-xl font-bold text-brand-orange mb-8 uppercase tracking-wide flex items-center gap-2">
                        <Plus size={20} strokeWidth={3} />
                        Bonuses
                    </h3>
                    <ul className="space-y-4">
                        {bonusItems.map((item, i) => (
                             <li key={i} className="flex items-start gap-3">
                                <div className="mt-1 w-5 h-5 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0">
                                    <Check size={12} strokeWidth={3} />
                                </div>
                                <span className="text-slate-700 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
            
            <div className="bg-slate-900 p-6 text-center text-white">
                <p className="font-bold text-lg">Total Value: Priceless Transformation</p>
            </div>
        </div>

      </div>
    </section>
  );
};