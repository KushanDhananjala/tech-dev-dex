import React from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';
import MDXContentComponent from '../../../components/MDXContent';
import { getMDXContent, MDXContent } from '../../../lib/mdx';
import { GetStaticProps } from 'next';
import { ArrowLeft } from 'lucide-react';

interface PythonEmailAutomationProps {
  content: MDXContent | null;
}

export default function PythonEmailAutomation({ content }: PythonEmailAutomationProps) {
  if (!content) {
    return (
      <>
        <SEO
          title="Python Email Automation"
          description="Automate email workflows with Python. Learn to send automated emails, process email data, and build email automation workflows with Python."
          keywords={[
            'Python email automation',
            'email automation',
            'Python email',
            'automated emails',
            'email processing',
            'Python automation',
            'email workflows',
            'Python email library',
            'email automation scripts',
            'Python email tools'
          ]}
          type="article"
          image="/images/tutorials/python-automation/email-automation.svg"
          url="/tutorials/python-automation/python-email-automation"
          section="Python Automation"
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
        image={content.featuredImage || '/images/tutorials/python-automation/email-automation.svg'}
        url={`/tutorials/python-automation/python-email-automation`}
        publishedTime={content.date}
        section="Python Automation"
        tags={content.tags || []}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <Link href="/tutorials/python-automation" className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Python Automation
            </Link>
          </div>

          <MDXContentComponent content={content} />
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const content = getMDXContent('python-email-automation', 'tutorials/python-automation');
  
  return {
    props: {
      content,
    },
  };
};