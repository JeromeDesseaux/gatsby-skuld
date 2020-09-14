/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

// import { rhythm } from "../utils/typography"

const Bio = props => {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        const title = props.header ? <h1>{props.header}</h1> : ""
        return (
          <BioContainer>
            <BioContent>
              {title}
              Quis laborum et labore sunt voluptate nulla excepteur dolore quis
              nulla voluptate. Ad esse anim laboris eiusmod eiusmod. Consequat
              id ipsum minim excepteur mollit id duis laboris ullamco sunt
              excepteur cillum. Consectetur deserunt voluptate nisi qui cillum
              sunt cupidatat sit consectetur tempor et ex aliqua mollit.
            </BioContent>
            <BioImage>
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                  borderRadius: `100%`,
                }}
                imgStyle={{
                  borderRadius: `50%`,
                  border: `2px solid white`,
                  boxShadow: `0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)`,
                }}
              />
            </BioImage>
          </BioContainer>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/Secondary.png/" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`

const BioContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  color: white;
  margin: 20px 0 30px 0;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    justify-content: center;
  }
`

const BioContent = styled.div`
  max-width: 60%;
  min-width: 300px;
  text-align: justify;
  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 20px;
  }
`

const BioImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 1;
  flex-grow: 1;
`

export default Bio
