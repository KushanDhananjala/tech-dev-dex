import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Code, Clock, User, Star, CheckCircle, BookOpen, Target } from 'lucide-react';

const HTMLCSSBasics = () => {
  return (
    <>
      <Head>
        <title>HTML & CSS Fundamentals: Building Your First Website | TechDevDex</title>
        <meta name="description" content="Learn the basics of HTML and CSS to create beautiful, responsive websites from scratch. Complete beginner&apos;s guide to web development fundamentals." />
        <meta name="keywords" content="HTML CSS tutorial, web development basics, HTML fundamentals, CSS basics, responsive web design, beginner web development" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link href="/tutorials/web-development" className="text-blue-600 hover:text-blue-800">
                ← Back to Web Development Tutorials
              </Link>
              <div className="text-sm text-gray-500">
                Published: December 15, 2024
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Beginner</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Frontend Basics</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">12 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              HTML & CSS Fundamentals: Building Your First Website
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Learn the basics of HTML and CSS to create beautiful, responsive websites from scratch. Complete beginner&apos;s guide to web development fundamentals.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>12 min read</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>TechDevDex Team</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>4.8/5 rating</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <Image
              src="/images/tutorials/web-development/html-css-basics.svg"
              alt="HTML & CSS Fundamentals"
              width={800}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <h2>Introduction to Web Development</h2>
            <p>
              Welcome to the world of web development! HTML and CSS are the foundation of every website on the internet. In this comprehensive guide, you&apos;ll learn how to create your first website from scratch.
            </p>

            <h2>What is HTML?</h2>
            <p>
              HTML (HyperText Markup Language) is the standard markup language for creating web pages. It provides the structure and content of your website.
            </p>

            <h2>What is CSS?</h2>
            <p>
              CSS (Cascading Style Sheets) is used to style and layout web pages. It controls the appearance, colors, fonts, and layout of your HTML elements.
            </p>

            <h2>Getting Started</h2>
            <p>
              To begin your web development journey, you&apos;ll need:
            </p>
            <ul>
              <li>A text editor (VS Code, Sublime Text, or Atom)</li>
              <li>A web browser (Chrome, Firefox, or Safari)</li>
              <li>Basic understanding of file management</li>
            </ul>

            <h2>Your First HTML Page</h2>
            <p>
              Let&apos;s create your first HTML page. Open your text editor and create a new file called `index.html`:
            </p>

            <div className="bg-gray-900 rounded-lg p-4 my-6">
              <pre className="text-green-400 text-sm">
{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Website</title>
</head>
<body>
    <h1>Welcome to My Website!</h1>
    <p>This is my first HTML page.</p>
</body>
</html>`}
              </pre>
            </div>

            <h2>Understanding HTML Structure</h2>
            <p>
              Every HTML document has a basic structure:
            </p>
            <ul>
              <li><strong>DOCTYPE:</strong> Tells the browser which HTML version to use</li>
              <li><strong>html:</strong> The root element of the page</li>
              <li><strong>head:</strong> Contains meta information about the page</li>
              <li><strong>body:</strong> Contains the visible content</li>
            </ul>

            <h2>Common HTML Elements</h2>
            <p>
              Here are the most commonly used HTML elements:
            </p>
            <ul>
              <li><strong>h1-h6:</strong> Headings (h1 is the largest)</li>
              <li><strong>p:</strong> Paragraphs</li>
              <li><strong>a:</strong> Links</li>
              <li><strong>img:</strong> Images</li>
              <li><strong>div:</strong> Container for other elements</li>
              <li><strong>span:</strong> Inline container</li>
            </ul>

            <h2>Adding CSS to Your HTML</h2>
            <p>
              There are three ways to add CSS to your HTML:
            </p>
            <ol>
              <li><strong>Inline CSS:</strong> Style directly in HTML elements</li>
              <li><strong>Internal CSS:</strong> Style in the &lt;head&gt; section</li>
              <li><strong>External CSS:</strong> Link to a separate CSS file</li>
            </ol>

            <h2>Basic CSS Properties</h2>
            <p>
              Here are the essential CSS properties every beginner should know:
            </p>
            <ul>
              <li><strong>color:</strong> Text color</li>
              <li><strong>background-color:</strong> Background color</li>
              <li><strong>font-size:</strong> Text size</li>
              <li><strong>font-family:</strong> Font type</li>
              <li><strong>margin:</strong> Space outside elements</li>
              <li><strong>padding:</strong> Space inside elements</li>
            </ul>

            <h2>Creating Your First Styled Page</h2>
            <p>
              Let&apos;s create a simple styled webpage:
            </p>

            <div className="bg-gray-900 rounded-lg p-4 my-6">
              <pre className="text-green-400 text-sm">
{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Styled Website</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f0f0f0;
        }
        h1 {
            color: #333;
            text-align: center;
        }
        p {
            color: #666;
            line-height: 1.6;
        }
    </style>
</head>
<body>
    <h1>Welcome to My Website!</h1>
    <p>This is my first styled HTML page with CSS.</p>
</body>
</html>`}
              </pre>
            </div>

            <h2>Next Steps</h2>
            <p>
              Congratulations! You&apos;ve created your first HTML and CSS page. Here&apos;s what to learn next:
            </p>
            <ul>
              <li>More HTML elements and attributes</li>
              <li>CSS selectors and specificity</li>
              <li>Responsive design with CSS Grid and Flexbox</li>
              <li>JavaScript for interactive websites</li>
            </ul>

            <h2>Conclusion</h2>
            <p>
              You&apos;ve taken your first steps into web development! HTML and CSS are the foundation of web development, and mastering them will set you up for success in your coding journey.
            </p>
          </div>

          {/* Related Articles */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/tutorials/web-development/javascript-es6-guide" className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Modern JavaScript: ES6+ Features</h4>
                <p className="text-gray-600">Master modern JavaScript with ES6+ features, async/await, modules, and advanced concepts.</p>
              </Link>
              <Link href="/tutorials/web-development/responsive-design-css" className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Responsive Web Design</h4>
                <p className="text-gray-600">Create responsive websites that work perfectly on all devices using CSS Grid and Flexbox.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HTMLCSSBasics;
