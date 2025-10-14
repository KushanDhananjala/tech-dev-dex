import React from 'react';
import SEO from '@/components/SEO';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, Star, User } from 'lucide-react';
import { motion } from 'framer-motion';

const DockerVsKubernetes = () => {
  return (
    <>
      <SEO
        title="Docker vs Kubernetes: Container Technologies"
        description="Understanding the difference between Docker and Kubernetes. When to use each technology for containerization and orchestration."
        keywords={[
          'Docker',
          'Kubernetes',
          'containers',
          'orchestration',
          'DevOps',
          'containerization',
          'Docker vs Kubernetes',
          'container management',
          'container orchestration',
          'DevOps tools'
        ]}
        type="article"
        image="/images/reviews/app-comparisons/docker-vs-kubernetes.svg"
        url="/reviews/app-comparisons/docker-vs-kubernetes"
        section="App Comparisons"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <Link href="/reviews/app-comparisons" className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to App Comparisons
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Docker vs Kubernetes: Container Technologies
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
              Understanding the difference between Docker and Kubernetes. When to use each technology.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>TechDevDex Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>8 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                <span>4.0 rating</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/reviews/app-comparisons/docker-vs-kubernetes.svg"
                alt="Docker vs Kubernetes Container Technologies"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto prose prose-lg dark:prose-invert"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
              <h2>Container Technology Comparison</h2>
              <p>Docker and Kubernetes work together but serve different purposes in the container ecosystem.</p>
              
              <h3>Purpose and Function</h3>
              <ul>
                <li><strong>Docker:</strong> Containerization platform, builds and runs containers</li>
                <li><strong>Kubernetes:</strong> Container orchestration, manages container deployments</li>
              </ul>

              <h3>Use Cases</h3>
              <ul>
                <li><strong>Docker:</strong> Application packaging, development environments, single-container apps</li>
                <li><strong>Kubernetes:</strong> Production deployments, scaling, multi-container applications</li>
              </ul>

              <h3>Relationship</h3>
              <p>Docker creates containers, Kubernetes manages them. They complement each other in modern DevOps workflows.</p>

              <h2>Conclusion</h2>
              <p>Use Docker for containerization and development. Use Kubernetes for production orchestration and scaling.</p>
            </div>
          </motion.article>
        </div>
      </div>
    </>
  );
};

export default DockerVsKubernetes;
