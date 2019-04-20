import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import backx from "../images/backx.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faTwitter,
  faGooglePlus,
  faMedium,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { faHome } from "@fortawesome/free-solid-svg-icons"

const MainWrapper = styled.div`
  min-width: 320px;
  min-height: 100vh;
  line-height: 1;
  word-wrap: break-word;
  overflow-x: hidden;
  &:before {
    content: "";
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 0;
    -moz-pointer-events: none;
    -webkit-pointer-events: none;
    -ms-pointer-events: none;
    pointer-events: none;
    -moz-transform: scale(1);
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    background-image: linear-gradient(
        45deg,
        rgba(191, 117, 135, 0.639) 0%,
        rgba(214, 255, 255, 0.631) 100%
      ),
      url(${backx});
    background-position: 0% 0%, center;
    background-repeat: repeat, no-repeat;
    background-size: cover, cover;
    background-attachment: scroll;
    background-color: #ffffff;
  }
`

const DivWrapper = styled.div`
  -webkit-overflow-scrolling: touch;
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-flex-direction: column;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -moz-align-items: center;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
  -moz-justify-content: center;
  -webkit-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  z-index: 2;
  overflow: hidden;
  padding: 3.5rem 3.5rem 3.5rem 3.5rem;
  @media (max-width: 736px) {
    padding: 0.75rem 0.75rem 0.75rem 0.75rem;
  }
`

const Maindiv = styled.div`
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  position: relative;
  max-width: 100%;
  z-index: 1;
  -moz-align-items: center;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
  -moz-justify-content: center;
  -webkit-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  -moz-flex-grow: 0;
  -webkit-flex-grow: 0;
  -ms-flex-grow: 0;
  flex-grow: 0;
  -moz-flex-shrink: 0;
  -webkit-flex-shrink: 0;
  -ms-flex-shrink: 0;
  flex-shrink: 0;
  text-align: left;
  background-color: rgba(44, 42, 54, 0.8);
  box-shadow: 0rem 3rem 3.125rem 0rem rgba(44, 42, 54, 0.451);
  border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
  -moz-transition: opacity 1.25s ease 0s, -moz-transform 1.25s ease 0s;
  -webkit-transition: opacity 1.25s ease 0s, -webkit-transform 1.25s ease 0s;
  -ms-transition: opacity 1.25s ease 0s, -ms-transform 1.25s ease 0s;
  transition: opacity 1.25s ease 0s, transform 1.25s ease 0s;
`

const InnerDiv = styled.div`
  position: relative;
  z-index: 1;
  border-radius: inherit;
  padding: 3.75rem 3rem;
  max-width: 100%;
  width: 38rem;
  font-family: Poppins;
`

const HomeSection = styled.section`
  -moz-transition: opacity 0.5s ease-in-out 0.25s, min-height 0.25s ease-in-out,
    max-height 0.25s ease-in-out;
  -webkit-transition: opacity 0.5s ease-in-out 0.25s,
    min-height 0.25s ease-in-out, max-height 0.25s ease-in-out;
  -ms-transition: opacity 0.5s ease-in-out 0.25s, min-height 0.25s ease-in-out,
    max-height 0.25s ease-in-out;
  transition: opacity 0.5s ease-in-out 0.25s, min-height 0.25s ease-in-out,
    max-height 0.25s ease-in-out;
`

const HomeSectionUl = styled.ul`
  margin-bottom: 1.5rem;
  width: calc(100% + 0.75rem);
  margin-left: -0.375rem;
  cursor: default;
  padding: 0;
  letter-spacing: 0;
  list-style: none;

  li {
    display: inline-block;
    vertical-align: middle;
    max-width: calc(100% - 0.75rem);
    margin: 0.375rem;

    a {
      text-decoration: none;
      text-align: center;
      white-space: nowrap;
      max-width: 100%;
      -moz-align-items: center;
      -webkit-align-items: center;
      -ms-align-items: center;
      align-items: center;
      -moz-justify-content: center;
      -webkit-justify-content: center;
      -ms-justify-content: center;
      justify-content: center;
      vertical-align: middle;

      display: -moz-flex;
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      width: auto;
      height: 2rem;
      line-height: 2rem;
      vertical-align: middle;
      padding: 0 1rem;
      text-transform: uppercase;
      font-size: 0.65em;
      font-family: "Poppins", sans-serif;
      letter-spacing: 0.3rem;
      padding-left: calc(0.3rem + 1rem);
      font-weight: 300;
      border-radius: 2rem;
      color: #ffffff;
      border: solid 1px #ffffff;
    }
  }
`

const TitleText = styled.p`
  text-transform: uppercase;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.275rem;
  width: calc(100% + 0.375rem);
  font-size: 1.35em;
  line-height: 1.375;
  font-weight: 500;

  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  -moz-transition: opacity 1s ease-in-out 0.25s;
  -webkit-transition: opacity 1s ease-in-out 0.25s;
  -ms-transition: opacity 1s ease-in-out 0.25s;
  transition: opacity 1s ease-in-out 0.25s;
`

const LineDivider = styled.hr`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  width: 100%;
  position: relative;
  padding: 0;
  border: 0;
  height: 0.5rem;
  line-height: 0.5rem;
  background: none;

  &:before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    width: 10%;
    border-top: solid 2px #ffffff;
    height: 2px;
  }
`

const InnerImageWrapper = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  overflow: hidden;
  max-width: 100%;
  display: block;

  border-radius: 0.375rem;
  position: relative;
  max-width: 100%;
`

const Content = styled.div`
  margin-top: 1.5rem;
  color: #ffffff;
  font-family: "Source Sans Pro", sans-serif;
  letter-spacing: 0.025rem;
  width: calc(100% + 0.025rem);
  font-size: 1em;
  line-height: 1.75;
  font-weight: 200;
`

const Footer = styled.footer`
  margin-top: 1.5rem;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
  display: block;
`

const FooterContainer = styled.div`
  margin-top: 1.5rem;
`

const FooterInner = styled.div`
  vertical-align: top;
  position: relative;
  max-width: 100%;
  border-radius: inherit;

  text-align: center;
  padding: 0rem 0rem;
  width: 38rem;
  background-color: transparent;
  display: inline-block;

  ul {
    margin-bottom: 1rem;
    cursor: default;
    padding: 0;
    letter-spacing: 0;
    font-size: 1.375em;
    width: calc(100% + 1.25rem);
    margin-left: -0.625rem;
    list-style: none;

    li {
      display: inline-block;
      vertical-align: middle;
      position: relative;
      z-index: 1;
      margin: 0.625rem;

      a {
        display: -moz-flex;
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        -moz-align-items: center;
        -webkit-align-items: center;
        -ms-align-items: center;
        align-items: center;
        -moz-justify-content: center;
        -webkit-justify-content: center;
        -ms-justify-content: center;
        justify-content: center;
        border-radius: 100%;
        width: 2em;
        height: 2em;
      }
    }
  }
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { contentfulBlog } = data // data.markdownRemark holds our post data
  const { title, titleImage } = contentfulBlog
  return (
    <MainWrapper>
      <DivWrapper>
        <Maindiv>
          <InnerDiv>
            <HomeSection>
              <HomeSectionUl>
                <li>
                  {" "}
                  <Link to="/blogs"> Back </Link>{" "}
                </li>
              </HomeSectionUl>
              <TitleText> {title} </TitleText>
              <LineDivider />
              <InnerImageWrapper>
                {titleImage && <Img sizes={titleImage.sizes} />}
              </InnerImageWrapper>
              <Content
                dangerouslySetInnerHTML={{
                  __html: contentfulBlog.body.childMarkdownRemark.html,
                }}
              />
              <LineDivider />
              <InnerImageWrapper>
                {/* {supportImage && <Img sizes={supportImage.sizes} />} */}
              </InnerImageWrapper>
            </HomeSection>

            <Footer>
              <hr id="divider05" />
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
      titleImage {
        sizes {
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

/* 
 supportImage {
        id
        sizes {
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
*/
