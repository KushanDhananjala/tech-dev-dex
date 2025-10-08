import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Star, Clock, User } from 'lucide-react';

const SoftwareReviews = () => {
  // Sample reviews data - in a real app, this would come from a CMS or API
  const reviews = [
    {
      id: 'vs-code-review',
      title: 'Visual Studio Code: The Ultimate Code Editor',
      description: 'A comprehensive review of VS Code, covering features, extensions, and productivity tips for developers.',
      author: 'TechDevDex Team',
      date: '2024-12-15',
      readTime: '8 min',
      rating: 5,
      category: 'Code Editors',
      image: '/images/posts/vs-code-review.jpg',
      featured: true
    },
    {
      id: 'intellij-idea-review',
      title: 'IntelliJ IDEA: The Professional IDE',
      description: 'Deep dive into IntelliJ IDEA features, performance, and why it\'s the choice for enterprise development.',
      author: 'TechDevDex Team',
      date: '2024-12-14',
      readTime: '10 min',
      rating: 5,
      category: 'IDEs',
      image: '/images/posts/intellij-review.jpg',
      featured: true
    },
    {
      id: 'sublime-text-review',
      title: 'Sublime Text: Lightweight and Fast',
      description: 'Review of Sublime Text\'s speed, customization options, and when to choose it over other editors.',
      author: 'TechDevDex Team',
      date: '2024-12-13',
      readTime: '6 min',
      rating: 4,
      category: 'Code Editors',
      image: '/images/posts/sublime-review.jpg',
      featured: false
    },
    {
      id: 'webstorm-review',
      title: 'WebStorm: The JavaScript IDE',
      description: 'Complete review of WebStorm for frontend development, including React, Vue, and Angular support.',
      author: 'TechDevDex Team',
      date: '2024-12-12',
      readTime: '9 min',
      rating: 5,
      category: 'IDEs',
      image: '/images/posts/webstorm-review.jpg',
      featured: false
    },
    {
      id: 'vim-review',
      title: 'Vim: The Terminal Editor',
      description: 'Exploring Vim\'s learning curve, productivity benefits, and why developers still choose it in 2024.',
      author: 'TechDevDex Team',
      date: '2024-12-11',
      readTime: '12 min',
      rating: 4,
      category: 'Terminal Editors',
      image: '/images/posts/vim-review.jpg',
      featured: false
    },
    {
      id: 'atom-review',
      title: 'Atom: The Hackable Editor',
      description: 'Review of Atom\'s customization capabilities, community, and current state of development.',
      author: 'TechDevDex Team',
      date: '2024-12-10',
      readTime: '7 min',
      rating: 3,
      category: 'Code Editors',
      image: '/images/posts/atom-review.jpg',
      featured: false
    }
  ];

  const categories = ['All', 'Code Editors', 'IDEs', 'Terminal Editors'];

  return (
    <>
      <Head>
        <title>Software Reviews - TechDevDex</title>
        <meta name="description" content="Comprehensive reviews of development software, IDEs, code editors, and productivity tools. Find the best tools for your development workflow." />
        <meta name="keywords" content="software reviews, code editors, IDEs, development tools, productivity software" />
      </Head>

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
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Software Reviews
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive reviews of development software, IDEs, code editors, and productivity tools
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Reviews */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Featured Reviews</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {reviews.filter(review => review.featured).map((review) => (
                <Link key={review.id} href={`/reviews/software-reviews/${review.id}`}>
                  <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700">
                    <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 text-slate-900 rounded-full text-sm font-medium">
                          {review.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-2">{review.title}</h3>
                        <div className="flex items-center gap-4 text-white/90 text-sm">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-current" />
                            <span>{review.rating}/5</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{review.readTime}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>{review.author}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-slate-600 dark:text-slate-400 mb-4">{review.description}</p>
                      <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-500">
                        <span>{review.date}</span>
                        <span className="text-blue-600 dark:text-blue-400 font-medium">Read Review →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* All Reviews */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">All Reviews</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <Link key={review.id} href={`/reviews/software-reviews/${review.id}`}>
                  <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700">
                    <div className="aspect-video bg-gradient-to-br from-slate-400 to-slate-600 relative">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-white/90 text-slate-900 rounded text-xs font-medium">
                          {review.category}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="text-lg font-bold text-white mb-1">{review.title}</h3>
                        <div className="flex items-center gap-3 text-white/90 text-xs">
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-current" />
                            <span>{review.rating}/5</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{review.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-3 line-clamp-2">{review.description}</p>
                      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-500">
                        <span>{review.date}</span>
                        <span className="text-blue-600 dark:text-blue-400 font-medium">Read →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SoftwareReviews;