import React from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Clock, Code, Star, User, Zap } from 'lucide-react';

const JavaScriptES6Guide = () => {
  return (
    <>
      <SEO
        title="Modern JavaScript: ES6+ Features and Best Practices"
        description="Master modern JavaScript with ES6+ features, async/await, modules, and advanced concepts. Complete guide with examples and best practices."
        keywords={[
          'JavaScript ES6',
          'modern JavaScript',
          'async await',
          'JavaScript modules',
          'JavaScript best practices',
          'JavaScript tutorial',
          'ES6 features',
          'JavaScript promises',
          'arrow functions',
          'destructuring'
        ]}
        type="article"
        image="/images/tutorials/web-development/javascript-es6.svg"
        url="/tutorials/web-development/javascript-es6-guide"
        section="Web Development"
        tags={['JavaScript', 'ES6', 'Web Development']}
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
                Published: December 14, 2024
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
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">JavaScript</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Modern JavaScript: ES6+ Features and Best Practices
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Master modern JavaScript with ES6+ features, async/await, modules, and advanced concepts. Complete guide with examples and best practices.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>18 min read</span>
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
              <span>JavaScript</span>
              <span>•</span>
              <span>Web Development</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <Image
              src="/images/tutorials/web-development/javascript-es6.svg"
              alt="Modern JavaScript ES6+ Guide"
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
                Introduction to Modern JavaScript
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                JavaScript has evolved significantly since ES6 (ES2015), introducing powerful features that make code more readable, maintainable, and efficient. This comprehensive guide covers all the essential ES6+ features you need to master modern JavaScript development.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What You&apos;ll Learn</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">ES6+ Features</h4>
                      <p className="text-sm text-gray-600">Arrow functions, destructuring, template literals, and more</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">Async Programming</h4>
                      <p className="text-sm text-gray-600">Promises, async/await, and error handling</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">Modules & Classes</h4>
                      <p className="text-sm text-gray-600">ES6 modules, classes, and inheritance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">Best Practices</h4>
                      <p className="text-sm text-gray-600">Code organization and performance optimization</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Ready to Master Modern JavaScript?
              </h2>
              <p className="text-lg text-gray-700 text-center mb-8">
                You now have the knowledge to write modern, efficient JavaScript code. Practice these concepts and build amazing applications.
              </p>
              
              <div className="text-center">
                <Link href="/tutorials/web-development/dom-manipulation-js" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Next: DOM Manipulation with JavaScript
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
              <Link href="/tutorials/web-development/dom-manipulation-js" className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">DOM Manipulation with JavaScript</h4>
                <p className="text-gray-600">Learn to interact with web pages using JavaScript DOM methods and event handling.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JavaScriptES6Guide;
