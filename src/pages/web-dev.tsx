import SEO from "../components/SEO";
import Link from "next/link";

export default function WebDevPage() {
  return (
    <>
      <SEO
        title="Web Development Guides & Tutorials"
        description="Learn frontend and backend development with comprehensive guides and tutorials. Master modern frameworks, tools, and best practices for web development."
        keywords={[
          "web development",
          "frontend development",
          "backend development",
          "react tutorials",
          "node.js tutorials",
          "javascript frameworks",
          "web development tools",
          "full stack development",
          "web dev tutorials",
          "frontend frameworks",
          "backend frameworks",
          "web development guides",
          "devops deployment",
          "web development best practices"
        ]}
        type="website"
        image="/images/web-dev-og.jpg"
        url="/web-dev"
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Web Development
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Master frontend and backend development with modern frameworks, tools, and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Frameworks */}
          <div id="frontend-frameworks" className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white mb-4">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Frontend Frameworks
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              React, Vue, Angular, and other modern frontend frameworks and libraries.
            </p>
            <Link 
              href="/web-dev/frontend-frameworks" 
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
            >
              Learn Frontend →
            </Link>
          </div>

          {/* Backend Development */}
          <div id="backend-development" className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center text-white mb-4">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Backend Development
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Server-side programming with Node.js, Python, and other backend technologies.
            </p>
            <Link 
              href="/web-dev/backend-development" 
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
            >
              Learn Backend →
            </Link>
          </div>

          {/* Database Management */}
          <div id="database-management" className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white mb-4">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Database Management
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              SQL and NoSQL databases, data modeling, and database optimization techniques.
            </p>
            <Link 
              href="/web-dev/database-management" 
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
            >
              Learn Databases →
            </Link>
          </div>

          {/* API Development */}
          <div id="api-development" className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white mb-4">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              API Development
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              REST and GraphQL APIs, API design patterns, and integration techniques.
            </p>
            <Link 
              href="/web-dev/api-development" 
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
            >
              Learn APIs →
            </Link>
          </div>

          {/* DevOps & Deployment */}
          <div id="devops-deployment" className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white mb-4">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              DevOps & Deployment
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              CI/CD pipelines, cloud deployment, and containerization with Docker.
            </p>
            <Link 
              href="/web-dev/devops-deployment" 
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
            >
              Learn DevOps →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
