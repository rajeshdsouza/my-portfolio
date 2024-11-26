/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.medium.com', 'miro.medium.com'],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
}

module.exports = nextConfig
