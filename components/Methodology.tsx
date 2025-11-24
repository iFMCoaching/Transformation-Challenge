import React from 'react';
import { Calendar, Users, Camera, Flame } from 'lucide-react';

export const Methodology: React.FC = () => {
  const pillars = [
    {
      icon: <Calendar className="w-8 h-8 text-brand-orange" />,
      title: "Hard Deadline",
      description: "An immovable Event Day. This date cannot be moved, creating real urgency to act now, not 'next Monday'."
    },
    {
      icon: <Users className="w-8 h-8 text-brand-orange" />,
      title: "The Community",
      description: "You are not alone. Join a supportive group providing peer accountability. We win together, we struggle together."
    },
    {
      icon: <Camera className="w-8 h-8 text-brand-orange" />,
      title: "The Celebration",
      description: "A professional photoshoot and Team Banquet Dinner. This isn't just about weight loss; it's about documenting your victory."
    },
    {
      icon: <Flame className="w-8 h-8 text-brand-orange" />,
      title: "Healthy Pressure",
      description: "Created by the deadline, community scores, and the fear of the photoshoot. This pressure breaks old habits of procrastination."
    }
  ];

  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Coaching Works: <br/>
            <span className="text-brand-blue">We Guarantee Execution</span>, Not Just Plans.
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            Meal plans are free on the internet. You are paying for coaching, accountability, guidance, and direction. 
            Our methodology is built on 4 Pillars derived from competition clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-brand-orange/50 transition-all duration-300 group hover:bg-slate-900">
              <div className="bg-black w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-800 group-hover:border-brand-orange/30 shadow-lg">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};