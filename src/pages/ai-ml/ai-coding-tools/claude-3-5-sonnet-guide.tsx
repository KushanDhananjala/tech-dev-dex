import React from 'react';
import SEO from '@/components/SEO';
import Link from 'next/link';
import MDXContentComponent from '@/components/MDXContent';
import { getMDXContent, MDXContent } from '@/lib/mdx';
import { GetStaticProps } from 'next';
import { ArrowLeft } from 'lucide-react';

interface Claude35SonnetGuideProps {
  content: MDXContent | null;
}

export default function Claude35SonnetGuide({ content }: Claude35SonnetGuideProps) {
  if (!content) {
    return (
      <>
        <SEO
          title="Claude 3.5 Sonnet Guide: Advanced AI Coding Assistant for Developers"
          description="Master Claude 3.5 Sonnet for coding. This guide covers its use for generating, debugging, and refactoring code, enhancing developer productivity with Anthropic's latest AI."
          keywords={[
            'claude 3.5 sonnet',
            'ai coding assistant',
            'anthropic ai',
            'code generation',
            'ai debugging',
            'code refactoring',
            'llm for coding',
            'developer tools',
            'ai software development'
          ]}
          type="article"
          image="/images/ai-ml/ai-coding-tools/claude-3-5-sonnet.svg"
          url="/ai-trending/ai-coding-tools/claude-3-5-sonnet-guide"
          section="AI Coding Tools"
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
        url="/ai-trending/ai-coding-tools/claude-3-5-sonnet-guide"
        section="AI Coding Tools"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <Link href="/ai-trending/ai-coding-tools" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to AI Coding Tools
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Claude 3.5 Sonnet Guide</h1>
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
  const content = getMDXContent('claude-3-5-sonnet-guide', 'ai-trending/ai-coding-tools');
  
  return {
    props: {
      content,
    },
  };
};