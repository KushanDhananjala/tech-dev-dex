// AdSense Configuration
export const ADSENSE_CONFIG = {
  // Your actual AdSense client ID
  CLIENT_ID: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-6102526466949399',
  
  // Development mode - set to false in production
  IS_DEVELOPMENT: process.env.NODE_ENV === 'development',
  
  // Ad unit configurations
  AD_UNITS: {
    HEADER: {
      slot: process.env.NEXT_PUBLIC_ADSENSE_HEADER_SLOT || '1234567890',
      format: 'auto',
      responsive: true,
      style: { display: 'block' }
    },
    SIDEBAR: {
      slot: process.env.NEXT_PUBLIC_ADSENSE_SIDEBAR_SLOT || '1234567891',
      format: 'auto',
      responsive: true,
      style: { display: 'block' }
    },
    CONTENT: {
      slot: process.env.NEXT_PUBLIC_ADSENSE_CONTENT_SLOT || '1234567892',
      format: 'auto',
      responsive: true,
      style: { display: 'block' }
    }
  }
};

// AdSense hook for managing ads
export const useAdSense = () => {
  const initializeAd = () => {
    if (typeof window !== 'undefined' && (window as unknown as { adsbygoogle?: unknown[] }).adsbygoogle) {
      try {
        const adsbygoogle = (window as unknown as { adsbygoogle?: unknown[] }).adsbygoogle;
        if (adsbygoogle) {
          adsbygoogle.push({});
        }
      } catch (error) {
        console.warn('AdSense initialization failed:', error);
      }
    }
  };

  return { initializeAd };
};

// AdSense component props
export interface AdSenseProps {
  adSlot: string;
  adFormat?: string;
  adStyle?: React.CSSProperties;
  className?: string;
  placement: 'header' | 'sidebar' | 'content';
}
