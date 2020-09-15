import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "../components/layout/core"

class AboutPage extends React.Component {
  render() {
    // const { data } = this.props

    return (
      <Layout>
        <SEO title="404: Not Found" />
        <Container>
          <h1>A propos</h1>
          <p>Coucou les amis.</p>
        </Container>
      </Layout>
    )
  }
}

export default AboutPage
