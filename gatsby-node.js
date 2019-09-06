// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const projektTemplate = require.resolve('./src/templates/projekt.tsx')

  const result = await wrapper(
    graphql(`
      {
        projekts: allprojektsYaml {
          nodes {
            slug
            images
          }
        }
      }
    `)
  )

  result.data.projekts.nodes.forEach(node => {
    createPage({
      path: node.slug,
      component: projektTemplate,
      context: {
        slug: node.slug,
        images: `/${node.images}/`,
      },
    })
  })
}
