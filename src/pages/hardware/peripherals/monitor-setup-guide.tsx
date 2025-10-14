import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { getMDXContent, MDXContent } from '../../../lib/mdx';
import MDXContentComponent from '../../../components/MDXContent';
import { Clock, Monitor, Star, User } from 'lucide-react';

interface MonitorSetupGuideProps {
  content: MDXContent;
}

const MonitorSetupGuide: React.FC<MonitorSetupGuideProps> = ({ content }) => {
  return (
    <>
      <Head>
        <title>Monitor Setup for Developers | TechDevDex</title>
        <meta name="description" content="Guide to choosing and setting up monitors for optimal development productivity and eye comfort. Learn about resolution, color accuracy, and ergonomic considerations." />
        <meta name="keywords" content="monitors, display setup, productivity, ergonomics, development, eye comfort" />
        <meta name="author" content="TechDevDex" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Monitor Setup for Developers" />
        <meta property="og:description" content="Guide to choosing and setting up monitors for optimal development productivity and eye comfort." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://techdevdex.com/hardware/peripherals/monitor-setup-guide" />
        <meta property="og:image" content="https://techdevdex.com/images/hardware/peripherals/monitor-setup.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Monitor Setup for Developers" />
        <meta name="twitter:description" content="Guide to choosing and setting up monitors for optimal development productivity and eye comfort." />
        <meta name="twitter:image" content="https://techdevdex.com/images/hardware/peripherals/monitor-setup.svg" />
        <link rel="canonical" href="https://techdevdex.com/hardware/peripherals/monitor-setup-guide" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link href="/hardware/peripherals" className="text-blue-600 hover:text-blue-800">
                ← Back to Peripherals
              </Link>
              <div className="text-sm text-gray-500">
                Published: December 1, 2024
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Hardware Peripherals</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Developer Guide</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Setup Guide</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
              Monitor Setup for Developers
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Guide to choosing and setting up monitors for optimal development productivity and eye comfort. Learn about resolution, color accuracy, and ergonomic considerations.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>TechDevDex Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>20 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>4.0 rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Monitor className="h-4 w-4" />
                <span>Hardware Guide</span>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <MDXContentComponent content={content} />
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const content = getMDXContent('monitor-setup-guide', 'hardware/peripherals');
  
  if (!content) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      content,
    },
  };
}

export default MonitorSetupGuide;
