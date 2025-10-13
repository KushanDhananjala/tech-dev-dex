import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Star, Clock, User, Calendar, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

const VimReview = () => {
  return (
    <>
      <Head>
        <title>Vim: The Terminal Editor - TechDevDex</title>
        <meta name="description" content="Exploring Vim&apos;s learning curve, productivity benefits, and why developers still choose it in 2024." />
        <meta name="keywords" content="Vim review, terminal editor, modal editor, productivity, keyboard shortcuts" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <Link href="/reviews/software-reviews" className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Software Reviews
            </Link>
          </div>

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden"
          >
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 p-8 lg:p-12">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
                    Terminal Editors
                  </span>
                  <div className="flex items-center gap-1">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="h-4 w-4 text-yellow-400" />
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                  Vim: The Terminal Editor
                </h1>
                
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  Exploring Vim&apos;s learning curve, productivity benefits, and why developers still choose it in 2024.
                </p>

                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>12 min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>TechDevDex Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Dec 11, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4" />
                    <span>Advanced</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
                <div className="mb-8">
                  <Image 
                    src="/images/posts/vim-review.jpg" 
                    alt="Vim Review" 
                    width={800} 
                    height={400} 
                    className="rounded-xl shadow-lg"
                  />
                </div>

                <h2>Vim Overview</h2>
                <p>
                  Vim is a highly configurable text editor built to enable efficient text editing. 
                  It&apos;s a modal editor with different modes for different tasks.
                </p>

                <h2>Key Features</h2>
                <h3>Modal Editing</h3>
                <p>
                  Vim&apos;s unique modal system:
                </p>
                <ul>
                  <li>Normal mode for navigation</li>
                  <li>Insert mode for text editing</li>
                  <li>Visual mode for selection</li>
                  <li>Command mode for operations</li>
                </ul>

                <h3>Keyboard Efficiency</h3>
                <p>
                  Designed for keyboard-only operation:
                </p>
                <ul>
                  <li>No mouse required</li>
                  <li>Efficient key combinations</li>
                  <li>Repeatable commands</li>
                  <li>Macro recording</li>
                </ul>

                <h2>Learning Curve</h2>
                <p>
                  Vim has a steep learning curve but offers significant benefits:
                </p>
                <ul>
                  <li>Initial difficulty with modes</li>
                  <li>Memorization of key combinations</li>
                  <li>Muscle memory development</li>
                  <li>Long-term productivity gains</li>
                </ul>

                <h2>Customization</h2>
                <p>
                  Highly customizable editor:
                </p>
                <ul>
                  <li>Extensive configuration options</li>
                  <li>Plugin ecosystem</li>
                  <li>Custom key mappings</li>
                  <li>Syntax highlighting</li>
                </ul>

                <h2>Pros and Cons</h2>
                <h3>Pros</h3>
                <ul>
                  <li>Extremely efficient once mastered</li>
                  <li>Available on all platforms</li>
                  <li>Lightweight and fast</li>
                  <li>Powerful text manipulation</li>
                </ul>

                <h3>Cons</h3>
                <ul>
                  <li>Steep learning curve</li>
                  <li>Not intuitive for beginners</li>
                  <li>Requires significant time investment</li>
                  <li>Limited modern IDE features</li>
                </ul>

                <h2>Modern Alternatives</h2>
                <p>
                  Vim-inspired modern editors:
                </p>
                <ul>
                  <li>Neovim - Vim fork with modern features</li>
                  <li>VSCode Vim extension</li>
                  <li>IntelliJ Vim plugin</li>
                  <li>Vim keybindings in other editors</li>
                </ul>

                <h2>Conclusion</h2>
                <p>
                  Vim remains a powerful choice for developers who invest time in learning it. 
                  While the learning curve is steep, the productivity benefits can be significant 
                  for those willing to master its unique approach to text editing.
                </p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </>
  );
};

export default VimReview;
