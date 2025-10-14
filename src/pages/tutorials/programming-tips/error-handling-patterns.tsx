import React from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';
import MDXContentComponent from '../../../components/MDXContent';
import { getMDXContent, MDXContent } from '../../../lib/mdx';
import { GetStaticProps } from 'next';
import { ArrowLeft } from 'lucide-react';

interface ErrorHandlingPatternsPageProps {
  content: MDXContent | null;
}

export default function ErrorHandlingPatternsPage({ content }: ErrorHandlingPatternsPageProps) {
  if (!content) {
    return (
      <>
        <SEO
          title="Error Handling Patterns"
          description="Learn effective error handling patterns and best practices for robust application development. Master error handling techniques across different programming languages."
          keywords={[
            'error handling patterns',
            'error handling',
            'exception handling',
            'error management',
            'programming best practices',
            'error handling techniques',
            'robust programming',
            'error handling strategies',
            'programming patterns',
            'error handling best practices'
          ]}
          type="article"
          image="/images/tutorials/programming-tips/error-handling.svg"
          url="/tutorials/programming-tips/error-handling-patterns"
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
        image={content.featuredImage || '/images/tutorials/programming-tips/error-handling.svg'}
        url={`/tutorials/programming-tips/error-handling-patterns`}
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
  const content = getMDXContent('error-handling-patterns', 'tutorials/programming-tips');

  return {
    props: {
      content,
    },
  };
};

