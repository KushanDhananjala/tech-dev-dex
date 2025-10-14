import React from 'react';
import SEO from '@/components/SEO';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, BookOpen, CheckCircle, Clock, Code, Star, Target, TrendingUp, User, Zap } from 'lucide-react';

const WebDevelopment = () => {
  // Sample tutorial data
  const tutorials = [
    {
      id: 'html-css-basics',
      title: 'HTML & CSS Fundamentals: Building Your First Website',
      description: 'Learn the basics of HTML and CSS to create beautiful, responsive websites from scratch.',
      author: 'TechDevDex Team',
      date: '2024-12-15',
      readTime: '12 min',
      difficulty: 'Beginner',
      category: 'Frontend Basics',
      image: '/images/tutorials/web-development/html-css-basics.svg',
      featured: true
    },
    {
      id: 'javascript-es6-guide',
      title: 'Modern JavaScript: ES6+ Features and Best Practices',
      description: 'Master modern JavaScript with ES6+ features, async/await, modules, and advanced concepts.',
      author: 'TechDevDex Team',
      date: '2024-12-14',
      readTime: '18 min',
      difficulty: 'Intermediate',
      category: 'JavaScript',
      image: '/images/tutorials/web-development/javascript-es6.svg',
      featured: true
    },
    {
      id: 'responsive-design-css',
      title: 'Responsive Web Design: Mobile-First Approach',
      description: 'Create responsive websites that work perfectly on all devices using CSS Grid and Flexbox.',
      author: 'TechDevDex Team',
      date: '2024-12-13',
      readTime: '15 min',
      difficulty: 'Intermediate',
      category: 'CSS',
      image: '/images/tutorials/web-development/responsive-design.svg',
      featured: false
    },
    {
      id: 'dom-manipulation-js',
      title: 'DOM Manipulation with JavaScript',
      description: 'Learn to interact with web pages using JavaScript DOM methods and event handling.',
      author: 'TechDevDex Team',
      date: '2024-12-12',
      readTime: '14 min',
      difficulty: 'Beginner',
      category: 'JavaScript',
      image: '/images/tutorials/web-development/dom-manipulation.svg',
      featured: false
    },
    {
      id: 'css-animations-guide',
      title: 'CSS Animations and Transitions: Bringing Websites to Life',
      description: 'Create smooth animations and transitions using CSS to enhance user experience.',
      author: 'TechDevDex Team',
      date: '2024-12-11',
      readTime: '10 min',
      difficulty: 'Intermediate',
      category: 'CSS',
      image: '/images/tutorials/web-development/css-animations.svg',
      featured: false
    },
    {
      id: 'web-accessibility-guide',
      title: 'Web Accessibility: Building Inclusive Websites',
      description: 'Learn WCAG guidelines and best practices to make your websites accessible to everyone.',
      author: 'TechDevDex Team',
      date: '2024-12-10',
      readTime: '20 min',
      difficulty: 'Intermediate',
      category: 'Accessibility',
      image: '/images/tutorials/web-development/web-accessibility.svg',
      featured: false
    }
  ];

  const categories = ['All', 'Frontend Basics', 'JavaScript', 'CSS', 'Accessibility'];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  return (
    <>
      <SEO
        title="Web Development Tutorials 2024: Complete Learning Path"
        description="Master web development with our comprehensive tutorial collection. From HTML/CSS basics to advanced JavaScript, React, and modern frameworks. Complete learning path for aspiring developers."
        keywords={[
          'web development tutorials',
          'HTML CSS JavaScript',
          'React tutorials',
          'web development course',
          'frontend development',
          'responsive web design',
          'JavaScript ES6',
          'web development learning path',
          'coding tutorials',
          'web development for beginners'
        ]}
        type="article"
        image="/images/tutorials/web-development/web-development-tutorials.svg"
        url="/tutorials/web-development"
        section="Web Development Tutorials"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/tutorials" className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Tutorials
            </Link>
          </div>

              {/* Header */}
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Updated Dec 2024</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Beginner Friendly</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Complete Learning Path</span>
                </div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                  Web Development Tutorials 2024
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8">
                  Master web development with our comprehensive tutorial collection. From HTML/CSS basics to advanced JavaScript, React, and modern frameworks. Complete learning path for aspiring developers.
                </p>
                
                {/* Learning Path Overview */}
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 mb-8">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                    Complete Learning Path
                  </h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">1</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">HTML & CSS</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">2</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">JavaScript</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-1">3</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Frameworks</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600 mb-1">4</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Advanced</div>
                    </div>
                  </div>
                </div>

                {/* Success Stats */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Success Stories</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">15,000+</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Developers Trained</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">4.9/5</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Average Rating</div>
                    </div>
                  </div>
                </div>
              </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="flex flex-wrap gap-3">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300 self-center">Categories:</span>
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <div className="flex flex-wrap gap-3">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300 self-center">Difficulty:</span>
              {difficulties.map((difficulty) => (
                <button
                  key={difficulty}
                  className="px-4 py-2 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                >
                  {difficulty}
                </button>
              ))}
            </div>
          </div>

              {/* Featured Tutorials */}
              <div className="mb-16">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Star className="h-6 w-6 text-yellow-500" />
                    Featured Tutorials
                  </h2>
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <TrendingUp className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {tutorials.filter(tutorial => tutorial.featured).map((tutorial) => (
                    <Link key={tutorial.id} href={`/tutorials/web-development/${tutorial.id}`}>
                      <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:scale-105">
                        <div className="aspect-video relative">
                          <Image
                            src={tutorial.image}
                            alt={tutorial.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-white/90 text-slate-900 rounded-full text-sm font-medium flex items-center gap-1">
                              <Target className="h-3 w-3" />
                              {tutorial.category}
                            </span>
                          </div>
                          <div className="absolute top-4 right-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              tutorial.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                              tutorial.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-red-100 text-red-700'
                            }`}>
                              {tutorial.difficulty}
                            </span>
                          </div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-xl font-bold text-white mb-2">{tutorial.title}</h3>
                            <div className="flex items-center gap-4 text-white/90 text-sm">
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>{tutorial.readTime}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <User className="h-4 w-4" />
                                <span>{tutorial.author}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 text-yellow-400" />
                                <span>4.9</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <p className="text-slate-600 dark:text-slate-400 mb-4">{tutorial.description}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
                              <span>{tutorial.date}</span>
                              <div className="flex items-center gap-1">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span>Verified</span>
                              </div>
                            </div>
                            <span className="text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1">
                              Start Learning
                              <Zap className="h-4 w-4" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

          {/* All Tutorials */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">All Tutorials</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tutorials.map((tutorial) => (
                <Link key={tutorial.id} href={`/tutorials/web-development/${tutorial.id}`}>
                  <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700">
                    <div className="aspect-video relative">
                      <Image
                        src={tutorial.image}
                        alt={tutorial.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-white/90 text-slate-900 rounded text-xs font-medium">
                          {tutorial.category}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          tutorial.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                          tutorial.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {tutorial.difficulty}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="text-lg font-bold text-white mb-1">{tutorial.title}</h3>
                        <div className="flex items-center gap-3 text-white/90 text-xs">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{tutorial.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-3 line-clamp-2">{tutorial.description}</p>
                      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-500">
                        <span>{tutorial.date}</span>
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

export default WebDevelopment;
