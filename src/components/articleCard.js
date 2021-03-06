import React from "react"

import styled from "styled-components"
import Image from "gatsby-image"
import { Link } from "gatsby"

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  margin: 10px;
  text-decoration: none;
  color: black;
  //max-width: 45%;
  width: 350px;
  height: 450px;
  border-radius: 7px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s ease 0s;
  &:hover {
    // transform: translateY(-1px);
    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.25), 0 3px 6px rgba(0, 0, 0, 0.22);
  }
`

const CardImage = styled.div`
  height: 200px;
  width: auto;
  & div {
    border-radius: 7px 7px 0 0;
    height: 100%;
    width: auto;
  }
`

const CardContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  text-align: justify;
  align-items: start;
  height: 100%;
  & h2 {
    font-weight: 300;
    text-transform: uppercase;
    font-size: 20px;
  }
`

const CardFooter = styled.small`
  margin-top: auto;
`

const truncate = (text, length) => {
  return text.length > length ? text.substring(0, length - 3) + "..." : text
}

const ArticleCard = props => {
  const { article } = props
  const title = article.frontmatter.title || article.fields.slug
  const abstract = article.frontmatter.description || article.excerpt
  const image = article.frontmatter.image
    ? article.frontmatter.image.childImageSharp.fluid
    : null
  const slug = article.fields.slug
  const date = article.frontmatter.date
  return (
    <Card to={`/blog${slug}`}>
      {image ? (
        <CardImage>
          <Image fluid={image} alt={abstract} />
        </CardImage>
      ) : (
        ""
      )}
      <CardContent>
        <h2>{title}</h2>
        <p>{truncate(abstract, 200)}</p>
        <CardFooter>Publié le {date}</CardFooter>
      </CardContent>
    </Card>
  )
}

export default ArticleCard
