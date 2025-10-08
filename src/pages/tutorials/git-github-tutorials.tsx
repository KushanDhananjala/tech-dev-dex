import MDXContentComponent from "../../components/MDXContent";
import { getMDXContent, MDXContent } from "../../lib/mdx";
import { GetStaticProps } from "next";
import Head from "next/head";

interface GitGithubTutorialsPageProps {
  content: MDXContent | null;
}

export default function GitGithubTutorialsPage({ content }: GitGithubTutorialsPageProps) {
  if (!content) {
    return (
      <>
        <Head>
          <title>Git & GitHub Tutorials | TechDevDex</title>
          <meta name="description" content="Version control workflows and GitHub guides" />
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
      </Head>
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


