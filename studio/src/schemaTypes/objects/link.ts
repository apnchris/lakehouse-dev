import {defineType} from 'sanity'
import {LinkIcon} from '@sanity/icons'

export default defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  icon: LinkIcon,
  fields: [
    {
      name: 'text',
      title: 'Link Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.required().uri({
        scheme: ['http', 'https', 'mailto', 'tel'],
      }),
    },
    {
      name: 'target',
      title: 'Target',
      type: 'string',
      description: 'How the link should open',
      options: {
        list: [
          {title: 'Same tab (Internal)', value: '_self'},
          {title: 'New tab (External)', value: '_blank'},
        ],
        layout: 'radio',
      },
      initialValue: '_self',
    },
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'url',
      target: 'target',
    },
    prepare({title, subtitle, target}) {
      return {
        title: title || 'Untitled link',
        subtitle: `${subtitle || 'No URL'} (${target === '_blank' ? 'External' : 'Internal'})`,
      }
    },
  },
})
