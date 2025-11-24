import React, { useState } from 'react';
import { Dumbbell, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-blue text-white rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(24,77,155,0.5)]">
              <Dumbbell size={24} strokeWidth={2.5} />
            </div>
            <span className="font-black text-2xl tracking-tight text-white uppercase">
              iFM<span className="text-brand-orange">Coaching</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-white hover:text-brand-orange font-medium transition-colors">About Me</a>
            <a href="#what-you-get" className="text-white hover:text-brand-orange font-medium transition-colors">What You Get</a>
            <a href="#how-it-works" className="text-white hover:text-brand-orange font-medium transition-colors">How it Works</a>
            <a href="#faq" className="text-white hover:text-brand-orange font-medium transition-colors">FAQ</a>
            <a href="#join-details" className="px-6 py-2 bg-brand-orange text-white font-bold rounded-lg hover:bg-brand-orange/90 transition-colors shadow-lg">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 border-b border-slate-800 backdrop-blur-lg p-4 flex flex-col gap-4 shadow-2xl">
            <a href="#about" className="text-white hover:text-brand-orange font-medium py-2" onClick={() => setIsMenuOpen(false)}>About Me</a>
            <a href="#what-you-get" className="text-white hover:text-brand-orange font-medium py-2" onClick={() => setIsMenuOpen(false)}>What You Get</a>
            <a href="#how-it-works" className="text-white hover:text-brand-orange font-medium py-2" onClick={() => setIsMenuOpen(false)}>How it Works</a>
            <a href="#faq" className="text-white hover:text-brand-orange font-medium py-2" onClick={() => setIsMenuOpen(false)}>FAQ</a>
            <a href="#join-details" className="px-6 py-3 bg-brand-orange text-white font-bold rounded-lg text-center" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};