import React from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, Star, Tag, User } from 'lucide-react';
import { motion } from 'framer-motion';

const NextJSFullStack = () => {
  return (
    <>
      <SEO
        title="Next.js: Full-Stack React Framework"
        description="Master Next.js for full-stack development with SSR, SSG, API routes, and deployment strategies. Complete guide to building modern web applications."
        keywords={[
          'Next.js',
          'React',
          'full-stack development',
          'SSR',
          'SSG',
          'API routes',
          'deployment',
          'server-side rendering',
          'static generation',
          'React framework'
        ]}
        type="article"
        image="/images/web-dev/frontend-frameworks/nextjs-guide.svg"
        url="/web-dev/frontend-frameworks/nextjs-full-stack"
        section="Frontend Frameworks"
        tags={['Next.js', 'React', 'Full-Stack']}
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
                    Next.js Guide
                  </span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                  Next.js: Full-Stack React Framework
                </h1>
                
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  Master Next.js for full-stack development with SSR, SSG, API routes, and deployment strategies. 
                  Build production-ready applications with the React framework for production.
                </p>

                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>28 min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>TechDevDex Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Nov 10, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4" />
                    <span>Next.js</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
                <div className="mb-8">
                  <Image 
                    src="/images/web-dev/frontend-frameworks/nextjs-guide.svg" 
                    alt="Next.js Full-Stack Framework Guide" 
                    width={800} 
                    height={400} 
                    className="rounded-xl shadow-lg"
                  />
                </div>

                <h2>Introduction to Next.js</h2>
                <p>
                  Next.js is a React framework that provides production-ready features out of the box. It offers server-side 
                  rendering, static site generation, API routes, and much more, making it the go-to choice for modern React applications.
                </p>

                <h2>Core Features</h2>
                <h3>Server-Side Rendering (SSR)</h3>
                <p>
                  Next.js enables server-side rendering by default, improving SEO and initial page load performance. 
                  Learn how to use <code>getServerSideProps</code> for dynamic content.
                </p>

                <h3>Static Site Generation (SSG)</h3>
                <p>
                  Pre-render pages at build time with <code>getStaticProps</code> and <code>getStaticPaths</code> for 
                  optimal performance and SEO benefits.
                </p>

                <h3>API Routes</h3>
                <p>
                  Build full-stack applications with Next.js API routes. Create serverless functions that handle 
                  backend logic without a separate server.
                </p>

                <h2>Advanced Features</h2>
                <h3>Image Optimization</h3>
                <p>
                  Next.js Image component provides automatic optimization, lazy loading, and responsive images 
                  for better performance and user experience.
                </p>

                <h3>Middleware</h3>
                <p>
                  Use middleware to run code before a request is completed. Perfect for authentication, redirects, 
                  and request/response modifications.
                </p>

                <h3>App Router (Next.js 13+)</h3>
                <p>
                  The new App Router introduces layouts, nested routing, and improved data fetching patterns 
                  for more intuitive application structure.
                </p>

                <h2>Performance Optimization</h2>
                <ul>
                  <li>Automatic code splitting</li>
                  <li>Bundle optimization</li>
                  <li>Image and font optimization</li>
                  <li>Built-in performance monitoring</li>
                  <li>Edge runtime support</li>
                </ul>

                <h2>Deployment Strategies</h2>
                <h3>Vercel Deployment</h3>
                <p>
                  Deploy seamlessly to Vercel with zero configuration. Take advantage of edge functions, 
                  automatic scaling, and global CDN.
                </p>

                <h3>Other Platforms</h3>
                <p>
                  Learn how to deploy Next.js applications to various platforms including AWS, Netlify, 
                  and Docker containers.
                </p>

                <h2>Best Practices</h2>
                <ul>
                  <li>Use the App Router for new projects</li>
                  <li>Optimize images with Next.js Image component</li>
                  <li>Implement proper SEO with metadata</li>
                  <li>Use TypeScript for better development experience</li>
                  <li>Follow Next.js style guide and conventions</li>
                </ul>

                <h2>Conclusion</h2>
                <p>
                  Next.js provides everything you need to build production-ready React applications. By mastering 
                  its features and following best practices, you can create fast, SEO-friendly, and scalable web applications.
                </p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </>
  );
};

export default NextJSFullStack;
