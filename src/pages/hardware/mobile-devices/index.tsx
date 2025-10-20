import React from 'react';
import SEO from '@/components/SEO';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, Filter, Search, Smartphone, Star, User } from 'lucide-react';
import { motion } from 'framer-motion';

const MobileDevices = () => {
  // Sample review data
  const reviews = [
    {
      slug: "iphone-17-pro-review",
      title: "iPhone 17 Pro: Developer's Ultimate Review 2025",
      description: "Comprehensive iPhone 17 Pro review for developers. A18 Pro chip performance, iOS 18 development capabilities, and productivity features.",
      image: "/images/hardware/mobile-devices/real/iphone-17-pro.jpg",
      category: "Smartphones",
      rating: 5,
      readTime: "18 min",
      author: "TechDevDex Team",
      date: "2025-01-15",
    },
    {
      slug: "samsung-galaxy-s25-review",
      title: "Samsung Galaxy S25: Developer's Complete Review 2025",
      description: "Comprehensive Samsung Galaxy S25 review for developers. Snapdragon 8 Gen 4 performance, Android 15 development capabilities.",
      image: "/images/hardware/mobile-devices/real/samsung-galaxy-s25.jpg",
      category: "Smartphones",
      rating: 5,
      readTime: "20 min",
      author: "TechDevDex Team",
      date: "2025-01-15",
    },
    {
      slug: "iphone-15-pro-review",
      title: "iPhone 15 Pro: Developer's Perspective",
      description: "Comprehensive review of iPhone 15 Pro from a developer's perspective, focusing on performance and development capabilities.",
      image: "/images/hardware/mobile-devices/real/iphone-15-pro.jpg",
      category: "Smartphones",
      rating: 5,
      readTime: "15 min",
      author: "TechDevDex Team",
      date: "2024-12-01",
    },
    {
      slug: "samsung-galaxy-s24-review",
      title: "Samsung Galaxy S24: Android Development",
      description: "In-depth review of Samsung Galaxy S24 for Android development and productivity tasks.",
      image: "/images/hardware/mobile-devices/real/samsung-galaxy-s24.jpg",
      category: "Smartphones",
      rating: 4,
      readTime: "12 min",
      author: "TechDevDex Team",
      date: "2024-11-28",
    },
    {
      slug: "ipad-pro-m4-review",
      title: "iPad Pro M4: Coding on the Go",
      description: "Review of iPad Pro M4 for mobile development and coding tasks with external accessories.",
      image: "/images/hardware/mobile-devices/real/ipad-pro-m4.jpg",
      category: "Tablets",
      rating: 4,
      readTime: "14 min",
      author: "TechDevDex Team",
      date: "2024-11-20",
    },
    {
      slug: "surface-pro-11-review",
      title: "Surface Pro 11: Hybrid Development",
      description: "Microsoft Surface Pro 11 review for hybrid development environments and productivity.",
      image: "/images/hardware/mobile-devices/real/surface-pro-11.jpg",
      category: "Tablets",
      rating: 4,
      readTime: "13 min",
      author: "TechDevDex Team",
      date: "2024-11-15",
    },
    {
      slug: "android-tablets-development",
      title: "Best Android Tablets for Development",
      description: "Comparison of top Android tablets for mobile development and productivity tasks.",
      image: "/images/hardware/mobile-devices/real/android-tablets.jpg",
      category: "Tablets",
      rating: 4,
      readTime: "11 min",
      author: "TechDevDex Team",
      date: "2024-11-10",
    },
  ];

  return (
    <>
      <SEO
        title="Mobile Devices for Developers"
        description="Reviews and guides for mobile devices including smartphones and tablets for developers and productivity."
        keywords={[
          'mobile devices',
          'smartphones',
          'tablets',
          'iPhone',
          'Android',
          'iPad',
          'Surface Pro',
          'mobile development',
          'developer devices',
          'mobile productivity'
        ]}
        type="article"
        image="/images/hardware/mobile-devices/real/iphone-17-pro.jpg"
        url="/hardware/mobile-devices"
        section="Hardware"
      />

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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6">
              <Smartphone className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Mobile Devices
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Reviews and guides for smartphones and tablets optimized for developers and productivity
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
                placeholder="Search devices..."
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
            <Link href={`/hardware/mobile-devices/${reviews[0].slug}`} className="block">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 h-64 lg:h-80 bg-gradient-to-br from-blue-500/10 to-cyan-600/10 flex items-center justify-center p-6">
                  <Image src={reviews[0].image} alt={reviews[0].title} width={400} height={300} className="max-h-full max-w-full object-contain" />
                </div>
                <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
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
                <Link href={`/hardware/mobile-devices/${review.slug}`} className="block">
                  <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 h-full flex flex-col">
                    <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-700/50 flex items-center justify-center p-4">
                      <Image src={review.image} alt={review.title} width={300} height={200} className="max-h-full max-w-full object-contain" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
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

export default MobileDevices;
