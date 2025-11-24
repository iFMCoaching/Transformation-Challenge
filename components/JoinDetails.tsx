import React from 'react';
import { Calendar, Clock, AlertTriangle, Unlock } from 'lucide-react';

export const JoinDetails: React.FC = () => {
  return (
    <section id="join-details" className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
       {/* Background Pattern */}
       <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-blue via-slate-900 to-slate-950"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Secure Your Spot</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                We limit the number of participants to ensure every client gets the coaching attention they deserve.
            </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-12 shadow-2xl relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-orange text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider shadow-lg flex items-center gap-2 whitespace-nowrap">
                <AlertTriangle size={16} />
                Deadline Approaching
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-slate-800 pt-6 md:pt-0">
                
                 {/* Registration Start */}
                <div className="flex flex-col items-center p-4">
                    <span className="text-slate-500 text-sm font-bold uppercase tracking-wide mb-2">Registration Start</span>
                    <div className="flex items-center gap-3 text-green-400 text-2xl font-bold animate-pulse">
                        <Unlock size={24} />
                        OPEN NOW
                    </div>
                </div>

                {/* Start */}
                <div className="flex flex-col items-center p-4">
                    <span className="text-slate-500 text-sm font-bold uppercase tracking-wide mb-2">Start Date</span>
                    <div className="flex items-center gap-3 text-white text-2xl font-bold">
                        <Calendar className="text-brand-blue" />
                        Jan 12th
                    </div>
                </div>

                {/* End */}
                 <div className="flex flex-col items-center p-4">
                    <span className="text-slate-500 text-sm font-bold uppercase tracking-wide mb-2">Finish Date</span>
                    <div className="flex items-center gap-3 text-white text-2xl font-bold">
                        <Trophy className="text-brand-blue" size={24} />
                        May 2nd
                    </div>
                </div>

                {/* Deadline */}
                <div className="flex flex-col items-center p-4">
                    <span className="text-red-400 text-sm font-bold uppercase tracking-wide mb-2">Join Deadline</span>
                    <div className="flex items-center gap-3 text-white text-2xl font-bold">
                        <Clock className="text-red-500" />
                        Jan 7th
                    </div>
                </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-800">
                 <p className="text-slate-300 mb-8 italic">
                    "The first step is to set up a call with us and get more info on how the challenge works."
                </p>
                <a href="tel:3233793480" className="inline-block w-full md:w-auto px-8 py-4 bg-white text-brand-blue font-bold rounded-xl hover:bg-slate-100 transition-colors shadow-lg text-lg">
                    Schedule Your Call with Aaron
                </a>
            </div>
        </div>

      </div>
    </section>
  );
};

// Simple Trophy icon component
const Trophy: React.FC<{ className?: string; size?: number }> = ({ className, size = 24 }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
);