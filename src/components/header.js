import React, { Component } from "react"
import Link from "gatsby-link"
import styled from "styled-components"
import Img from "gatsby-image"

import logo from "../images/gatsby-icon.png"

const HeaderWrapper = styled.div`
  background: #524763;
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: 100vh;
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  text-align: center;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  a {
    display: block;
    width: 100%;
    text-align: center;
  }
  h1 {
    display: block;
    font-family: Poppins;
  }
`
const NavContainer = styled.div`
  text-align: center;
  z-index: 3;
  position: relative;
`
const MainNav = styled.nav`
  ul {
    list-style: none;
    display: block;
    list-style: disc;
    padding-left: 1em;
    padding-left: 1em;
    li {
      margin: 0 0.35em 0 0.35em;
      padding-left: 0.5em;
      display: inline-block;

      a {
        text-decoration: none;
        color: #fff;
        font-family: Poppins;
        padding: 0.6em 1.2em 0.6em 1.2em;
        &:hover {
          border-bottom: 3px solid #524763;
        }
      }
    }
  }
`

class Header extends Component {
  render() {
    const { siteTitle, background } = this.props

    return (
      <HeaderWrapper>
        <HeaderContainer>
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            {" "}
            <h1>{siteTitle}</h1>
          </Link>
        </HeaderContainer>
        <NavContainer>
          <MainNav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/articles">Articles</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </MainNav>
        </NavContainer>

        <Img
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            opacity: 0.3,
          }}
          fixed={background.childImageSharp.fixed}
        />
      </HeaderWrapper>
    )
  }
}

export default Header
