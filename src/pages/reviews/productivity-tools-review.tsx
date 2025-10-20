import React from 'react';
import SEO from '@/components/SEO';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, Filter, Search, Star, User, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductivityToolsReview = () => {
  // Sample review data
  const reviews = [
    {
      slug: "notion-productivity-review",
      title: "Notion: All-in-One Productivity Platform",
      description: "Comprehensive review of Notion's features for project management, note-taking, and team collaboration.",
      image: "/images/reviews/productivity-tools-review/notion-review.svg",
      category: "Productivity",
      rating: 5,
      readTime: "12 min",
      author: "TechDevDex Team",
      date: "2024-12-01",
    },
    {
      slug: "obsidian-review",
      title: "Obsidian: Knowledge Management Review",
      description: "In-depth analysis of Obsidian's note-taking capabilities and knowledge graph features.",
      image: "/images/reviews/productivity-tools-review/obsidian.svg",
      category: "Note Taking",
      rating: 4,
      readTime: "10 min",
      author: "TechDevDex Team",
      date: "2024-11-28",
    },
    {
      slug: "trello-vs-asana-review",
      title: "Trello vs Asana: Project Management Comparison",
      description: "Side-by-side comparison of Trello and Asana for project management and team collaboration.",
      image: "/images/reviews/productivity-tools-review/trello-asana.svg",
      category: "Project Management",
      rating: 4,
      readTime: "15 min",
      author: "TechDevDex Team",
      date: "2024-11-20",
    },
    {
      slug: "slack-alternatives-review",
      title: "Slack Alternatives: Team Communication Tools",
      description: "Review of Slack alternatives including Discord, Microsoft Teams, and Mattermost for developer teams.",
      image: "/images/reviews/productivity-tools-review/slack-alternatives.svg",
      category: "Communication",
      rating: 4,
      readTime: "13 min",
      author: "TechDevDex Team",
      date: "2024-11-15",
    },
    {
      slug: "time-tracking-tools-review",
      title: "Time Tracking Tools: Developer Productivity",
      description: "Review of time tracking tools including Toggl, RescueTime, and Clockify for developer productivity.",
      image: "/images/reviews/productivity-tools-review/time-tracking.svg",
      category: "Time Management",
      rating: 4,
      readTime: "11 min",
      author: "TechDevDex Team",
      date: "2024-11-10",
    },
  ];

  return (
    <>
      <SEO
        title="Productivity Tools Review"
        description="Honest reviews of productivity tools for developers including project management, note-taking, and workflow optimization tools. Expert analysis of Notion, Obsidian, Trello, Asana, and more."
        keywords={[
          "productivity tools review",
          "notion review",
          "obsidian review",
          "trello review",
          "asana review",
          "time tracking tools",
          "developer productivity",
          "project management tools",
          "note taking apps",
          "workflow optimization",
          "productivity software",
          "team collaboration tools",
          "task management",
          "productivity comparison"
        ]}
        type="website"
        image="/images/reviews/productivity-tools-review-og.jpg"
        url="/reviews/productivity-tools-review"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/reviews" className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Reviews
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl mb-6">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Productivity Tools Review
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Honest reviews and comparisons of productivity tools for developers and teams
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
                placeholder="Search reviews..."
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
            <Link href={`/reviews/productivity-tools-review/${reviews[0].slug}`} className="block">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 h-64 lg:h-auto bg-gradient-to-br from-orange-500/10 to-red-600/10 flex items-center justify-center p-6">
                  <Image src={reviews[0].image} alt={reviews[0].title} width={300} height={200} className="max-h-full max-w-full object-contain" />
                </div>
                <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm font-medium rounded-full">
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
                <Link href={`/reviews/productivity-tools-review/${review.slug}`} className="block">
                  <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 h-full flex flex-col">
                    <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-700/50 flex items-center justify-center p-4">
                      <Image src={review.image} alt={review.title} width={300} height={200} className="max-h-full max-w-full object-contain" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm font-medium rounded-full">
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

export default ProductivityToolsReview;
