import React from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Clock, Code, Star, User, Zap } from 'lucide-react';

const ResponsiveDesignCSS = () => {
  return (
    <>
      <SEO
        title="Responsive Web Design: Mobile-First Approach"
        description="Create responsive websites that work perfectly on all devices using CSS Grid and Flexbox. Complete guide with examples and best practices."
        keywords={[
          'responsive web design',
          'CSS Grid',
          'Flexbox',
          'mobile-first design',
          'CSS tutorial',
          'web development',
          'responsive layout',
          'CSS media queries',
          'mobile optimization',
          'web design'
        ]}
        type="article"
        image="/images/tutorials/web-development/responsive-design.svg"
        url="/tutorials/web-development/responsive-design-css"
        section="Web Development"
        tags={['CSS', 'Responsive Design', 'Web Development']}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link href="/tutorials/web-development" className="text-blue-600 hover:text-blue-800">
                ← Back to Web Development Tutorials
              </Link>
              <div className="text-sm text-gray-500">
                Published: December 13, 2024
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Updated Dec 2024</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Intermediate</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">CSS</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Responsive Web Design: Mobile-First Approach
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Create responsive websites that work perfectly on all devices using CSS Grid and Flexbox. Complete guide with examples and best practices.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>15 min read</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>TechDevDex Team</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>4.9/5 rating</span>
              </div>
              <span>•</span>
              <span>CSS</span>
              <span>•</span>
              <span>Web Development</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <Image
              src="/images/tutorials/web-development/responsive-design.svg"
              alt="Responsive Web Design Guide"
              width={800}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Code className="h-8 w-8 text-blue-600" />
                Introduction to Responsive Design
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Responsive web design ensures your websites look and function perfectly across all devices. This guide covers CSS Grid, Flexbox, and mobile-first design principles to create truly responsive experiences.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What You&apos;ll Learn</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">CSS Grid Layout</h4>
                      <p className="text-sm text-gray-600">Two-dimensional layout system for complex designs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">Flexbox</h4>
                      <p className="text-sm text-gray-600">One-dimensional layout for flexible components</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">Mobile-First Design</h4>
                      <p className="text-sm text-gray-600">Design approach starting with mobile devices</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">Media Queries</h4>
                      <p className="text-sm text-gray-600">Responsive breakpoints and device targeting</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Ready to Create Responsive Websites?
              </h2>
              <p className="text-lg text-gray-700 text-center mb-8">
                You now have the knowledge to create responsive websites that work perfectly on all devices. Start building and test on different screen sizes.
              </p>
              
              <div className="text-center">
                <Link href="/tutorials/web-development/css-animations-guide" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Next: CSS Animations and Transitions
                  <Zap className="h-4 w-4" />
                </Link>
              </div>
            </section>
          </div>

          {/* Related Articles */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/tutorials/web-development/html-css-basics" className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">HTML & CSS Fundamentals</h4>
                <p className="text-gray-600">Learn the basics of HTML and CSS to create beautiful, responsive websites.</p>
              </Link>
              <Link href="/tutorials/web-development/css-animations-guide" className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">CSS Animations and Transitions</h4>
                <p className="text-gray-600">Create smooth animations and transitions using CSS to enhance user experience.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsiveDesignCSS;
