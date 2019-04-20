import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAddressCard } from "@fortawesome/free-solid-svg-icons"

const IntroWrapper = styled.section``

const IconStyle = {
  color: "#fff",
  backgroundColor: "#d52349",
  padding: "8px 8px",
  fontSize: "4.5rem",
  margin: "0 0 4.5rem 0",
}

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <IntroWrapper className="container">
        {/* <div className="row">
          <div className="col-4 col-12-medium product-card">
            <section className="product-card-section">
              <FontAwesomeIcon
                icon={faAddressCard}
                className="product-icon"
                style={IconStyle}
              />
              <header className="product-card-header">
                <h2>Ipsum consequat</h2>
              </header>
              <p>
                Nisl amet dolor sit ipsum veroeros sed blandit consequat
                veroeros et magna tempus.
              </p>
            </section>
          </div>
          <div className="col-4 col-12-medium  product-card">
            <section className="product-card-section">
              <FontAwesomeIcon
                icon={faAddressCard}
                className="product-icon"
                style={IconStyle}
              />

              <header className="product-card-header">
                <h2>Magna etiam dolor</h2>
              </header>
              <p>
                Nisl amet dolor sit ipsum veroeros sed blandit consequat
                veroeros et magna tempus.
              </p>
            </section>
          </div>
          <div class="col-4 col-12-medium  product-card">
            <section className="product-card-section">
              <FontAwesomeIcon
                icon={faAddressCard}
                className="product-icon"
                style={IconStyle}
              />
              <header className="product-card-header">
                <h2>Tempus adipiscing</h2>
              </header>
              <p>
                Nisl amet dolor sit ipsum veroeros sed blandit consequat
                veroeros et magna tempus.
              </p>
            </section>
          </div>
        </div>
  */}
      </IntroWrapper>
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
