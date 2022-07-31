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
    NEXT_PUBLIC_SUPABASE_ANON_KEY:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZiZHN6anRlY2p3bHZ3dGNza3pvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTkxOTk3OTQsImV4cCI6MTk3NDc3NTc5NH0.cVvSjVZY8kS9WAlljZ5qmFz8AL-Phj6A1BiLGe-HkCU",
    GOOGLE_OAUTH_ID:
      "390429814047-ghpuij7loencv92s4qbtrkk4nddlkaoo.apps.googleusercontent.com",
    NEXT_PUBLIC_SUPABASE_URL: "https://vbdszjtecjwlvwtcskzo.supabase.co",
  },
};

module.exports = nextConfig;
