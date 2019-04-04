import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { contentfulBlog } = data // data.markdownRemark holds our post data

  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <br />
        <h1>{contentfulBlog.title}</h1>
        <br />
        <Link to="/">Home</Link>
        <br />
        <br />
        <article>
          {" "}
          <h2>{contentfulBlog.publishedDate}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{
              __html: contentfulBlog.body.childMarkdownRemark.html,
            }}
          />
          <Img
            sizes={contentfulBlog.supportImage.sizes}
            style={{ maxWidth: "550px" }}
          />
        </article>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "DD - MMMM - YYYY")
      body {
        childMarkdownRemark {
          html
          excerpt
        }
      }
      supportImage {
        id
        sizes(maxWidth: 250) {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      slug
      id
    }
  }
`
