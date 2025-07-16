import type { NextConfig } from "next";
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.0.205'],
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [384, 640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: false,
    unoptimized: false,
  },
  experimental: {
    optimizePackageImports: ['@/components', '@/configs'],
    esmExternals: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  transpilePackages: [],
};

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env['ANALYZE'] === 'true',
});

export default withAnalyzer(nextConfig);