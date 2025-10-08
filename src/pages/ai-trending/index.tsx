import Head from "next/head";
import Link from "next/link";
import Tabs from "../../components/ui/Tabs";
import { Bot, Languages, PlugZap, Cpu, ArrowRight, Clock, User } from "lucide-react";
import { motion } from "framer-motion";

const subcategories = [
  { 
    name: "AI Coding Tools", 
    slug: "ai-coding-tools",
    description: "Explore the latest AI-powered development tools and assistants",
    icon: <Bot size={24} />,
    color: "from-purple-500 to-pink-500"
  },
  { 
    name: "Emerging Languages", 
    slug: "emerging-languages",
    description: "Discover new programming languages and frameworks",
    icon: <Languages size={24} />,
    color: "from-green-500 to-emerald-500"
  },
  { 
    name: "AI Integration", 
    slug: "ai-integration-tutorials",
    description: "Learn how to integrate AI into your applications",
    icon: <PlugZap size={24} />,
    color: "from-blue-500 to-cyan-500"
  },
];

export default function AITrendingPage() {
  return (
    <>
      <Head>
        <title>AI & Trending Tech | TechDevDex</title>
        <meta name="description" content="Stay current with AI coding tools, emerging programming languages, and AI integration tutorials" />
      </Head>
      
      {/* Hero Section */}
      <section className="mb-12">
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6">
              <Cpu className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              AI & Trending Tech
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Stay current with AI tools, emerging languages, and cutting-edge technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="mb-12">
        <Tabs
          tabs={[
            { label: "All", href: "/ai-trending", icon: <Bot size={16} /> },
            { label: "AI Coding Tools", href: "/ai-trending/ai-coding-tools", icon: <Bot size={16} /> },
            { label: "Emerging Languages", href: "/ai-trending/emerging-languages", icon: <Languages size={16} /> },
            { label: "Integrations", href: "/ai-trending/ai-integration-tutorials", icon: <PlugZap size={16} /> },
          ]}
        />
      </div>

      {/* AI Categories */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Trending Topics
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Explore the latest in AI and technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subcategories.map((category, idx) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group"
            >
              <Link href={`/ai-trending/${category.slug}`} className="block h-full">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 h-full flex flex-col group-hover:-translate-y-1">
                  <div className="mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <div className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      Explore Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Articles */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Latest AI Insights
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Stay ahead with the latest AI trends and tools
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subcategories.map((article, idx) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group"
            >
              <Link href={`/ai-trending/${article.slug}`} className="block">
                <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                  <div className="h-48 bg-gradient-to-br from-purple-500/10 to-pink-600/10 flex items-center justify-center">
                    <div className={`w-12 h-12 bg-gradient-to-br ${article.color} rounded-xl flex items-center justify-center text-white`}>
                      {article.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium rounded-full">
                        AI & Tech
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {article.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                      {article.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>12 min read</span>
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
          ))}
        </div>
      </section>
    </>
  );
}


