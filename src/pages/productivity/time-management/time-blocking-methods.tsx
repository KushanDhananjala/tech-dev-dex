import React from 'react';
import SEO from '@/components/SEO';
import Link from 'next/link';
import MDXContentComponent from '../../../components/MDXContent';
import { getMDXContent, MDXContent } from '../../../lib/mdx';
import { GetStaticProps } from 'next';
import { ArrowLeft } from 'lucide-react';

interface TimeBlockingMethodsProps {
  content: MDXContent | null;
}

export default function TimeBlockingMethods({ content }: TimeBlockingMethodsProps) {
  if (!content) {
    return (
      <>
        <SEO
          title="Time Blocking Methods for Developers"
          description="Master time blocking methods for maximum developer productivity. Learn effective time management techniques, scheduling strategies, and focus optimization for development work."
          keywords={[
            'time blocking methods',
            'developer productivity',
            'time management techniques',
            'scheduling strategies',
            'focus optimization',
            'time blocking',
            'productivity methods',
            'time management',
            'developer efficiency',
            'time optimization'
          ]}
          type="article"
          image="/images/productivity/time-management/time-blocking.svg"
          url="/productivity/time-management/time-blocking-methods"
          section="Time Management"
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
        image={content.featuredImage || '/images/productivity/time-management/time-blocking.svg'}
        url={`/productivity/time-management/time-blocking-methods`}
        publishedTime={content.date}
        section="Time Management"
        tags={content.tags || []}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <Link href="/productivity/time-management" className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Time Management
            </Link>
          </div>

          <MDXContentComponent content={content} />
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const content = getMDXContent('time-blocking-methods', 'productivity/time-management');
  
  return {
    props: {
      content,
    },
  };
};
