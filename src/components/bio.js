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
        const title = props.header ? <h1>{props.header}</h1> : ""
        return (
          <BioContainer>
            <BioContent>
              {title}
              Ingénieur en Architecture des Systèmes d'Information, j'accompagne
              diverses entreprises, grandes comme petites, sur des thématiques
              allant du traitement de données au développement web. Depuis 2018,
              je continue de mettre ces compétences pluridisciplinaires à la
              disposition de tous en tant que freelance. Je suis aussi également
              sensible aux enjeux écologiques de notre siècle et oeuvre au
              quotidien pour réduire mon impact énergétique, aussi bien dans mes
              développements que dans ma vie privée. Habitant en Normandie, j'ai
              depuis toujours réalisé mes projets à distance. Je suis donc
              habitué à ce mode de travail, ses outils, ses avantages et tout
              comme ses contraintes.
            </BioContent>
            <BioImage>
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt="Jérôme Desseaux"
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
  line-height: 1.6rem;
  font-size: 17px;
  text-align: justify;
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
