export default {
  title: 'Manufacturer Content',
  name: 'manufacturerModule',
  type: 'object',
  // hidden: true,
  fields: [
    {
      name: 'name',
      title: 'Manufacturer Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'content.main.name',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'url',
      type: 'url',
      title: 'Site URL'
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [ {type: 'block' }]
    },
    {
      name: 'listings',
      title: 'Listings',
      type: 'array',
      of: [ {type: 'reference', to: [{ type: 'listing' }] }]
    }
  ]
}
