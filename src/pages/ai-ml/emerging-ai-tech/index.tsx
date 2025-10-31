import React, { useState } from 'react';
import SEO from '@/components/SEO';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Brain, Clock, Filter, Search, Star, User } from 'lucide-react';
import { motion } from 'framer-motion';

const EmergingAITech = () => {
  // Emerging AI tech articles
  const articles = [
    {
      slug: "quantum-computing-development",
      title: "Quantum Computing Development: The Future of Computing",
      description: "Complete guide to quantum computing development. Learn quantum algorithms, quantum programming languages, and build quantum applications with practical examples.",
      image: "/images/ai-ml/emerging-ai-tech/quantum-computing.svg",
      category: "Quantum Computing",
      rating: 5,
      readTime: "28 min",
      author: "TechDevDex Team",
      date: "2025-01-15",
    },
    {
      slug: "ai-brain-computer-interfaces",
      title: "AI Brain-Computer Interfaces: Next Frontier",
      description: "Exploring the intersection of AI and brain-computer interfaces. Learn about neural interfaces, brain signal processing, and AI-powered BCIs.",
      image: "/images/ai-ml/emerging-ai-tech/brain-computer-interface.svg",
      category: "Neural Interfaces",
      rating: 4,
      readTime: "24 min",
      author: "TechDevDex Team",
      date: "2025-01-10",
    },
    {
      slug: "ai-robotics-autonomous-systems",
      title: "AI Robotics and Autonomous Systems",
      description: "Comprehensive guide to AI-powered robotics and autonomous systems. Learn about robot learning, autonomous navigation, and AI robotics development.",
      image: "/images/ai-ml/emerging-ai-tech/ai-robotics.svg",
      category: "Robotics",
      rating: 4,
      readTime: "26 min",
      author: "TechDevDex Team",
      date: "2025-01-08",
    },
    {
      slug: "ai-space-technology",
      title: "AI in Space Technology and Exploration",
      description: "How AI is revolutionizing space exploration. Learn about autonomous spacecraft, AI-powered satellite systems, and space mission optimization.",
      image: "/images/ai-ml/emerging-ai-tech/space-ai.svg",
      category: "Space Tech",
      rating: 5,
      readTime: "22 min",
      author: "TechDevDex Team",
      date: "2025-01-05",
    },
    {
      slug: "ai-climate-solutions",
      title: "AI Climate Solutions and Environmental Tech",
      description: "AI applications in climate change mitigation and environmental protection. Learn about AI for carbon capture, climate modeling, and green technology.",
      image: "/images/ai-ml/emerging-ai-tech/climate-ai.svg",
      category: "Climate Tech",
      rating: 4,
      readTime: "20 min",
      author: "TechDevDex Team",
      date: "2025-01-03",
    },
    {
      slug: "ai-biotechnology-medical",
      title: "AI Biotechnology and Medical Breakthroughs",
      description: "Revolutionary AI applications in biotechnology and medicine. Learn about AI drug discovery, medical imaging, and personalized medicine.",
      image: "/images/ai-ml/emerging-ai-tech/biotech-ai.svg",
      category: "Biotech",
      rating: 5,
      readTime: "25 min",
      author: "TechDevDex Team",
      date: "2025-01-01",
    }
    ,
    {
      slug: "ai-edge-microcontrollers",
      title: "Edge AI on Microcontrollers: Practical Guide for 2025",
      description: "Deploy efficient on-device ML with TinyML, quantization, and workflows for STM32, ESP32, and RP2040.",
      image: "/images/ai-ml/emerging-ai-tech/brain-computer-interface.svg",
      category: "Edge AI",
      rating: 5,
      readTime: "14 min",
      author: "TechDevDex Team",
      date: "2025-01-15",
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Quantum Computing', 'Neural Interfaces', 'Robotics', 'Space Tech', 'Climate Tech', 'Biotech'];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEO
        title="Emerging AI Tech: The Future of Artificial Intelligence"
        description="Explore cutting-edge AI technologies shaping the future. Quantum computing, brain-computer interfaces, AI robotics, and breakthrough applications in space, climate, and biotechnology."
        keywords={[
          'emerging ai tech',
          'quantum computing',
          'brain computer interface',
          'ai robotics',
          'space ai',
          'climate ai',
          'biotech ai',
          'future ai',
          'ai breakthrough',
          'next generation ai'
        ]}
        type="website"
        image="/images/ai-ml/emerging-ai-tech/emerging-ai-tech.svg"
        url="/ai-trending/emerging-ai-tech"
        section="Emerging AI Tech"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/ai-trending" className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to AI Trending
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl mb-6">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Emerging AI Tech
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Explore cutting-edge AI technologies that are reshaping our world. From quantum computing to brain-computer interfaces, discover the next generation of AI innovation.
            </p>
          </div>

          {/* Filter and Search */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
            <div className="flex items-center gap-2 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 w-full sm:w-auto">
              <Filter className="h-5 w-5 text-slate-500 dark:text-slate-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-transparent text-slate-700 dark:text-slate-300 font-medium border-none outline-none"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div className="relative w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search emerging AI technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-64 pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 dark:text-slate-400" />
            </div>
          </div>

          {/* Featured Article */}
          {filteredArticles.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden"
            >
              <Link href={`/ai-trending/emerging-ai-tech/${filteredArticles[0].slug}`} className="block">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 h-64 lg:h-auto bg-gradient-to-br from-indigo-500/10 to-purple-600/10 flex items-center justify-center p-6">
                    <Image src={filteredArticles[0].image} alt={filteredArticles[0].title} width={300} height={200} className="max-h-full max-w-full object-contain" />
                  </div>
                  <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium rounded-full">
                        Featured Article
                      </span>
                      <div className="flex items-center gap-1">
                        {[...Array(filteredArticles[0].rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        {[...Array(5 - filteredArticles[0].rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-slate-300 text-slate-300 dark:fill-slate-600 dark:text-slate-600" />
                        ))}
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {filteredArticles[0].title}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg mb-5">
                      {filteredArticles[0].description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{filteredArticles[0].readTime} read</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{filteredArticles[0].author}</span>
                      </div>
                      <span>{filteredArticles[0].date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* All Articles Grid */}
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <Brain className="h-12 w-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">No articles found</h3>
              <p className="text-slate-500 dark:text-slate-400">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, idx) => (
                <motion.article
                  key={article.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group"
                >
                  <Link href={`/ai-trending/emerging-ai-tech/${article.slug}`} className="block">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 h-full flex flex-col">
                      <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-700/50 flex items-center justify-center p-4">
                        <Image src={article.image} alt={article.title} width={300} height={200} className="max-h-full max-w-full object-contain" />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium rounded-full">
                            {article.category}
                          </span>
                          <div className="flex items-center gap-1">
                            {[...Array(article.rating)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            ))}
                            {[...Array(5 - article.rating)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 fill-slate-300 text-slate-300 dark:fill-slate-600 dark:text-slate-600" />
                            ))}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3 flex-grow">
                          {article.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mt-auto">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{article.readTime} read</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>{article.author}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EmergingAITech;
