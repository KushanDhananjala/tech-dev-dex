import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, Star, Tag, User } from 'lucide-react';
import { motion } from 'framer-motion';

const SublimeTextReview = () => {
  return (
    <>
      <Head>
        <title>Sublime Text: Lightweight and Fast - TechDevDex</title>
        <meta name="description" content="Review of Sublime Text&apos;s speed, customization options, and when to choose it over other editors." />
        <meta name="keywords" content="Sublime Text review, code editor, lightweight editor, fast editor, customization" />
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
                    Code Editors
                  </span>
                  <div className="flex items-center gap-1">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="h-4 w-4 text-yellow-400" />
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                  Sublime Text: Lightweight and Fast
                </h1>
                
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  Review of Sublime Text&apos;s speed, customization options, and when to choose it over other editors.
                </p>

                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>6 min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>TechDevDex Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Dec 13, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4" />
                    <span>Lightweight</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
                <div className="mb-8">
                  <Image 
                    src="/images/posts/sublime-review.svg" 
                    alt="Sublime Text Review" 
                    width={800} 
                    height={400} 
                    className="rounded-xl shadow-lg"
                  />
                </div>

                <h2>Sublime Text Overview</h2>
                <p>
                  Sublime Text is a sophisticated text editor for code, markup, and prose. 
                  It&apos;s known for its speed, simplicity, and powerful features.
                </p>

                <h2>Key Features</h2>
                <h3>Performance</h3>
                <p>
                  Sublime Text is renowned for its speed:
                </p>
                <ul>
                  <li>Lightning-fast startup</li>
                  <li>Efficient memory usage</li>
                  <li>Smooth scrolling and editing</li>
                  <li>Handles large files well</li>
                </ul>

                <h3>Customization</h3>
                <p>
                  Extensive customization options:
                </p>
                <ul>
                  <li>Package Control for plugins</li>
                  <li>Custom themes and color schemes</li>
                  <li>Key bindings and shortcuts</li>
                  <li>Build systems and commands</li>
                </ul>

                <h2>Unique Features</h2>
                <p>
                  Sublime Text offers several unique capabilities:
                </p>
                <ul>
                  <li>Multiple selections</li>
                  <li>Command palette</li>
                  <li>Goto anything</li>
                  <li>Distraction-free mode</li>
                </ul>

                <h2>Pros and Cons</h2>
                <h3>Pros</h3>
                <ul>
                  <li>Extremely fast and responsive</li>
                  <li>Lightweight and efficient</li>
                  <li>Excellent plugin ecosystem</li>
                  <li>Cross-platform compatibility</li>
                </ul>

                <h3>Cons</h3>
                <ul>
                  <li>Paid license required</li>
                  <li>Limited built-in features</li>
                  <li>Steep learning curve for advanced features</li>
                  <li>No built-in terminal</li>
                </ul>

                <h2>When to Choose Sublime Text</h2>
                <p>
                  Sublime Text is ideal for:
                </p>
                <ul>
                  <li>Quick editing tasks</li>
                  <li>Working with large files</li>
                  <li>Users who prefer speed over features</li>
                  <li>Customization enthusiasts</li>
                </ul>

                <h2>Conclusion</h2>
                <p>
                  Sublime Text remains a solid choice for developers who prioritize speed and simplicity. 
                  While it may lack some modern IDE features, its performance and customization options 
                  make it a favorite among many developers.
                </p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </>
  );
};

export default SublimeTextReview;
