import {defineType} from 'sanity'
import {UserIcon} from '@sanity/icons'

export default defineType({
  name: 'textProfiles',
  title: 'Text + Profiles',
  type: 'object',
  icon: UserIcon,
  fields: [
    {
      name: 'profiles',
      title: 'Profiles',
      type: 'array',
      of: [{type: 'miniProfile'}],
      validation: (rule) => rule.max(3),
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
      title: 'text'
    },
    prepare({title}) {
      return {
        title: 'Text + Profiles'
      }
    },
  },
})
