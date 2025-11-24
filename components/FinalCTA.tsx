import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-blue relative overflow-hidden">
       <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
       
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="mb-12">
            <h2 className="text-2xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                How different would your life be if you <span className="text-brand-orange">NEVER</span> asked yourself these questions again?
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8 italic">
                "Is my body broken?" ... "Do I really have what it takes?"
            </p>
            <p className="text-white text-lg md:text-xl font-medium max-w-3xl mx-auto">
                In 16 weeks, you will know the exact things you had to do and trust that you will do them. This is your chance to stop wasting years.
            </p>
        </div>
        
        <div className="flex flex-col gap-6 items-center">
            <a href="#join-details" className="w-full sm:w-auto px-6 py-4 md:px-10 md:py-6 bg-brand-orange text-white font-bold text-lg md:text-xl rounded-lg shadow-[0_0_40px_rgba(243,99,46,0.6)] hover:bg-brand-orange/90 transition-all transform hover:-translate-y-1 flex items-center justify-center">
                Schedule a Call to Discuss Everything
                <ArrowRight className="ml-3 w-6 h-6" />
            </a>

             {/* Visual Placeholder */}
             <div className="mt-12 relative w-full max-w-sm mx-auto aspect-square bg-slate-900 rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Confident Professional" className="w-full h-full object-cover opacity-80" />
                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                     <p className="text-white font-bold">"You are capable. Let me prove it to you."</p>
                     <p className="text-brand-orange text-sm font-bold uppercase">- Aaron Zambrano</p>
                 </div>
             </div>
        </div>
      </div>
    </section>
  );
};