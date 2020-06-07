import Tabs from 'sanity-plugin-tabs'

export default {
  name: "listingContent",
  type: "object",
  title: "Listing Content",
  inputComponent: Tabs,
  fieldsets: [
    { name: "main", title: "Main" },
    { name: "defaultMeta", title: "Meta" }
  ],
  options: {
    layout: "object"
  },
  fields: [
    {
      type: "listingModule",
      name: "main",
      title: "Listing",
      fieldset: "main"
    },
    {
      type: "metaCard",
      name: "meta",
      title: "Meta",
      fieldset: "defaultMeta"
    }
  ]
}
