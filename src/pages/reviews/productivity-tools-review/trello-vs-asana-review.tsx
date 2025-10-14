import MDXContentComponent from "../../../components/MDXContent";
import { getMDXContent, MDXContent } from "../../../lib/mdx";
import { GetStaticProps } from "next";
import Head from "next/head";

interface TrelloAsanaReviewPageProps {
  content: MDXContent | null;
}

export default function TrelloAsanaReviewPage({ content }: TrelloAsanaReviewPageProps) {
  if (!content) {
    return (
      <>
        <Head>
          <title>Trello vs Asana: Project Management Showdown | TechDevDex</title>
          <meta name="description" content="Comprehensive comparison of Trello and Asana - two popular project management tools." />
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
        <meta property="og:url" content={`https://techdevdex.com/reviews/productivity-tools-review/trello-asana-review`} />
        <meta property="og:image" content={content.featuredImage} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={content.title} />
        <meta name="twitter:description" content={content.description} />
        <meta name="twitter:image" content={content.featuredImage} />
        
        {/* Canonical */}
        <link rel="canonical" href={`https://techdevdex.com/reviews/productivity-tools-review/trello-asana-review`} />
        
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Review",
              "headline": content.title,
              "description": content.description,
              "author": {
                "@type": "Organization",
                "name": content.author
              },
              "datePublished": content.date,
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": content.rating,
                "bestRating": 5
              },
              "itemReviewed": {
                "@type": "SoftwareApplication",
                "name": "Trello vs Asana",
                "applicationCategory": "Project Management Software"
              }
            })
          }}
        />
      </Head>
      <MDXContentComponent content={content} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const content = getMDXContent('trello-asana-review', 'reviews/productivity-tools-review');
  
  return {
    props: {
      content,
    },
  };
};
