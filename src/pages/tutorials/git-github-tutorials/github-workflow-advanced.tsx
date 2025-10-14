import React from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';
import MDXContentComponent from '../../../components/MDXContent';
import { getMDXContent, MDXContent } from '../../../lib/mdx';
import { GetStaticProps } from 'next';
import { ArrowLeft } from 'lucide-react';

interface GitHubWorkflowAdvancedProps {
  content: MDXContent | null;
}

export default function GitHubWorkflowAdvanced({ content }: GitHubWorkflowAdvancedProps) {
  if (!content) {
    return (
      <>
        <SEO
          title="Advanced GitHub Workflows"
          description="Master advanced GitHub workflow techniques with CI/CD, automation, and collaboration features. Learn to optimize your development workflow with GitHub Actions."
          keywords={[
            'GitHub workflow',
            'GitHub Actions',
            'CI/CD',
            'GitHub automation',
            'GitHub collaboration',
            'GitHub features',
            'GitHub best practices',
            'GitHub productivity',
            'GitHub integration',
            'GitHub workflow optimization'
          ]}
          type="article"
          image="/images/tutorials/git-github-tutorials/github-workflow.svg"
          url="/tutorials/git-github-tutorials/github-workflow-advanced"
          section="Git & GitHub Tutorials"
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
        image={content.featuredImage || '/images/tutorials/git-github-tutorials/github-workflow.svg'}
        url={`/tutorials/git-github-tutorials/github-workflow-advanced`}
        publishedTime={content.date}
        section="Git & GitHub Tutorials"
        tags={content.tags || []}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <Link href="/tutorials/git-github-tutorials" className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Git & GitHub Tutorials
            </Link>
          </div>

          <MDXContentComponent content={content} />
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const content = getMDXContent('github-workflow-advanced', 'tutorials/git-github-tutorials');
  
  return {
    props: {
      content,
    },
  };
};