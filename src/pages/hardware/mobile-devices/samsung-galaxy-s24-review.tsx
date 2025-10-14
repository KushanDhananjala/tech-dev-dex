import React from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';
import MDXContentComponent from '../../../components/MDXContent';
import { getMDXContent, MDXContent } from '../../../lib/mdx';
import { GetStaticProps } from 'next';
import { ArrowLeft } from 'lucide-react';

interface SamsungGalaxyS24ReviewProps {
  content: MDXContent | null;
}

export default function SamsungGalaxyS24Review({ content }: SamsungGalaxyS24ReviewProps) {
  if (!content) {
    return (
      <>
        <SEO
          title="Samsung Galaxy S24 Review"
          description="Samsung Galaxy S24 developer review"
          keywords={[
            'Samsung Galaxy S24',
            'Android development',
            'mobile development',
            'Android testing',
            'Galaxy S24 review',
            'Android hardware',
            'development device',
            'Android development tools',
            'Samsung development',
            'Galaxy development'
          ]}
          type="article"
          image="/images/hardware/mobile-devices/samsung-galaxy-s24.svg"
          url="/hardware/mobile-devices/samsung-galaxy-s24-review"
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
        image={content.featuredImage || '/images/hardware/mobile-devices/samsung-galaxy-s24.svg'}
        url={`/hardware/mobile-devices/samsung-galaxy-s24-review`}
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
  const content = getMDXContent('samsung-galaxy-s24-review', 'hardware/mobile-devices');
  
  return {
    props: {
      content,
    },
  };
};
