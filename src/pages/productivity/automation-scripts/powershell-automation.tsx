import React from 'react';
import SEO from '@/components/SEO';
import Link from 'next/link';
import MDXContentComponent from '../../../components/MDXContent';
import { getMDXContent, MDXContent } from '../../../lib/mdx';
import { GetStaticProps } from 'next';
import { ArrowLeft } from 'lucide-react';

interface PowerShellAutomationProps {
  content: MDXContent | null;
}

export default function PowerShellAutomation({ content }: PowerShellAutomationProps) {
  if (!content) {
    return (
      <>
        <SEO
          title="PowerShell Automation for Windows Development"
          description="Master PowerShell automation for Windows development. Learn PowerShell scripting, automation techniques, and best practices for Windows system administration."
          keywords={[
            'PowerShell automation',
            'Windows development',
            'PowerShell scripting',
            'automation techniques',
            'Windows system administration',
            'PowerShell best practices',
            'Windows automation',
            'PowerShell development',
            'system automation',
            'Windows scripting'
          ]}
          type="article"
          image="/images/productivity/automation-scripts/powershell-automation.svg"
          url="/productivity/automation-scripts/powershell-automation"
          section="Automation Scripts"
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
        image={content.featuredImage || '/images/productivity/automation-scripts/powershell-automation.svg'}
        url={`/productivity/automation-scripts/powershell-automation`}
        publishedTime={content.date}
        section="Automation Scripts"
        tags={content.tags || []}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <Link href="/productivity/automation-scripts" className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Automation Scripts
            </Link>
          </div>

          <MDXContentComponent content={content} />
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const content = getMDXContent('powershell-automation', 'productivity/automation-scripts');
  
  return {
    props: {
      content,
    },
  };
};
