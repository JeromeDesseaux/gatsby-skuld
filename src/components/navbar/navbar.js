import React from "react"

import { Container } from "../layout/core"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import NavbarLink from "./navbarLinks"

const FlexNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  align-items: center;
`

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
`

const Navbar = () => {
  const query = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "skuld_illustration_sansfond.png" }) {
        childImageSharp {
          fixed(height: 80) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `)

  return (
    <Container>
      <FlexNavbar>
        <Img loading="eager" fixed={query.file.childImageSharp.fixed} />
        <LinksContainer>
          <NavbarLink to="/">Accueil</NavbarLink>
          <NavbarLink to="/blog/">Blog</NavbarLink>
        </LinksContainer>
      </FlexNavbar>
    </Container>
  )
}

export default Navbar
