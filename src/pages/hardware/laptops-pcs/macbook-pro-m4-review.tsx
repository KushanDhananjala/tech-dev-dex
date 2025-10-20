import React from 'react';
import SEO from '@/components/SEO';
import Link from 'next/link';
import MDXContentComponent from '@/components/MDXContent';
import { getMDXContent, MDXContent } from '@/lib/mdx';
import { GetStaticProps } from 'next';
import { ArrowLeft } from 'lucide-react';

interface MacBookProM4ReviewProps {
  content: MDXContent | null;
}

const MacBookProM4Review: React.FC<MacBookProM4ReviewProps> = ({ content }) => {
  if (!content) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Content Not Found</h1>
          <p className="text-gray-600 mb-8">The requested content could not be loaded.</p>
          <Link href="/hardware/laptops-pcs" className="text-blue-600 hover:text-blue-800">
            ← Back to Laptops & PCs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="MacBook Pro M4 Review 2025: Ultimate Developer Machine with Apple M4 Chip"
        description="Complete MacBook Pro M4 review for developers in 2025. M4 chip performance, development capabilities, and productivity features. Perfect for software developers considering the latest MacBook Pro."
        keywords={[
          'macbook pro m4',
          'apple m4 chip',
          'macbook pro developer',
          'm4 performance',
          'apple silicon',
          'development laptop',
          'macbook pro 2025',
          'm4 chip review',
          'developer machine',
          'apple hardware',
          'professional laptop',
          'm4 macbook'
        ]}
        type="article"
        image="/images/hardware/laptops-pcs/real/macbook-pro-m4.jpg"
        url="/hardware/laptops-pcs/macbook-pro-m4-review"
        section="Hardware Review"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <Link href="/hardware/laptops-pcs" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Laptops & PCs
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">MacBook Pro M4 Review</h1>
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
  const content = getMDXContent('macbook-pro-m4-review', 'hardware/laptops-pcs');
  
  return {
    props: {
      content,
    },
  };
};

export default MacBookProM4Review;
