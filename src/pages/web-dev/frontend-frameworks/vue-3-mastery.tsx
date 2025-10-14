import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, Star, Tag, User } from 'lucide-react';
import { motion } from 'framer-motion';

const Vue3Mastery = () => {
  return (
    <>
      <Head>
        <title>Vue 3: Modern Development Guide - TechDevDex</title>
        <meta name="description" content="Learn Vue 3 with Composition API, TypeScript integration, and best practices for scalable applications." />
        <meta name="keywords" content="Vue 3, JavaScript, frontend development, Composition API, TypeScript, Vue.js" />
      </Head>

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
                    Vue Guide
                  </span>
                  <div className="flex items-center gap-1">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="h-4 w-4 fill-slate-300 text-slate-300 dark:fill-slate-600 dark:text-slate-600" />
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                  Vue 3: Modern Development Guide
                </h1>
                
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  Learn Vue 3 with Composition API, TypeScript integration, and best practices for scalable applications. 
                  Master the latest Vue.js features and build modern web applications.
                </p>

                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>22 min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>TechDevDex Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Nov 28, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4" />
                    <span>Vue</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
                <div className="mb-8">
                  <Image 
                    src="/images/web-dev/frontend-frameworks/vue-guide.svg" 
                    alt="Vue 3 Modern Development Guide" 
                    width={800} 
                    height={400} 
                    className="rounded-xl shadow-lg"
                  />
                </div>

                <h2>Introduction to Vue 3</h2>
                <p>
                  Vue 3 represents a significant evolution of the Vue.js framework, introducing the Composition API, 
                  improved TypeScript support, and better performance. This guide will help you master modern Vue development.
                </p>

                <h2>Composition API</h2>
                <p>
                  The Composition API is Vue 3's new way of organizing component logic. It provides better code 
                  organization, reusability, and TypeScript support compared to the Options API.
                </p>

                <h3>Reactive References</h3>
                <p>
                  Use <code>ref()</code> and <code>reactive()</code> to create reactive data. Understanding when to use 
                  each is crucial for effective Vue 3 development.
                </p>

                <h3>Computed Properties</h3>
                <p>
                  Computed properties in the Composition API provide a clean way to derive values from reactive data 
                  with automatic caching and dependency tracking.
                </p>

                <h2>TypeScript Integration</h2>
                <p>
                  Vue 3 has excellent TypeScript support. Learn how to properly type your components, props, and 
                  composables for better development experience and fewer runtime errors.
                </p>

                <h2>Advanced Features</h2>
                <h3>Teleport</h3>
                <p>
                  Teleport allows you to render component content in a different part of the DOM tree, perfect for 
                  modals, tooltips, and other overlay components.
                </p>

                <h3>Fragments</h3>
                <p>
                  Vue 3 supports multiple root nodes in components, eliminating the need for wrapper elements and 
                  providing more flexibility in component structure.
                </p>

                <h2>Best Practices</h2>
                <ul>
                  <li>Use Composition API for complex components</li>
                  <li>Leverage TypeScript for type safety</li>
                  <li>Organize composables for reusability</li>
                  <li>Optimize performance with proper reactivity</li>
                  <li>Follow Vue 3 style guide recommendations</li>
                </ul>

                <h2>Conclusion</h2>
                <p>
                  Vue 3 offers powerful new features and improved developer experience. By mastering the Composition API 
                  and TypeScript integration, you&apos;ll be able to build scalable, maintainable Vue applications.
                </p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </>
  );
};

export default Vue3Mastery;
