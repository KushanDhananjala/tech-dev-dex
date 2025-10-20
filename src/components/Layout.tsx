import Navbar from "./Navbar";
import Footer from "./Footer";
import Ads from "./ads/Ads";
import SEO from "./SEO";
import PopularTopics from "./PopularTopics";
import { ReactNode } from "react";
import { useRouter } from "next/router";

type Props = {
  children: ReactNode;
  title?: string;
  description?: string;
};

export default function Layout({ children, title, description }: Props) {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={title}
        description={description}
        keywords={[
          "developer resources",
          "programming tutorials",
          "coding guides",
          "software development",
          "web development",
          "mobile development",
          "AI development",
          "devops",
          "productivity tools",
          "hardware reviews"
        ]}
      />
      <div className="w-full">
        <div className="w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-2">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-2 shadow-sm border border-slate-200 dark:border-slate-700">
              <Ads placement="header" />
            </div>
          </div>
        </div>
        <Navbar />
      </div>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full">
        {isHomePage ? (
          // Homepage layout - more compact, less sidebar space
          <div className="py-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="col-span-1 lg:col-span-10">
                {children}
              </div>
              <div className="hidden lg:block lg:col-span-2">
                <div className="sticky top-4 space-y-4">
                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-2 shadow-sm border border-slate-200 dark:border-slate-700">
                    <Ads placement="sidebar" />
                  </div>
                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-2 shadow-sm border border-slate-200 dark:border-slate-700">
                    <Ads placement="content" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Content pages layout - enhanced sidebar with better spacing
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8">
            <div className="hidden lg:block lg:col-span-3">
              <div className="sticky top-4 space-y-6">
                {/* Main Sidebar Ad */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-lg border border-slate-200 dark:border-slate-700">
                  <Ads placement="sidebar" />
                </div>
                
                {/* Popular Topics Component */}
                <PopularTopics />
                
                {/* Newsletter Signup */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                    Stay Updated
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    Get the latest tech insights delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 text-sm border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-9">
              {children}
              
              {/* Enhanced Content Ad */}
              <div className="mt-12">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-lg border border-slate-200 dark:border-slate-700">
                  <Ads placement="content" />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}


