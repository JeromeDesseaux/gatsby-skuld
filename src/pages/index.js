import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Wave from "../components/wave"
import { Container, ArticleContainer } from "../components/layout/core"
import Bio from "../components/bio"
import ArticleCard from "../components/articleCard"
import styled from "styled-components"
import freelancer from "../../content/assets/web.svg"
import responsive from "../style/responsive"

const textStyling = {
  textAlign: "justify",
}

const StyledImage = styled.img`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  display: block;
  @media (max-width: ${responsive.minScreenResponsiveSize}px) {
    width: 80%;
  }
`

const StackContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const StackDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 60%;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
  & i {
    padding: 10px;
    font-size: 50px;
    transition: all 0.3s ease 0s;
    // &:hover {
    //   box-shadow: 0 3px 9px rgba(0, 0, 0, 0.25), 0 3px 6px rgba(0, 0, 0, 0.22);
    //   border-radius: 7px;
    // }
  }
  @media (max-width: ${responsive.minScreenResponsiveSize}px) {
    width: 80%;
  }
`

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const pageTitle = "Consultant Python backend et data freelance"
    const posts = data.allMdx.edges

    return (
      <Layout siteMetadata={data.site.siteMetadata}>
        <SEO
          title={pageTitle}
          keywords={[
            `Python`,
            `Node.js`,
            `Freelance`,
            `Développeur`,
            `Expertise`,
            `Jérôme Desseaux`,
            `Intelligence Artificielle`,
            `Data`,
            `Traitement de données`,
          ]}
        />
        <section id="skuld__agency">
          <Container>
            <h1>Architecture et développement web</h1>
            <p style={textStyling}>
              Depuis 2013, j'accompagne les porteurs de projet sur leurs
              ambitions numériques. Architecte logiciel pluridisciplinaire,
              j'apporte ma vision transverse sur des thématiques aussi variées
              que complémentaires allant du développement web à la science des
              données et à l'intelligence artificielle. Mes disponibilités sont
              accessibles sur mon profil LinkedIn et régulièrement mises à jour.
              Enfin, depuis le début de mon activité et encore plus aujourd'hui,
              je ne réalise mes prestations qu'en télétravail.
            </p>
            <StyledImage
              src={freelancer}
              alt="Jérôme Desseaux développeur freelance spécialisé en Python et Node.js. Développement backend et data. Création d'algorithmes d'intelligence artificielle"
            />
            <StackContainer>
              <StackDiv>
                {" "}
                <i class="devicon-python-plain colored"></i>
                <i class="devicon-nodejs-plain colored"></i>
                {/* <i class="devicon-php-plain colored"></i> */}
                <i class="devicon-go-line colored"></i>
                <i class="devicon-html5-plain colored"></i>
                <i class="devicon-css3-plain colored"></i>
                <i class="devicon-vuejs-plain colored"></i>
                <i class="devicon-react-original colored"></i>
                <i class="devicon-mongodb-plain colored"></i>
                <i class="devicon-postgresql-plain colored"></i>
                <i class="devicon-linux-plain colored"></i>
                <i class="devicon-docker-plain colored"></i>
                <i class="devicon-git-plain-wordmark colored"></i>
              </StackDiv>
            </StackContainer>
          </Container>
        </section>
        <section id="who__am__i">
          <Wave>
            <Container>
              {/* <p>Bonjour, je suis</p> */}
              <Bio header="Jérôme Desseaux" />
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
