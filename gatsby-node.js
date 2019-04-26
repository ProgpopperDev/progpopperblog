// ** Source Maps ***

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    devtool: "eval-source-map",
  })
}

const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`./src/templates/blogTemplate.js`)
  const articleTemplate = path.resolve(`./src/templates/articleTemplate.js`)
  return graphql(`
    {
      allContentfulBlog {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulArticle {
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

    result.data.allContentfulBlog.edges.map(({ node }) => {
      createPage({
        path: node.slug,
        component: blogPostTemplate,
        context: {
          slug: node.slug,
        },
      })
    })

    result.data.allContentfulArticle.edges.map(({ node }) => {
      createPage({
        path: node.slug,
        component: articleTemplate,
        context: {
          slug: node.slug,
        },
      })
    })
  })
}
