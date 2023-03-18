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
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
