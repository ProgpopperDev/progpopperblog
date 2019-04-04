// ** Source Maps ***

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    devtool: "eval-source-map",
  })
}

const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)

  return graphql(`
    {
      allContentfulBlog {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allContentfulBlog.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: blogPostTemplate,
        context: {
          slug: node.slug,
        },
      })
    })
  })
}
