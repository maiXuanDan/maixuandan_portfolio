/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NETLIFY === 'true' ? undefined : 'standalone',
}

export default nextConfig
