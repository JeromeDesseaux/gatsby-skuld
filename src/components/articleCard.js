import React from "react"

import styled from "styled-components"
import Image from "gatsby-image"
import { Link } from "gatsby"

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  margin: 20px;
  text-decoration: none;
  color: black;
  max-width: 45%;
  min-width: 300px;
  border-radius: 7px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s ease 0s;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`

const CardImage = styled.div`
  height: 200px;
`

const CardContent = styled.div`
  padding: 20px;
`

const ArticleCard = props => {
  const { article } = props
  console.log(article)
  const title = article.frontmatter.title || article.fields.slug
  const abstract = article.frontmatter.description || article.excerpt
  return (
    <Card>
      <CardImage></CardImage>
      <CardContent>
        <h3>{title}</h3>
        <p>{abstract}</p>
      </CardContent>
    </Card>
  )
}

export default ArticleCard
