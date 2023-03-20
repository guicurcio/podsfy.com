/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: false,
      },
    ];
  },
  reactStrictMode: false,
  staticPageGenerationTimeout: 1000,
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
