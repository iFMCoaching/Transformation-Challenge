import React from 'react';
import { Brain, Camera, Utensils, Users, Activity } from 'lucide-react';

export const Benefits: React.FC = () => {
  const features = [
    {
      icon: <Utensils size={32} />,
      title: "16 Week Ultra Customized Meal Plan",
      desc: "Achieve your goals faster and more effectively with a meal plan tailored to your unique body, preferences, and lifestyle. You’ll learn how to eat sustainably without feeling restricted, so you can maintain your results long-term."
    },
    {
      icon: <Activity size={32} />,
      title: "16 Weeks Workout Program",
      desc: "Weights and Cardio Program - Build strength, improve fitness, and achieve your physical goals with a workout plan customized to your abilities and schedule. Each phase ensures you’re constantly progressing without hitting a plateau, no matter your starting point."
    },
    {
      icon: <Brain size={32} />,
      title: "8 Mindset Coaching Sessions",
      desc: "Break through mental barriers, overcome self-doubt, and develop the mental resilience needed to stay consistent. These calls will empower you to build confidence and a growth mindset that supports your goals, both during and after the program."
    },
    {
      icon: <Users size={32} />,
      title: "Community and Accountability",
      desc: "You’ll be part of a community that gives peer support, peer accountability, and an environment built for daily habit success. When you’re at your lowest, the group lifts you. The coaches and the community hold you accountable to get your workouts in and see results."
    }
  ];

  const eventFeature = {
      icon: <Camera size={32} />,
      title: "Event Day",
      subtitle: "Professional Photoshoot & Team Banquet Dinner",
      desc: "Professional photoshoot in Houston, Texas, followed by a team banquet dinner. Celebrate your transformation with a professional photoshoot that showcase your hard work. Then celebrate with fellow challengers in a fun at a delicious dinner, and gain the recognition you earned."
  };

  return (
    <section id="what-you-get" className="py-16 md:py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div>
             <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">What You Get</h2>
             <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
                A comprehensive ecosystem designed to guarantee your success.
             </p>
             
             {/* First 4 Items */}
             <div className="grid md:grid-cols-2 gap-8 mb-8">
                 {features.map((feature, index) => (
                     <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:bg-slate-900 transition-colors group">
                         <div className="w-16 h-16 bg-brand-blue rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(24,77,155,0.3)]">
                             {feature.icon}
                         </div>
                         <h4 className="text-xl font-bold text-white mb-4">{feature.title}</h4>
                         <p className="text-slate-400 leading-relaxed text-sm">
                             {feature.desc}
                         </p>
                     </div>
                 ))}
             </div>

             {/* Event Day Full Width */}
             <div className="bg-gradient-to-br from-brand-blue/20 to-slate-900 border border-brand-blue/30 rounded-2xl p-8 md:p-12 hover:bg-brand-blue/10 transition-colors group relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                 <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                    <div className="shrink-0 w-20 h-20 bg-brand-orange rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(243,99,46,0.4)]">
                        {eventFeature.icon}
                    </div>
                    <div className="text-center md:text-left">
                        <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">{eventFeature.title}</h4>
                        <p className="text-brand-orange font-bold uppercase tracking-wide text-sm mb-4">{eventFeature.subtitle}</p>
                        <p className="text-blue-100 leading-relaxed max-w-3xl">
                            {eventFeature.desc}
                        </p>
                    </div>
                 </div>
             </div>
        </div>

      </div>
    </section>
  );
};