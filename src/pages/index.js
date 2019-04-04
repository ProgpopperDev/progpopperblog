import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PostListing from "../components/Posts/PostListing"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <h1>Posts</h1>

      {data.allContentfulBlog.edges.map(({ node }) => (
        <PostListing post={node} key={node.id} />
      ))}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allContentfulBlog {
      edges {
        node {
          title
          publishedDate(formatString: "DD - MMMM - YYYY")
          body {
            childMarkdownRemark {
              excerpt
            }
          }
          slug
          id
        }
      }
    }
  }
`
