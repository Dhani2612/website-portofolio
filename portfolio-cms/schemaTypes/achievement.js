export default {
  name: 'achievement',
  title: 'Achievement',
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
      name: 'org',
      title: 'Organization',
      type: 'string'
    },
    {
      name: 'org_en',
      title: 'Organization (EN)',
      type: 'string'
    },
    {
      name: 'period',
      title: 'Period',
      type: 'string'
    },
    {
      name: 'period_en',
      title: 'Period (EN)',
      type: 'string'
    },
    {
      name: 'desc',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'desc_en',
      title: 'Description (EN)',
      type: 'text'
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Used for sorting.',
      initialValue: 0
    }
  ]
}
