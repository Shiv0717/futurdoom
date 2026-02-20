/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: "/",
          destination: "/welcome", // or "/home"
          permanent: false,
        },
      ];
    },
  };
  
  module.exports = nextConfig;