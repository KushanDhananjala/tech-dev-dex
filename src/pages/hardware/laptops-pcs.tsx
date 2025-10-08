import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Monitor, Star, Clock, User, Filter, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const LaptopsPCs = () => {
  // Sample review data
  const reviews = [
    {
      slug: "macbook-pro-m3-review",
      title: "MacBook Pro M3: Developer's Choice",
      description: "Comprehensive review of MacBook Pro M3 for developers, covering performance, battery life, and development workflow.",
      image: "/images/posts/macbook-pro-m3.svg",
      category: "Laptops",
      rating: 5,
      readTime: "18 min",
      author: "TechDevDex Team",
      date: "2024-12-01",
    },
    {
      slug: "dell-xps-developer-review",
      title: "Dell XPS 15: Windows Development Powerhouse",
      description: "In-depth review of Dell XPS 15 for Windows development with focus on performance and build quality.",
      image: "/images/posts/dell-xps-15.svg",
      category: "Laptops",
      rating: 4,
      readTime: "15 min",
      author: "TechDevDex Team",
      date: "2024-11-28",
    },
    {
      slug: "thinkpad-p1-review",
      title: "ThinkPad P1: Mobile Workstation Review",
      description: "Review of Lenovo ThinkPad P1 for professional developers requiring high performance and reliability.",
      image: "/images/posts/thinkpad-p1.svg",
      category: "Workstations",
      rating: 4,
      readTime: "16 min",
      author: "TechDevDex Team",
      date: "2024-11-20",
    },
    {
      slug: "gaming-pc-development",
      title: "Gaming PCs for Development: Best Builds",
      description: "Guide to building or buying gaming PCs that excel at both gaming and development tasks.",
      image: "/images/posts/gaming-pc-dev.svg",
      category: "Desktop",
      rating: 4,
      readTime: "20 min",
      author: "TechDevDex Team",
      date: "2024-11-15",
    },
    {
      slug: "budget-laptops-development",
      title: "Budget Laptops for Development",
      description: "Best budget-friendly laptops for developers, balancing performance and affordability.",
      image: "/images/posts/budget-laptops.svg",
      category: "Budget",
      rating: 4,
      readTime: "14 min",
      author: "TechDevDex Team",
      date: "2024-11-10",
    },
  ];

  return (
    <>
      <Head>
        <title>Laptops & PCs - TechDevDex</title>
        <meta name="description" content="Reviews and guides for laptops and PCs optimized for development work and programming." />
        <meta name="keywords" content="laptops, PCs, development hardware, MacBook, Dell XPS, ThinkPad, gaming PCs, workstations" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/hardware" className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Hardware
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl mb-6">
              <Monitor className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Laptops & PCs
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Reviews and guides for laptops and PCs optimized for development work
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
                placeholder="Search hardware..."
                className="w-full sm:w-64 pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 dark:text-slate-400" />
            </div>
          </div>

          {/* Featured Review (Example) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden"
          >
            <Link href={`/hardware/laptops-pcs/${reviews[0].slug}`} className="block">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 h-64 lg:h-auto bg-gradient-to-br from-indigo-500/10 to-purple-600/10 flex items-center justify-center p-6">
                  <Image src={reviews[0].image} alt={reviews[0].title} width={300} height={200} className="max-h-full max-w-full object-contain" />
                </div>
                <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium rounded-full">
                      Featured Review
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(reviews[0].rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      {[...Array(5 - reviews[0].rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-slate-300 text-slate-300 dark:fill-slate-600 dark:text-slate-600" />
                      ))}
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {reviews[0].title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-lg mb-5">
                    {reviews[0].description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{reviews[0].readTime} read</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{reviews[0].author}</span>
                    </div>
                    <span>{reviews[0].date}</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* All Reviews Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <motion.article
                key={review.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group"
              >
                <Link href={`/hardware/laptops-pcs/${review.slug}`} className="block">
                  <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 h-full flex flex-col">
                    <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-700/50 flex items-center justify-center p-4">
                      <Image src={review.image} alt={review.title} width={300} height={200} className="max-h-full max-w-full object-contain" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium rounded-full">
                          {review.category}
                        </span>
                        <div className="flex items-center gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          ))}
                          {[...Array(5 - review.rating)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-slate-300 text-slate-300 dark:fill-slate-600 dark:text-slate-600" />
                          ))}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                        {review.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3 flex-grow">
                        {review.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mt-auto">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{review.readTime} read</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{review.author}</span>
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

export default LaptopsPCs;