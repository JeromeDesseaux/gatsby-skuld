import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

// import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"
// import { rhythm, scale } from "../utils/typography"
import { Container } from "../components/layout/core"
import styled from "styled-components"
import responsive from "../style/responsive"

const StyledImage = styled(Image)`
  height: auto;
  width: 60%;
  margin: auto;
  margin-bottom: 20px;
  margin-top: 20px;
  @media (max-width: ${responsive.minScreenResponsiveSize}px) {
    width: 100%;
  }
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    // const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Container>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
          {post.frontmatter.image ? (
            <StyledImage fluid={post.frontmatter.image.childImageSharp.fluid} />
          ) : (
            ""
          )}
          <MDXRenderer>{post.body}</MDXRenderer>
        </Container>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
        description
        image {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
