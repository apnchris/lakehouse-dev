import {defineType} from 'sanity'
import {UserIcon} from '@sanity/icons'

export default defineType({
  name: 'videoPlayer',
  title: 'Video player',
  type: 'object',
  icon: UserIcon,
  fields: [
    {
      name: 'videoPoster',
      title: 'Poster Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'videoFile',
      title: 'Video',
      type: 'file',
      options: {
        accept: 'video/*',
      }
    },
    {
      name: 'videoCdn',
      title: 'Video (CDN)',
      type: 'url',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https']
      })
    },
  ],
  preview: {
    select: {
      title: '',
      media: 'videoPoster',
    },
    prepare({title, media}) {
      return {
        title: 'Video player',
        media: media
      }
    },
  },
})
