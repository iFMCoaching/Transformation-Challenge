import React from 'react';
import { Camera, Trophy, UtensilsCrossed } from 'lucide-react';

export const EventHighlight: React.FC = () => {
  return (
    <section className="py-24 bg-brand-blue text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-orange opacity-20 blur-[100px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Not Just a Weight Loss Program.<br />This is a <span className="text-brand-orange">Competitive Event</span>.</h2>
                <p className="text-brand-orangeLight text-lg max-w-3xl mx-auto leading-relaxed">
                    Most people quit because there is no real deadline. We give you the "Super Bowl" of fitness.
                    Your goal is not just to lose weight, but to be ready for <strong>Event Day</strong>.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    {/* Feature 1 */}
                    <div className="flex gap-6 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                        <div className="flex-shrink-0 w-16 h-16 bg-white text-brand-blue rounded-xl flex items-center justify-center shadow-xl">
                            <Camera size={32} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Professional Photoshoot</h3>
                            <p className="text-blue-100 leading-relaxed">
                                You will step in front of a professional photographer with professional lighting. This is the moment you capture your hard work forever. The fear of the camera is the fuel that keeps you disciplined when you want to quit.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex gap-6 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                        <div className="flex-shrink-0 w-16 h-16 bg-brand-orange text-white rounded-xl flex items-center justify-center shadow-xl">
                            <UtensilsCrossed size={32} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Banquet & Awards</h3>
                            <p className="text-blue-100 leading-relaxed">
                                After the shoot, we celebrate. A massive team dinner where we break bread, share stories, and award the top transformations. It’s a night of glory, not just a "diet ending."
                            </p>
                        </div>
                    </div>
                </div>

                {/* Visual */}
                <div className="relative">
                    <div className="absolute -inset-4 border-2 border-brand-orange/30 rounded-2xl rotate-2"></div>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
                        <img 
                            src="https://images.unsplash.com/photo-1540206276207-3af25c08abc4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                            alt="Photoshoot Event Day" 
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-transparent to-transparent"></div>
                        <div className="absolute bottom-8 left-8 right-8">
                             <div className="flex items-center gap-2 text-brand-orange font-bold uppercase tracking-widest text-sm mb-2">
                                <Trophy size={16} />
                                The Finish Line
                             </div>
                             <p className="text-white font-bold text-2xl">"I've never felt more confident than I did on that day."</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};