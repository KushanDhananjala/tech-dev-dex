import MDXContentComponent from "../../../components/MDXContent";
import { getMDXContent, MDXContent } from "../../../lib/mdx";
import { GetStaticProps } from "next";
import SEO from "../../../components/SEO";

interface TimeTrackingReviewPageProps {
  content: MDXContent | null;
}

export default function TimeTrackingReviewPage({ content }: TimeTrackingReviewPageProps) {
  if (!content) {
    return (
      <>
        <SEO
          title="Best Time Tracking Tools: Productivity and Project Management"
          description="Comprehensive review of the best time tracking tools including Toggl, Harvest, Clockify, and RescueTime for developers and teams."
          keywords={[
            "time tracking tools",
            "productivity tools",
            "toggl review",
            "harvest review",
            "clockify review",
            "rescuetime review",
            "time management",
            "project tracking",
            "developer productivity",
            "team productivity"
          ]}
          type="article"
          image="/images/reviews/productivity-tools-review/time-tracking-og.jpg"
          url="/reviews/productivity-tools-review/time-tracking-review"
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
        url={`/reviews/productivity-tools-review/time-tracking-review`}
        publishedTime={content.date}
        section="Productivity Tools Review"
        tags={content.tags || []}
      />
      <MDXContentComponent content={content} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const content = getMDXContent('time-tracking-review', 'reviews/productivity-tools-review');
  
  return {
    props: {
      content,
    },
  };
};
