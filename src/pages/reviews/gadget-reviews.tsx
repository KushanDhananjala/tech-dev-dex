import MDXContentComponent from "../../components/MDXContent";
import { getMDXContent, MDXContent } from "../../lib/mdx";
import { GetStaticProps } from "next";
import SEO from "../../components/SEO";

interface GadgetReviewsPageProps {
  content: MDXContent | null;
}

export default function GadgetReviewsPage({ content }: GadgetReviewsPageProps) {
  if (!content) {
    return (
      <>
        <SEO
          title="Gadget Reviews & Hardware Analysis"
          description="Comprehensive reviews of keyboards, laptops, chairs, and tech gadgets for developers. Expert analysis of hardware performance, ergonomics, and value for money."
          keywords={[
            "gadget reviews",
            "hardware reviews",
            "keyboard reviews",
            "laptop reviews",
            "gaming chair reviews",
            "tech gadgets",
            "developer hardware",
            "programming equipment",
            "tech accessories",
            "hardware analysis",
            "gadget comparison",
            "tech reviews",
            "hardware testing",
            "gadget recommendations"
          ]}
          type="article"
          image="/images/reviews/gadget-reviews-og.jpg"
          url="/reviews/gadget-reviews"
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
        image={content.featuredImage}
        url={`/reviews/gadget-reviews`}
        publishedTime={content.date}
        section="Gadget Reviews"
        tags={content.tags || []}
      />
      <MDXContentComponent content={content} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const content = getMDXContent('gadget-reviews', 'reviews');
  
  return {
    props: {
      content,
    },
  };
};


