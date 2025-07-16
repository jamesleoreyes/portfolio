import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.0.205', '10.15.1.106'],
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

export default nextConfig;