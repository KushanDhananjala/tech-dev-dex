import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Server, Star, Clock, User, CheckCircle, Code, Database, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const NodeJSCompleteGuide = () => {
  return (
    <>
      <Head>
        <title>Node.js: Complete Backend Guide | TechDevDex</title>
        <meta name="description" content="Master Node.js for backend development with Express, authentication, database integration, and production deployment. Complete guide with practical examples." />
        <meta name="keywords" content="Node.js, Express.js, backend development, JavaScript server, API development, authentication, database integration, production deployment" />
        <meta name="author" content="TechDevDex" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Node.js: Complete Backend Guide" />
        <meta property="og:description" content="Master Node.js for backend development with Express, authentication, database integration, and production deployment. Complete guide with practical examples." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://techdevdex.com/web-dev/backend-development/nodejs-complete-guide" />
        <meta property="og:image" content="https://techdevdex.com/images/web-dev/backend-development/nodejs-guide.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Node.js: Complete Backend Guide" />
        <meta name="twitter:description" content="Master Node.js for backend development with Express, authentication, database integration, and production deployment. Complete guide with practical examples." />
        <meta name="twitter:image" content="https://techdevdex.com/images/web-dev/backend-development/nodejs-guide.svg" />
        <link rel="canonical" href="https://techdevdex.com/web-dev/backend-development/nodejs-complete-guide" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Node.js: Complete Backend Guide",
            "description": "Master Node.js for backend development with Express, authentication, database integration, and production deployment. Complete guide with practical examples.",
            "author": {
              "@type": "Organization",
              "name": "TechDevDex"
            },
            "publisher": {
              "@type": "Organization",
              "name": "TechDevDex",
              "logo": {
                "@type": "ImageObject",
                "url": "https://techdevdex.com/logo.png"
              }
            },
            "datePublished": "2024-12-01",
            "dateModified": "2024-12-01",
            "image": "https://techdevdex.com/images/web-dev/backend-development/nodejs-guide.svg"
          })}
        </script>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/web-dev/backend-development" className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Backend Development
            </Link>
          </div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6">
              <Server className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Node.js: Complete Backend Guide
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
              Master Node.js for backend development with Express, authentication, database integration, and production deployment. Complete guide with practical examples.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-md">
                <Clock className="h-4 w-4 text-blue-600" />
                <span className="text-slate-700 dark:text-slate-300">25 min read</span>
              </div>
              <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-md">
                <User className="h-4 w-4 text-green-600" />
                <span className="text-slate-700 dark:text-slate-300">TechDevDex Team</span>
              </div>
              <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-md">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="text-slate-700 dark:text-slate-300">5.0 Rating</span>
              </div>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-8">
              <Image 
                src="/images/web-dev/backend-development/nodejs-guide.svg" 
                alt="Node.js Complete Backend Guide" 
                width={800} 
                height={400} 
                className="w-full h-auto rounded-xl"
              />
            </div>
          </motion.div>

          {/* What You'll Learn */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Zap className="h-8 w-8 text-yellow-500" />
                What You&apos;ll Master
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Node.js Fundamentals</h3>
                      <p className="text-slate-600 dark:text-slate-400">Core concepts, event loop, and asynchronous programming</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Express.js Framework</h3>
                      <p className="text-slate-600 dark:text-slate-400">Building RESTful APIs and web applications</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Authentication & Security</h3>
                      <p className="text-slate-600 dark:text-slate-400">JWT, OAuth, password hashing, and security best practices</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Database Integration</h3>
                      <p className="text-slate-600 dark:text-slate-400">MongoDB, PostgreSQL, and ORM/ODM usage</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Testing & Debugging</h3>
                      <p className="text-slate-600 dark:text-slate-400">Unit testing, integration testing, and debugging techniques</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Production Deployment</h3>
                      <p className="text-slate-600 dark:text-slate-400">Docker, PM2, monitoring, and performance optimization</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              <h2>Introduction to Node.js Backend Development</h2>
              <p>
                Node.js has revolutionized backend development by bringing JavaScript to the server side. 
                With its event-driven, non-blocking I/O model, Node.js enables developers to build fast, 
                scalable network applications. This comprehensive guide will take you from Node.js basics 
                to production-ready backend applications.
              </p>

              <h2>Getting Started with Node.js</h2>
              <p>
                Node.js is built on Chrome&apos;s V8 JavaScript engine and provides a runtime environment 
                for executing JavaScript on the server. Its asynchronous nature makes it perfect for 
                I/O-intensive applications like web servers, APIs, and real-time applications.
              </p>

              <h3>Installation and Setup</h3>
              <p>
                Install Node.js from the official website or use a version manager like nvm for 
                managing multiple Node.js versions. Create a new project with npm init and install 
                essential dependencies.
              </p>

              <h2>Express.js Framework</h2>
              <p>
                Express.js is the most popular web framework for Node.js. It provides a minimal 
                and flexible foundation for building web applications and APIs. Express simplifies 
                routing, middleware integration, and request handling.
              </p>

              <h3>Basic Express Server</h3>
              <div className="bg-slate-900 rounded-lg p-6 my-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`}
                </pre>
              </div>

              <h2>Database Integration</h2>
              <p>
                Node.js applications commonly use databases for data persistence. Popular choices 
                include MongoDB with Mongoose, PostgreSQL with Sequelize, and MySQL with various 
                ORMs. Choose based on your application&apos;s requirements and data structure.
              </p>

              <h3>MongoDB with Mongoose</h3>
              <div className="bg-slate-900 rounded-lg p-6 my-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define Schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String
});

const User = mongoose.model('User', UserSchema);

// Create user
const user = new User({
  name: 'John Doe',
  email: 'john@example.com',
  password: 'hashedPassword'
});

user.save();`}
                </pre>
              </div>

              <h2>Authentication and Security</h2>
              <p>
                Implementing secure authentication is crucial for backend applications. Use JWT 
                tokens for stateless authentication, hash passwords with bcrypt, and implement 
                proper authorization middleware.
              </p>

              <h3>JWT Authentication</h3>
              <div className="bg-slate-900 rounded-lg p-6 my-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  // Find user
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });
  
  // Verify password
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(401).json({ error: 'Invalid credentials' });
  
  // Generate JWT
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
  res.json({ token });
});`}
                </pre>
              </div>

              <h2>Testing Your Application</h2>
              <p>
                Testing is essential for maintaining code quality and preventing bugs. Use Jest 
                for unit testing, Supertest for API testing, and implement both unit and 
                integration tests for comprehensive coverage.
              </p>

              <h2>Production Deployment</h2>
              <p>
                Deploying Node.js applications to production requires careful consideration of 
                performance, security, and monitoring. Use PM2 for process management, Docker 
                for containerization, and implement proper logging and monitoring.
              </p>

              <h3>Docker Configuration</h3>
              <div className="bg-slate-900 rounded-lg p-6 my-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`# Dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
EXPOSE 3000

CMD ["node", "server.js"]`}
                </pre>
              </div>

              <h2>Best Practices</h2>
              <ul>
                <li><strong>Error Handling:</strong> Implement comprehensive error handling and logging</li>
                <li><strong>Environment Variables:</strong> Use environment variables for configuration</li>
                <li><strong>Code Organization:</strong> Structure your code with proper separation of concerns</li>
                <li><strong>Security:</strong> Implement CORS, rate limiting, and input validation</li>
                <li><strong>Performance:</strong> Use caching, compression, and optimize database queries</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Node.js provides a powerful platform for building scalable backend applications. 
                By mastering Express.js, database integration, authentication, and deployment 
                strategies, you can create robust and efficient server-side applications. 
                Continue learning about microservices, GraphQL, and advanced Node.js patterns 
                to further enhance your backend development skills.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NodeJSCompleteGuide;
