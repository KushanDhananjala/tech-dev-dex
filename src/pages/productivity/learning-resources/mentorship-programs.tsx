import MDXContentComponent from "../../../components/MDXContent";
import { getMDXContent, MDXContent } from "../../../lib/mdx";
import { GetStaticProps } from "next";
import SEO from "../../../components/SEO";

interface MentorshipPageProps {
  content: MDXContent | null;
}

export default function MentorshipPage({ content }: MentorshipPageProps) {
  if (!content) {
    return (
      <>
        <SEO
          title="Developer Mentorship: Accelerate Your Growth"
          description="Complete guide to developer mentorship including finding mentors, becoming a mentor, and building effective mentoring relationships."
          keywords={[
            "developer mentorship",
            "find a mentor",
            "become a mentor",
            "mentoring relationships",
            "career growth",
            "software engineering mentorship",
            "technical mentorship",
            "professional development",
            "developer career",
            "mentorship programs"
          ]}
          type="article"
          image="/images/productivity/learning-resources/mentorship-og.jpg"
          url="/productivity/learning-resources/mentorship"
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
        url={`/productivity/learning-resources/mentorship`}
        publishedTime={content.date}
        section="Learning Resources"
        tags={content.tags || []}
      />
      <MDXContentComponent content={content} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const content = getMDXContent('mentorship', 'productivity/learning-resources');
  
  return {
    props: {
      content,
    },
  };
};
