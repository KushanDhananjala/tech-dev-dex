import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Keyboard, Star, Users, Zap } from 'lucide-react';

const IDEShortcutsMastery = () => {
  return (
    <>
      <Head>
        <title>IDE Shortcuts Mastery: Speed Up Your Coding | TechDevDex</title>
        <meta name="description" content="Master IDE shortcuts across VS Code, IntelliJ, and other popular editors. Learn essential keyboard shortcuts that will make you 300% faster at coding and navigation." />
        <meta name="keywords" content="IDE shortcuts, keyboard shortcuts, VS Code shortcuts, IntelliJ shortcuts, coding efficiency, developer productivity, keyboard mastery" />
        <meta name="author" content="TechDevDex" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="IDE Shortcuts Mastery: Speed Up Your Coding" />
        <meta property="og:description" content="Master IDE shortcuts across VS Code, IntelliJ, and other popular editors. Learn essential keyboard shortcuts that will make you 300% faster at coding and navigation." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://techdevdex.com/tutorials/productivity-tools/ide-shortcuts-mastery" />
        <meta property="og:image" content="https://techdevdex.com/images/tutorials/productivity-tools/ide-shortcuts.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IDE Shortcuts Mastery: Speed Up Your Coding" />
        <meta name="twitter:description" content="Master IDE shortcuts across VS Code, IntelliJ, and other popular editors. Learn essential keyboard shortcuts that will make you 300% faster at coding and navigation." />
        <meta name="twitter:image" content="https://techdevdex.com/images/tutorials/productivity-tools/ide-shortcuts.svg" />
        <link rel="canonical" href="https://techdevdex.com/tutorials/productivity-tools/ide-shortcuts-mastery" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "IDE Shortcuts Mastery: Speed Up Your Coding",
            "description": "Master IDE shortcuts across VS Code, IntelliJ, and other popular editors. Learn essential keyboard shortcuts that will make you 300% faster at coding and navigation.",
            "author": {
              "@type": "Organization",
              "name": "TechDevDex"
            },
            "publisher": {
              "@type": "Organization",
              "name": "TechDevDex"
            },
            "datePublished": "2024-12-12",
            "dateModified": "2024-12-12",
            "image": "https://techdevdex.com/images/tutorials/productivity-tools/ide-shortcuts.svg"
          })}
        </script>
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link href="/tutorials/productivity-tools" className="text-blue-600 hover:text-blue-800">
                ← Back to Productivity Tools
              </Link>
              <div className="text-sm text-gray-500">
                Published: December 12, 2024
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
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Keyboard Mastery</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">300% Speed</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              IDE Shortcuts Mastery: Speed Up Your Coding
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Master IDE shortcuts across VS Code, IntelliJ, and other popular editors. Learn essential keyboard shortcuts that will make you 300% faster at coding and navigation.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>16 min read</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>19,847 developers helped</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>4.8/5 rating</span>
              </div>
              <span>•</span>
              <span>Tutorials</span>
              <span>•</span>
              <span>Productivity</span>
            </div>
            
            {/* Key Benefits */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5 text-blue-600" />
                What You&apos;ll Master
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Essential Shortcuts</h4>
                    <p className="text-sm text-gray-600">Master 100+ keyboard shortcuts across popular IDEs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Multi-IDE Mastery</h4>
                    <p className="text-sm text-gray-600">VS Code, IntelliJ, Sublime, and more</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Custom Shortcuts</h4>
                    <p className="text-sm text-gray-600">Create and customize your own shortcuts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Muscle Memory</h4>
                    <p className="text-sm text-gray-600">Build muscle memory for lightning-fast coding</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <Image
              src="/images/tutorials/productivity-tools/ide-shortcuts.svg"
              alt="IDE Shortcuts Mastery Guide"
              width={800}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Keyboard className="h-8 w-8 text-blue-600" />
                Why IDE Shortcuts Matter
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Keyboard shortcuts are the secret weapon of productive developers. They eliminate the need to reach for the mouse, keep your hands on the keyboard, and dramatically increase your coding speed. This guide will transform you from a mouse-dependent coder to a keyboard ninja.
              </p>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">The Speed Impact</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">300%</div>
                    <div className="text-sm text-gray-600">Faster navigation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">2hrs</div>
                    <div className="text-sm text-gray-600">Saved daily</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">90%</div>
                    <div className="text-sm text-gray-600">Less context switching</div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">VS Code Essential Shortcuts</h3>
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Navigation & Files</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Quick File Open</h5>
                      <code className="block bg-gray-100 p-2 rounded text-sm mt-1">Ctrl+P (Cmd+P)</code>
                      <p className="text-sm text-gray-600 mt-1">Open any file instantly</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Command Palette</h5>
                      <code className="block bg-gray-100 p-2 rounded text-sm mt-1">Ctrl+Shift+P (Cmd+Shift+P)</code>
                      <p className="text-sm text-gray-600 mt-1">Access all commands</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Go to Line</h5>
                      <code className="block bg-gray-100 p-2 rounded text-sm mt-1">Ctrl+G (Cmd+G)</code>
                      <p className="text-sm text-gray-600 mt-1">Jump to specific line</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Editing & Selection</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Multi-Cursor</h5>
                      <code className="block bg-gray-100 p-2 rounded text-sm mt-1">Alt+Click</code>
                      <p className="text-sm text-gray-600 mt-1">Add multiple cursors</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Select Next Occurrence</h5>
                      <code className="block bg-gray-100 p-2 rounded text-sm mt-1">Ctrl+D (Cmd+D)</code>
                      <p className="text-sm text-gray-600 mt-1">Select next occurrence of word</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Duplicate Line</h5>
                      <code className="block bg-gray-100 p-2 rounded text-sm mt-1">Shift+Alt+Up/Down</code>
                      <p className="text-sm text-gray-600 mt-1">Duplicate line up or down</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">IntelliJ IDEA Shortcuts</h3>
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Navigation & Search</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Go to Class</h5>
                      <code className="block bg-gray-100 p-2 rounded text-sm mt-1">Ctrl+N (Cmd+O)</code>
                      <p className="text-sm text-gray-600 mt-1">Navigate to any class</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Go to File</h5>
                      <code className="block bg-gray-100 p-2 rounded text-sm mt-1">Ctrl+Shift+N (Cmd+Shift+O)</code>
                      <p className="text-sm text-gray-600 mt-1">Navigate to any file</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Find in Files</h5>
                      <code className="block bg-gray-100 p-2 rounded text-sm mt-1">Ctrl+Shift+F (Cmd+Shift+F)</code>
                      <p className="text-sm text-gray-600 mt-1">Search across entire project</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Refactoring & Code</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Rename</h5>
                      <code className="block bg-gray-100 p-2 rounded text-sm mt-1">Shift+F6</code>
                      <p className="text-sm text-gray-600 mt-1">Rename symbol safely</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Extract Method</h5>
                      <code className="block bg-gray-100 p-2 rounded text-sm mt-1">Ctrl+Alt+M (Cmd+Alt+M)</code>
                      <p className="text-sm text-gray-600 mt-1">Extract code to method</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Generate Code</h5>
                      <code className="block bg-gray-100 p-2 rounded text-sm mt-1">Alt+Insert (Cmd+N)</code>
                      <p className="text-sm text-gray-600 mt-1">Generate constructors, getters, setters</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Universal Shortcuts (All IDEs)</h3>
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Text Editing</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Select All</h5>
                      <code className="block bg-gray-100 p-2 rounded text-sm mt-1">Ctrl+A (Cmd+A)</code>
                      <p className="text-sm text-gray-600 mt-1">Select entire document</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Find & Replace</h5>
                      <code className="block bg-gray-100 p-2 rounded text-sm mt-1">Ctrl+H (Cmd+Alt+F)</code>
                      <p className="text-sm text-gray-600 mt-1">Find and replace text</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Undo/Redo</h5>
                      <code className="block bg-gray-100 p-2 rounded text-sm mt-1">Ctrl+Z/Y (Cmd+Z/Shift+Z)</code>
                      <p className="text-sm text-gray-600 mt-1">Undo and redo changes</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Window Management</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Close Tab</h5>
                      <code className="block bg-gray-100 p-2 rounded text-sm mt-1">Ctrl+W (Cmd+W)</code>
                      <p className="text-sm text-gray-600 mt-1">Close current tab</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Switch Tabs</h5>
                      <code className="block bg-gray-100 p-2 rounded text-sm mt-1">Ctrl+Tab (Cmd+Tab)</code>
                      <p className="text-sm text-gray-600 mt-1">Switch between open tabs</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Split Editor</h5>
                      <code className="block bg-gray-100 p-2 rounded text-sm mt-1">Ctrl+\ (Cmd+\)</code>
                      <p className="text-sm text-gray-600 mt-1">Split editor horizontally</p>
                    </div>
                  </div>
                </div>
              </div>

              <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mt-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  Ready to Master IDE Shortcuts?
                </h2>
                <p className="text-lg text-gray-700 text-center mb-8">
                  By mastering these IDE shortcuts, you&apos;ll become a more efficient developer. Start with the basics and gradually build your muscle memory for lightning-fast coding.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">300%</div>
                    <div className="text-sm text-gray-600">Faster Navigation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">2hrs</div>
                    <div className="text-sm text-gray-600">Saved Daily</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">90%</div>
                    <div className="text-sm text-gray-600">Less Mouse Use</div>
                  </div>
                </div>

                <div className="text-center">
                  <Link href="/productivity/development-tools/vs-code-mastery" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Advanced VS Code Mastery
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </section>
            </section>
          </div>

          {/* Related Articles */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/tutorials/productivity-tools/vs-code-productivity" className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">VS Code Productivity</h4>
                <p className="text-gray-600">Boost your coding productivity with VS Code tips and tricks.</p>
              </Link>
              <Link href="/tutorials/productivity-tools/terminal-productivity" className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Terminal Productivity</h4>
                <p className="text-gray-600">Master the terminal for maximum development efficiency.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IDEShortcutsMastery;
