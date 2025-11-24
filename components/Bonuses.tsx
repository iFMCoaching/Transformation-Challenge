import React from 'react';
import { Gift, BookOpen, Video, Mic, Pill, FileText, Folder, List, Smartphone, Activity, Utensils, ArrowRight } from 'lucide-react';

export const Bonuses: React.FC = () => {
  const bonuses = [
    {
      icon: <Smartphone size={24} />,
      title: "iFM Coaching App",
      desc: "Simplify your journey with everything you need in one place. Track workouts, meals, and habits, monitor your progress, and stay connected with your coach for real-time support and guidance."
    },
    {
      icon: <Activity size={24} />,
      title: "Progress and Measurement Feedback Every Two Weeks",
      desc: "Stay on track with bi-weekly check-ins that provide clarity on what’s working and where adjustments are needed. This ensures you’re constantly improving and never wasting time on strategies that aren’t effective."
    },
    {
      icon: <Utensils size={24} />,
      title: "Dining Out Guidelines",
      desc: "Gain confidence when dining out by knowing exactly how to make smart choices at restaurants. Enjoy social events without compromising your progress."
    },
    {
      icon: <Pill size={24} />,
      title: "Supplement Guides",
      desc: "Understand which supplements align with your goals so you can save money and avoid confusion. This guide helps you focus on what will genuinely support your results."
    },
    {
      icon: <Video size={24} />,
      title: "Meal Prep Videos",
      desc: "Make healthy eating easier and faster with step-by-step videos that show you how to prep meals efficiently. You’ll save time and stay consistent with your nutrition."
    },
    {
      icon: <Folder size={24} />,
      title: "Access to Membership Portal",
      desc: "Access all your resources, including videos, tools, and guides, in one easy-to-navigate location. Stay organized and informed throughout your journey."
    },
    {
      icon: <BookOpen size={24} />,
      title: "Recipe Packs",
      desc: "Enjoy 120+ delicious and goal-friendly recipes, including options for low-carb, high-protein, plant-based, and desserts. Eating for your goals has never been so enjoyable."
    },
    {
      icon: <Mic size={24} />,
      title: "Podcasts",
      desc: "Learn strategies for fat loss, overcoming failure, and building motivation through easily digestible podcast episodes. These insights keep you inspired and on track."
    },
    {
      icon: <Video size={24} />,
      title: "40+ Video Trainings",
      desc: "Gain expert knowledge on fat loss, muscle building, mindset, nutrition, and more. These trainings empower you with the tools and strategies needed to succeed."
    },
    {
      icon: <FileText size={24} />,
      title: "eBooks",
      desc: "Get actionable advice on topics like macro calculations, fat loss strategies, and competition prep. These resources give you step-by-step guidance tailored to your needs."
    },
    {
      icon: <List size={24} />,
      title: "Cheat Sheets",
      desc: "Use quick-reference guides to simplify your journey. From fat loss tips to meal packing strategies, these cheat sheets make it easy to stay consistent and effective."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 text-brand-orange rounded-full font-bold text-sm uppercase tracking-wide mb-6">
                <Gift size={16} />
                Limited Time Included
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Exclusive Bonuses</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
                When you join the challenge, you get instant access to these additional resources to speed up your results.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {bonuses.map((bonus, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:bg-slate-800 hover:border-brand-orange/50 transition-all group">
                    <div className="flex items-start gap-4">
                        <div className="shrink-0 w-10 h-10 bg-brand-orange/10 text-brand-orange rounded-lg flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-colors">
                            {bonus.icon}
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-2 text-lg">{bonus.title}</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {bonus.desc}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className="flex justify-center">
             <a href="#join-details" className="inline-flex items-center justify-center px-6 py-4 sm:px-8 text-lg font-bold text-white bg-brand-orange rounded-lg hover:bg-brand-orange/90 transition-all shadow-lg transform hover:-translate-y-1 w-full sm:w-auto">
                Schedule a Call to Claim These Bonuses
                <ArrowRight className="ml-2 h-5 w-5" />
            </a>
        </div>

      </div>
    </section>
  );
};