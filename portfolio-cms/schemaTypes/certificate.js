export default {
  name: 'certificate',
  title: 'Certificate',
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
      title: 'Organization / Issuer',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'img',
      title: 'Certificate Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required()
    },
    {
      name: 'link',
      title: 'Credential URL',
      type: 'url'
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
