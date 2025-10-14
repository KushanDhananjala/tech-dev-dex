import React from 'react';
import SEO from '@/components/SEO';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, Star, User } from 'lucide-react';
import { motion } from 'framer-motion';

const AwsVsAzureVsGcp = () => {
  return (
    <>
      <SEO
        title="AWS vs Azure vs Google Cloud: Cloud Platform Battle"
        description="Comprehensive comparison of AWS, Azure, and Google Cloud. Pricing, features, and which cloud provider to choose for your project."
        keywords={[
          'AWS',
          'Azure',
          'Google Cloud',
          'cloud comparison',
          'cloud platforms',
          'cloud providers',
          'AWS vs Azure',
          'AWS vs GCP',
          'Azure vs GCP',
          'cloud services'
        ]}
        type="article"
        image="/images/reviews/app-comparisons/aws-azure-gcp.svg"
        url="/reviews/app-comparisons/aws-vs-azure-vs-gcp"
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
              AWS vs Azure vs Google Cloud: Cloud Platform Battle
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
              Comprehensive comparison of the three major cloud providers. Pricing, features, and which one to choose.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>TechDevDex Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>18 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                <span>5.0 rating</span>
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
                src="/images/reviews/app-comparisons/aws-vs-azure-vs-gcp.svg"
                alt="AWS vs Azure vs Google Cloud Platform Comparison"
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
              <h2>Cloud Platform Comparison</h2>
              <p>Each cloud provider has unique strengths and pricing models. Choose based on your specific needs and existing infrastructure.</p>
              
              <h3>Market Share and Maturity</h3>
              <ul>
                <li><strong>AWS:</strong> Market leader, most mature, largest service catalog</li>
                <li><strong>Azure:</strong> Strong enterprise integration, Microsoft ecosystem</li>
                <li><strong>Google Cloud:</strong> AI/ML focus, competitive pricing, data analytics</li>
              </ul>

              <h3>Pricing Models</h3>
              <ul>
                <li><strong>AWS:</strong> Pay-as-you-go, reserved instances, spot instances</li>
                <li><strong>Azure:</strong> Hybrid benefits, enterprise agreements</li>
                <li><strong>Google Cloud:</strong> Sustained use discounts, committed use</li>
              </ul>

              <h2>Conclusion</h2>
              <p>AWS for comprehensive services, Azure for Microsoft integration, Google Cloud for AI/ML and data analytics.</p>
            </div>
          </motion.article>
        </div>
      </div>
    </>
  );
};

export default AwsVsAzureVsGcp;
