import React from 'react';
import SEO from '@/components/SEO';
import { getMDXContent } from '@/lib/mdx';
import MDXContentComponent from '@/components/MDXContent';
import { GetStaticProps } from 'next';

interface ArticlePageProps {
  content: {
    title: string;
    description: string;
    tags: string[];
    featuredImage: string;
    content: string;
  } | null;
}

const AIClimateSolutions = ({ content }: ArticlePageProps) => {
  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Content Not Found</h1>
          <p className="text-gray-600">The requested content could not be loaded.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={content.title}
        description={content.description}
        keywords={content.tags}
        type="article"
        image={content.featuredImage}
        url={`/ai-trending/emerging-ai-tech/ai-climate-solutions`}
        section="Emerging AI Tech"
      />
      
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            <MDXContentComponent content={content.content as any} />
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const content = getMDXContent('ai-climate-solutions', 'ai-trending/emerging-ai-tech');
  
  return {
    props: {
      content,
    },
  };
};

export default AIClimateSolutions;
