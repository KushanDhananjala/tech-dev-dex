import MDXContentComponent from "../../../components/MDXContent";
import { getMDXContent, MDXContent } from "../../../lib/mdx";
import { GetStaticProps } from "next";
import SEO from "../../../components/SEO";

interface TeamCollaborationPageProps {
  content: MDXContent | null;
}

export default function TeamCollaborationPage({ content }: TeamCollaborationPageProps) {
  if (!content) {
    return (
      <>
        <SEO
          title="Team Collaboration: Building High-Performing Development Teams"
          description="Complete guide to team collaboration in software development. Learn communication strategies, collaboration tools, and best practices for remote teams."
          keywords={[
            "team collaboration",
            "development teams",
            "remote collaboration",
            "team communication",
            "collaboration tools",
            "team productivity",
            "agile collaboration",
            "team management",
            "development workflow",
            "team best practices"
          ]}
          type="article"
          image="/images/productivity/project-management/team-collaboration-og.jpg"
          url="/productivity/project-management/team-collaboration"
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
        url={`/productivity/project-management/team-collaboration`}
        publishedTime={content.date}
        section="Project Management"
        tags={content.tags || []}
      />
      <MDXContentComponent content={content} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const content = getMDXContent('team-collaboration', 'productivity/project-management');
  
  return {
    props: {
      content,
    },
  };
};
