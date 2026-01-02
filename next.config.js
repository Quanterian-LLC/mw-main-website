/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Required for Docker deployment
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
