import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Image from "../components/image"
import ArticleListing from "../components/Posts/ArticleListing"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faTwitter,
  faGooglePlus,
  faMedium,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import {
  MainWrapper,
  DivWrapper,
  Maindiv,
  InnerDiv,
  HomeSection,
  Footer,
  FooterContainer,
  FooterInner,
} from "../components/views/PageTemplate"

const AboutPara = styled.p`
  color: #fff;
  font-size: 1em;
  font-weight: 200;
`

const Articles = ({ data }) => {
  return (
    <MainWrapper>
      <DivWrapper>
        <Maindiv>
          <InnerDiv>
            <HomeSection>
              <div id="columns03" className="container">
                <div class="inner">
                  <div id="image03" className="image3">
                    {/*  <img
                      src="assets/images/image03.png?v48708555111551"
                      alt=""
                    />
                    */}
                  </div>
                  <p id="text03">Articles</p>
                  <hr id="divider04" />
                  <p id="text09">These are for you .. </p>
                </div>
              </div>
              <hr id="divider05" />

              {data.allContentfulArticle.edges.map(({ node, index }) => (
                <ArticleListing post={node} key={node.id} index={index} />
              ))}
            </HomeSection>
            <Footer>
              <FooterContainer>
                <FooterInner>
                  <ul>
                    <li>
                      <Link to="/">
                        {" "}
                        <FontAwesomeIcon
                          icon={faHome}
                          style={{ color: "#fff" }}
                        />{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <FontAwesomeIcon
                          icon={faFacebookF}
                          style={{ color: "#fff" }}
                        />{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <FontAwesomeIcon
                          icon={faInstagram}
                          style={{ color: "#fff" }}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <FontAwesomeIcon
                          icon={faTwitter}
                          style={{ color: "#fff" }}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <FontAwesomeIcon
                          icon={faGooglePlus}
                          style={{ color: "#fff" }}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <FontAwesomeIcon
                          icon={faMedium}
                          style={{ color: "#fff" }}
                        />
                      </Link>
                    </li>
                  </ul>
                </FooterInner>
              </FooterContainer>
            </Footer>
          </InnerDiv>
        </Maindiv>
      </DivWrapper>
    </MainWrapper>
  )
}
export default Articles

export const query = graphql`
  query {
    allContentfulArticle {
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
