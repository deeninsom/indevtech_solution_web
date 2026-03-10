import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://indevtechsolutions.com'
  const lastModified = new Date()
  return [
    {
      url: baseUrl,
      lastModified,
      priority: 1,
    },
    {
      url: `${baseUrl}/portofolio`,
      lastModified,
      priority: 0.8,
    }
  ]
}