import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  // redirects: async (url) => {
  //   return [
  //     {
  //       source: "/about",
  //       destination: "/",
  //       permanent: true,
  //     },
  //   ];
  // },
};

export default withContentlayer(nextConfig);
