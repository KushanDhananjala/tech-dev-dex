import MDXContentComponent from "../../../components/MDXContent";
import { getMDXContent, MDXContent } from "../../../lib/mdx";
import { GetStaticProps } from "next";
import SEO from "../../../components/SEO";

interface CertificationsPageProps {
  content: MDXContent | null;
}

export default function CertificationsPage({ content }: CertificationsPageProps) {
  if (!content) {
    return (
      <>
        <SEO
          title="Developer Certifications: Boost Your Career"
          description="Comprehensive guide to developer certifications including cloud platforms, programming languages, and specialized skills. Find the best certifications for your career."
          keywords={[
            "developer certifications",
            "programming certifications",
            "cloud certifications",
            "aws certification",
            "azure certification",
            "google cloud certification",
            "career development",
            "tech certifications",
            "software engineering certifications",
            "professional development"
          ]}
          type="article"
          image="/images/productivity/learning-resources/certifications-og.jpg"
          url="/productivity/learning-resources/certifications"
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
        url={`/productivity/learning-resources/certifications`}
        publishedTime={content.date}
        section="Learning Resources"
        tags={content.tags || []}
      />
      <MDXContentComponent content={content} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const content = getMDXContent('certifications', 'productivity/learning-resources');
  
  return {
    props: {
      content,
    },
  };
};
