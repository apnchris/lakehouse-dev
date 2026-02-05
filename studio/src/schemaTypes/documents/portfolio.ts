import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'featuredCompanies',
      title: 'Featured Companies',
      type: 'array',
      of: [{ 
        type: 'reference',
        to: [{ type: 'company' }]
      }]
    }),
    defineField({
      name: 'companies',
      title: 'Companies List',
      type: 'array',
      of: [{ 
        type: 'reference',
        to: [{ type: 'company' }]
      }]
    }),
    defineField({
      name: 'portfolioText',
      title: 'Text',
      type: 'text',
      rows: 4,
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Portfolio'
    })
  }
})
