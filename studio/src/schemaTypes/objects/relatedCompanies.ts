import {defineType} from 'sanity'
import {UserIcon} from '@sanity/icons'

export default defineType({
  name: 'relatedCompanies',
  title: 'Related companies',
  type: 'object',
  icon: UserIcon,
  fields: [
    {
      name: 'relatedCompanies',
      title: 'Related Companies',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'company'}]}],
      validation: (rule) => rule.max(6),
    },
  ],
  preview: {
    select: {
      title: 'Related Companies',
    },
    prepare({title}) {
      return {
        title: 'Related Companies'
      }
    },
  },
})
