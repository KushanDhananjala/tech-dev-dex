import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable turbopack for faster builds
  turbopack: {
    root: __dirname,
  },
  
  // File extensions to handle
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  
  // Production optimizations
  compress: true,
  poweredByHeader: false,
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  
  // Performance optimizations
  experimental: {
    optimizeCss: true,
  },
  
  // Output configuration for static export (if needed)
  output: 'standalone',
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
