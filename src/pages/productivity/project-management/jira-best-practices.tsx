import MDXContentComponent from "../../../components/MDXContent";
import { getMDXContent, MDXContent } from "../../../lib/mdx";
import { GetStaticProps } from "next";
import SEO from "../../../components/SEO";

interface JiraGuidePageProps {
  content: MDXContent | null;
}

export default function JiraGuidePage({ content }: JiraGuidePageProps) {
  if (!content) {
    return (
      <>
        <SEO
          title="Jira Guide: Master Project Management"
          description="Comprehensive guide to Jira for project management, issue tracking, and team collaboration."
          keywords={[
            "jira guide",
            "jira best practices",
            "project management",
            "issue tracking",
            "development workflow",
            "agile boards",
            "jira workflows",
            "jira automation",
            "jira tips",
            "sprint planning"
          ]}
          type="article"
          image="/images/productivity/project-management/jira-guide-og.jpg"
          url="/productivity/project-management/jira-guide"
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
        url={`/productivity/project-management/jira-guide`}
        publishedTime={content.date}
        section="Project Management"
        tags={content.tags || []}
      />
      <MDXContentComponent content={content} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const content = getMDXContent('jira-guide', 'productivity/project-management');
  
  return {
    props: {
      content,
    },
  };
};
