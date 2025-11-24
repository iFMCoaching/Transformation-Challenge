import React from 'react';
import { ArrowRight, AlertCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-black min-h-[85vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Transformation" 
            className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Achieve Sustainable Fat Loss <br />
            <span className="text-brand-orange">& Permanent Transformation.</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-2xl text-slate-300 mb-10 font-light leading-relaxed max-w-3xl">
             This is a <strong>PROVEN 16-week coaching event</strong> designed specifically for <strong>busy professionals</strong> who are tired of following programs designed for 20 year old's.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch sm:items-center">
            <a href="#join-details" className="inline-flex items-center justify-center px-6 py-4 sm:px-8 sm:py-5 text-lg font-bold text-white bg-brand-orange rounded-lg hover:bg-brand-orange/90 transition-all shadow-[0_0_25px_rgba(243,99,46,0.5)] transform hover:-translate-y-1 w-full sm:w-auto">
              Schedule Your Strategy Call with Aaron
              <ArrowRight className="ml-2 h-6 w-6" />
            </a>
          </div>
          
          {/* Hero Graphic Placeholder */}
          <div className="mt-12 sm:mt-16 bg-slate-900/60 backdrop-blur-md border border-slate-800 p-4 sm:p-6 rounded-2xl max-w-3xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-orange"></div>
              <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] sm:text-xs font-bold uppercase text-slate-400 tracking-widest">Real Results</span>
                  <span className="text-[10px] sm:text-xs font-bold uppercase text-brand-orange flex items-center gap-1">
                      <AlertCircle size={12} />
                      Scarcity Alert: Spots Limited
                  </span>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="relative rounded-lg overflow-hidden h-32 sm:h-48 md:h-64 bg-slate-800">
                      <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80" alt="Before Transformation" className="w-full h-full object-cover grayscale opacity-70" />
                      <div className="absolute bottom-0 left-0 right-0 p-1 sm:p-2 bg-black/60 text-white text-center text-xs sm:text-sm font-bold">Go From This...</div>
                  </div>
                   <div className="relative rounded-lg overflow-hidden h-32 sm:h-48 md:h-64 bg-slate-800 ring-2 ring-brand-orange shadow-[0_0_20px_rgba(243,99,46,0.3)]">
                      <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80" alt="After Transformation" className="w-full h-full object-cover" />
                      <div className="absolute bottom-0 left-0 right-0 p-1 sm:p-2 bg-brand-orange text-white text-center text-xs sm:text-sm font-bold">...to THIS</div>
                  </div>
              </div>
          </div>

        </div>
      </div>
    </section>
  );
};