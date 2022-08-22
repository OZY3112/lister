/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: [
      "assets.example.com",
      "lh3.googleusercontent.com",
      "encrypted-tbn0.gstatic.com",
    ],
  },
  env: {},
};

module.exports = nextConfig;
