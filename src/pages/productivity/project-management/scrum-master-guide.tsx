import React from 'react';
import SEO from '@/components/SEO';
import Link from 'next/link';
import MDXContentComponent from '../../../components/MDXContent';
import { getMDXContent, MDXContent } from '../../../lib/mdx';
import { GetStaticProps } from 'next';
import { ArrowLeft } from 'lucide-react';

interface ScrumMasterGuideProps {
  content: MDXContent | null;
}

export default function ScrumMasterGuide({ content }: ScrumMasterGuideProps) {
  if (!content) {
    return (
      <>
        <SEO
          title="Scrum Master Guide for Agile Teams"
          description="Complete Scrum Master guide for Agile teams. Learn Scrum Master responsibilities, facilitation skills, and team leadership best practices."
          keywords={[
            'Scrum Master guide',
            'Agile teams',
            'Scrum Master responsibilities',
            'facilitation skills',
            'team leadership',
            'Scrum framework',
            'Agile methodology',
            'Scrum ceremonies',
            'team coaching',
            'Agile leadership'
          ]}
          type="article"
          image="/images/productivity/project-management/scrum-master.svg"
          url="/productivity/project-management/scrum-master-guide"
          section="Project Management"
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
        image={content.featuredImage || '/images/productivity/project-management/scrum-master.svg'}
        url={`/productivity/project-management/scrum-master-guide`}
        publishedTime={content.date}
        section="Project Management"
        tags={content.tags || []}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <Link href="/productivity/project-management" className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Project Management
            </Link>
          </div>

          <MDXContentComponent content={content} />
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const content = getMDXContent('scrum-master-guide', 'productivity/project-management');
  
  return {
    props: {
      content,
    },
  };
};
