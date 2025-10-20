import React from 'react';
import SEO from '@/components/SEO';
import Link from 'next/link';
import MDXContentComponent from '@/components/MDXContent';
import { getMDXContent, MDXContent } from '@/lib/mdx';
import { GetStaticProps } from 'next';
import { ArrowLeft } from 'lucide-react';

interface Llama31IntegrationProps {
  content: MDXContent | null;
}

export default function Llama31Integration({ content }: Llama31IntegrationProps) {
  if (!content) {
    return (
      <>
        <SEO
          title="Llama 3.1 Integration Guide 2025: Building AI-Powered Applications with Meta's LLM"
          description="Master Llama 3.1 integration for AI applications. Complete guide to API integration, fine-tuning, and deployment strategies with Meta's open-source language model."
          keywords={[
            'llama 3.1',
            'meta ai',
            'llm integration',
            'ai api',
            'machine learning',
            'ai development',
            'open source ai',
            'model integration',
            'ai deployment',
            'fine-tuning'
          ]}
          type="article"
          image="/images/ai-ml/ai-integration-tutorials/llama-3-1-integration.svg"
          url="/ai-trending/ai-integration-tutorials/llama-3-1-integration"
          section="AI Integration Tutorials"
        />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Content Not Found</h1>
            <p className="text-gray-600">The requested content could not be loaded.</p>
          </div>
        </div>
      </>
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
        url="/ai-trending/ai-integration-tutorials/llama-3-1-integration"
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
              <h1 className="text-2xl font-bold text-gray-900">Llama 3.1 Integration</h1>
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
}

export const getStaticProps: GetStaticProps = async () => {
  const content = getMDXContent('llama-3-1-integration', 'ai-trending/ai-integration-tutorials');
  
  return {
    props: {
      content,
    },
  };
};