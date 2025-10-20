import React from 'react';
import SEO from '@/components/SEO';
import Link from 'next/link';
import MDXContentComponent from '@/components/MDXContent';
import { getMDXContent, MDXContent } from '@/lib/mdx';
import { GetStaticProps } from 'next';
import { ArrowLeft } from 'lucide-react';

interface GPT4oIntegrationProps {
  content: MDXContent | null;
}

const GPT4oIntegration: React.FC<GPT4oIntegrationProps> = ({ content }) => {
  if (!content) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Content Not Found</h1>
          <p className="text-gray-600 mb-8">The requested content could not be loaded.</p>
          <Link href="/ai-trending/ai-integration-tutorials" className="text-blue-600 hover:text-blue-800">
            ← Back to AI Integration Tutorials
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="GPT-4o Integration Guide 2025: Building Multimodal AI Applications with OpenAI"
        description="Master GPT-4o integration for multimodal AI applications. Complete guide to vision, audio, and text processing with OpenAI's latest model. Perfect for AI developers."
        keywords={[
          'gpt-4o',
          'openai gpt-4o',
          'multimodal ai',
          'vision ai',
          'audio processing',
          'ai api',
          'openai integration',
          'ai development',
          'gpt-4o api',
          'multimodal development'
        ]}
        type="article"
        image="/images/ai-ml/ai-integration-tutorials/gpt-4o-integration.svg"
        url="/ai-trending/ai-integration-tutorials/gpt-4o-integration"
        section="AI Integration Tutorials"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <Link href="/ai-trending/ai-integration-tutorials" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to AI Integration Tutorials
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">GPT-4o Integration</h1>
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
  const content = getMDXContent('gpt-4o-integration', 'ai-trending/ai-integration-tutorials');
  
  return {
    props: {
      content,
    },
  };
};

export default GPT4oIntegration;
