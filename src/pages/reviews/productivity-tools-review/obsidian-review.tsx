import MDXContentComponent from "../../../components/MDXContent";
import { getMDXContent, MDXContent } from "../../../lib/mdx";
import { GetStaticProps } from "next";
import SEO from "../../../components/SEO";

interface ObsidianReviewPageProps {
  content: MDXContent | null;
}

export default function ObsidianReviewPage({ content }: ObsidianReviewPageProps) {
  if (!content) {
    return (
      <>
        <SEO
          title="Obsidian Review: The Ultimate Knowledge Management Tool"
          description="In-depth review of Obsidian - the powerful note-taking and knowledge management tool for developers and knowledge workers."
          keywords={[
            "obsidian review",
            "knowledge management",
            "note taking app",
            "obsidian features",
            "obsidian pros and cons",
            "obsidian for developers",
            "knowledge graph",
            "productivity tools",
            "obsidian vs notion",
            "obsidian plugins"
          ]}
          type="article"
          image="/images/reviews/productivity-tools-review/obsidian-og.jpg"
          url="/reviews/productivity-tools-review/obsidian-review"
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
        url={`/reviews/productivity-tools-review/obsidian-review`}
        publishedTime={content.date}
        section="Productivity Tools Review"
        tags={content.tags || []}
      />
      <MDXContentComponent content={content} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const content = getMDXContent('obsidian-review', 'reviews/productivity-tools-review');
  
  return {
    props: {
      content,
    },
  };
};
