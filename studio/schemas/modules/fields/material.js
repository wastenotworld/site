export default {
  type: 'material',
  name: 'material',
  type: 'array',
  of: [
    {type: 'string'}
  ],
  options: {
    list: [
      { value: 'biodegredable', title: 'Biodegredable' },
      { value: 'compostable', title: 'Compostable' },
      { value: 'home-compostable', title: 'Home Compostable' },
      { value: 'renewed-material', title: 'Renewed Material' },
      { value: 'bio-based', title: 'Bio-Based' },
      { value: 'dissolvable', title: 'Dissolvable' },
      { value: 'recyclable', title: 'Recyclable' },
    ],
    layout: 'tags'
  }
}