import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  // Only include token on server side for write operations
  ...(typeof window === 'undefined' && process.env.SANITY_API_TOKEN
    ? { token: process.env.SANITY_API_TOKEN }
    : {}),
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

export async function getPosts() {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id, title, slug, excerpt, publishedAt, category,
      "author": author->{ name, avatar },
      mainImage
    }
  `)
}

export async function getPostBySlug(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id, title, slug, excerpt, publishedAt, category, body,
      "author": author->{ name, avatar },
      mainImage
    }`,
    { slug }
  )
}

export async function getDestinations() {
  return client.fetch(`
    *[_type == "destination"] | order(order asc) {
      _id, name, slug, flag, tagline, description, heroColor,
      ieltsReq, tuitionRange, postStudyWork, intakes,
      topUniversities, image
    }
  `)
}

export async function getCourses() {
  return client.fetch(`
    *[_type == "course"] | order(order asc) {
      _id, title, slug, tag, description, duration, format, icon
    }
  `)
}

export async function getTeamMembers() {
  return client.fetch(`
    *[_type == "teamMember"] | order(order asc) {
      _id, name, role, department, bio, emoji, gradientFrom, gradientTo
    }
  `)
}

export async function getTestimonials() {
  return client.fetch(`
    *[_type == "testimonial"] {
      _id, quote, name, destination, score
    }
  `)
}

export async function getPartners() {
  return client.fetch(`
    *[_type == "partner"] | order(country asc, order asc) {
      _id, name, country, countryFlag, description, bgColor, emoji
    }
  `)
}

export async function getNewsEvents() {
  return client.fetch(`
    *[_type == "newsEvent"] | order(date desc) {
      _id, title, excerpt, date, category, emoji, bgGradient
    }
  `)
}

