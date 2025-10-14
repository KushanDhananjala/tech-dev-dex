import React from 'react';
import SEO from '@/components/SEO';
import Link from 'next/link';
import MDXContentComponent from '../../../components/MDXContent';
import { getMDXContent, MDXContent } from '../../../lib/mdx';
import { GetStaticProps } from 'next';
import { ArrowLeft } from 'lucide-react';

interface GitWorkflowAdvancedProps {
  content: MDXContent | null;
}

export default function GitWorkflowAdvanced({ content }: GitWorkflowAdvancedProps) {
  if (!content) {
    return (
      <>
        <SEO
          title="Advanced Git Workflow Techniques"
          description="Master advanced Git workflow techniques for professional development. Learn Git branching strategies, collaboration patterns, and advanced Git commands for team productivity."
          keywords={[
            'advanced Git workflow',
            'Git techniques',
            'professional development',
            'Git branching strategies',
            'collaboration patterns',
            'advanced Git commands',
            'team productivity',
            'Git best practices',
            'version control',
            'Git collaboration'
          ]}
          type="article"
          image="/images/productivity/development-tools/git-workflow.svg"
          url="/productivity/development-tools/git-workflow-advanced"
          section="Development Tools"
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
        image={content.featuredImage || '/images/productivity/development-tools/git-workflow.svg'}
        url={`/productivity/development-tools/git-workflow-advanced`}
        publishedTime={content.date}
        section="Development Tools"
        tags={content.tags || []}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <Link href="/productivity/development-tools" className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Development Tools
            </Link>
          </div>

          <MDXContentComponent content={content} />
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const content = getMDXContent('git-workflow-advanced', 'productivity/development-tools');
  
  return {
    props: {
      content,
    },
  };
};
