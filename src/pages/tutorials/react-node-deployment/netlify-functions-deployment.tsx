import React from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';
import MDXContentComponent from '../../../components/MDXContent';
import { getMDXContent, MDXContent } from '../../../lib/mdx';
import { GetStaticProps } from 'next';
import { ArrowLeft } from 'lucide-react';

interface NetlifyFunctionsDeploymentProps {
  content: MDXContent | null;
}

export default function NetlifyFunctionsDeployment({ content }: NetlifyFunctionsDeploymentProps) {
  if (!content) {
    return (
      <>
        <SEO
          title="Netlify Functions Deployment"
          description="Deploy React apps with Netlify Functions. Learn to build and deploy serverless functions with Netlify for full-stack React applications."
          keywords={[
            'Netlify Functions',
            'serverless functions',
            'React deployment',
            'Netlify deployment',
            'serverless architecture',
            'full-stack React',
            'Netlify hosting',
            'function deployment',
            'serverless development',
            'Netlify platform'
          ]}
          type="article"
          image="/images/tutorials/react-node-deployment/netlify-functions.svg"
          url="/tutorials/react-node-deployment/netlify-functions-deployment"
          section="React & Node.js Deployment"
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
        image={content.featuredImage || '/images/tutorials/react-node-deployment/netlify-functions.svg'}
        url={`/tutorials/react-node-deployment/netlify-functions-deployment`}
        publishedTime={content.date}
        section="React & Node.js Deployment"
        tags={content.tags || []}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <Link href="/tutorials/react-node-deployment" className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to React/Node Deployment
            </Link>
          </div>

          <MDXContentComponent content={content} />
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const content = getMDXContent('netlify-functions-deployment', 'tutorials/react-node-deployment');
  
  return {
    props: {
      content,
    },
  };
};