import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import MDXContentComponent from '../../../components/MDXContent';
import { getMDXContent, MDXContent } from '../../../lib/mdx';
import { GetStaticProps } from 'next';
import { ArrowLeft } from 'lucide-react';

interface GitHubActionsCiCdProps {
  content: MDXContent | null;
}

export default function GitHubActionsCiCd({ content }: GitHubActionsCiCdProps) {
  if (!content) {
    return (
      <>
        <Head>
          <title>GitHub Actions CI/CD - TechDevDex</title>
          <meta name="description" content="Master GitHub Actions for automated testing and deployment" />
        </Head>
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
      <Head>
        <title>{`${content.title} | TechDevDex`}</title>
        <meta name="description" content={content.description} />
        <meta name="keywords" content={content.tags.join(', ')} />
      </Head>

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
  const content = getMDXContent('github-actions-ci-cd', 'tutorials/git-github-tutorials');
  
  return {
    props: {
      content,
    },
  };
};