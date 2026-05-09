import { defineType, defineField } from 'sanity'

// ── POST SCHEMA ──────────────────────────────────────────────────
const post = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (R) => R.required() }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3 }),
    defineField({ name: 'category', title: 'Category', type: 'string', options: { list: ['Education', 'English Test', 'Student Life', 'GED', 'SAT', 'Visa', 'Scholarships'] } }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'datetime' }),
    defineField({ name: 'mainImage', title: 'Main Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'author', title: 'Author', type: 'reference', to: [{ type: 'author' }] }),
    defineField({ name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }, { type: 'image' }] }),
  ],
  preview: { select: { title: 'title', media: 'mainImage' } },
})

// ── AUTHOR SCHEMA ─────────────────────────────────────────────────
const author = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'avatar', title: 'Avatar', type: 'image' }),
    defineField({ name: 'bio', title: 'Bio', type: 'text' }),
  ],
})

// ── DESTINATION SCHEMA ────────────────────────────────────────────
const destination = defineType({
  name: 'destination',
  title: 'Destination',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Country Name', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } }),
    defineField({ name: 'flag', title: 'Flag Emoji', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'heroColor', title: 'Hero Gradient (CSS)', type: 'string' }),
    defineField({ name: 'ieltsReq', title: 'IELTS Requirement', type: 'string' }),
    defineField({ name: 'tuitionRange', title: 'Tuition Range', type: 'string' }),
    defineField({ name: 'postStudyWork', title: 'Post Study Work', type: 'string' }),
    defineField({ name: 'intakes', title: 'Intakes', type: 'string' }),
    defineField({ name: 'topUniversities', title: 'Top Universities', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
  ],
})

// ── COURSE SCHEMA ─────────────────────────────────────────────────
const course = defineType({
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'tag', title: 'Tag/Category', type: 'string' }),
    defineField({ name: 'icon', title: 'Icon Emoji', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'duration', title: 'Duration', type: 'string' }),
    defineField({ name: 'format', title: 'Format (e.g. In-Person + Online)', type: 'string' }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
})

// ── TEAM MEMBER SCHEMA ────────────────────────────────────────────
const teamMember = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Full Name', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'role', title: 'Role/Title', type: 'string' }),
    defineField({ name: 'department', title: 'Department', type: 'string', options: { list: ['Leadership', 'Counsellors', 'Trainers', 'Operations'] } }),
    defineField({ name: 'bio', title: 'Short Bio', type: 'text', rows: 2 }),
    defineField({ name: 'emoji', title: 'Avatar Emoji', type: 'string' }),
    defineField({ name: 'gradientFrom', title: 'Gradient From (hex)', type: 'string' }),
    defineField({ name: 'gradientTo', title: 'Gradient To (hex)', type: 'string' }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
    defineField({ name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } }),
  ],
})

// ── TESTIMONIAL SCHEMA ────────────────────────────────────────────
const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Student Name', type: 'string' }),
    defineField({ name: 'quote', title: 'Quote', type: 'text' }),
    defineField({ name: 'destination', title: 'Destination (e.g. London, UK)', type: 'string' }),
    defineField({ name: 'score', title: 'Score or Achievement', type: 'string' }),
    defineField({ name: 'avatar', title: 'Avatar', type: 'image' }),
  ],
})

// ── PARTNER SCHEMA ────────────────────────────────────────────────
const partner = defineType({
  name: 'partner',
  title: 'Partner',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'University/Institution Name', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'country', title: 'Country', type: 'string' }),
    defineField({ name: 'countryFlag', title: 'Country Flag Emoji', type: 'string' }),
    defineField({ name: 'description', title: 'Short Description', type: 'text', rows: 2 }),
    defineField({ name: 'bgColor', title: 'Logo Background Color (hex)', type: 'string' }),
    defineField({ name: 'emoji', title: 'Logo Emoji', type: 'string' }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
    defineField({ name: 'logo', title: 'Logo', type: 'image' }),
  ],
})

// ── NEWS/EVENT SCHEMA ─────────────────────────────────────────────
const newsEvent = defineType({
  name: 'newsEvent',
  title: 'News & Event',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text', rows: 2 }),
    defineField({ name: 'date', title: 'Date', type: 'datetime' }),
    defineField({ name: 'category', title: 'Category', type: 'string', options: { list: ['Announcement', 'Achievement', 'Partnership', 'Event', 'Departures', 'Technology'] } }),
    defineField({ name: 'emoji', title: 'Emoji', type: 'string' }),
    defineField({ name: 'bgGradient', title: 'Background Gradient CSS', type: 'string' }),
    defineField({ name: 'isEvent', title: 'Is Upcoming Event?', type: 'boolean' }),
    defineField({ name: 'eventLocation', title: 'Event Location', type: 'string' }),
  ],
})

export const schemaTypes = [post, author, destination, course, teamMember, testimonial, partner, newsEvent]
