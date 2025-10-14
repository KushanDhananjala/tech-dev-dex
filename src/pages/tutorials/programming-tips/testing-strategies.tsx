import React from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';
import MDXContentComponent from '../../../components/MDXContent';
import { getMDXContent, MDXContent } from '../../../lib/mdx';
import { GetStaticProps } from 'next';
import { ArrowLeft } from 'lucide-react';

interface TestingStrategiesPageProps {
  content: MDXContent | null;
}

export default function TestingStrategiesPage({ content }: TestingStrategiesPageProps) {
  if (!content) {
    return (
      <>
        <SEO
          title="Testing Strategies"
          description="Learn comprehensive testing strategies and best practices. Master unit testing, integration testing, and test-driven development."
          keywords={[
            'testing strategies',
            'unit testing',
            'integration testing',
            'test-driven development',
            'testing best practices',
            'testing techniques',
            'software testing',
            'testing methodologies',
            'testing frameworks',
            'testing patterns'
          ]}
          type="article"
          image="/images/tutorials/programming-tips/testing.svg"
          url="/tutorials/programming-tips/testing-strategies"
          section="Programming Tips"
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
        image={content.featuredImage || '/images/tutorials/programming-tips/testing.svg'}
        url={`/tutorials/programming-tips/testing-strategies`}
        publishedTime={content.date}
        section="Programming Tips"
        tags={content.tags || []}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <Link href="/tutorials/programming-tips" className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Programming Tips
            </Link>
          </div>
          <MDXContentComponent content={content} />
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const content = getMDXContent('testing-strategies', 'tutorials/programming-tips');

  return {
    props: {
      content,
    },
  };
};

