export default {
  name: 'experience',
  title: 'Experience & Organization',
  type: 'document',
  fields: [
    {
      name: 'role',
      title: 'Role / Position',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'company',
      title: 'Company / Organization',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'period',
      title: 'Period (e.g. "Agustus 2026 - November 2026")',
      type: 'string',
    },
    {
      name: 'desc',
      title: 'Description (Bullet points)',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'type',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Professional & Internship', value: 'professional' },
          { title: 'Organization & Others', value: 'organization' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Used for sorting. Higher number means it appears first/higher.',
      initialValue: 0
    }
  ]
}
