import React from 'react';
import { Star, Play } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-bold uppercase tracking-wide mb-4">Social Proof</div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">We Don't Promise, We Deliver.</h2>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            These are real people with real results that I have personally helped. We don't promise, we make it happen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Christina */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow-lg border border-slate-100">
                <div className="flex gap-1 text-brand-orange mb-4">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">Christina</h4>
                <p className="text-xs text-brand-blue font-bold uppercase tracking-wide mb-4">The Doctor Who Fixed Her Mindset</p>
                <p className="text-slate-600 italic mb-6 leading-relaxed text-sm">
                    "Despite a stressful job that led to binge eating, I lost <strong>30 lbs. in 16 short weeks WITHOUT being perfect</strong>. My success came from elevating my mindsets."
                </p>
                <div className="bg-slate-200 rounded-lg h-48 w-full overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1605296867304-6f024845fe63?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover" alt="Christina Transformation" />
                </div>
            </div>

            {/* Renita */}
             <div className="bg-slate-50 p-8 rounded-2xl shadow-lg border border-slate-100">
                <div className="flex gap-1 text-brand-orange mb-4">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">Renita</h4>
                 <p className="text-xs text-brand-blue font-bold uppercase tracking-wide mb-4">Breaking 20 Years of Struggle</p>
                <p className="text-slate-600 italic mb-6 leading-relaxed text-sm">
                    "I broke through a lifetime's worth of belief systems. I lost <strong>20 lbs of fat WITHOUT exercise</strong>. I proved that age is just a number."
                </p>
                <div className="bg-slate-200 rounded-lg h-48 w-full overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover grayscale" alt="Renita Transformation" />
                </div>
            </div>

            {/* Xochitl */}
             <div className="bg-slate-50 p-8 rounded-2xl shadow-lg border border-slate-100">
                <div className="flex gap-1 text-brand-orange mb-4">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">Xochitl</h4>
                 <p className="text-xs text-brand-blue font-bold uppercase tracking-wide mb-4">Proof Perfection Is Impossible</p>
                <p className="text-slate-600 italic mb-6 leading-relaxed text-sm">
                    "I achieved an amazing transformation despite only following the meal plan <strong>about 20% of the time</strong>. I took clothes out of my closet I haven't worn in years."
                </p>
                <div className="bg-slate-200 rounded-lg h-48 w-full overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover" alt="Xochitl Transformation" />
                </div>
            </div>
        </div>

        {/* Video Placeholder */}
        <div className="max-w-3xl mx-auto">
            <div className="relative bg-black rounded-2xl overflow-hidden aspect-video shadow-2xl group cursor-pointer border-4 border-white">
                <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-all" alt="Leslie Video" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform">
                        <Play fill="white" className="text-white w-6 h-6" />
                    </div>
                    <p className="text-white font-bold mt-4 text-lg drop-shadow-md">Leslie's Advice Video</p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};