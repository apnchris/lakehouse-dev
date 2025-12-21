import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'aboutShort',
      title: 'About Short',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'aboutText',
      title: 'About',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'videoPoster',
      title: 'Poster Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'videoFile',
      title: 'Video',
      type: 'file',
      options: {
        accept: 'video/*',
      }
    }),
    defineField({
      name: 'videoCdn',
      title: 'Video (CDN)',
      type: 'url',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https']
      })
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Homepage'
    })
  }
})
