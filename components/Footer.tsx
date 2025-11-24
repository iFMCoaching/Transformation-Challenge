import React from 'react';
import { Dumbbell, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
            
            {/* Brand & Address */}
            <div>
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 bg-brand-blue rounded flex items-center justify-center text-white">
                        <Dumbbell size={18} strokeWidth={2.5} />
                    </div>
                    <span className="font-bold text-lg text-white uppercase">iFM<span className="text-brand-orange">Coaching</span></span>
                </div>
                <p className="text-sm leading-relaxed mb-4">
                    15 N Chenevert St<br/>
                    Houston, Texas 77002<br/>
                    United States
                </p>
                <a href="tel:3233793480" className="text-white font-bold hover:text-brand-orange transition-colors block mb-1">(323) 379-3480</a>
            </div>

             {/* Trust Badges */}
            <div>
                <h4 className="text-white font-bold mb-6">Our Guarantee</h4>
                <div className="flex gap-4 items-start mb-4">
                    <ShieldCheck className="text-green-500 shrink-0" size={24} />
                    <div>
                        <p className="text-white font-bold text-sm">100% Money-Back Guarantee</p>
                        <p className="text-xs text-slate-500 mt-1">Execute at 85% for 30 days. No results? Full refund.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-start">
                    <ShieldCheck className="text-brand-blue shrink-0" size={24} />
                    <div>
                        <p className="text-white font-bold text-sm">Check Out REAL Transformations</p>
                        <p className="text-xs text-slate-500 mt-1">Real people, real results.</p>
                    </div>
                </div>
            </div>

            {/* Links */}
            <div>
                 <h4 className="text-white font-bold mb-6">Quick Links</h4>
                 <ul className="space-y-3 text-sm">
                     <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                     <li><a href="#faq" className="hover:text-white transition-colors">Read the Full FAQ Page</a></li>
                 </ul>
            </div>
        </div>
        
        <div className="pt-8 border-t border-slate-900 text-center text-xs text-slate-600">
             <p>&copy; {new Date().getFullYear()} iFM Coaching. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};