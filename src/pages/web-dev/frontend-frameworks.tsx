import React from 'react';
import SEO from '@/components/SEO';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, Code, Filter, Search, Star, User } from 'lucide-react';
import { motion } from 'framer-motion';

const FrontendFrameworks = () => {
  // Sample tutorial data
  const tutorials = [
    {
      slug: "react-complete-guide",
      title: "React: Complete Developer Guide",
      description: "Master React from basics to advanced concepts including hooks, context, and performance optimization.",
      image: "/images/web-dev/frontend-frameworks/react-guide.svg",
      category: "React",
      rating: 5,
      readTime: "25 min",
      author: "TechDevDex Team",
      date: "2024-12-01",
    },
    {
      slug: "vue-3-mastery",
      title: "Vue 3: Modern Development Guide",
      description: "Learn Vue 3 with Composition API, TypeScript integration, and best practices for scalable applications.",
      image: "/images/web-dev/frontend-frameworks/vue-guide.svg",
      category: "Vue",
      rating: 4,
      readTime: "22 min",
      author: "TechDevDex Team",
      date: "2024-11-28",
    },
    {
      slug: "angular-comprehensive",
      title: "Angular: Enterprise Development",
      description: "Complete Angular guide covering components, services, routing, and enterprise-level architecture patterns.",
      image: "/images/web-dev/frontend-frameworks/angular-guide.svg",
      category: "Angular",
      rating: 4,
      readTime: "30 min",
      author: "TechDevDex Team",
      date: "2024-11-20",
    },
    {
      slug: "svelte-modern-framework",
      title: "Svelte: The Modern Framework",
      description: "Explore Svelte&apos;s unique approach to frontend development with compile-time optimizations and minimal bundle sizes.",
      image: "/images/web-dev/frontend-frameworks/svelte-guide.svg",
      category: "Svelte",
      rating: 4,
      readTime: "18 min",
      author: "TechDevDex Team",
      date: "2024-11-15",
    },
    {
      slug: "nextjs-full-stack",
      title: "Next.js: Full-Stack React Framework",
      description: "Master Next.js for full-stack development with SSR, SSG, API routes, and deployment strategies.",
      image: "/images/web-dev/frontend-frameworks/nextjs-guide.svg",
      category: "Next.js",
      rating: 5,
      readTime: "28 min",
      author: "TechDevDex Team",
      date: "2024-11-10",
    },
  ];

  return (
    <>
      <SEO
        title="Frontend Frameworks"
        description="Comprehensive guides for modern frontend frameworks including React, Vue, Angular, and more. Master modern web development."
        keywords={[
          "frontend frameworks",
          "React",
          "Vue",
          "Angular",
          "Svelte",
          "Next.js",
          "JavaScript frameworks",
          "frontend development",
          "web development",
          "modern frameworks"
        ]}
        type="website"
        image="/images/web-dev/frontend-frameworks-og.jpg"
        url="/web-dev/frontend-frameworks"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/web-dev" className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Web Dev
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mb-6">
              <Code className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Frontend Frameworks
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Master modern frontend frameworks with comprehensive guides and best practices
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
                placeholder="Search frameworks..."
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
            <Link href={`/web-dev/frontend-frameworks/${tutorials[0].slug}`} className="block">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 h-64 lg:h-auto bg-gradient-to-br from-green-500/10 to-emerald-600/10 flex items-center justify-center p-6">
                  <Image src={tutorials[0].image} alt={tutorials[0].title} width={300} height={200} className="max-h-full max-w-full object-contain" />
                </div>
                <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium rounded-full">
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
                <Link href={`/web-dev/frontend-frameworks/${tutorial.slug}`} className="block">
                  <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 h-full flex flex-col">
                    <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-700/50 flex items-center justify-center p-4">
                      <Image src={tutorial.image} alt={tutorial.title} width={300} height={200} className="max-h-full max-w-full object-contain" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium rounded-full">
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

export default FrontendFrameworks;