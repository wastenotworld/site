import Tabs from 'sanity-plugin-tabs'

export default {
  name: "manufacturerContent",
  type: "object",
  title: "Manufacturer Content",
  inputComponent: Tabs,
  fieldsets: [
    { name: "main", title: "Main" },
    { name: "projects", title: "Projects" },
    { name: "defaultMeta", title: "Meta" }
  ],
  options: {
    layout: "object"
  },
  fields: [
    {
      type: "manufacturerModule",
      name: "main",
      title: "Manufacturer",
      fieldset: "main"
    },
    // {
    //   name: 'projects',
    //   type: 'linkedProjects',
    //   title: 'Projects',
    //   fieldset: 'projects'
    // },
    {
      type: "metaCard",
      name: "meta",
      title: "Meta",
      fieldset: "defaultMeta"
    }
  ]
}
