import React from 'react';
import SEO from '@/components/SEO';
import Image from 'next/image';
import Link from 'next/link';

const IDEShortcuts = () => {
  return (
    <>
      <SEO
        title="IDE Shortcuts: Essential Keyboard Shortcuts"
        description="Master essential keyboard shortcuts for popular IDEs. Learn VS Code, IntelliJ, Eclipse, and other IDE shortcuts to boost your development productivity."
        keywords={[
          'IDE shortcuts',
          'keyboard shortcuts',
          'VS Code',
          'IntelliJ',
          'Eclipse',
          'development productivity',
          'coding efficiency',
          'IDE productivity',
          'keyboard shortcuts guide',
          'development shortcuts'
        ]}
        type="article"
        image="/images/productivity/development-tools/ide-shortcuts.svg"
        url="/productivity/development-tools/ide-shortcuts"
        section="Development Tools"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link href="/productivity/development-tools" className="text-blue-600 hover:text-blue-800">
                ← Back to Development Tools
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              IDE Shortcuts: Essential Keyboard Shortcuts
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Master essential keyboard shortcuts for popular IDEs. Learn VS Code, IntelliJ, Eclipse, and other IDE shortcuts to boost your development productivity.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>15 min read</span>
              <span>•</span>
              <span>Productivity</span>
              <span>•</span>
              <span>Development Tools</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <Image
              src="/images/productivity/development-tools/ide-shortcuts.svg"
              alt="IDE Shortcuts for Developers"
              width={800}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <h2>Why IDE Shortcuts Matter</h2>
            <p>
              Keyboard shortcuts are essential for developer productivity. They allow you to perform common tasks without taking your hands off the keyboard, significantly speeding up your coding workflow and reducing repetitive strain.
            </p>

            <h2>VS Code Shortcuts</h2>
            
            <h3>Essential Navigation</h3>
            <p>
              Master these fundamental VS Code shortcuts:
            </p>
            <ul>
              <li><strong>Ctrl+P (Cmd+P):</strong> Quick file open</li>
              <li><strong>Ctrl+Shift+P (Cmd+Shift+P):</strong> Command palette</li>
              <li><strong>Ctrl+G (Cmd+G):</strong> Go to line</li>
              <li><strong>Ctrl+Shift+O (Cmd+Shift+O):</strong> Go to symbol</li>
              <li><strong>Ctrl+T (Cmd+T):</strong> Go to symbol in workspace</li>
              <li><strong>Ctrl+U (Cmd+U):</strong> Undo cursor position</li>
              <li><strong>Ctrl+Shift+E (Cmd+Shift+E):</strong> Focus explorer</li>
              <li><strong>Ctrl+Shift+F (Cmd+Shift+F):</strong> Focus search</li>
            </ul>

            <h3>Editing Shortcuts</h3>
            <p>
              Speed up your editing with these shortcuts:
            </p>
            <ul>
              <li><strong>Ctrl+D (Cmd+D):</strong> Select next occurrence</li>
              <li><strong>Ctrl+Shift+L (Cmd+Shift+L):</strong> Select all occurrences</li>
              <li><strong>Alt+Click:</strong> Add cursor at click position</li>
              <li><strong>Ctrl+Alt+Up/Down (Cmd+Alt+Up/Down):</strong> Add cursor above/below</li>
              <li><strong>Shift+Alt+Up/Down:</strong> Duplicate line up/down</li>
              <li><strong>Ctrl+Shift+K (Cmd+Shift+K):</strong> Delete line</li>
              <li><strong>Ctrl+/ (Cmd+/):</strong> Toggle line comment</li>
              <li><strong>Shift+Alt+A:</strong> Toggle block comment</li>
            </ul>

            <h3>Window Management</h3>
            <p>
              Manage your workspace efficiently:
            </p>
            <ul>
              <li><strong>Ctrl+` (Cmd+`):</strong> Toggle terminal</li>
              <li><strong>Ctrl+Shift+` (Cmd+Shift+`):</strong> New terminal</li>
              <li><strong>Ctrl+B (Cmd+B):</strong> Toggle sidebar</li>
              <li><strong>Ctrl+J (Cmd+J):</strong> Toggle panel</li>
              <li><strong>Ctrl+Shift+Y (Cmd+Shift+Y):</strong> Toggle debug console</li>
              <li><strong>Ctrl+Shift+U (Cmd+Shift+U):</strong> Toggle output panel</li>
            </ul>

            <h2>IntelliJ IDEA Shortcuts</h2>
            
            <h3>Navigation and Search</h3>
            <p>
              Essential IntelliJ navigation shortcuts:
            </p>
            <ul>
              <li><strong>Ctrl+N (Cmd+N):</strong> Go to class</li>
              <li><strong>Ctrl+Shift+N (Cmd+Shift+N):</strong> Go to file</li>
              <li><strong>Ctrl+Alt+Shift+N (Cmd+Alt+Shift+N):</strong> Go to symbol</li>
              <li><strong>Ctrl+E (Cmd+E):</strong> Recent files</li>
              <li><strong>Ctrl+Shift+E (Cmd+Shift+E):</strong> Recent locations</li>
              <li><strong>Ctrl+B (Cmd+B):</strong> Go to declaration</li>
              <li><strong>Ctrl+Alt+B (Cmd+Alt+B):</strong> Go to implementation</li>
              <li><strong>Ctrl+U (Cmd+U):</strong> Go to super method</li>
            </ul>

            <h3>Code Editing</h3>
            <p>
              Powerful editing shortcuts in IntelliJ:
            </p>
            <ul>
              <li><strong>Ctrl+Alt+L (Cmd+Alt+L):</strong> Reformat code</li>
              <li><strong>Ctrl+Alt+O (Cmd+Alt+O):</strong> Optimize imports</li>
              <li><strong>Ctrl+Alt+I (Cmd+Alt+I):</strong> Auto-indent</li>
              <li><strong>Ctrl+Shift+Up/Down:</strong> Move line up/down</li>
              <li><strong>Ctrl+D (Cmd+D):</strong> Duplicate line</li>
              <li><strong>Ctrl+Y (Cmd+Y):</strong> Delete line</li>
              <li><strong>Ctrl+/ (Cmd+/):</strong> Toggle line comment</li>
              <li><strong>Ctrl+Shift+/ (Cmd+Shift+/):</strong> Toggle block comment</li>
            </ul>

            <h3>Refactoring</h3>
            <p>
              IntelliJ&apos;s powerful refactoring shortcuts:
            </p>
            <ul>
              <li><strong>Shift+F6:</strong> Rename</li>
              <li><strong>Ctrl+Alt+M (Cmd+Alt+M):</strong> Extract method</li>
              <li><strong>Ctrl+Alt+V (Cmd+Alt+V):</strong> Extract variable</li>
              <li><strong>Ctrl+Alt+F (Cmd+Alt+F):</strong> Extract field</li>
              <li><strong>Ctrl+Alt+C (Cmd+Alt+C):</strong> Extract constant</li>
              <li><strong>Ctrl+Alt+P (Cmd+Alt+P):</strong> Extract parameter</li>
              <li><strong>Ctrl+Alt+N (Cmd+Alt+N):</strong> Inline</li>
            </ul>

            <h2>Eclipse Shortcuts</h2>
            
            <h3>Navigation</h3>
            <p>
              Essential Eclipse navigation shortcuts:
            </p>
            <ul>
              <li><strong>Ctrl+Shift+T:</strong> Open type</li>
              <li><strong>Ctrl+Shift+R:</strong> Open resource</li>
              <li><strong>Ctrl+O:</strong> Quick outline</li>
              <li><strong>Ctrl+Shift+O:</strong> Quick outline (inherited)</li>
              <li><strong>Ctrl+3:</strong> Quick access</li>
              <li><strong>Ctrl+E:</strong> Switch editor</li>
              <li><strong>Ctrl+Page Up/Down:</strong> Switch editor</li>
              <li><strong>F3:</strong> Go to declaration</li>
            </ul>

            <h3>Editing</h3>
            <p>
              Eclipse editing shortcuts:
            </p>
            <ul>
              <li><strong>Ctrl+Shift+F:</strong> Format code</li>
              <li><strong>Ctrl+Shift+O:</strong> Organize imports</li>
              <li><strong>Ctrl+1:</strong> Quick fix</li>
              <li><strong>Ctrl+Space:</strong> Content assist</li>
              <li><strong>Alt+Shift+Up/Down:</strong> Move line up/down</li>
              <li><strong>Ctrl+Alt+Up/Down:</strong> Duplicate line</li>
              <li><strong>Ctrl+D:</strong> Delete line</li>
              <li><strong>Ctrl+/:</strong> Toggle comment</li>
            </ul>

            <h2>WebStorm Shortcuts</h2>
            
            <h3>Web Development</h3>
            <p>
              WebStorm-specific shortcuts for web development:
            </p>
            <ul>
              <li><strong>Ctrl+Alt+L (Cmd+Alt+L):</strong> Reformat code</li>
              <li><strong>Ctrl+Alt+O (Cmd+Alt+O):</strong> Optimize imports</li>
              <li><strong>Ctrl+Shift+F (Cmd+Shift+F):</strong> Find in path</li>
              <li><strong>Ctrl+Shift+R (Cmd+Shift+R):</strong> Replace in path</li>
              <li><strong>Ctrl+Alt+Shift+S:</strong> Project structure</li>
              <li><strong>Ctrl+Alt+F12:</strong> File path</li>
              <li><strong>Ctrl+Shift+A:</strong> Find action</li>
              <li><strong>Ctrl+Tab:</strong> Switch between tabs</li>
            </ul>

            <h3>HTML/CSS/JavaScript</h3>
            <p>
              Shortcuts for web technologies:
            </p>
            <ul>
              <li><strong>Ctrl+Alt+J:</strong> Surround with</li>
              <li><strong>Ctrl+Alt+Shift+J:</strong> Unwrap</li>
              <li><strong>Ctrl+Alt+Left/Right:</strong> Navigate back/forward</li>
              <li><strong>Ctrl+Shift+Up/Down:</strong> Move line up/down</li>
              <li><strong>Ctrl+D:</strong> Duplicate line</li>
              <li><strong>Ctrl+Y:</strong> Delete line</li>
              <li><strong>Ctrl+/:</strong> Toggle comment</li>
              <li><strong>Ctrl+Shift+/:</strong> Toggle block comment</li>
            </ul>

            <h2>PyCharm Shortcuts</h2>
            
            <h3>Python Development</h3>
            <p>
              PyCharm shortcuts for Python development:
            </p>
            <ul>
              <li><strong>Ctrl+Alt+L (Cmd+Alt+L):</strong> Reformat code</li>
              <li><strong>Ctrl+Alt+O (Cmd+Alt+O):</strong> Optimize imports</li>
              <li><strong>Ctrl+Shift+F (Cmd+Shift+F):</strong> Find in path</li>
              <li><strong>Ctrl+Shift+R (Cmd+Shift+R):</strong> Replace in path</li>
              <li><strong>Ctrl+Alt+Shift+S:</strong> Project structure</li>
              <li><strong>Ctrl+Alt+F12:</strong> File path</li>
              <li><strong>Ctrl+Shift+A:</strong> Find action</li>
              <li><strong>Ctrl+Tab:</strong> Switch between tabs</li>
            </ul>

            <h3>Debugging</h3>
            <p>
              PyCharm debugging shortcuts:
            </p>
            <ul>
              <li><strong>F8:</strong> Step over</li>
              <li><strong>F7:</strong> Step into</li>
              <li><strong>Shift+F8:</strong> Step out</li>
              <li><strong>F9:</strong> Resume program</li>
              <li><strong>Ctrl+F8:</strong> Toggle breakpoint</li>
              <li><strong>Ctrl+Shift+F8:</strong> View breakpoints</li>
              <li><strong>Alt+F9:</strong> Run to cursor</li>
              <li><strong>Ctrl+F9:</strong> Build project</li>
            </ul>

            <h2>Android Studio Shortcuts</h2>
            
            <h3>Android Development</h3>
            <p>
              Android Studio shortcuts for mobile development:
            </p>
            <ul>
              <li><strong>Ctrl+Alt+L (Cmd+Alt+L):</strong> Reformat code</li>
              <li><strong>Ctrl+Alt+O (Cmd+Alt+O):</strong> Optimize imports</li>
              <li><strong>Ctrl+Shift+F (Cmd+Shift+F):</strong> Find in path</li>
              <li><strong>Ctrl+Shift+R (Cmd+Shift+R):</strong> Replace in path</li>
              <li><strong>Ctrl+Alt+Shift+S:</strong> Project structure</li>
              <li><strong>Ctrl+Alt+F12:</strong> File path</li>
              <li><strong>Ctrl+Shift+A:</strong> Find action</li>
              <li><strong>Ctrl+Tab:</strong> Switch between tabs</li>
            </ul>

            <h3>Layout and Design</h3>
            <p>
              Shortcuts for Android layout development:
            </p>
            <ul>
              <li><strong>Ctrl+Alt+J:</strong> Surround with</li>
              <li><strong>Ctrl+Alt+Shift+J:</strong> Unwrap</li>
              <li><strong>Ctrl+Alt+Left/Right:</strong> Navigate back/forward</li>
              <li><strong>Ctrl+Shift+Up/Down:</strong> Move line up/down</li>
              <li><strong>Ctrl+D:</strong> Duplicate line</li>
              <li><strong>Ctrl+Y:</strong> Delete line</li>
              <li><strong>Ctrl+/:</strong> Toggle comment</li>
              <li><strong>Ctrl+Shift+/:</strong> Toggle block comment</li>
            </ul>

            <h2>Customizing Shortcuts</h2>
            
            <h3>VS Code Customization</h3>
            <p>
              Customize VS Code shortcuts:
            </p>
            <ul>
              <li><strong>File &gt; Preferences &gt; Keyboard Shortcuts:</strong> Access shortcut settings</li>
              <li><strong>Search for commands:</strong> Find specific actions</li>
              <li><strong>Modify shortcuts:</strong> Change existing shortcuts</li>
              <li><strong>Add new shortcuts:</strong> Create custom shortcuts</li>
              <li><strong>Export/Import:</strong> Share shortcut configurations</li>
            </ul>

            <h3>IntelliJ Customization</h3>
            <p>
              Customize IntelliJ shortcuts:
            </p>
            <ul>
              <li><strong>File &gt; Settings &gt; Keymap:</strong> Access shortcut settings</li>
              <li><strong>Search for actions:</strong> Find specific actions</li>
              <li><strong>Modify shortcuts:</strong> Change existing shortcuts</li>
              <li><strong>Add new shortcuts:</strong> Create custom shortcuts</li>
              <li><strong>Import/Export:</strong> Share shortcut configurations</li>
            </ul>

            <h2>Learning and Practice</h2>
            
            <h3>Learning Strategies</h3>
            <p>
              Effective ways to learn shortcuts:
            </p>
            <ul>
              <li><strong>Start with basics:</strong> Learn essential shortcuts first</li>
              <li><strong>Practice regularly:</strong> Use shortcuts daily</li>
              <li><strong>Learn gradually:</strong> Add new shortcuts over time</li>
              <li><strong>Use cheat sheets:</strong> Keep reference materials handy</li>
              <li><strong>Customize for your workflow:</strong> Adapt shortcuts to your needs</li>
            </ul>

            <h3>Practice Techniques</h3>
            <p>
              Methods to improve shortcut proficiency:
            </p>
            <ul>
              <li><strong>Deliberate practice:</strong> Focus on specific shortcuts</li>
              <li><strong>Muscle memory:</strong> Repeat shortcuts until automatic</li>
              <li><strong>Context switching:</strong> Practice across different projects</li>
              <li><strong>Speed drills:</strong> Time yourself on common tasks</li>
              <li><strong>Regular review:</strong> Periodically review and update shortcuts</li>
            </ul>

            <h2>Common Shortcut Patterns</h2>
            
            <h3>Universal Patterns</h3>
            <p>
              Shortcuts that work across most IDEs:
            </p>
            <ul>
              <li><strong>Ctrl+S (Cmd+S):</strong> Save file</li>
              <li><strong>Ctrl+Z (Cmd+Z):</strong> Undo</li>
              <li><strong>Ctrl+Y (Cmd+Y):</strong> Redo</li>
              <li><strong>Ctrl+C (Cmd+C):</strong> Copy</li>
              <li><strong>Ctrl+V (Cmd+V):</strong> Paste</li>
              <li><strong>Ctrl+X (Cmd+X):</strong> Cut</li>
              <li><strong>Ctrl+A (Cmd+A):</strong> Select all</li>
              <li><strong>Ctrl+F (Cmd+F):</strong> Find</li>
            </ul>

            <h3>IDE-Specific Patterns</h3>
            <p>
              Patterns specific to different IDEs:
            </p>
            <ul>
              <li><strong>VS Code:</strong> Ctrl+Shift+P for command palette</li>
              <li><strong>IntelliJ:</strong> Ctrl+Alt+Shift for refactoring</li>
              <li><strong>Eclipse:</strong> Ctrl+Shift for navigation</li>
              <li><strong>WebStorm:</strong> Ctrl+Alt+Shift for project management</li>
              <li><strong>PyCharm:</strong> Ctrl+Alt+Shift for Python-specific actions</li>
            </ul>

            <h2>Conclusion</h2>
            <p>
              Mastering IDE shortcuts is a crucial skill for any developer. Start with the essential shortcuts for your primary IDE and gradually expand your knowledge. The key is consistent practice and finding shortcuts that match your workflow.
            </p>

            <p>
              Remember, the goal is not to memorize every shortcut but to learn the ones that will significantly improve your productivity. Focus on the shortcuts you use most frequently and build from there.
            </p>
          </div>

          {/* Related Articles */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/productivity/development-tools/vs-code-mastery" className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">VS Code Mastery</h4>
                <p className="text-gray-600">Master Visual Studio Code with advanced tips and tricks.</p>
              </Link>
              <Link href="/productivity/development-tools/terminal-productivity" className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
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

export default IDEShortcuts;
