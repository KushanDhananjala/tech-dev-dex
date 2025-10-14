import { useEffect, useRef } from 'react';
import { ADSENSE_CONFIG, useAdSense, AdSenseProps } from '../../lib/adsense';

type Props = {
  placement: "header" | "sidebar" | "content";
};

export default function Ads({ placement }: Props) {
  const adRef = useRef<HTMLDivElement>(null);
  const { initializeAd } = useAdSense();
  
  const sizes = {
    header: "h-16",
    sidebar: "h-80", // Increased height for better space utilization
    content: "h-40",
  } as const;

  const adConfig = ADSENSE_CONFIG.AD_UNITS[placement.toUpperCase() as keyof typeof ADSENSE_CONFIG.AD_UNITS];

  useEffect(() => {
    // Initialize AdSense after component mounts
    const timer = setTimeout(() => {
      if (adRef.current && !ADSENSE_CONFIG.IS_DEVELOPMENT) {
        initializeAd(adConfig.slot, adConfig.format);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [initializeAd, adConfig.slot, adConfig.format]);

  // Development mode - show placeholder
  if (ADSENSE_CONFIG.IS_DEVELOPMENT) {
    return (
      <div
        className={`w-full ${sizes[placement]} bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 border-2 border-dashed border-blue-300 dark:border-slate-500 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 text-sm font-medium`}
        role="complementary"
        aria-label={`Ad placeholder: ${placement}`}
      >
        <div className="text-center">
          <div className="text-lg mb-1">📢</div>
          <div>AdSense - {placement}</div>
          <div className="text-xs opacity-75">Development Mode</div>
        </div>
      </div>
    );
  }

  // Production mode - show real AdSense
  return (
    <div
      ref={adRef}
      className={`w-full ${sizes[placement]} flex items-center justify-center`}
      role="complementary"
      aria-label={`Advertisement: ${placement}`}
    >
      <ins
        className="adsbygoogle"
        style={adConfig.style}
        data-ad-client={ADSENSE_CONFIG.CLIENT_ID}
        data-ad-slot={adConfig.slot}
        data-ad-format={adConfig.format}
        data-full-width-responsive={adConfig.responsive ? "true" : "false"}
      />
    </div>
  );
}


