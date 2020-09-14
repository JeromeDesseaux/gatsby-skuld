import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Wave from "../components/wave"
import { Container } from "../components/layout/core"
import Bio from "../components/bio"

class IndexPage extends React.Component {
  render() {
    const pageTitle = "Développeur ultra performant sur Rouen !! Aimez le!"
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
          </Container>
        </section>
      </Layout>
    )
  }
}

export default IndexPage
