import React from 'react';
import { Phone, FileCode, CalendarCheck, Activity, Trophy, Quote } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Step 1: Schedule Call - Share Skepticism",
      desc: "I want you to share whatever skepticism you have about me or my program. No commitment; just a conversation."
    },
    {
      icon: <FileCode className="w-6 h-6" />,
      title: "Step 2: Get Ultra Customized Strategy",
      desc: "Submit your bio-data. We use this to create fully individualized Nutrition, Exercise, Habit, and Mindset plans."
    },
    {
      icon: <CalendarCheck className="w-6 h-6" />,
      title: "Step 3: Start The Journey (Jan 12)",
      desc: "Begin the 16-week challenge. You immediately begin building habits by focusing on one line item at a time."
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Step 4: Track, Coach & Adjust",
      desc: "Submit progress every two weeks. If you struggle for 2-3 days, reach out immediately for mindset coaching."
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Step 5: Event Day & Celebrate",
      desc: "Finish the Challenge. Attend the Professional Photoshoot and Team Banquet Dinner to celebrate."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
          <p className="text-slate-500">Your journey is designed for clarity and guaranteed accountability.</p>
        </div>

        <div className="grid md:grid-cols-5 gap-6 mb-20">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                 <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-brand-blue shadow-lg group-hover:scale-110 transition-transform mb-6 relative">
                    {step.icon}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-orange rounded-full text-white text-xs flex items-center justify-center font-bold">
                        {i + 1}
                    </div>
                 </div>
                 <h3 className="font-bold text-slate-900 mb-2 leading-tight">{step.title}</h3>
                 <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
        </div>

        {/* Social Proof */}
        <div className="max-w-4xl mx-auto bg-brand-blue/5 rounded-3xl p-8 md:p-12 border border-brand-blue/10 relative">
            <Quote className="absolute top-8 left-8 text-brand-blue/20 w-16 h-16" />
            <div className="relative z-10 text-center">
                <p className="text-xl md:text-2xl font-medium text-slate-800 italic mb-6 leading-relaxed">
                    "The process is seamless. I was worried about the tech and the tracking, but the app is idiot-proof, and having Aaron text me when I missed a log kept me honest. Step 2 really matters—the customization is unlike anything I've bought online before."
                </p>
                <div className="flex items-center justify-center gap-3">
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Process Testimonial" className="w-12 h-12 rounded-full object-cover border-2 border-brand-blue" />
                    <div className="text-left">
                        <p className="font-bold text-slate-900">Marcus T.</p>
                        <p className="text-xs text-slate-500">Lost 22lbs</p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};