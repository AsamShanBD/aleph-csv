const path = require("path")

async function createPagesFromCSV(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMockDataCsv {
        edges {
          node {
            id
            title
            subtitle
            content
            slug
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors
  result.data.allMockDataCsv.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.title.toLowerCase()}`,
      component: path.resolve(`./src/templates/page.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        id: node.id,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createPagesFromCSV(graphql, actions, reporter)
}
