import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'b1shmtql',
  dataset: 'production',
  useCdn: false, // temporarily disabled for instant updates
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
})

// Konfigurasi Image Builder
const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}
