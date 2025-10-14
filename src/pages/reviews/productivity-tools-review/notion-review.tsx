import MDXContentComponent from "../../../components/MDXContent";
import { getMDXContent, MDXContent } from "../../../lib/mdx";
import { GetStaticProps } from "next";
import SEO from "../../../components/SEO";

interface NotionReviewPageProps {
  content: MDXContent | null;
}

export default function NotionReviewPage({ content }: NotionReviewPageProps) {
  if (!content) {
    return (
      <>
        <SEO
          title="Notion Review: The Ultimate Productivity Workspace"
          description="Comprehensive review of Notion - the all-in-one workspace for notes, docs, wikis, and project management."
          keywords={[
            "notion review",
            "productivity workspace",
            "notes and docs",
            "project management",
            "knowledge management",
            "productivity tools",
            "notion features",
            "notion pros and cons",
            "notion for developers"
          ]}
          type="article"
          image="/images/reviews/productivity-tools-review/notion-og.jpg"
          url="/reviews/productivity-tools-review/notion-review"
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
        url={`/reviews/productivity-tools-review/notion-review`}
        publishedTime={content.date}
        section="Productivity Tools Review"
        tags={content.tags || []}
      />
      <MDXContentComponent content={content} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const content = getMDXContent('notion-review', 'reviews/productivity-tools-review');
  
  return {
    props: {
      content,
    },
  };
};
