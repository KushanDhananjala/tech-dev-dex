import React from 'react';
import { GetStaticProps } from 'next';
import { getMDXContent, MDXContent } from '../../../lib/mdx';
import MDXContentComponent from '../../../components/MDXContent';
import SEO from '../../../components/SEO';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface FigmaVsAdobeXDProps {
  content: MDXContent | null;
}

export default function FigmaVsAdobeXD({ content }: FigmaVsAdobeXDProps) {
  if (!content) {
    return (
      <>
        <SEO
          title="Figma vs Adobe XD: Complete Design Tool Comparison"
          description="In-depth comparison of Figma and Adobe XD for UI/UX design. Features, pricing, collaboration, and which tool is better for your design workflow."
          keywords={[
            'figma',
            'adobe-xd',
            'ui-design',
            'ux-design',
            'design-tools',
            'comparison',
            'figma vs adobe xd',
            'design software',
            'ui ux tools',
            'design comparison'
          ]}
          type="article"
          image="/images/reviews/app-comparisons/figma-vs-adobe-xd.svg"
          url="/reviews/app-comparisons/figma-vs-adobe-xd"
          section="App Comparisons"
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
        image={content.featuredImage || '/images/reviews/app-comparisons/figma-vs-adobe-xd.svg'}
        url={`/reviews/app-comparisons/figma-vs-adobe-xd`}
        publishedTime={content.date}
        section="App Comparisons"
        tags={content.tags || []}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <Link href="/reviews/app-comparisons" className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to App Comparisons
            </Link>
          </div>

          <MDXContentComponent content={content} />
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const content = getMDXContent('figma-vs-adobe-xd', 'reviews/app-comparisons');

  return {
    props: {
      content,
    },
  };
};
