/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {},
  env: {
    SERVER: process.env.SERVER,
  },
}

module.exports = nextConfig
