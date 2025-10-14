import React from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';
import MDXContentComponent from '../../../components/MDXContent';
import { getMDXContent, MDXContent } from '../../../lib/mdx';
import { GetStaticProps } from 'next';
import { ArrowLeft } from 'lucide-react';

interface NodejsHerokuDeploymentProps {
  content: MDXContent | null;
}

export default function NodejsHerokuDeployment({ content }: NodejsHerokuDeploymentProps) {
  if (!content) {
    return (
      <>
        <SEO
          title="Node.js Heroku Deployment"
          description="Deploy Node.js applications to Heroku platform. Learn to deploy Node.js applications to Heroku with database integration and production optimization."
          keywords={[
            'Node.js Heroku deployment',
            'Heroku platform',
            'Node.js hosting',
            'Heroku deployment',
            'Node.js production',
            'Heroku hosting',
            'Node.js deployment guide',
            'Heroku optimization',
            'Node.js serverless',
            'Heroku platform'
          ]}
          type="article"
          image="/images/tutorials/react-node-deployment/heroku-deployment.svg"
          url="/tutorials/react-node-deployment/nodejs-heroku-deployment"
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
        image={content.featuredImage || '/images/tutorials/react-node-deployment/heroku-deployment.svg'}
        url={`/tutorials/react-node-deployment/nodejs-heroku-deployment`}
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
  const content = getMDXContent('nodejs-heroku-deployment', 'tutorials/react-node-deployment');
  
  return {
    props: {
      content,
    },
  };
};