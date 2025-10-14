import React from 'react';
import SEO from '@/components/SEO';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, Star, User } from 'lucide-react';
import { motion } from 'framer-motion';

const MongoDBVsPostgreSQL = () => {
  return (
    <>
      <SEO
        title="MongoDB vs PostgreSQL: Database Comparison"
        description="NoSQL vs SQL database comparison. When to choose MongoDB over PostgreSQL and vice versa for your application."
        keywords={[
          'MongoDB',
          'PostgreSQL',
          'database comparison',
          'NoSQL',
          'SQL',
          'database choice',
          'MongoDB vs PostgreSQL',
          'database selection',
          'NoSQL vs SQL',
          'database technologies'
        ]}
        type="article"
        image="/images/reviews/app-comparisons/mongodb-vs-postgresql.svg"
        url="/reviews/app-comparisons/mongodb-vs-postgresql"
        section="App Comparisons"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <Link href="/reviews/app-comparisons" className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to App Comparisons
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              MongoDB vs PostgreSQL: Database Comparison
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
              NoSQL vs SQL database comparison. When to choose MongoDB over PostgreSQL and vice versa.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>TechDevDex Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>14 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                <span>4.0 rating</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/reviews/app-comparisons/mongodb-vs-postgresql.svg"
                alt="MongoDB vs PostgreSQL Database Comparison"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto prose prose-lg dark:prose-invert"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
              <h2>Database Technology Comparison</h2>
              <p>Both MongoDB and PostgreSQL are excellent database choices, but they serve different use cases and data models.</p>
              
              <h3>Data Model</h3>
              <ul>
                <li><strong>MongoDB:</strong> Document-based, flexible schema, JSON-like documents</li>
                <li><strong>PostgreSQL:</strong> Relational, structured schema, ACID compliance</li>
              </ul>

              <h3>Use Cases</h3>
              <ul>
                <li><strong>MongoDB:</strong> Content management, real-time analytics, rapid prototyping</li>
                <li><strong>PostgreSQL:</strong> Financial systems, e-commerce, complex queries</li>
              </ul>

              <h2>Conclusion</h2>
              <p>Choose MongoDB for flexible, document-based applications. Choose PostgreSQL for structured data with complex relationships.</p>
            </div>
          </motion.article>
        </div>
      </div>
    </>
  );
};

export default MongoDBVsPostgreSQL;
