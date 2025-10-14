import React from 'react';
import SEO from '@/components/SEO';
import Link from 'next/link';
import MDXContentComponent from '../../../components/MDXContent';
import { getMDXContent, MDXContent } from '../../../lib/mdx';
import { GetStaticProps } from 'next';
import { ArrowLeft } from 'lucide-react';

interface BudgetKeyboardsReviewProps {
  content: MDXContent | null;
}

export default function BudgetKeyboardsReview({ content }: BudgetKeyboardsReviewProps) {
  if (!content) {
    return (
      <>
        <SEO
          title="Budget Keyboards Review for Developers"
          description="Comprehensive review of budget keyboards that offer excellent value for developers. Find affordable mechanical keyboards, membrane keyboards, and budget-friendly options for coding."
          keywords={[
            'budget keyboards',
            'developer keyboards',
            'affordable keyboards',
            'mechanical keyboards',
            'membrane keyboards',
            'budget-friendly keyboards',
            'coding keyboards',
            'keyboard reviews',
            'budget hardware',
            'value keyboards'
          ]}
          type="article"
          image="/images/hardware/peripherals/budget-keyboards.svg"
          url="/hardware/peripherals/budget-keyboards-review"
          section="Peripherals"
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
        image={content.featuredImage || '/images/hardware/peripherals/budget-keyboards.svg'}
        url={`/hardware/peripherals/budget-keyboards-review`}
        publishedTime={content.date}
        section="Peripherals"
        tags={content.tags || []}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <Link href="/hardware/peripherals" className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Peripherals
            </Link>
          </div>

          <MDXContentComponent content={content} />
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const content = getMDXContent('budget-keyboards-review', 'hardware/peripherals');
  
  return {
    props: {
      content,
    },
  };
};