import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Playground from './components/Playground';
import StepsCTA from './components/StepsCTA';

const App = () => {
  return (
    <div className="min-h-screen bg-black font-sans antialiased">
      <Hero />
      <Features />
      <Playground />
      <StepsCTA />
      <footer className="border-t border-white/10 bg-black px-6 py-6 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Make-Back. Built for developers who ship.
      </footer>
    </div>
  );
};

export default App;
