import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown,
  ArrowRight,
  TrendingUp
} from "lucide-react";
import menu from "../../menu";

// Icon map for potential future use
// const iconMap = {
//   BookOpen,
//   Star,
//   Brain,
//   Code,
//   Monitor,
//   Zap,
// };

export default function MegaMenu() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setActiveCategory(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCategoryHover = (slug: string) => {
    setActiveCategory(slug);
    setIsOpen(true);
  };

  const handleCategoryLeave = () => {
    // Add a longer delay to allow moving to submenu
    setTimeout(() => {
      // Check if mouse is still over the menu container
      if (menuRef.current && !menuRef.current.matches(':hover')) {
        setActiveCategory(null);
        setIsOpen(false);
      }
    }, 200);
  };

  const handleMenuLeave = () => {
    // Close menu when leaving the entire menu area
    setTimeout(() => {
      setActiveCategory(null);
      setIsOpen(false);
    }, 200);
  };

  const handleLinkClick = () => {
    // Close menu immediately when any link is clicked
    setActiveCategory(null);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={menuRef} onMouseLeave={handleMenuLeave}>
      {/* Main Navigation - Desktop Only */}
      <nav className="hidden lg:flex items-center space-x-1">
        {menu.categories.map((category) => {
          const emojiIcons = {
            tutorials: "📚",
            reviews: "⭐", 
            "ai-ml": "🧠",
            "web-dev": "💻",
            hardware: "🖥️",
            productivity: "⚡"
          };
          const emojiIcon = emojiIcons[category.slug as keyof typeof emojiIcons];
          
          return (
            <div
              key={category.slug}
              className="relative"
              onMouseEnter={() => handleCategoryHover(category.slug)}
              onMouseLeave={handleCategoryLeave}
            >
              <Link
                href={`/${category.slug}`}
                className="flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 text-sm"
                onClick={handleLinkClick}
              >
                <span className="text-base">{emojiIcon}</span>
                <span className="hidden xl:inline">{category.name}</span>
                <span className="xl:hidden">{category.name.split(' ')[0]}</span>
                <ChevronDown className="h-3 w-3" />
              </Link>
            </div>
          );
        })}
      </nav>

      {/* Tablet Navigation - Medium screens */}
      <nav className="hidden md:flex lg:hidden items-center space-x-1">
        {menu.categories.slice(0, 4).map((category) => {
          const emojiIcons = {
            tutorials: "📚",
            reviews: "⭐", 
            "ai-ml": "🧠",
            "web-dev": "💻",
            hardware: "🖥️",
            productivity: "⚡"
          };
          const emojiIcon = emojiIcons[category.slug as keyof typeof emojiIcons];
          
          return (
            <div
              key={category.slug}
              className="relative"
              onMouseEnter={() => handleCategoryHover(category.slug)}
              onMouseLeave={handleCategoryLeave}
            >
              <Link
                href={`/${category.slug}`}
                className="flex items-center gap-1 px-2 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 text-sm"
                onClick={handleLinkClick}
              >
                <span className="text-sm">{emojiIcon}</span>
                <span className="hidden lg:inline">{category.name}</span>
                <span className="lg:hidden">{category.name.split(' ')[0]}</span>
                <ChevronDown className="h-3 w-3" />
              </Link>
            </div>
          );
        })}
      </nav>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {isOpen && activeCategory && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 z-50"
                style={{ marginTop: '-1px' }}
                onMouseEnter={() => {
                  // Keep menu open when hovering over dropdown
                  setActiveCategory(activeCategory);
                  setIsOpen(true);
                }}
                onMouseLeave={() => {
                  // Close menu when leaving dropdown
                  setActiveCategory(null);
                  setIsOpen(false);
                }}
              >
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden max-w-6xl mx-auto">
              {(() => {
                const category = menu.categories.find(cat => cat.slug === activeCategory);
                if (!category) return null;

                return (
                  <div className="p-4 md:p-6 lg:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                      {/* Category Header */}
                      <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                          {(() => {
                            const emojiIcons = {
                              tutorials: "📚",
                              reviews: "⭐", 
                              "ai-ml": "🧠",
                              "web-dev": "💻",
                              hardware: "🖥️",
                              productivity: "⚡"
                            };
                            const emojiIcon = emojiIcons[category.slug as keyof typeof emojiIcons];
                            
                            return (
                              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                                <span className="text-2xl">{emojiIcon}</span>
                              </div>
                            );
                          })()}
                          <div className="min-w-0">
                            <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">
                              {category.name}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                              {category.description}
                            </p>
                          </div>
                        </div>
                        <Link
                          href={`/${category.slug}`}
                          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm"
                          onClick={handleLinkClick}
                        >
                          View All {category.name}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>

                      {/* Subcategories */}
                      <div className="lg:col-span-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                          {category.children?.map((child) => {
                            // Special handling for AI & ML category - pages are in ai-trending directory
                            const href = category.slug === 'ai-ml' 
                              ? `/ai-trending/${child.slug}`
                              : `/${category.slug}/${child.slug}`;
                            
                            // Check if this is a working link (has corresponding page)
                            const isWorkingLink = category.slug === 'tutorials' || 
                                                category.slug === 'reviews' || 
                                                category.slug === 'ai-ml' ||
                                                category.slug === 'web-dev' ||
                                                category.slug === 'hardware' ||
                                                category.slug === 'productivity';
                            
                            // For categories without individual submenu pages, link to main category page
                            const finalHref = isWorkingLink ? href : `/${category.slug}`;
                            
                            return (
                            <div
                              key={child.slug}
                              className="group p-3 md:p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer touch-manipulation"
                              onClick={handleLinkClick}
                            >
                              <Link href={finalHref} className="block">
                                <div className="flex items-start justify-between">
                                  <div className="flex-1 min-w-0">
                                    <h4 className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1 text-sm md:text-base">
                                      {child.name}
                                    </h4>
                                    <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                                      {child.description}
                                    </p>
                                  </div>
                                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-blue-500 transition-colors opacity-0 group-hover:opacity-100 flex-shrink-0 ml-2" />
                                </div>
                              </Link>
                            </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Featured Content */}
                    <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-slate-200 dark:border-slate-700">
                      <div className="flex items-center gap-2 mb-3 md:mb-4">
                        <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-blue-600 dark:text-blue-400" />
                        <h4 className="font-semibold text-slate-900 dark:text-white text-sm md:text-base">
                          Popular in {category.name}
                        </h4>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                        {category.children?.slice(0, 3).map((child) => {
                          // Special handling for AI & ML category - pages are in ai-trending directory
                          const href = category.slug === 'ai-ml' 
                            ? `/ai-trending/${child.slug}`
                            : `/${category.slug}/${child.slug}`;
                          
                          // Check if this is a working link (has corresponding page)
                          const isWorkingLink = category.slug === 'tutorials' || 
                                              category.slug === 'reviews' || 
                                              category.slug === 'ai-ml' ||
                                              category.slug === 'web-dev' ||
                                              category.slug === 'hardware' ||
                                              category.slug === 'productivity';
                          
                          // For categories without individual submenu pages, link to main category page
                          const finalHref = isWorkingLink ? href : `/${category.slug}`;
                          
                          return (
                          <div
                            key={`featured-${child.slug}`}
                            className="group p-2 md:p-3 rounded-lg bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors cursor-pointer touch-manipulation"
                            onClick={handleLinkClick}
                          >
                            <Link href={finalHref} className="block">
                              <h5 className="font-medium text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-sm">
                                {child.name}
                              </h5>
                              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">
                                {child.description}
                              </p>
                            </Link>
                          </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
