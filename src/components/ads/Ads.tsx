type Props = {
  placement: "header" | "sidebar" | "content";
};

export default function Ads({ placement }: Props) {
  const sizes = {
    header: "h-16",
    sidebar: "h-80", // Increased height for better space utilization
    content: "h-40",
  } as const;

  return (
    <div
      className={`w-full ${sizes[placement]} bg-gray-100 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-lg flex items-center justify-center text-gray-500 dark:text-slate-400 text-sm`}
      role="complementary"
      aria-label={`Ad placeholder: ${placement}`}
    >
      AdSense – {placement}
    </div>
  );
}


