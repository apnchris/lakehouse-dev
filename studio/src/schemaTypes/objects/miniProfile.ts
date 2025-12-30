import {defineType} from 'sanity'
import {UserIcon} from '@sanity/icons'

export default defineType({
  name: 'miniProfile',
  title: 'Mini profile',
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
      ],
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string'
    },
    {
      name: 'background',
      title: 'Background',
      type: 'text',
      rows: 2,
    },
    {
      name: 'member',
      title: 'Team Member',
      type: 'reference',
      to: [{type: 'member'}],
      description: 'Link to a team member profile',
    },
  ],
  preview: {
    select: {
      title: 'name',
      image: 'mainImage',
    }
  },
})
