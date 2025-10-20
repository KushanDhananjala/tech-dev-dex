import React from 'react';
import SEO from '@/components/SEO';
import Link from 'next/link';
import MDXContentComponent from '@/components/MDXContent';
import { getMDXContent, MDXContent } from '@/lib/mdx';
import { GetStaticProps } from 'next';
import { ArrowLeft } from 'lucide-react';

interface JuliaAIDevelopmentProps {
  content: MDXContent | null;
}

export default function JuliaAIDevelopment({ content }: JuliaAIDevelopmentProps) {
  if (!content) {
    return (
      <>
        <SEO
          title="Julia for AI Development 2025: High-Performance Machine Learning Guide"
          description="Master Julia for AI development in 2025. Complete guide to Julia's ML ecosystem, performance advantages, and building high-performance AI applications with practical examples."
          keywords={[
            'julia ai',
            'julia machine learning',
            'julia development',
            'flux.jl',
            'mlj.jl',
            'julia performance',
            'ai programming',
            'machine learning julia',
            'julia ecosystem',
            'high performance ai'
          ]}
          type="article"
          image="/images/ai-ml/emerging-languages/julia-ai.svg"
          url="/ai-trending/emerging-languages/julia-ai-development"
          section="Emerging Languages"
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
        url="/ai-trending/emerging-languages/julia-ai-development"
        section="Emerging Languages"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <Link href="/ai-trending/emerging-languages" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Emerging Languages
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Julia AI Development</h1>
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
  const content = getMDXContent('julia-ai-development', 'ai-trending/emerging-languages');
  
  return {
    props: {
      content,
    },
  };
};