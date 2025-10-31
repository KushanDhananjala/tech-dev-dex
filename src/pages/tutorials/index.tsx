import SEO from "../../components/SEO";
import Link from "next/link";
import Image from "next/image";
import Tabs from "../../components/ui/Tabs";
import { ArrowRight, BookOpen, Box, Clock, Dock, Github, User, Code, Zap } from 'lucide-react';
import { motion } from "framer-motion";

const subcategories = [
  { 
    name: "Docker Setup Guides", 
    slug: "docker-setup-guides",
    description: "Complete Docker installation and configuration guides",
    icon: <Dock size={24} />,
    color: "from-blue-500 to-cyan-500"
  },
  { 
    name: "Git & GitHub Tutorials", 
    slug: "git-github-tutorials",
    description: "Master version control with Git and GitHub workflows",
    icon: <Github size={24} />,
    color: "from-gray-600 to-gray-800"
  },
  { 
    name: "React / Node Deployment", 
    slug: "react-node-deployment",
    description: "Deploy your React and Node.js applications successfully",
    icon: <Box size={24} />,
    color: "from-green-500 to-emerald-500"
  },
  { 
    name: "Python Automation", 
    slug: "python-automation",
    description: "Automate tasks and workflows with Python scripts",
    icon: <Box size={24} />,
    color: "from-yellow-500 to-orange-500"
  },
  { 
    name: "Programming Tips", 
    slug: "programming-tips",
    description: "Best practices and problem-solving techniques",
    icon: <BookOpen size={24} />,
    color: "from-purple-500 to-pink-500"
  },
  { 
    name: "Web Development", 
    slug: "web-development",
    description: "Frontend and backend development tutorials",
    icon: <Code size={24} />,
    color: "from-indigo-500 to-purple-500"
  },
  { 
    name: "Productivity Tools", 
    slug: "productivity-tools",
    description: "Development workflow optimization",
    icon: <Zap size={24} />,
    color: "from-amber-500 to-orange-500"
  },
];

export default function TutorialsPage() {
  return (
    <>
      <SEO
        title="Programming Tutorials & Guides"
        description="Comprehensive programming tutorials covering Docker, Git/GitHub, React/Node deployment, Python automation, and programming best practices. Step-by-step guides for developers."
        keywords={[
          "programming tutorials",
          "coding guides",
          "docker tutorials",
          "git github tutorials",
          "react deployment",
          "node.js deployment",
          "python automation",
          "programming tips",
          "developer guides",
          "coding tutorials",
          "software development",
          "web development tutorials",
          "devops tutorials",
          "programming best practices"
        ]}
        type="website"
        image="/images/tutorials-og.jpg"
        url="/tutorials"
      />
      
      {/* Hero Section */}
      <section className="mb-12">
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Tutorials
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Step-by-step guides and developer tips to level up your coding skills
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="mb-12">
        <Tabs
          tabs={[
            { label: "All", href: "/tutorials", icon: <Box size={16} /> },
            { label: "Docker", href: "/tutorials/docker-setup-guides", icon: <Dock size={16} /> },
            { label: "Git & GitHub", href: "/tutorials/git-github-tutorials", icon: <Github size={16} /> },
            { label: "React/Node", href: "/tutorials/react-node-deployment", icon: <Box size={16} /> },
            { label: "Python", href: "/tutorials/python-automation", icon: <Box size={16} /> },
            { label: "Tips", href: "/tutorials/programming-tips", icon: <Box size={16} /> },
            { label: "Web Dev", href: "/tutorials/web-development", icon: <Code size={16} /> },
            { label: "Productivity", href: "/tutorials/productivity-tools", icon: <Zap size={16} /> },
          ]}
        />
      </div>

      {/* Tutorial Categories */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Browse by Category
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Choose a topic to start learning
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
              <Link href={`/tutorials/${category.slug}`} className="block h-full">
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
                      Start Learning
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
            Featured Tutorials
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Most popular and helpful tutorials
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Docker Beginners Guide */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            className="group"
          >
            <Link href="/tutorials/docker-setup-guides/docker-beginners-guide" className="block">
              <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src="/images/tutorials/docker-setup-guides/docker-beginners.svg" 
                    alt="Docker Beginners Guide"
                    width={400}
                    height={192}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                      Tutorial
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    Docker Beginners Guide: From Zero to Container
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                    Complete beginner's guide to Docker containers, covering installation, basic commands, and your first containerized application.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>20 min read</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>Expert</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>

          {/* Git & GitHub Tutorial */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group"
          >
            <Link href="/tutorials/git-github-tutorials/git-basics-guide" className="block">
              <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src="/images/tutorials/git-github-tutorials/git-basics.svg" 
                    alt="Git & GitHub Tutorial"
                    width={400}
                    height={192}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-green-600 text-white text-sm font-medium rounded-full">
                      Tutorial
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    Git Basics Guide: Essential Version Control
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                    Learn the fundamentals of Git version control with practical examples, commands, and workflow strategies.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>18 min read</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>Expert</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>

          {/* Advanced TypeScript Patterns */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group"
          >
            <Link href="/tutorials/web-development/typescript-advanced-patterns" className="block">
              <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src="/images/tutorials/web-development/nextjs-15-guide.svg" 
                    alt="Advanced TypeScript Patterns"
                    width={400}
                    height={192}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full">
                      TypeScript
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    Advanced TypeScript Patterns: 2025 Edition
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                    Master discriminated unions, branded types, type-safe builders, and functional utilities for robust apps.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>18 min read</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>TechDevDex Team</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>

          {/* Python Automation */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group"
          >
            <Link href="/tutorials/python-automation" className="block">
              <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src="/images/posts/python-automation.svg" 
                    alt="Python Automation Guide"
                    width={400}
                    height={192}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-yellow-600 text-white text-sm font-medium rounded-full">
                      Tutorial
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    Python Automation: Complete Guide to Automating Tasks
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                    Learn how to automate repetitive tasks with Python scripts, from file operations to web scraping and API interactions.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>22 min read</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>Expert</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>
        </div>
      </section>
    </>
  );
}


