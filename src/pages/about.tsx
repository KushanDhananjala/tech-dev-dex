import Head from "next/head";
import { motion } from "framer-motion";
import { Heart, Lightbulb, Target, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | TechDevDex</title>
        <meta name="description" content="Learn about TechDevDex - your trusted source for tech tutorials, reviews, and AI insights" />
      </Head>
      
      {/* Hero Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl mb-8">
              <Users className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              About TechDevDex
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Your trusted source for practical tech tutorials, unbiased reviews, and cutting-edge AI insights
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              TechDevDex is dedicated to making technology accessible and understandable for developers, 
              tech enthusiasts, and anyone curious about the digital world. We believe that complex concepts 
              can be broken down into clear, actionable content.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Our goal is to empower you with the knowledge and tools you need to succeed in today&apos;s 
              rapidly evolving tech landscape.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Practical Focus</h3>
                  <p className="text-slate-600 dark:text-slate-400">Real-world tutorials you can apply immediately</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Clear Insights</h3>
                  <p className="text-slate-600 dark:text-slate-400">Complex topics explained in simple terms</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Community Driven</h3>
                  <p className="text-slate-600 dark:text-slate-400">Built by developers, for developers</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            What We Cover
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Comprehensive coverage of the technologies that matter most
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white mb-6">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Tutorials</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Step-by-step guides covering Docker, Git, React, Node.js, Python, and more. 
              From beginner basics to advanced techniques.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center text-white mb-6">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Reviews</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Honest, unbiased reviews of software, tools, and gadgets. 
              Helping you make informed decisions about your tech stack.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white mb-6">
              <Lightbulb className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">AI & Tech Trends</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Stay ahead with the latest AI tools, emerging languages, 
              and cutting-edge technologies shaping the future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Author Section */}
      <section className="mb-16">
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 md:p-12">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="h-12 w-12 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Meet the Author
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Hi! I&apos;m the developer behind TechDevDex. I&apos;m passionate about simplifying complex 
                technology concepts and helping fellow developers succeed. With years of experience 
                in software development, I love sharing practical knowledge that you can use immediately.
              </p>
              <div className="mt-8">
                <p className="text-slate-600 dark:text-slate-400">
                  <strong className="text-slate-900 dark:text-white">Let&apos;s build something amazing together!</strong>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}


