import React from 'react';
import SEO from '@/components/SEO';
import Link from 'next/link';
import MDXContentComponent from '../../../components/MDXContent';
import { getMDXContent, MDXContent } from '../../../lib/mdx';
import { GetStaticProps } from 'next';
import { ArrowLeft } from 'lucide-react';

interface DockerDevelopmentEnvironmentProps {
  content: MDXContent | null;
}

export default function DockerDevelopmentEnvironment({ content }: DockerDevelopmentEnvironmentProps) {
  if (!content) {
    return (
      <>
        <SEO
          title="Docker Development Environment Setup"
          description="Master Docker development environment setup for efficient development. Learn Docker configuration, containerization, and development workflow optimization."
          keywords={[
            'Docker development environment',
            'Docker setup',
            'containerization',
            'development workflow',
            'Docker configuration',
            'development environment',
            'Docker development',
            'container development',
            'Docker productivity',
            'development tools'
          ]}
          type="article"
          image="/images/productivity/development-tools/docker-development.svg"
          url="/productivity/development-tools/docker-development-environment"
          section="Development Tools"
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
        image={content.featuredImage || '/images/productivity/development-tools/docker-development.svg'}
        url={`/productivity/development-tools/docker-development-environment`}
        publishedTime={content.date}
        section="Development Tools"
        tags={content.tags || []}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <Link href="/productivity/development-tools" className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Development Tools
            </Link>
          </div>

          <MDXContentComponent content={content} />
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const content = getMDXContent('docker-development-environment', 'productivity/development-tools');
  
  return {
    props: {
      content,
    },
  };
};
