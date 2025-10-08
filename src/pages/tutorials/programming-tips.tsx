import MDXContentComponent from "../../components/MDXContent";
import { getMDXContent, MDXContent } from "../../lib/mdx";
import { GetStaticProps } from "next";
import Head from "next/head";

interface ProgrammingTipsPageProps {
  content: MDXContent | null;
}

export default function ProgrammingTipsPage({ content }: ProgrammingTipsPageProps) {
  if (!content) {
    return (
      <>
        <Head>
          <title>Programming Tips & Problem Solving | TechDevDex</title>
          <meta name="description" content="Improve coding skills and solve problems effectively" />
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
  const content = getMDXContent('programming-tips', 'tutorials');
  
  return {
    props: {
      content,
    },
  };
};


