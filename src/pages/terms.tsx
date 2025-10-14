import Head from "next/head";
import { motion } from "framer-motion";
import { AlertCircle, FileText, Scale, Users } from 'lucide-react';

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms of Service | TechDevDex</title>
        <meta name="description" content="TechDevDex Terms of Service - Read our terms and conditions" />
      </Head>
      
      {/* Hero Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl mb-8">
              <FileText className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using our website and services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Overview */}
      <section className="mb-16">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 text-center"
          >
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Scale className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Fair Use</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Our content is provided for educational and informational purposes.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 text-center"
          >
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Community</h3>
            <p className="text-slate-600 dark:text-slate-400">
              We foster a respectful and inclusive community environment.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 text-center"
          >
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Transparency</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Clear terms that protect both you and our platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Acceptance of Terms</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                By accessing and using TechDevDex website, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>
              
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 mt-12">Use License</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Permission is granted to temporarily download one copy of the materials on TechDevDex 
                for personal, non-commercial transitory viewing only.
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-600 dark:text-slate-400">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 mt-12">Content and Intellectual Property</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                All content, including but not limited to text, graphics, logos, images, and software, 
                is the property of TechDevDex and is protected by copyright and other intellectual property laws.
              </p>
              
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 mt-12">User Conduct</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                You agree to use our website only for lawful purposes and in accordance with these Terms. 
                You agree not to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-600 dark:text-slate-400">
                <li>Use the website in any way that violates applicable laws or regulations</li>
                <li>Transmit any harmful, threatening, abusive, or harassing content</li>
                <li>Attempt to gain unauthorized access to any part of the website</li>
                <li>Interfere with the proper working of the website</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 mt-12">Disclaimer</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                The materials on TechDevDex are provided on an 'as is' basis. TechDevDex makes no warranties, 
                expressed or implied, and hereby disclaims and negates all other warranties including without 
                limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, 
                or non-infringement of intellectual property or other violation of rights.
              </p>
              
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 mt-12">Limitations</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                In no event shall TechDevDex or its suppliers be liable for any damages (including, without 
                limitation, damages for loss of data or profit, or due to business interruption) arising out 
                of the use or inability to use the materials on TechDevDex, even if TechDevDex or an 
                authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
              
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 mt-12">Revisions</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                TechDevDex may revise these terms of service at any time without notice. By using this website, 
                you are agreeing to be bound by the then current version of these terms of service.
              </p>
              
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 mt-12">Contact Information</h2>
              <p className="text-slate-600 dark:text-slate-400">
                If you have any questions about these Terms of Service, please contact us at 
                <a href="mailto:legal@thebyteguide.com" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
                  legal@thebyteguide.com
                </a>
              </p>
              
              <p className="text-sm text-slate-500 dark:text-slate-500 mt-8">
                Last updated: December 2024
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


