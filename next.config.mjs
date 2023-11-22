/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  staticPageGenerationTimeout: 1000,
  experimental: {
    appDir: true,
    serverActions: true,
  },
};

export default nextConfig;
