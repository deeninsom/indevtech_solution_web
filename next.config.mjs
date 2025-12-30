/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  // 👉 optional tapi sangat disarankan
  output: "standalone",
}

export default nextConfig
