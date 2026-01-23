/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  // Railway will set PORT automatically, Next.js will use it
  // No need to explicitly set port in config
}

module.exports = nextConfig
