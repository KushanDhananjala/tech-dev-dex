import MDXContentComponent from "../../components/MDXContent";
import { getMDXContent, MDXContent } from "../../lib/mdx";
import { GetStaticProps } from "next";
import SEO from "../../components/SEO";

interface PythonAutomationPageProps {
  content: MDXContent | null;
}

export default function PythonAutomationPage({ content }: PythonAutomationPageProps) {
  if (!content) {
    return (
      <>
        <SEO
          title="Python Automation Scripts & Workflows"
          description="Automate tasks and workflows with Python scripts. Learn web scraping, file processing, API automation, and workflow optimization with Python."
          keywords={[
            "python automation",
            "automation scripts",
            "python workflows",
            "web scraping python",
            "file automation",
            "api automation",
            "python scripting",
            "task automation",
            "workflow automation",
            "python tools",
            "automation techniques",
            "python productivity",
            "scripting automation",
            "python efficiency"
          ]}
          type="article"
          image="/images/tutorials/python-automation-og.jpg"
          url="/tutorials/python-automation"
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
        url={`/tutorials/python-automation`}
        publishedTime={content.date}
        section="Python Automation"
        tags={content.tags || []}
      />
      <MDXContentComponent content={content} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const content = getMDXContent('python-automation', 'tutorials');
  
  return {
    props: {
      content,
    },
  };
};


