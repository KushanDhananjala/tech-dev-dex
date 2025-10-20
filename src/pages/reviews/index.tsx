import SEO from "../../components/SEO";
import Link from "next/link";
import Image from "next/image";
import Tabs from "../../components/ui/Tabs";
import { ArrowRight, Clock, Cpu, GitCompareArrows, Monitor, Star, User } from 'lucide-react';
import { motion } from "framer-motion";

const subcategories = [
  { 
    name: "Software Reviews", 
    slug: "software-reviews",
    description: "In-depth reviews of development tools and software",
    icon: <Monitor size={24} />,
    color: "from-blue-500 to-indigo-500"
  },
  { 
    name: "App Comparisons", 
    slug: "app-comparisons",
    description: "Side-by-side comparisons of popular applications",
    icon: <GitCompareArrows size={24} />,
    color: "from-green-500 to-teal-500"
  },
  { 
    name: "Gadget Reviews", 
    slug: "gadget-reviews",
    description: "Hardware reviews and tech gadget recommendations",
    icon: <Cpu size={24} />,
    color: "from-purple-500 to-pink-500"
  },
];

export default function ReviewsPage() {
  return (
    <>
      <SEO
        title="Tech Reviews & Comparisons"
        description="Honest, unbiased reviews and comparisons of software, apps, and gadgets to help you make informed decisions. Expert reviews of development tools and tech products."
        keywords={[
          "tech reviews",
          "software reviews",
          "app comparisons",
          "gadget reviews",
          "product reviews",
          "tech comparisons",
          "development tools review",
          "software comparison",
          "tech recommendations",
          "productivity tools review",
          "hardware reviews",
          "tech buying guide",
          "software testing",
          "tech analysis"
        ]}
        type="website"
        image="/images/reviews-og.jpg"
        url="/reviews"
      />
      
      {/* Hero Section */}
      <section className="mb-12">
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl mb-6">
              <Star className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Reviews
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Honest reviews and comparisons to help you make informed decisions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="mb-12">
        <Tabs
          tabs={[
            { label: "All", href: "/reviews", icon: <Monitor size={16} /> },
            { label: "Software", href: "/reviews/software-reviews", icon: <Monitor size={16} /> },
            { label: "App Comparisons", href: "/reviews/app-comparisons", icon: <GitCompareArrows size={16} /> },
            { label: "Gadgets", href: "/reviews/gadget-reviews", icon: <Cpu size={16} /> },
          ]}
        />
      </div>

      {/* Review Categories */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Review Categories
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Find detailed reviews and comparisons
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
              <Link href={`/reviews/${category.slug}`} className="block h-full">
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
                      Read Reviews
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Latest Reviews
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Our most recent reviews and comparisons
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Figma vs Adobe XD */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            className="group"
          >
            <Link href="/reviews/app-comparisons/figma-vs-adobe-xd" className="block">
              <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src="/images/reviews/app-comparisons/figma-vs-adobe-xd.svg" 
                    alt="Figma vs Adobe XD Design Tools"
                    width={400}
                    height={192}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-orange-600 text-white text-sm font-medium rounded-full">
                      Comparison
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    Figma vs Adobe XD: Complete Design Tool Comparison
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                    In-depth comparison of Figma and Adobe XD for UI/UX design. Features, pricing, collaboration, and which tool is better.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>12 min read</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>Designer</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>

          {/* VS Code Review */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group"
          >
            <Link href="/reviews/software-reviews/vs-code-review" className="block">
              <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src="/images/reviews/software-reviews/vs-code-review.svg" 
                    alt="VS Code Review"
                    width={400}
                    height={192}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-yellow-600 text-white text-sm font-medium rounded-full">
                      Review
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    VS Code Review: The Ultimate Developer IDE
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                    Comprehensive review of Visual Studio Code, covering features, extensions, performance, and why it's the developer's choice.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>10 min read</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>Editor</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>

          {/* Gadget Reviews */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group"
          >
            <Link href="/reviews/gadget-reviews" className="block">
              <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src="/images/reviews/gadget-reviews/gadget-reviews.svg" 
                    alt="Gadget Reviews"
                    width={400}
                    height={192}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-purple-600 text-white text-sm font-medium rounded-full">
                      Hardware
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    Gadget Reviews: Essential Hardware for Developers
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                    Unbiased reviews of keyboards, laptops, chairs, and gadgets that enhance productivity for developers and tech professionals.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>18 min read</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>Reviewer</span>
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


