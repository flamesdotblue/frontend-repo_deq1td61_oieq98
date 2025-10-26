import React from 'react';
import { Boxes, Wand2, FolderTree, TestTube, Download, ShieldCheck, GitBranch, FileCode2 } from 'lucide-react';

const features = [
  {
    title: 'Visual Schema Design',
    desc: 'Drag-and-drop models and relationships with instant previews.',
    icon: Boxes,
  },
  {
    title: 'AI-Assisted Generation',
    desc: 'Routes, controllers, and validations auto-created for you.',
    icon: Wand2,
  },
  {
    title: 'Structured Codebase',
    desc: 'Clean folders and files, ready for growth and teamwork.',
    icon: FolderTree,
  },
  {
    title: 'Auto Test Cases',
    desc: 'Foundational tests to help you iterate with confidence.',
    icon: TestTube,
  },
  {
    title: 'One-Click Export',
    desc: 'Download a complete project and get building in seconds.',
    icon: Download,
  },
  {
    title: 'Best Practices Built-in',
    desc: 'Opinionated templates with security and performance in mind.',
    icon: ShieldCheck,
  },
  {
    title: 'Version-ready',
    desc: 'Git-friendly structure for clean diffs and reviews.',
    icon: GitBranch,
  },
  {
    title: 'Type-safe APIs',
    desc: 'Schema-first design that keeps your contracts honest.',
    icon: FileCode2,
  },
];

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">All the building blocks you need</h2>
          <p className="mt-3 text-zinc-400">Everything from schema to tests—generated, organized, and exportable.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/[0.08]"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-md border border-emerald-300/20 bg-emerald-400/10 p-2 text-emerald-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-zinc-400">{desc}</p>
                </div>
              </div>
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-emerald-400/10 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
