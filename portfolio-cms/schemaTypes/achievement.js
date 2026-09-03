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
      name: 'org',
      title: 'Organization',
      type: 'string'
    },
    {
      name: 'period',
      title: 'Period',
      type: 'string'
    },
    {
      name: 'desc',
      title: 'Description',
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
