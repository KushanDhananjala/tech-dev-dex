import React from 'react';
import SEO from '@/components/SEO';
import Link from 'next/link';
import { getMDXContent, MDXContent } from '@/lib/mdx';
import MDXContentComponent from '@/components/MDXContent';
import { GetStaticProps } from 'next';
import { ArrowLeft } from 'lucide-react';

interface ArticlePageProps {
  content: MDXContent | null;
}

const AIBrainComputerInterfaces = ({ content }: ArticlePageProps) => {
  if (!content) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Content Not Found</h1>
          <p className="text-gray-600 mb-8">The requested content could not be loaded.</p>
          <Link href="/ai-trending/emerging-ai-tech" className="text-blue-600 hover:text-blue-800">
            ← Back to Emerging AI Tech
          </Link>
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
        url="/ai-trending/emerging-ai-tech/ai-brain-computer-interfaces"
        section="Emerging AI Tech"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <Link href="/ai-trending/emerging-ai-tech" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Emerging AI Tech
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">AI Brain-Computer Interfaces</h1>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <MDXContentComponent content={content} />
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const content = getMDXContent('ai-brain-computer-interfaces', 'ai-trending/emerging-ai-tech');
  
  return {
    props: {
      content,
    },
  };
};

export default AIBrainComputerInterfaces;
