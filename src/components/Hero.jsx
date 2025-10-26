import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft vignette + gradient accents (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_30%,rgba(0,0,0,0.6)_70%,rgba(0,0,0,0.9)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300 backdrop-blur">
          <Sparkles className="h-4 w-4" />
          <span>AI-powered backend creation</span>
        </div>
        <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Make-Back
          <span className="block bg-gradient-to-r from-emerald-300 via-white to-emerald-300 bg-clip-text text-transparent">
            Design schemas. Ship backends.
          </span>
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-sm text-zinc-300 sm:text-base">
          Visual schema design meets AI-assisted code generation. Build clean, test-ready backends in minutes—not weeks.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#playground"
            className="group inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-emerald-400"
          >
            <Rocket className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            Try the Playground
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            Learn more
          </a>
        </div>
        <p className="mt-6 text-xs text-zinc-400">
          A seamless grid of dark, metallic cubes with subtle motion powers the ambience.
        </p>
      </div>
    </section>
  );
};

export default Hero;
