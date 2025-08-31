import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: process.env['ALLOWED_DEV_ORIGINS']
    ? process.env['ALLOWED_DEV_ORIGINS'].split(",")
    : [],
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [384, 640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 86400,
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
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
    incomingRequests: {
      ignore: [/^\/api\/health$/],
    },
  },
  transpilePackages: [],
  poweredByHeader: false,
};

export default nextConfig;