import React from "react";
import Link from "next/link";
import Image from "next/image";
import menu from "../menu";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import Ads from "../components/ads/Ads";
import { ArrowRight, BookOpen, Calendar, Cpu, TrendingUp, User, Zap, Stars } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <SEO
        title="Developer Resources & Tutorials"
        description="Comprehensive developer resource platform with tutorials, reviews, and guides for modern development technologies. Learn programming, AI, DevOps, and productivity tools."
        keywords={[
          "developer resources",
          "programming tutorials",
          "coding guides",
          "software development",
          "web development",
          "mobile development",
          "AI development",
          "devops",
          "productivity tools",
          "hardware reviews",
          "tech tutorials",
          "programming courses",
          "coding bootcamp",
          "developer tools",
          "software engineering"
        ]}
        type="website"
        image="/images/og-image.svg"
      />
      
      {/* Hero Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl mb-8">
              <Zap className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6 px-4">
              Explore The Future of{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Tech
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed px-4">
              Tutorials, Reviews, and AI insights for developers and innovators
            </p>
          </motion.div>
        </div>
      </section>

      {/* Compact horizontal ad */}
      <div className="mb-16">
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-200 dark:border-slate-700">
          <Ads placement="content" />
        </div>
      </div>

      {/* Featured Categories */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Categories
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Discover our comprehensive collection of tech content organized by category
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {menu.categories.slice(0, 6).map((cat, idx) => {
            const categoryData = {
              tutorials: { 
                icon: <BookOpen size={28} />, 
                color: "from-blue-500 to-cyan-500",
                description: "Step-by-step guides covering Docker, Git, React, Node.js, Python, and more"
              },
              reviews: { 
                icon: <Stars size={28} />, 
                color: "from-yellow-500 to-orange-500",
                description: "Honest, unbiased reviews of software, tools, and gadgets"
              },
              "ai-ml": { 
                icon: <Cpu size={28} />, 
                color: "from-purple-500 to-pink-500",
                description: "Stay ahead with the latest AI tools and cutting-edge technologies"
              },
              "web-dev": {
                icon: <Cpu size={28} />,
                color: "from-green-500 to-emerald-500",
                description: "Frontend and backend development guides and tutorials"
              },
              "hardware": {
                icon: <Cpu size={28} />,
                color: "from-orange-500 to-red-500",
                description: "Tech gadgets and hardware reviews and recommendations"
              },
              "productivity": {
                icon: <Cpu size={28} />,
                color: "from-indigo-500 to-blue-500",
                description: "Tools and tips for better workflow and efficiency"
              }
            };
            
            const data = categoryData[cat.slug as keyof typeof categoryData] || {
              icon: <BookOpen size={28} />,
              color: "from-gray-500 to-gray-600",
              description: cat.description || "Explore our comprehensive content"
            };
            
            return (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group"
              >
                <Link href={`/${cat.slug}`} className="block h-full touch-manipulation">
                  <div className="bg-white dark:bg-slate-800 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 h-full flex flex-col group-hover:-translate-y-1">
                    <div className="mb-4 md:mb-6">
                      <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${data.color} rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        {data.icon}
                      </div>
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-2 md:mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {cat.name}
                      </h3>
                      <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                        {data.description}
                      </p>
                    </div>
                    <div className="mt-auto">
                      <div className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform duration-300 text-sm md:text-base">
                        Explore Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Get Started
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Choose your learning path and start your tech journey
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <Link href="/tutorials" className="block touch-manipulation">
              <div className="bg-white dark:bg-slate-800 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 text-center group hover:-translate-y-1">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl md:rounded-2xl flex items-center justify-center text-white mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-6 w-6 md:h-8 md:w-8" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2 md:mb-4">Start Learning</h3>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mb-4 md:mb-6">Begin with our comprehensive tutorials</p>
                <div className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform duration-300 text-sm md:text-base">
                  Browse Tutorials
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1"
          >
            <Link href="/ai-trending" className="block touch-manipulation">
              <div className="bg-white dark:bg-slate-800 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 text-center group hover:-translate-y-1">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl md:rounded-2xl flex items-center justify-center text-white mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-6 w-6 md:h-8 md:w-8" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2 md:mb-4">Stay Updated</h3>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mb-4 md:mb-6">Explore the latest AI and tech trends</p>
                <div className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  View Trends
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Latest Articles
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Stay updated with our most recent tech insights and tutorials
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Tutorial Articles */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            className="group"
          >
            <Link href="/tutorials/docker-setup-guides/docker-beginners-guide" className="block">
              <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src="/images/tutorials/docker-setup-guides/docker-beginners.svg" 
                    alt="Docker Setup Guide"
                    width={400}
                    height={192}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                      Tutorial
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    Docker Beginners Guide: Complete Setup Tutorial
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                    Master Docker from scratch with this comprehensive beginner's guide covering installation, containers, and best practices.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Dec 15, 2024</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>Expert</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group"
          >
            <Link href="/tutorials/git-github-tutorials/git-basics-guide" className="block">
              <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src="/images/tutorials/git-github-tutorials/git-basics.svg" 
                    alt="Git & GitHub Tutorial"
                    width={400}
                    height={192}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-green-600 text-white text-sm font-medium rounded-full">
                      Tutorial
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    Git Basics Guide: Essential Version Control
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                    Learn the fundamentals of Git version control with practical examples, commands, and workflow strategies.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Dec 12, 2024</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>Expert</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>

          {/* Featured Review Articles */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group"
          >
            <Link href="/reviews/software-reviews/vs-code-review" className="block">
              <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src="/images/reviews/software-reviews/vs-code-review.svg" 
                    alt="VS Code Review"
                    width={400}
                    height={192}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-yellow-600 text-white text-sm font-medium rounded-full">
                      Review
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Stars key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    VS Code Review: The Ultimate Developer IDE
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                    Comprehensive review of Visual Studio Code, covering features, extensions, performance, and why it's the developer's choice.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Dec 10, 2024</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>Editor</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group"
          >
            <Link href="/reviews/app-comparisons/figma-vs-adobe-xd" className="block">
              <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src="/images/reviews/app-comparisons/figma-vs-adobe-xd.svg" 
                    alt="Figma vs Adobe XD Design Tools"
                    width={400}
                    height={192}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-orange-600 text-white text-sm font-medium rounded-full">
                      Comparison
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1">
                      {[...Array(4)].map((_, i) => (
                        <Stars key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    Figma vs Adobe XD: Complete Design Tool Comparison
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                    In-depth comparison of Figma and Adobe XD for UI/UX design. Features, pricing, collaboration, and which tool is better.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Dec 8, 2024</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>Designer</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>

          {/* Featured AI Articles */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group"
          >
            <Link href="/ai-trending/ai-coding-tools/claude-3-5-sonnet-guide" className="block">
              <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src="/images/ai-ml/ai-coding-tools/claude-3-5-sonnet.svg" 
                    alt="Claude 3.5 Sonnet AI Assistant"
                    width={400}
                    height={192}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-purple-600 text-white text-sm font-medium rounded-full">
                      AI & Tech
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    Claude 3.5 Sonnet: Advanced AI Coding Assistant
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                    Discover Claude 3.5 Sonnet's powerful AI capabilities for coding, debugging, and software development workflows.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Dec 5, 2024</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>AI Expert</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="group"
          >
            <Link href="/ai-trending/emerging-languages/rust-ai-development" className="block">
              <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src="/images/ai-ml/emerging-languages/rust-ai.svg" 
                    alt="Rust AI Development"
                    width={400}
                    height={192}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full">
                      AI & Tech
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    Rust AI Development: Building Intelligent Systems
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                    Explore how Rust's performance and safety features make it ideal for AI and machine learning applications.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Dec 3, 2024</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>Tech Lead</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/tutorials" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}


