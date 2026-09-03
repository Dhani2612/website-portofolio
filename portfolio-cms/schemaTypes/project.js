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
      name: 'desc',
      title: 'Short Description',
      type: 'text',
      validation: Rule => Rule.required()
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
      name: 'img',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true // Enables image cropping
      }
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
      name: 'longDesc',
      title: 'Long Description',
      type: 'text',
    },
    {
      name: 'collages',
      title: 'Collage Images',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true
      }
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ],
}
