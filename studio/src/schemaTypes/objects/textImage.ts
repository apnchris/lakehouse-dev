import {defineType} from 'sanity'
import {UserIcon} from '@sanity/icons'

export default defineType({
  name: 'textImage',
  title: 'Text + Image',
  type: 'object',
  icon: UserIcon,
  fields: [
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
        },
        {
          name: 'caption',
          title: 'Caption',
          type: 'string',
        }
      ],
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text',
      rows: 8,
    },
  ],
  preview: {
    select: {
      title: 'text',
      media: 'mainImage',
    },
  },
})
