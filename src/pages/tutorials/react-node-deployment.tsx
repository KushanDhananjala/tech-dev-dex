import MDXContentComponent from "../../components/MDXContent";
import { getMDXContent, MDXContent } from "../../lib/mdx";
import { GetStaticProps } from "next";
import SEO from "../../components/SEO";

interface ReactNodeDeploymentPageProps {
  content: MDXContent | null;
}

export default function ReactNodeDeploymentPage({ content }: ReactNodeDeploymentPageProps) {
  if (!content) {
    return (
      <>
        <SEO
          title="React & Node.js Deployment Guides"
          description="Deploy React and Node.js applications to modern platforms like Vercel, Netlify, Heroku, and AWS. Complete deployment tutorials for full-stack applications."
          keywords={[
            "react deployment",
            "node.js deployment",
            "vercel deployment",
            "netlify deployment",
            "heroku deployment",
            "aws deployment",
            "full stack deployment",
            "react hosting",
            "node.js hosting",
            "web app deployment",
            "production deployment",
            "deployment guides",
            "react production",
            "node.js production"
          ]}
          type="article"
          image="/images/tutorials/react-node-deployment-og.jpg"
          url="/tutorials/react-node-deployment"
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
        url={`/tutorials/react-node-deployment`}
        publishedTime={content.date}
        section="React & Node.js Deployment"
        tags={content.tags || []}
      />
      <MDXContentComponent content={content} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const content = getMDXContent('react-node-deployment', 'tutorials');
  
  return {
    props: {
      content,
    },
  };
};


