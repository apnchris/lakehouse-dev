import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'company',
  title: 'Company',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'thumbnailImage',
      title: 'Thumbnail image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social media',
      type: 'array',
      of: [{type: 'link'}],
    }),
    defineField({
      name: 'investmentStage',
      title: 'Investment Stage',
      type: 'string',
    }),
    defineField({
      name: 'investmentDate',
      title: 'Investment Date',
      type: 'date',
      options:  {
        dateFormat: 'MMMM YYYY'
      }
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'founders',
      title: 'Founders',
      type: 'array',
      of: [{
        name: 'founder',
        title: 'Founder',
        type: 'string',
      }],
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      options: {
        list: [
          {title: 'White', value: 'white'},
          {title: 'Blue', value: 'blue'},
          {title: 'Green', value: 'green'},
        ],
        layout: 'radio',
      },
      initialValue: 'white',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {type: 'textProfiles'},
        {type: 'relatedCompanies'},
        {type: 'textImage'},
        {type: 'fullscreenImage'},
        {type: 'videoPlayer'},
      ],
    })
  ],
  preview: {
    select: {
      title: 'name',
      media: 'thumbnailImage',
    }
  },
})
