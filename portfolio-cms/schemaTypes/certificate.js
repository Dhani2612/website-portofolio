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
      name: 'title_en',
      title: 'Title (EN)',
      type: 'string'
    },
    {
      name: 'org',
      title: 'Organization / Issuer',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'org_en',
      title: 'Organization (EN)',
      type: 'string'
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
