/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  staticPageGenerationTimeout: 1000,
  experimental: {
    appDir: true,
    serverActions: true,
  },
};

export default nextConfig;
