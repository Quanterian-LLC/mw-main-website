/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Required for Docker deployment
  images: {
    // next/image rejects any quality not listed here (a hard error from Next 16 on).
    // 95 is used by components/ProductScreenshot.tsx: the product capture is a UI
    // screenshot whose fine text degrades badly at the default 75.
    qualities: [75, 95],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
