import Head from "next/head";
import { motion } from "framer-motion";
import { Shield, Eye, Lock, Database } from "lucide-react";

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | TechDevDex</title>
        <meta name="description" content="TechDevDex Privacy Policy - Learn how we protect your data and privacy" />
      </Head>
      
      {/* Hero Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-3xl mb-8">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Overview */}
      <section className="mb-16">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 text-center"
          >
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Eye className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Transparency</h3>
            <p className="text-slate-600 dark:text-slate-400">
              We&apos;re transparent about what data we collect and how we use it.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 text-center"
          >
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Lock className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Security</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Your data is protected with industry-standard security measures.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 text-center"
          >
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Database className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Control</h3>
            <p className="text-slate-600 dark:text-slate-400">
              You have control over your data and can request its deletion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Information We Collect</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                We collect information you provide directly to us, such as when you create an account, 
                subscribe to our newsletter, or contact us for support.
              </p>
              
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Personal Information</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-600 dark:text-slate-400">
                <li>Name and email address (when you subscribe or contact us)</li>
                <li>Comments and feedback you provide</li>
                <li>Any other information you choose to provide</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Usage Information</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-600 dark:text-slate-400">
                <li>Pages visited and time spent on our site</li>
                <li>Device and browser information</li>
                <li>IP address and general location</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 mt-12">How We Use Your Information</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                We use the information we collect to provide, maintain, and improve our services.
              </p>
              
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Purposes</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-600 dark:text-slate-400">
                <li>To provide and maintain our website</li>
                <li>To send you newsletters and updates (with your consent)</li>
                <li>To respond to your comments and questions</li>
                <li>To analyze and improve our content and services</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 mt-12">Data Protection</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>
              
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 mt-12">Your Rights</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                You have the right to access, update, or delete your personal information. 
                You can also unsubscribe from our communications at any time.
              </p>
              
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 mt-12">Contact Us</h2>
              <p className="text-slate-600 dark:text-slate-400">
                If you have any questions about this Privacy Policy, please contact us at 
                <a href="mailto:privacy@thebyteguide.com" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
                  privacy@thebyteguide.com
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


