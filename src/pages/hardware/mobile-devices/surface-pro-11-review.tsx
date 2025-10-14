import React from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';
import MDXContentComponent from '../../../components/MDXContent';
import { getMDXContent, MDXContent } from '../../../lib/mdx';
import { GetStaticProps } from 'next';
import { ArrowLeft } from 'lucide-react';

interface SurfacePro11ReviewProps {
  content: MDXContent | null;
}

export default function SurfacePro11Review({ content }: SurfacePro11ReviewProps) {
  if (!content) {
    return (
      <>
        <SEO
          title="Surface Pro 11 Review"
          description="Surface Pro 11 developer review"
          keywords={[
            'Surface Pro 11',
            'Microsoft Surface',
            'tablet development',
            'hybrid device',
            'Surface review',
            'tablet laptop',
            'development device',
            'Surface development',
            'tablet development tools',
            'Surface Pro development'
          ]}
          type="article"
          image="/images/hardware/mobile-devices/surface-pro-11.svg"
          url="/hardware/mobile-devices/surface-pro-11-review"
          section="Mobile Devices"
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
        image={content.featuredImage || '/images/hardware/mobile-devices/surface-pro-11.svg'}
        url={`/hardware/mobile-devices/surface-pro-11-review`}
        publishedTime={content.date}
        section="Mobile Devices"
        tags={content.tags || []}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <Link href="/hardware/mobile-devices" className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Mobile Devices
            </Link>
          </div>

          <MDXContentComponent content={content} />
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const content = getMDXContent('surface-pro-11-review', 'hardware/mobile-devices');
  
  return {
    props: {
      content,
    },
  };
};
