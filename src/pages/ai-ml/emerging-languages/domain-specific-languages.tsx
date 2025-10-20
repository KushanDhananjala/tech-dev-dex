import React from 'react';
import SEO from '@/components/SEO';
import Link from 'next/link';
import MDXContentComponent from '../../../components/MDXContent';
import { getMDXContent, MDXContent } from '../../../lib/mdx';
import { GetStaticProps } from 'next';
import { ArrowLeft } from 'lucide-react';

interface DomainSpecificLanguagesProps {
  content: MDXContent | null;
}

export default function DomainSpecificLanguages({ content }: DomainSpecificLanguagesProps) {
  if (!content) {
    return (
      <>
        <SEO
          title="Domain-Specific Languages"
          description="Explore domain-specific languages (DSLs) and their applications in specialized programming domains. Learn about DSL design, implementation, and best practices."
          keywords={[
            'domain-specific languages',
            'DSL',
            'specialized programming',
            'DSL design',
            'programming languages',
            'domain languages',
            'specialized languages',
            'DSL implementation',
            'programming paradigms',
            'language design'
          ]}
          type="article"
          image="/images/ai-ml/emerging-languages/domain-specific-languages.svg"
          url="/ai-trending/emerging-languages/domain-specific-languages"
          section="Emerging Languages"
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
        image={content.featuredImage || '/images/ai-ml/emerging-languages/domain-specific-languages.svg'}
        url={`/ai-trending/emerging-languages/domain-specific-languages`}
        publishedTime={content.date}
        section="Emerging Languages"
        tags={content.tags || []}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <Link href="/ai-trending/emerging-languages" className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Emerging Languages
            </Link>
          </div>

          <MDXContentComponent content={content} />
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const content = getMDXContent('domain-specific-languages', 'ai-trending/emerging-languages');
  
  return {
    props: {
      content,
    },
  };
};
