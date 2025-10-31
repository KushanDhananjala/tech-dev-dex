import React from 'react';
import SEO from '@/components/SEO';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, GitCompareArrows, Star, User } from 'lucide-react';

const AppComparisons = () => {
  // Sample comparison data
  const comparisons = [
    {
      id: 'vs-code-vs-sublime',
      title: 'VS Code vs Sublime Text: The Ultimate Comparison',
      description: 'Comprehensive comparison of the two most popular code editors. Performance, features, and which one to choose.',
      author: 'TechDevDex Team',
      date: '2024-12-15',
      readTime: '12 min',
      rating: 5,
      category: 'Code Editors',
      image: '/images/reviews/app-comparisons/vs-code-vs-sublime.svg',
      featured: true
    },
    {
      id: 'zed-vs-vscode',
      title: 'Zed vs VS Code: Which Editor Wins for Developers in 2025?',
      description: 'Latency, extensions, collaboration, and remote dev: a practical comparison of Zed and VS Code for daily workflows.',
      author: 'TechDevDex Team',
      date: '2025-01-13',
      readTime: '15 min',
      rating: 4,
      category: 'Code Editors',
      image: '/images/reviews/software-reviews/vs-code-review.svg',
      featured: true
    },
    {
      id: 'react-vs-vue-vs-angular',
      title: 'React vs Vue vs Angular: Frontend Framework Battle',
      description: 'Detailed comparison of the three most popular frontend frameworks. Performance, learning curve, and ecosystem analysis.',
      author: 'TechDevDex Team',
      date: '2024-12-14',
      readTime: '15 min',
      rating: 5,
      category: 'Frontend Frameworks',
      image: '/images/reviews/app-comparisons/react-vs-vue-vs-angular.svg',
      featured: true
    },
    {
      id: 'node-vs-python-backend',
      title: 'Node.js vs Python: Backend Development Showdown',
      description: 'Comparing Node.js and Python for backend development. Performance, scalability, and use cases.',
      author: 'TechDevDex Team',
      date: '2024-12-13',
      readTime: '10 min',
      rating: 4,
      category: 'Backend Technologies',
      image: '/images/reviews/app-comparisons/node-vs-python.svg',
      featured: false
    },
    {
      id: 'mongodb-vs-postgresql',
      title: 'MongoDB vs PostgreSQL: Database Comparison',
      description: 'NoSQL vs SQL database comparison. When to choose MongoDB over PostgreSQL and vice versa.',
      author: 'TechDevDex Team',
      date: '2024-12-12',
      readTime: '14 min',
      rating: 4,
      category: 'Databases',
      image: '/images/reviews/app-comparisons/mongodb-vs-postgresql.svg',
      featured: false
    },
    {
      id: 'aws-vs-azure-vs-gcp',
      title: 'AWS vs Azure vs Google Cloud: Cloud Platform Battle',
      description: 'Comprehensive comparison of the three major cloud providers. Pricing, features, and which one to choose.',
      author: 'TechDevDex Team',
      date: '2024-12-11',
      readTime: '18 min',
      rating: 5,
      category: 'Cloud Platforms',
      image: '/images/reviews/app-comparisons/aws-vs-azure-vs-gcp.svg',
      featured: false
    },
    {
      id: 'docker-vs-kubernetes',
      title: 'Docker vs Kubernetes: Container Technologies',
      description: 'Understanding the difference between Docker and Kubernetes. When to use each technology.',
      author: 'TechDevDex Team',
      date: '2024-12-10',
      readTime: '8 min',
      rating: 4,
      category: 'DevOps',
      image: '/images/reviews/app-comparisons/docker-vs-kubernetes.svg',
      featured: false
    }
  ];

  const categories = ['All', 'Code Editors', 'Frontend Frameworks', 'Backend Technologies', 'Databases', 'Cloud Platforms', 'DevOps'];

  return (
    <>
      <SEO
        title="App Comparisons & Technology Analysis"
        description="Side-by-side comparisons of popular applications, frameworks, and technologies. Make informed decisions with our detailed comparisons of VS Code vs Sublime, React vs Vue vs Angular, and more."
        keywords={[
          "app comparisons",
          "technology comparison",
          "software comparison",
          "framework comparison",
          "vs code vs sublime",
          "react vs vue vs angular",
          "node.js vs python",
          "mongodb vs postgresql",
          "aws vs azure vs gcp",
          "docker vs kubernetes",
          "tech comparison",
          "software analysis",
          "technology review",
          "framework analysis"
        ]}
        type="website"
        image="/images/reviews/app-comparisons-og.jpg"
        url="/reviews/app-comparisons"
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl mb-6">
              <GitCompareArrows className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              App Comparisons
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Side-by-side comparisons of popular applications, frameworks, and technologies
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-green-50 dark:hover:bg-slate-700 hover:border-green-300 dark:hover:border-green-600 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Comparisons */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Featured Comparisons</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {comparisons.filter(comparison => comparison.featured).map((comparison) => (
                <Link key={comparison.id} href={`/reviews/app-comparisons/${comparison.id}`}>
                  <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700">
                    <div className="aspect-video relative">
                      <Image
                        src={comparison.image}
                        alt={comparison.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 text-slate-900 rounded-full text-sm font-medium">
                          {comparison.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-2">{comparison.title}</h3>
                        <div className="flex items-center gap-4 text-white/90 text-sm">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-current" />
                            <span>{comparison.rating}/5</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{comparison.readTime}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>{comparison.author}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-slate-600 dark:text-slate-400 mb-4">{comparison.description}</p>
                      <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-500">
                        <span>{comparison.date}</span>
                        <span className="text-green-600 dark:text-green-400 font-medium">Read Comparison →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* All Comparisons */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">All Comparisons</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {comparisons.map((comparison) => (
                <Link key={comparison.id} href={`/reviews/app-comparisons/${comparison.id}`}>
                  <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700">
                    <div className="aspect-video relative">
                      <Image
                        src={comparison.image}
                        alt={comparison.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-white/90 text-slate-900 rounded text-xs font-medium">
                          {comparison.category}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="text-lg font-bold text-white mb-1">{comparison.title}</h3>
                        <div className="flex items-center gap-3 text-white/90 text-xs">
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-current" />
                            <span>{comparison.rating}/5</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{comparison.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-3 line-clamp-2">{comparison.description}</p>
                      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-500">
                        <span>{comparison.date}</span>
                        <span className="text-green-600 dark:text-green-400 font-medium">Read →</span>
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

export default AppComparisons;