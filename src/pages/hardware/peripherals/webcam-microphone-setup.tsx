import MDXContentComponent from "../../../components/MDXContent";
import { getMDXContent, MDXContent } from "../../../lib/mdx";
import { GetStaticProps } from "next";
import SEO from "../../../components/SEO";

interface WebcamMicrophoneSetupPageProps {
  content: MDXContent | null;
}

export default function WebcamMicrophoneSetupPage({ content }: WebcamMicrophoneSetupPageProps) {
  if (!content) {
    return (
      <>
        <SEO
          title="Webcam & Microphone Setup for Remote Work"
          description="Complete guide to choosing and setting up webcams and microphones for remote work, video calls, and content creation."
          keywords={[
            "webcam setup",
            "microphone setup",
            "remote work accessories",
            "video call setup",
            "content creation gear",
            "audio setup",
            "camera setup",
            "developer peripherals",
            "work from home setup",
            "streaming setup"
          ]}
          type="article"
          image="/images/hardware/peripherals/webcam-microphone-setup-og.jpg"
          url="/hardware/peripherals/webcam-microphone-setup"
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
        url={`/hardware/peripherals/webcam-microphone-setup`}
        publishedTime={content.date}
        section="Peripherals"
        tags={content.tags || []}
      />
      <MDXContentComponent content={content} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const content = getMDXContent('webcam-microphone-setup', 'hardware/peripherals');
  
  return {
    props: {
      content,
    },
  };
};
