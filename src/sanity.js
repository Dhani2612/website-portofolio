import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'b1shmtql',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
})

// Konfigurasi Image Builder
const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}
