import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Boxes, FileCode2 } from 'lucide-react';

// Unique Interaction: Live Reveal — drag the handle to reveal the AI-generated code
// left pane: schema sketch; right pane: generated code preview
const Playground = () => {
  const containerRef = useRef(null);
  const [percent, setPercent] = useState(55); // visible percent of left pane
  const isDown = useRef(false);

  useEffect(() => {
    const onUp = () => { isDown.current = false; };
    window.addEventListener('mouseup', onUp);
    window.addEventListener('mouseleave', onUp);
    return () => {
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('mouseleave', onUp);
    };
  }, []);

  const onDown = () => { isDown.current = true; };
  const onMove = (e) => {
    if (!isDown.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    let p = (x / rect.width) * 100;
    p = Math.max(20, Math.min(80, p));
    setPercent(p);
  };

  return (
    <section id="playground" className="w-full bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">From schema to backend — in one motion</h2>
          <p className="mt-3 text-zinc-400">
            Drag the handle to watch a schema sketch transform into generated routes and tests.
          </p>
        </div>

        <div
          ref={containerRef}
          onMouseMove={onMove}
          className="relative mx-auto h-[420px] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-950 to-zinc-900"
        >
          {/* Left: Schema sketch */}
          <div
            className="absolute inset-0"
            style={{ width: `${percent}%` }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex h-full flex-col"
            >
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-2">
                <div className="rounded-md bg-emerald-400/10 p-1 text-emerald-300"><Boxes className="h-4 w-4" /></div>
                <span className="text-sm font-medium">Schema Designer</span>
              </div>
              <div className="relative grid flex-1 grid-cols-2 gap-4 p-4">
                {/* Nodes */}
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-semibold">User</span>
                    <span className="rounded bg-emerald-400/10 px-2 py-0.5 text-xs text-emerald-300">model</span>
                  </div>
                  <ul className="space-y-1 text-sm text-zinc-300">
                    <li>id: uuid</li>
                    <li>email: string</li>
                    <li>password: string</li>
                    <li>createdAt: date</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-semibold">Post</span>
                    <span className="rounded bg-emerald-400/10 px-2 py-0.5 text-xs text-emerald-300">model</span>
                  </div>
                  <ul className="space-y-1 text-sm text-zinc-300">
                    <li>id: uuid</li>
                    <li>title: string</li>
                    <li>body: text</li>
                    <li>authorId: ref(User)</li>
                  </ul>
                </div>
                {/* Relationship line (decorative) */}
                <svg className="pointer-events-none absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <line x1="30" y1="60" x2="70" y2="40" stroke="rgba(16,185,129,0.6)" strokeWidth="1.5" strokeDasharray="3 4" />
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Right: Code preview (beneath) */}
          <div className="absolute inset-0">
            <div className="flex h-full flex-col">
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-2">
                <div className="rounded-md bg-emerald-400/10 p-1 text-emerald-300"><FileCode2 className="h-4 w-4" /></div>
                <span className="text-sm font-medium">Generated Backend (preview)</span>
              </div>
              <pre className="relative flex-1 overflow-auto bg-gradient-to-b from-zinc-950 to-zinc-900 p-4 text-xs leading-relaxed text-emerald-200/90">
<code>{`// routes/user.py
@router.post('/users')
async def create_user(payload: UserCreate):
    user = await repo.create('user', payload)
    return user

// routes/post.py
@router.get('/posts')
async def list_posts():
    return await repo.find('post')

// tests/test_posts.py
async def test_create_post(client):
    res = await client.post('/posts', json={ 'title': 'Hello', 'body': 'World' })
    assert res.status_code == 201
`}</code>
              </pre>
            </div>
          </div>

          {/* Handle */}
          <div
            className="absolute inset-y-0" 
            style={{ left: `${percent}%` }}
          >
            <div className="relative -ml-1 flex h-full w-2 cursor-ew-resize items-center justify-center"
                 onMouseDown={onDown}
            >
              <div className="h-24 w-0.5 rounded bg-emerald-400/70 shadow-[0_0_12px_rgba(16,185,129,0.6)]" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-1 text-[10px] text-emerald-200">
                Drag
              </div>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-zinc-400">
          This live reveal showcases Make-Back’s unique ability to turn visual schemas into structured, testable code.
        </p>
      </div>
    </section>
  );
};

export default Playground;
