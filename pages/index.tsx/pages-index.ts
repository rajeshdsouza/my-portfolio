// File: /pages/index.tsx
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-24"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="text-white">Hi, I'm </span>
            <span className="text-custom-cyan">Your Name.</span>
          </h1>
          
          <h2 className="text-4xl md:text-5xl text-zinc-300 font-bold mb-8">
            I build things for the web
          </h2>
          
          <p className="text-xl text-zinc-400 max-w-3xl mb-12">
            High agency generalist operator who owns cross-functional day-to-day execution enabling founders to focus on big picture goals. Check out{' '}
            <Link href="/work" className="text-custom-cyan hover:underline">
              my work
            </Link>
            , I also enjoy writing which can be found{' '}
            <Link href="/blog" className="text-custom-cyan hover:underline">
              here
            </Link>
            . I'm actively learning coding & automation using various tools which can be viewed{' '}
            <Link href="/projects" className="text-custom-cyan hover:underline">
              here
            </Link>
            .
          </p>

          <div className="flex gap-4">
            <Link
              href="/work"
              className="bg-custom-cyan text-black px-8 py-4 rounded-lg font-medium hover:bg-custom-cyan/90 transition-colors"
            >
              View My Work
            </Link>
            <Link
              href="/blog"
              className="border border-zinc-700 text-white px-8 py-4 rounded-lg font-medium hover:bg-zinc-800 transition-colors"
            >
              Read My Blog
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
