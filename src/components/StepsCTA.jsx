import React from 'react';
import { Rocket, Boxes, FileCode2, Download } from 'lucide-react';

const steps = [
  {
    title: 'Sketch your data',
    desc: 'Add models, fields, and relationships visually.',
    icon: Boxes,
  },
  {
    title: 'Generate the backend',
    desc: 'AI builds routes, controllers, validations, and tests.',
    icon: FileCode2,
  },
  {
    title: 'Export & integrate',
    desc: 'Download a ready-to-run project with a clean structure.',
    icon: Download,
  },
];

const StepsCTA = () => {
  return (
    <section className="w-full bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Build in three simple steps</h2>
          <p className="mt-3 text-zinc-400">From planning to production in minutes.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {steps.map(({ title, desc, icon: Icon }, i) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/[0.06] p-6">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md bg-emerald-400/10 text-emerald-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold">{i + 1}. {title}</h3>
              <p className="mt-1 text-sm text-zinc-400">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center">
          <a
            href="#playground"
            className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-emerald-400"
          >
            <Rocket className="h-4 w-4" /> Start building now
          </a>
        </div>

        <p className="mt-6 text-center text-xs text-zinc-500">Make-Back — focus on logic, not boilerplate.</p>
      </div>
    </section>
  );
};

export default StepsCTA;
