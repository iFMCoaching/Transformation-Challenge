import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { ProgramDefinition } from './components/ProgramDefinition';
import { Benefits } from './components/Benefits';
import { Bonuses } from './components/Bonuses';
import { Testimonials } from './components/Testimonials';
import { Pillars } from './components/Pillars';
import { HowItWorks } from './components/HowItWorks';
import { JoinDetails } from './components/JoinDetails';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { Guarantee } from './components/Guarantee';
import { OverviewList } from './components/OverviewList';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black font-sans text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <ProgramDefinition />
        <Benefits />
        <Bonuses />
        <Testimonials />
        <Guarantee />
        <Pillars />
        <HowItWorks />
        <OverviewList />
        <JoinDetails />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;