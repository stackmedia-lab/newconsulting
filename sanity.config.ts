import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title: 'Edify Group CMS',
  schema: { types: schemaTypes },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem().title('Blog Posts').id('post').child(S.documentTypeList('post').title('Blog Posts')),
            S.listItem().title('Authors').id('author').child(S.documentTypeList('author').title('Authors')),
            S.listItem().title('Destinations').id('destination').child(S.documentTypeList('destination').title('Destinations')),
            S.listItem().title('Courses').id('course').child(S.documentTypeList('course').title('Courses')),
            S.listItem().title('Team Members').id('teamMember').child(S.documentTypeList('teamMember').title('Team Members')),
            S.listItem().title('Testimonials').id('testimonial').child(S.documentTypeList('testimonial').title('Testimonials')),
            S.listItem().title('Partners').id('partner').child(S.documentTypeList('partner').title('Partners')),
            S.listItem().title('News & Events').id('newsEvent').child(S.documentTypeList('newsEvent').title('News & Events')),
          ]),
    }),
    visionTool(),
  ],
})
