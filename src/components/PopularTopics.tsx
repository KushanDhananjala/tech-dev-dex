import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { TrendingUp, Code, Brain, Database, Cloud, Smartphone, Zap, Star } from 'lucide-react';

interface PopularTopic {
  title: string;
  href: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  views?: number;
  trending?: boolean;
}

const PopularTopics = () => {
  const [popularTopics, setPopularTopics] = useState<PopularTopic[]>([]);

  // Define popular topics with actual links - memoized to prevent re-creation on every render
  const allTopics: PopularTopic[] = useMemo(() => [
    {
      title: "AI Coding Tools",
      href: "/ai-trending/ai-coding-tools",
      icon: <Brain className="w-4 h-4" />,
      color: "from-purple-500 to-pink-500",
      description: "Master AI-powered development"
    },
    {
      title: "Docker Setup",
      href: "/tutorials/docker-setup-guides",
      icon: <Code className="w-4 h-4" />,
      color: "from-blue-500 to-cyan-500",
      description: "Containerization made easy"
    },
    {
      title: "Git & GitHub",
      href: "/tutorials/git-github-tutorials",
      icon: <TrendingUp className="w-4 h-4" />,
      color: "from-green-500 to-emerald-500",
      description: "Version control mastery"
    },
    {
      title: "Database Tools",
      href: "/productivity/development-tools/database-management-tools",
      icon: <Database className="w-4 h-4" />,
      color: "from-orange-500 to-red-500",
      description: "Database management"
    },
    {
      title: "Cloud Deployment",
      href: "/web-dev/devops-deployment",
      icon: <Cloud className="w-4 h-4" />,
      color: "from-indigo-500 to-blue-500",
      description: "Deploy to the cloud"
    },
    {
      title: "Mobile Development",
      href: "/hardware/mobile-devices",
      icon: <Smartphone className="w-4 h-4" />,
      color: "from-teal-500 to-green-500",
      description: "Mobile development tools"
    },
    {
      title: "Emerging AI Tech",
      href: "/ai-trending/emerging-ai-tech",
      icon: <Zap className="w-4 h-4" />,
      color: "from-yellow-500 to-orange-500",
      description: "Latest AI breakthroughs",
      trending: true
    },
    {
      title: "Productivity Tools",
      href: "/productivity/development-tools",
      icon: <Star className="w-4 h-4" />,
      color: "from-rose-500 to-pink-500",
      description: "Boost your productivity"
    }
  ], []); // Empty dependency array since the topics are static

  // Simulate dynamic popular topics (in a real app, this would come from analytics)
  useEffect(() => {
    // Shuffle topics and select top 6
    const shuffled = [...allTopics].sort(() => Math.random() - 0.5);
    setPopularTopics(shuffled.slice(0, 6));
  }, [allTopics]);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
        <TrendingUp className="w-5 h-5 text-blue-500" />
        Popular Topics
      </h3>
      <div className="space-y-3">
        {popularTopics.map((topic, index) => (
          <Link
            key={index}
            href={topic.href}
            className="block group"
          >
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-all duration-200 group-hover:shadow-md">
              <div className={`w-8 h-8 bg-gradient-to-br ${topic.color} rounded-lg flex items-center justify-center text-white shadow-sm relative`}>
                {topic.icon}
                {topic.trending && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    {topic.title}
                  </span>
                  {topic.trending && (
                    <span className="text-xs bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 px-2 py-0.5 rounded-full font-medium">
                      Trending
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {topic.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {/* View All Topics Link */}
      <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
        <Link
          href="/ai-trending"
          className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
        >
          View All Topics →
        </Link>
      </div>
    </div>
  );
};

export default PopularTopics;
