import MDXContentComponent from "../../../components/MDXContent";
import { getMDXContent, MDXContent } from "../../../lib/mdx";
import { GetStaticProps } from "next";
import Head from "next/head";

interface DeskAccessoriesGuidePageProps {
  content: MDXContent | null;
}

export default function DeskAccessoriesGuidePage({ content }: DeskAccessoriesGuidePageProps) {
  if (!content) {
    return (
      <>
        <Head>
          <title>Essential Desk Accessories for Developers | TechDevDex</title>
          <meta name="description" content="Complete guide to essential desk accessories for developers including monitor arms, desk pads, cable management, and ergonomic accessories." />
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
        <meta name="keywords" content={content.tags.join(", ")} />
        <meta name="author" content={content.author} />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content={content.title} />
        <meta property="og:description" content={content.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://techdevdex.com/hardware/peripherals/desk-accessories-guide`} />
        <meta property="og:image" content={content.featuredImage} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={content.title} />
        <meta name="twitter:description" content={content.description} />
        <meta name="twitter:image" content={content.featuredImage} />
        
        {/* Canonical */}
        <link rel="canonical" href={`https://techdevdex.com/hardware/peripherals/desk-accessories-guide`} />
        
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              "headline": content.title,
              "description": content.description,
              "author": {
                "@type": "Organization",
                "name": content.author
              },
              "datePublished": content.date,
              "image": content.featuredImage
            })
          }}
        />
      </Head>
      <MDXContentComponent content={content} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const content = getMDXContent('desk-accessories-guide', 'hardware/peripherals');
  
  return {
    props: {
      content,
    },
  };
};
