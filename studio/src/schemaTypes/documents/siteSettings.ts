import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'getInTouchEmail',
      title: 'Get in touch',
      type: 'string',
      description: 'Email address',
      validation: (Rule) =>
        Rule.custom((email) => {
          if (!email) return true
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          return emailRegex.test(email) ? true : 'Please enter a valid email address'
        }),
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      description: 'Site favicon (e.g. 32×32 or 48×48 px)',
      options: {
        hotspot: false,
      },
    }),
    defineField({
      name: 'sharePreviewImage',
      title: 'Share preview image',
      type: 'image',
      description: 'Image used when the site is shared on social media (recommended: 1200×630px)',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Site Settings',
    }),
  },
})
