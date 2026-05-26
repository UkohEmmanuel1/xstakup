/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add this to skip strict linter breaks on production build compiles
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;