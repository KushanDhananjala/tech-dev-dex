import React from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, Star, Tag, User } from 'lucide-react';
import { motion } from 'framer-motion';

const SvelteModernFramework = () => {
  return (
    <>
      <SEO
        title="Svelte: The Modern Framework"
        description="Explore Svelte's unique approach to frontend development with compile-time optimizations and minimal bundle sizes. Learn the modern framework that compiles away."
        keywords={[
          'Svelte',
          'JavaScript',
          'frontend development',
          'compile-time optimization',
          'modern framework',
          'SvelteKit',
          'reactive programming',
          'bundle optimization',
          'component framework',
          'web development'
        ]}
        type="article"
        image="/images/web-dev/frontend-frameworks/svelte-guide.svg"
        url="/web-dev/frontend-frameworks/svelte-modern-framework"
        section="Frontend Frameworks"
        tags={['Svelte', 'JavaScript', 'Modern Framework']}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <Link href="/web-dev/frontend-frameworks" className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Frontend Frameworks
            </Link>
          </div>

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden"
          >
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 p-8 lg:p-12">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium rounded-full">
                    Svelte Guide
                  </span>
                  <div className="flex items-center gap-1">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="h-4 w-4 fill-slate-300 text-slate-300 dark:fill-slate-600 dark:text-slate-600" />
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                  Svelte: The Modern Framework
                </h1>
                
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  Explore Svelte&apos;s unique approach to frontend development with compile-time optimizations and minimal bundle sizes. 
                  Learn how Svelte revolutionizes web development.
                </p>

                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>18 min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>TechDevDex Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Nov 15, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4" />
                    <span>Svelte</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
                <div className="mb-8">
                  <Image 
                    src="/images/web-dev/frontend-frameworks/svelte-guide.svg" 
                    alt="Svelte Modern Framework Guide" 
                    width={800} 
                    height={400} 
                    className="rounded-xl shadow-lg"
                  />
                </div>

                <h2>What Makes Svelte Different</h2>
                <p>
                  Svelte takes a fundamentally different approach to building web applications. Instead of using a virtual DOM, 
                  Svelte compiles your code to vanilla JavaScript at build time, resulting in smaller bundles and better performance.
                </p>

                <h2>Core Concepts</h2>
                <h3>Reactive Declarations</h3>
                <p>
                  Svelte&apos;s reactivity is built into the language itself. Use the <code>$:</code> syntax to create reactive 
                  statements that automatically update when their dependencies change.
                </p>

                <h3>Stores</h3>
                <p>
                  Svelte stores provide a simple way to manage application state. They can be writable, readable, or derived, 
                  and work seamlessly with Svelte&apos;s reactivity system.
                </p>

                <h3>Component Communication</h3>
                <p>
                  Learn how to pass data between components using props, events, and stores. Svelte&apos;s component system is 
                  intuitive and powerful.
                </p>

                <h2>Advanced Features</h2>
                <h3>Actions</h3>
                <p>
                  Actions are functions that run when an element is added to the DOM. They&apos;re perfect for integrating 
                  third-party libraries and handling DOM manipulation.
                </p>

                <h3>Transitions and Animations</h3>
                <p>
                  Svelte provides built-in transition and animation capabilities that are both powerful and easy to use. 
                  Create smooth, performant animations with minimal code.
                </p>

                <h3>Custom Elements</h3>
                <p>
                  Compile Svelte components to custom elements that can be used in any framework or vanilla JavaScript application.
                </p>

                <h2>Performance Benefits</h2>
                <ul>
                  <li>Smaller bundle sizes</li>
                  <li>No virtual DOM overhead</li>
                  <li>Compile-time optimizations</li>
                  <li>Better runtime performance</li>
                  <li>Faster initial page loads</li>
                </ul>

                <h2>Best Practices</h2>
                <ul>
                  <li>Leverage Svelte&apos;s reactivity system</li>
                  <li>Use stores for complex state management</li>
                  <li>Take advantage of compile-time optimizations</li>
                  <li>Write clean, readable component code</li>
                  <li>Use TypeScript for better development experience</li>
                </ul>

                <h2>Conclusion</h2>
                <p>
                  Svelte represents a new paradigm in frontend development. By understanding its unique approach and leveraging 
                  its compile-time optimizations, you can build faster, smaller, and more efficient web applications.
                </p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </>
  );
};

export default SvelteModernFramework;
