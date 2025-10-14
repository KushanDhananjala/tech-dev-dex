import MDXContentComponent from "../../../components/MDXContent";
import { getMDXContent, MDXContent } from "../../../lib/mdx";
import { GetStaticProps } from "next";
import Head from "next/head";

interface JiraGuidePageProps {
  content: MDXContent | null;
}

export default function JiraGuidePage({ content }: JiraGuidePageProps) {
  if (!content) {
    return (
      <>
        <Head>
          <title>Jira Guide: Master Project Management with Atlassian's Power Tool | TechDevDex</title>
          <meta name="description" content="Comprehensive guide to Jira for project management, issue tracking, and team collaboration." />
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
        <meta name="keywords" content={content.tags.join(", ")} />
        <meta name="author" content={content.author} />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content={content.title} />
        <meta property="og:description" content={content.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://techdevdex.com/productivity/project-management/jira-guide`} />
        <meta property="og:image" content={content.featuredImage} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={content.title} />
        <meta name="twitter:description" content={content.description} />
        <meta name="twitter:image" content={content.featuredImage} />
        
        {/* Canonical */}
        <link rel="canonical" href={`https://techdevdex.com/productivity/project-management/jira-guide`} />
        
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              "headline": content.title,
              "description": content.description,
              "author": {
                "@type": "Organization",
                "name": content.author
              },
              "datePublished": content.date,
              "image": content.featuredImage
            })
          }}
        />
      </Head>
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
