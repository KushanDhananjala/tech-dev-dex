import MDXContentComponent from "../../../components/MDXContent";
import { getMDXContent, MDXContent } from "../../../lib/mdx";
import { GetStaticProps } from "next";
import SEO from "../../../components/SEO";

interface DeskAccessoriesGuidePageProps {
  content: MDXContent | null;
}

export default function DeskAccessoriesGuidePage({ content }: DeskAccessoriesGuidePageProps) {
  if (!content) {
    return (
      <>
        <SEO
          title="Essential Desk Accessories for Developers"
          description="Complete guide to essential desk accessories for developers including monitor arms, desk pads, cable management, and ergonomic accessories."
          keywords={[
            "desk accessories",
            "developer desk setup",
            "monitor arms",
            "desk pads",
            "cable management",
            "ergonomic accessories",
            "workstation setup",
            "developer productivity",
            "office accessories",
            "coding setup"
          ]}
          type="article"
          image="/images/hardware/peripherals/desk-accessories-og.jpg"
          url="/hardware/peripherals/desk-accessories-guide"
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
        url={`/hardware/peripherals/desk-accessories-guide`}
        publishedTime={content.date}
        section="Peripherals"
        tags={content.tags || []}
      />
      <MDXContentComponent content={content} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const content = getMDXContent('desk-accessories-guide', 'hardware/peripherals');
  
  return {
    props: {
      content,
    },
  };
};
