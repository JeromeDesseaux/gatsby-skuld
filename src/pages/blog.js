import React from "react"
import { graphql } from "gatsby"

// import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import SearchPosts from "../components/searchPosts"
import ArticleCard from "../components/articleCard"
import { Container, ArticleContainer } from "../components/layout/core"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    // const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges
    // const localSearchBlog = data.localSearchBlog

    return (
      <Layout siteMetadata={data.site.siteMetadata}>
        <SEO title="Blog tech mais pas que" />
        <Container>
          <h1>Blog</h1>
          <p>
            Vous retrouverez ici quelques-unes de mes pensées rédigées par mes
            extensions digitales sur des outils numériques... ou bien l'inverse,
            je suis perdu!{" "}
          </p>
          <ArticleContainer>
            {posts.map(({ node }) => {
              return <ArticleCard key={node.fields.slug} article={node} />
            })}
          </ArticleContainer>
          {/* <Bio /> */}
        </Container>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    localSearchBlog {
      index
      store
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            image {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
