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
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://indevtechsolutions.com//:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
