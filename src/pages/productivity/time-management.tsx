import React from 'react';
import SEO from '@/components/SEO';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, Filter, Search, Star, User } from 'lucide-react';
import { motion } from 'framer-motion';

const TimeManagement = () => {
  // Sample tutorial data
  const tutorials = [
    {
      slug: "pomodoro-technique-guide",
      title: "Pomodoro Technique for Developers",
      description: "Master the Pomodoro Technique to improve focus, productivity, and work-life balance in your development workflow.",
      image: "/images/productivity/time-management/pomodoro-technique.svg",
      category: "Productivity",
      rating: 5,
      readTime: "16 min",
      author: "TechDevDex Team",
      date: "2024-12-01",
    },
    {
      slug: "time-blocking-methods",
      title: "Time Blocking for Developers",
      description: "Learn effective time blocking strategies to organize your day and maximize productivity during development work.",
      image: "/images/productivity/time-management/time-blocking.svg",
      category: "Planning",
      rating: 4,
      readTime: "14 min",
      author: "TechDevDex Team",
      date: "2024-11-28",
    },
    {
      slug: "task-prioritization-matrix",
      title: "Task Prioritization Matrix",
      description: "Use proven prioritization frameworks like Eisenhower Matrix to focus on high-impact development tasks.",
      image: "/images/productivity/time-management/prioritization.svg",
      category: "Strategy",
      rating: 4,
      readTime: "12 min",
      author: "TechDevDex Team",
      date: "2024-11-20",
    },
    {
      slug: "distraction-management",
      title: "Managing Digital Distractions",
      description: "Techniques to minimize distractions and maintain focus during deep development work sessions.",
      image: "/images/productivity/time-management/distraction-management.svg",
      category: "Focus",
      rating: 4,
      readTime: "18 min",
      author: "TechDevDex Team",
      date: "2024-11-15",
    },
    {
      slug: "energy-management",
      title: "Energy Management for Developers",
      description: "Optimize your energy levels throughout the day to maintain peak performance during coding sessions.",
      image: "/images/productivity/time-management/energy-management.svg",
      category: "Wellness",
      rating: 4,
      readTime: "15 min",
      author: "TechDevDex Team",
      date: "2024-11-10",
    },
  ];

  return (
    <>
      <SEO
        title="Time Management for Developers"
        description="Learn effective time management techniques for developers including Pomodoro, time blocking, and productivity strategies. Master task prioritization and focus techniques."
        keywords={[
          "time management",
          "productivity techniques",
          "pomodoro technique",
          "time blocking",
          "task prioritization",
          "focus techniques",
          "developer productivity",
          "work life balance",
          "productivity strategies",
          "time optimization",
          "distraction management",
          "energy management",
          "productivity tools",
          "efficiency techniques"
        ]}
        type="website"
        image="/images/productivity/time-management-og.jpg"
        url="/productivity/time-management"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/productivity" className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Productivity
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl mb-6">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Time Management
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Master time management techniques to boost productivity and achieve better work-life balance
            </p>
          </div>

          {/* Filter and Search (Placeholder) */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
            <div className="flex items-center gap-2 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 w-full sm:w-auto">
              <Filter className="h-5 w-5 text-slate-500 dark:text-slate-400" />
              <span className="text-slate-700 dark:text-slate-300 font-medium">Filter by: All</span>
            </div>
            <div className="relative w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search techniques..."
                className="w-full sm:w-64 pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 dark:text-slate-400" />
            </div>
          </div>

          {/* Featured Tutorial (Example) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden"
          >
            <Link href={`/productivity/time-management/${tutorials[0].slug}`} className="block">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 h-64 lg:h-auto bg-gradient-to-br from-rose-500/10 to-pink-600/10 flex items-center justify-center p-6">
                  <Image src={tutorials[0].image} alt={tutorials[0].title} width={300} height={200} className="max-h-full max-w-full object-contain" />
                </div>
                <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 text-sm font-medium rounded-full">
                      Featured Guide
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(tutorials[0].rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      {[...Array(5 - tutorials[0].rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-slate-300 text-slate-300 dark:fill-slate-600 dark:text-slate-600" />
                      ))}
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {tutorials[0].title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-lg mb-5">
                    {tutorials[0].description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{tutorials[0].readTime} read</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{tutorials[0].author}</span>
                    </div>
                    <span>{tutorials[0].date}</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* All Tutorials Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial, idx) => (
              <motion.article
                key={tutorial.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group"
              >
                <Link href={`/productivity/time-management/${tutorial.slug}`} className="block">
                  <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 h-full flex flex-col">
                    <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-700/50 flex items-center justify-center p-4">
                      <Image src={tutorial.image} alt={tutorial.title} width={300} height={200} className="max-h-full max-w-full object-contain" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 text-sm font-medium rounded-full">
                          {tutorial.category}
                        </span>
                        <div className="flex items-center gap-1">
                          {[...Array(tutorial.rating)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          ))}
                          {[...Array(5 - tutorial.rating)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-slate-300 text-slate-300 dark:fill-slate-600 dark:text-slate-600" />
                          ))}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                        {tutorial.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3 flex-grow">
                        {tutorial.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mt-auto">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{tutorial.readTime} read</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{tutorial.author}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeManagement;