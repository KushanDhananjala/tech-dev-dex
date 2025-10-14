import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, Star, User } from 'lucide-react';
import { motion } from 'framer-motion';

const ReactVsVueVsAngular = () => {
  return (
    <>
      <Head>
        <title>React vs Vue vs Angular: Frontend Framework Battle - TechDevDex</title>
        <meta name="description" content="Detailed comparison of React, Vue, and Angular frameworks. Performance, learning curve, ecosystem, and which one to choose for your project." />
        <meta name="keywords" content="React, Vue, Angular, frontend frameworks, comparison, JavaScript frameworks" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/reviews/app-comparisons" className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to App Comparisons
            </Link>
          </div>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              React vs Vue vs Angular: Frontend Framework Battle
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
              Detailed comparison of the three most popular frontend frameworks. Performance, learning curve, and ecosystem analysis.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>TechDevDex Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>15 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                <span>5.0 rating</span>
              </div>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/reviews/app-comparisons/react-vs-vue-vs-angular.svg"
                alt="React vs Vue vs Angular Framework Comparison"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto prose prose-lg dark:prose-invert"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
              <h2>Framework Comparison Overview</h2>
              <p>Choosing the right frontend framework is crucial for your project&apos;s success. This comprehensive comparison covers React, Vue, and Angular across multiple dimensions.</p>
              
              <h3>Performance Metrics</h3>
              <ul>
                <li><strong>React:</strong> Virtual DOM, excellent performance with proper optimization</li>
                <li><strong>Vue:</strong> Reactive system, lightweight and fast</li>
                <li><strong>Angular:</strong> Change detection, good performance for large applications</li>
              </ul>

              <h3>Learning Curve</h3>
              <ul>
                <li><strong>React:</strong> Moderate - JSX and component concepts</li>
                <li><strong>Vue:</strong> Easy - Template syntax similar to HTML</li>
                <li><strong>Angular:</strong> Steep - TypeScript, decorators, and complex concepts</li>
              </ul>

              <h3>Ecosystem and Community</h3>
              <ul>
                <li><strong>React:</strong> Largest ecosystem, backed by Facebook</li>
                <li><strong>Vue:</strong> Growing community, excellent documentation</li>
                <li><strong>Angular:</strong> Enterprise-focused, backed by Google</li>
              </ul>

              <h2>Conclusion</h2>
              <p>Each framework has its strengths. React offers flexibility, Vue provides simplicity, and Angular delivers enterprise-grade features. Choose based on your project requirements, team expertise, and long-term goals.</p>
            </div>
          </motion.article>
        </div>
      </div>
    </>
  );
};

export default ReactVsVueVsAngular;
