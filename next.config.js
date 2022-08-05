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
  env: {
    GOOGLE_OAUTH_ID:
      "390429814047-ghpuij7loencv92s4qbtrkk4nddlkaoo.apps.googleusercontent.com",
  },
};

module.exports = nextConfig;
