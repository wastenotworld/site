export default {
  title: 'Category Content',
  name: 'categoryModule',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
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
      name: 'parent',
      title: 'Parent Category',
      type: 'string',
      options: {
        list: [
          { value: 'packaging', title: 'Packaging' },
          { value: 'fashion', title: 'Fashion and soft goods' },
          { value: 'interior', title: 'Interior' }
        ],
        layout: 'dropdown'
      }
    }
  ]
}
