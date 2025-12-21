import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    defineField({
      name: 'members',
      title: 'Members',
      type: 'array',
      of: [{ 
        type: 'reference',
        to: [{ type: 'member' }]
      }]
    }),
    defineField({
      name: 'teamText',
      title: 'Text',
      type: 'text',
      rows: 4,
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Team'
    })
  }
})
