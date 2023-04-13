/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  staticPageGenerationTimeout: 1000,
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
