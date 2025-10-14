import MDXContentComponent from "../../../components/MDXContent";
import { getMDXContent, MDXContent } from "../../../lib/mdx";
import { GetStaticProps } from "next";
import SEO from "../../../components/SEO";

interface TrelloAsanaReviewPageProps {
  content: MDXContent | null;
}

export default function TrelloAsanaReviewPage({ content }: TrelloAsanaReviewPageProps) {
  if (!content) {
    return (
      <>
        <SEO
          title="Trello vs Asana: Project Management Showdown"
          description="Comprehensive comparison of Trello and Asana - two popular project management tools. Find out which one is better for your team."
          keywords={[
            "trello vs asana",
            "project management comparison",
            "trello review",
            "asana review",
            "project management tools",
            "team collaboration",
            "trello features",
            "asana features",
            "project management software",
            "team productivity"
          ]}
          type="article"
          image="/images/reviews/productivity-tools-review/trello-asana-og.jpg"
          url="/reviews/productivity-tools-review/trello-asana-review"
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
        url={`/reviews/productivity-tools-review/trello-asana-review`}
        publishedTime={content.date}
        section="Productivity Tools Review"
        tags={content.tags || []}
      />
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
