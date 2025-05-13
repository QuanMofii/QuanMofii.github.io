import { type MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://jellymofii.github.io/',
      lastModified: new Date().toISOString(),
    },
    {
      url: 'https://jellymofii.github.io/en',
      lastModified: new Date().toISOString(),
    },
    {
      url: 'https://jellymofii.github.io/vi',
      lastModified: new Date().toISOString(),
    },
    // Thêm các route khác nếu cần
  ]
}
