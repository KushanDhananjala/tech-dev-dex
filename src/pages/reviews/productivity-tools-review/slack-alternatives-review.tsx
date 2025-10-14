import MDXContentComponent from "../../../components/MDXContent";
import { getMDXContent, MDXContent } from "../../../lib/mdx";
import { GetStaticProps } from "next";
import SEO from "../../../components/SEO";

interface SlackAlternativesReviewPageProps {
  content: MDXContent | null;
}

export default function SlackAlternativesReviewPage({ content }: SlackAlternativesReviewPageProps) {
  if (!content) {
    return (
      <>
        <SEO
          title="Best Slack Alternatives: Team Communication Tools Compared"
          description="Comprehensive review of Slack alternatives including Microsoft Teams, Discord, Mattermost, and more for team communication."
          keywords={[
            "slack alternatives",
            "team communication tools",
            "microsoft teams",
            "discord for teams",
            "mattermost",
            "team chat",
            "communication software",
            "team collaboration",
            "remote work tools",
            "team messaging"
          ]}
          type="article"
          image="/images/reviews/productivity-tools-review/slack-alternatives-og.jpg"
          url="/reviews/productivity-tools-review/slack-alternatives-review"
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
        url={`/reviews/productivity-tools-review/slack-alternatives-review`}
        publishedTime={content.date}
        section="Productivity Tools Review"
        tags={content.tags || []}
      />
      <MDXContentComponent content={content} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const content = getMDXContent('slack-alternatives-review', 'reviews/productivity-tools-review');
  
  return {
    props: {
      content,
    },
  };
};
