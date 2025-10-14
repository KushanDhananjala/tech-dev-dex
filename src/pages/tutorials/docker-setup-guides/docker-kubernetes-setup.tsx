import React from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';
import MDXContentComponent from '../../../components/MDXContent';
import { getMDXContent, MDXContent } from '../../../lib/mdx';
import { GetStaticProps } from 'next';
import { ArrowLeft } from 'lucide-react';

interface DockerKubernetesSetupProps {
  content: MDXContent | null;
}

export default function DockerKubernetesSetup({ content }: DockerKubernetesSetupProps) {
  if (!content) {
    return (
      <>
        <SEO
          title="Docker with Kubernetes"
          description="Learn to orchestrate Docker containers with Kubernetes. Master container orchestration, deployment, and management with Kubernetes."
          keywords={[
            'Docker Kubernetes',
            'Kubernetes setup',
            'Docker orchestration',
            'Kubernetes deployment',
            'Docker containers',
            'Kubernetes management',
            'Docker Kubernetes tutorial',
            'container orchestration',
            'Kubernetes Docker setup',
            'Docker Kubernetes deployment'
          ]}
          type="article"
          image="/images/tutorials/docker-setup-guides/docker-kubernetes.svg"
          url="/tutorials/docker-setup-guides/docker-kubernetes-setup"
          section="Docker Setup Guides"
        />
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Content Not Found
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            The requested content could not be found.
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title={content.title}
        description={content.description}
        keywords={content.tags || []}
        type="article"
        image={content.featuredImage || '/images/tutorials/docker-setup-guides/docker-kubernetes.svg'}
        url={`/tutorials/docker-setup-guides/docker-kubernetes-setup`}
        publishedTime={content.date}
        section="Docker Setup Guides"
        tags={content.tags || []}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <Link href="/tutorials/docker-setup-guides" className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Docker Setup Guides
            </Link>
          </div>

          <MDXContentComponent content={content} />
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const content = getMDXContent('docker-kubernetes-setup', 'tutorials/docker-setup-guides');
  
  return {
    props: {
      content,
    },
  };
};