export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'title_en',
      title: 'Title (EN)',
      type: 'string'
    },
    {
      name: 'desc',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'desc_en',
      title: 'Description (EN)',
      type: 'text'
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'cards',
      title: 'Highlight Cards (Max 3)',
      type: 'array',
      validation: Rule => Rule.max(3),
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Card Title', type: 'string' },
            { name: 'title_en', title: 'Card Title (EN)', type: 'string' },
            { name: 'desc', title: 'Short Description', type: 'text' },
            { name: 'desc_en', title: 'Short Description (EN)', type: 'text' }
          ]
        }
      ]
    },
    {
      name: 'github',
      title: 'GitHub URL',
      type: 'url',
    },
    {
      name: 'demo',
      title: 'Demo URL',
      type: 'url',
    },
    {
      name: 'content',
      title: 'Detailed Content / Case Study',
      type: 'array',
      of: [
        {type: 'block'},
        {type: 'image', options: {hotspot: true}},
        {type: 'code', title: 'Code Snippet'}
      ]
    },
    {
      name: 'content_en',
      title: 'Detailed Content / Case Study (EN)',
      type: 'array',
      of: [
        {type: 'block'},
        {type: 'image', options: {hotspot: true}},
        {type: 'code', title: 'Code Snippet'}
      ]
    }
  ],
}