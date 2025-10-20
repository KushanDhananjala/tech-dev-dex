import React from 'react';
import SEO from '@/components/SEO';
import Link from 'next/link';
import MDXContentComponent from '@/components/MDXContent';
import { getMDXContent, MDXContent } from '@/lib/mdx';
import { GetStaticProps } from 'next';
import { ArrowLeft } from 'lucide-react';

interface QuantumComputingDevelopmentProps {
  content: MDXContent | null;
}

const QuantumComputingDevelopment: React.FC<QuantumComputingDevelopmentProps> = ({ content }) => {
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
        title="Quantum Computing Development Guide 2025: Building Quantum Applications"
        description="Master quantum computing development in 2025. Complete guide to quantum algorithms, programming languages, and building quantum applications with practical examples and real-world use cases."
        keywords={[
          'quantum computing',
          'quantum programming',
          'qiskit',
          'quantum algorithms',
          'quantum development',
          'quantum machine learning',
          'quantum ai',
          'quantum software',
          'quantum applications',
          'future computing'
        ]}
        type="article"
        image="/images/ai-ml/emerging-ai-tech/quantum-computing.svg"
        url="/ai-trending/emerging-ai-tech/quantum-computing-development"
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
              <h1 className="text-2xl font-bold text-gray-900">Quantum Computing Development</h1>
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
  const content = getMDXContent('quantum-computing-development', 'ai-trending/emerging-ai-tech');
  
  return {
    props: {
      content,
    },
  };
};

export default QuantumComputingDevelopment;
