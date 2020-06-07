module.exports = {
  types: {
    code: props =>
      '```' + props.node.language + '\n' + props.node.code + '\n```'
  },
  marks: {
    internalLink: ({mark, children}) => {
      const {slug = {}} = mark
      const href = `/users/${slug.current}`
      return `[${children}](${href})`
    }
  }
}