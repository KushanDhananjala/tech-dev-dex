import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, BookOpen, Clock, User } from 'lucide-react';

const DockerSetupGuides = () => {
  // Sample tutorial data
  const tutorials = [
    {
      id: 'docker-beginners-guide',
      title: 'Complete Docker Setup Guide for Beginners',
      description: 'Learn Docker from scratch with this comprehensive beginner-friendly guide. Installation, basic commands, and your first container.',
      author: 'TechDevDex Team',
      date: '2024-12-15',
      readTime: '15 min',
      difficulty: 'Beginner',
      category: 'Docker Basics',
      image: '/images/tutorials/docker-setup-guides/docker-beginners.svg',
      featured: true
    },
    {
      id: 'docker-compose-advanced',
      title: 'Docker Compose: Advanced Multi-Container Setup',
      description: 'Master Docker Compose for complex applications. Learn networking, volumes, and production-ready configurations.',
      author: 'TechDevDex Team',
      date: '2024-12-14',
      readTime: '20 min',
      difficulty: 'Intermediate',
      category: 'Docker Compose',
      image: '/images/tutorials/docker-setup-guides/docker-compose-advanced.svg',
      featured: true
    },
    {
      id: 'docker-production-deployment',
      title: 'Docker Production Deployment Guide',
      description: 'Deploy Docker containers to production with best practices, security, monitoring, and scaling strategies.',
      author: 'TechDevDex Team',
      date: '2024-12-13',
      readTime: '25 min',
      difficulty: 'Advanced',
      category: 'Production',
      image: '/images/tutorials/docker-setup-guides/docker-production-deployment.svg',
      featured: false
    },
    {
      id: 'docker-kubernetes-setup',
      title: 'Docker with Kubernetes: Container Orchestration',
      description: 'Learn to orchestrate Docker containers with Kubernetes. Pods, services, deployments, and scaling.',
      author: 'TechDevDex Team',
      date: '2024-12-12',
      readTime: '30 min',
      difficulty: 'Advanced',
      category: 'Kubernetes',
      image: '/images/tutorials/docker-setup-guides/docker-kubernetes-setup.svg',
      featured: false
    },
    {
      id: 'docker-security-best-practices',
      title: 'Docker Security: Best Practices and Hardening',
      description: 'Secure your Docker containers and images. Learn about security scanning, secrets management, and compliance.',
      author: 'TechDevDex Team',
      date: '2024-12-11',
      readTime: '18 min',
      difficulty: 'Intermediate',
      category: 'Security',
      image: '/images/tutorials/docker-setup-guides/docker-security-best-practices.svg',
      featured: false
    },
    {
      id: 'docker-ci-cd-pipeline',
      title: 'Docker CI/CD Pipeline: Automated Deployment',
      description: 'Build automated CI/CD pipelines with Docker. GitHub Actions, Jenkins, and deployment strategies.',
      author: 'TechDevDex Team',
      date: '2024-12-10',
      readTime: '22 min',
      difficulty: 'Intermediate',
      category: 'CI/CD',
      image: '/images/tutorials/docker-setup-guides/docker-ci-cd-pipeline.svg',
      featured: false
    }
  ];

  const categories = ['All', 'Docker Basics', 'Docker Compose', 'Production', 'Kubernetes', 'Security', 'CI/CD'];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  return (
    <>
      <Head>
        <title>Docker Setup Guides - TechDevDex</title>
        <meta name="description" content="Comprehensive Docker tutorials and setup guides. Learn Docker from basics to advanced production deployment with step-by-step tutorials." />
        <meta name="keywords" content="Docker tutorials, container setup, Docker guides, containerization, DevOps" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/tutorials" className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Tutorials
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Docker Setup Guides
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive Docker tutorials from beginner to advanced production deployment
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="flex flex-wrap gap-3">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300 self-center">Categories:</span>
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <div className="flex flex-wrap gap-3">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300 self-center">Difficulty:</span>
              {difficulties.map((difficulty) => (
                <button
                  key={difficulty}
                  className="px-4 py-2 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                >
                  {difficulty}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Tutorials */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Featured Tutorials</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {tutorials.filter(tutorial => tutorial.featured).map((tutorial) => (
                <Link key={tutorial.id} href={`/tutorials/docker-setup-guides/${tutorial.id}`}>
                  <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700">
                    <div className="aspect-video relative">
                      <Image
                        src={tutorial.image}
                        alt={tutorial.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 text-slate-900 rounded-full text-sm font-medium">
                          {tutorial.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          tutorial.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                          tutorial.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {tutorial.difficulty}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-2">{tutorial.title}</h3>
                        <div className="flex items-center gap-4 text-white/90 text-sm">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{tutorial.readTime}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>{tutorial.author}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-slate-600 dark:text-slate-400 mb-4">{tutorial.description}</p>
                      <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-500">
                        <span>{tutorial.date}</span>
                        <span className="text-blue-600 dark:text-blue-400 font-medium">Read Tutorial →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* All Tutorials */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">All Tutorials</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tutorials.map((tutorial) => (
                <Link key={tutorial.id} href={`/tutorials/docker-setup-guides/${tutorial.id}`}>
                  <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700">
                    <div className="aspect-video relative">
                      <Image
                        src={tutorial.image}
                        alt={tutorial.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-white/90 text-slate-900 rounded text-xs font-medium">
                          {tutorial.category}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          tutorial.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                          tutorial.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {tutorial.difficulty}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="text-lg font-bold text-white mb-1">{tutorial.title}</h3>
                        <div className="flex items-center gap-3 text-white/90 text-xs">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{tutorial.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-3 line-clamp-2">{tutorial.description}</p>
                      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-500">
                        <span>{tutorial.date}</span>
                        <span className="text-blue-600 dark:text-blue-400 font-medium">Read →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DockerSetupGuides;