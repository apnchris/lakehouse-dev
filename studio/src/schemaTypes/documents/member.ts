import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'member',
  title: 'Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
    }),
    defineField({
      name: 'background',
      title: 'Background',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'focus',
      title: 'Focus',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'investmentCompanies',
      title: 'Investment Companies',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'company'}]}],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'mainImage',
    }
  },
})
