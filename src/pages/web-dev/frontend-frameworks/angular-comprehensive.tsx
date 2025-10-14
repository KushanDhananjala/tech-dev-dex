import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, Star, Tag, User } from 'lucide-react';
import { motion } from 'framer-motion';

const AngularComprehensive = () => {
  return (
    <>
      <Head>
        <title>Angular: Enterprise Development - TechDevDex</title>
        <meta name="description" content="Complete Angular guide covering components, services, routing, and enterprise-level architecture patterns." />
        <meta name="keywords" content="Angular, TypeScript, enterprise development, components, services, routing" />
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
                    Angular Guide
                  </span>
                  <div className="flex items-center gap-1">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="h-4 w-4 fill-slate-300 text-slate-300 dark:fill-slate-600 dark:text-slate-600" />
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                  Angular: Enterprise Development
                </h1>
                
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  Complete Angular guide covering components, services, routing, and enterprise-level architecture patterns. 
                  Build scalable applications with Angular&apos;s powerful framework.
                </p>

                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>30 min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>TechDevDex Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Nov 20, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4" />
                    <span>Angular</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
                <div className="mb-8">
                  <Image 
                    src="/images/web-dev/frontend-frameworks/angular-guide.svg" 
                    alt="Angular Enterprise Development Guide" 
                    width={800} 
                    height={400} 
                    className="rounded-xl shadow-lg"
                  />
                </div>

                <h2>Introduction to Angular</h2>
                <p>
                  Angular is a comprehensive platform for building mobile and desktop web applications. Built with TypeScript, 
                  Angular provides a complete solution for enterprise-level applications with built-in tools and best practices.
                </p>

                <h2>Core Concepts</h2>
                <h3>Components</h3>
                <p>
                  Angular components are the building blocks of applications. Learn how to create, structure, and organize 
                  components for maintainable codebases.
                </p>

                <h3>Services and Dependency Injection</h3>
                <p>
                  Services provide a way to share data and functionality across components. Angular&apos;s dependency injection 
                  system makes services easily accessible throughout your application.
                </p>

                <h3>Routing and Navigation</h3>
                <p>
                  Angular Router provides powerful navigation capabilities with lazy loading, guards, and advanced routing 
                  features for complex applications.
                </p>

                <h2>Advanced Features</h2>
                <h3>Reactive Forms</h3>
                <p>
                  Angular&apos;s reactive forms provide a model-driven approach to handling form inputs with validation and 
                  better control over form state.
                </p>

                <h3>HTTP Client</h3>
                <p>
                  Learn how to make HTTP requests, handle responses, and implement error handling with Angular&apos;s HTTP client.
                </p>

                <h3>State Management</h3>
                <p>
                  Explore state management patterns in Angular, including NgRx for complex applications and simpler 
                  alternatives for smaller projects.
                </p>

                <h2>Enterprise Patterns</h2>
                <ul>
                  <li>Modular architecture design</li>
                  <li>Lazy loading strategies</li>
                  <li>Performance optimization techniques</li>
                  <li>Testing strategies and best practices</li>
                  <li>Deployment and CI/CD integration</li>
                </ul>

                <h2>Best Practices</h2>
                <ul>
                  <li>Follow Angular style guide</li>
                  <li>Use TypeScript effectively</li>
                  <li>Implement proper error handling</li>
                  <li>Optimize bundle size and performance</li>
                  <li>Write comprehensive tests</li>
                </ul>

                <h2>Conclusion</h2>
                <p>
                  Angular provides a robust foundation for enterprise applications. By mastering its concepts and following 
                  best practices, you can build scalable, maintainable applications that meet enterprise requirements.
                </p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </>
  );
};

export default AngularComprehensive;
