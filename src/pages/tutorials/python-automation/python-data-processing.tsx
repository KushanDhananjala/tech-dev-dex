import React from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';
import MDXContentComponent from '../../../components/MDXContent';
import { getMDXContent, MDXContent } from '../../../lib/mdx';
import { GetStaticProps } from 'next';
import { ArrowLeft } from 'lucide-react';

interface PythonDataProcessingProps {
  content: MDXContent | null;
}

export default function PythonDataProcessing({ content }: PythonDataProcessingProps) {
  if (!content) {
    return (
      <>
        <SEO
          title="Python Data Processing"
          description="Automate data processing with Python. Learn to process large datasets, clean data, and build automated data processing workflows with Python."
          keywords={[
            'Python data processing',
            'data processing',
            'Python automation',
            'data cleaning',
            'data analysis',
            'Python pandas',
            'data workflows',
            'Python data tools',
            'data automation',
            'Python data library'
          ]}
          type="article"
          image="/images/tutorials/python-automation/data-processing.svg"
          url="/tutorials/python-automation/python-data-processing"
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
        image={content.featuredImage || '/images/tutorials/python-automation/data-processing.svg'}
        url={`/tutorials/python-automation/python-data-processing`}
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
  const content = getMDXContent('python-data-processing', 'tutorials/python-automation');
  
  return {
    props: {
      content,
    },
  };
};