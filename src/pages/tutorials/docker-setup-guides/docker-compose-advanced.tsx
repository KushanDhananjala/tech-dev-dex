import React from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';
import MDXContentComponent from '../../../components/MDXContent';
import { getMDXContent, MDXContent } from '../../../lib/mdx';
import { GetStaticProps } from 'next';
import { ArrowLeft } from 'lucide-react';

interface DockerComposeAdvancedProps {
  content: MDXContent | null;
}

export default function DockerComposeAdvanced({ content }: DockerComposeAdvancedProps) {
  if (!content) {
    return (
      <>
        <SEO
          title="Docker Compose Advanced"
          description="Master Docker Compose for complex multi-container applications. Learn advanced Docker Compose networking, volumes, and production configurations."
          keywords={[
            'Docker Compose advanced',
            'Docker Compose setup',
            'multi-container applications',
            'Docker Compose networking',
            'Docker Compose volumes',
            'Docker Compose production',
            'Docker Compose configuration',
            'Docker Compose tutorial',
            'Docker Compose best practices',
            'Docker Compose deployment'
          ]}
          type="article"
          image="/images/tutorials/docker-setup-guides/docker-compose.svg"
          url="/tutorials/docker-setup-guides/docker-compose-advanced"
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
        image={content.featuredImage || '/images/tutorials/docker-setup-guides/docker-compose.svg'}
        url={`/tutorials/docker-setup-guides/docker-compose-advanced`}
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
  const content = getMDXContent('docker-compose-advanced', 'tutorials/docker-setup-guides');
  
  return {
    props: {
      content,
    },
  };
};