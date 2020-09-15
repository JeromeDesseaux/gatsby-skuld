import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Wave from "../components/wave"
import { Container, ArticleContainer } from "../components/layout/core"
import Bio from "../components/bio"
import ArticleCard from "../components/articleCard"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const pageTitle = "Développeur ultra performant sur Rouen !! Aimez le!"
    const posts = data.allMdx.edges

    return (
      <Layout siteMetadata={data.site.siteMetadata}>
        <SEO
          title={pageTitle}
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <section id="skuld__agency">
          <Container>
            <h1>Présentation de Skuld</h1>
          </Container>
        </section>
        <section id="who__am__i">
          <Wave>
            <Container>
              <Bio header="Qui suis-je ?" />
            </Container>
          </Wave>
        </section>
        <section id="latest__articles">
          <Container>
            <h1>Derniers articles</h1>
            <ArticleContainer>
              {posts.map(({ node }) => {
                return <ArticleCard key={node.fields.slug} article={node} />
              })}
            </ArticleContainer>
          </Container>
        </section>
      </Layout>
    )
  }
}

export default IndexPage

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
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 3) {
      edges {
        node {
          excerpt(pruneLength: 160)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD/MM/YYYY")
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
