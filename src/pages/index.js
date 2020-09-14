import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Wave from "../components/wave"
import { Container } from "../components/layout/core"
import Bio from "../components/bio"
import ArticleCard from "../components/articleCard"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const pageTitle = "Développeur ultra performant sur Rouen !! Aimez le!"
    const posts = data.allMdx.edges

    return (
      <Layout>
        <SEO
          title={pageTitle}
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <section id="skuld__agency" style={{ paddingTop: "25px" }}>
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
        <section id="latest__articles" style={{ paddingTop: "25px" }}>
          <Container>
            <h1>Derniers articles</h1>
            {posts.map(({ node }) => {
              return <ArticleCard key={node.fields.slug} article={node} />
            })}
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
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
