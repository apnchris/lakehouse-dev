import {defineType} from 'sanity'
import {UserIcon} from '@sanity/icons'

export default defineType({
  name: 'fullscreenImage',
  title: 'Fullscreen image',
  type: 'object',
  icon: UserIcon,
  fields: [
    {
      name: 'mainImage',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
        }
      ],
    },
  ],
  preview: {
    select: {
      title: '',
      media: 'mainImage',
    },
    prepare({title, media}) {
      return {
        title: 'Fullscreen image',
        media: media
      }
    },
  },
})
