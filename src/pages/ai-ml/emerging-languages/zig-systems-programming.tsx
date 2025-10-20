import React from 'react';
import SEO from '@/components/SEO';
import Link from 'next/link';
import MDXContentComponent from '../../../components/MDXContent';
import { getMDXContent, MDXContent } from '../../../lib/mdx';
import { GetStaticProps } from 'next';
import { ArrowLeft } from 'lucide-react';

interface ZigSystemsProgrammingProps {
  content: MDXContent | null;
}

export default function ZigSystemsProgramming({ content }: ZigSystemsProgrammingProps) {
  if (!content) {
    return (
      <>
        <SEO
          title="Zig Systems Programming"
          description="Master Zig programming language for systems programming. Learn about Zig's features, performance, and how it compares to C and Rust for low-level development."
          keywords={[
            'Zig programming language',
            'systems programming',
            'Zig language',
            'low-level programming',
            'systems development',
            'Zig vs C',
            'Zig vs Rust',
            'programming languages',
            'systems programming languages',
            'Zig development'
          ]}
          type="article"
          image="/images/ai-ml/emerging-languages/zig-systems.svg"
          url="/ai-trending/emerging-languages/zig-systems-programming"
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
        image={content.featuredImage || '/images/ai-ml/emerging-languages/zig-systems.svg'}
        url={`/ai-trending/emerging-languages/zig-systems-programming`}
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
  const content = getMDXContent('zig-systems-programming', 'ai-trending/emerging-languages');
  
  return {
    props: {
      content,
    },
  };
};
