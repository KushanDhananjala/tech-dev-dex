import MDXContentComponent from "../../components/MDXContent";
import { getMDXContent, MDXContent } from "../../lib/mdx";
import { GetStaticProps } from "next";
import SEO from "../../components/SEO";

interface ProgrammingTipsPageProps {
  content: MDXContent | null;
}

export default function ProgrammingTipsPage({ content }: ProgrammingTipsPageProps) {
  if (!content) {
    return (
      <>
        <SEO
          title="Programming Tips & Problem Solving"
          description="Improve coding skills and solve problems effectively with expert programming tips, debugging techniques, and best practices for developers."
          keywords={[
            "programming tips",
            "coding best practices",
            "problem solving",
            "debugging techniques",
            "code optimization",
            "programming skills",
            "developer tips",
            "coding techniques",
            "software development",
            "programming fundamentals",
            "code quality",
            "programming patterns",
            "coding efficiency",
            "development skills"
          ]}
          type="article"
          image="/images/tutorials/programming-tips-og.jpg"
          url="/tutorials/programming-tips"
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
        url={`/tutorials/programming-tips`}
        publishedTime={content.date}
        section="Programming Tips"
        tags={content.tags || []}
      />
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


