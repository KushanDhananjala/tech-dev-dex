import MDXContentComponent from "../../components/MDXContent";
import { getMDXContent, MDXContent } from "../../lib/mdx";
import { GetStaticProps } from "next";
import SEO from "../../components/SEO";

interface GitGithubTutorialsPageProps {
  content: MDXContent | null;
}

export default function GitGithubTutorialsPage({ content }: GitGithubTutorialsPageProps) {
  if (!content) {
    return (
      <>
        <SEO
          title="Git & GitHub Tutorials"
          description="Master version control with Git and GitHub workflows. Learn branching strategies, collaboration, CI/CD, and advanced Git techniques for developers."
          keywords={[
            "git tutorials",
            "github tutorials",
            "version control",
            "git workflows",
            "github workflows",
            "git branching",
            "collaboration",
            "git best practices",
            "github actions",
            "git commands",
            "version control system",
            "git collaboration",
            "github collaboration",
            "git advanced"
          ]}
          type="article"
          image="/images/tutorials/git-github-og.jpg"
          url="/tutorials/git-github-tutorials"
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
        url={`/tutorials/git-github-tutorials`}
        publishedTime={content.date}
        section="Git & GitHub"
        tags={content.tags || []}
      />
      <MDXContentComponent content={content} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const content = getMDXContent('git-github-tutorials', 'tutorials');
  
  return {
    props: {
      content,
    },
  };
};


