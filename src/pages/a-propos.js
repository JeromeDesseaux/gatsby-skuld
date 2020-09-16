import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "../components/layout/core"
import styled from "styled-components"

const Text = styled.p`
  line-height: 1.7rem;
  font-size: 17px;
`

class AboutPage extends React.Component {
  render() {
    // const { data } = this.props

    return (
      <Layout>
        <SEO title="A propos" />
        <Container>
          <h1>Bonjour, je suis Jérôme desseaux</h1>
          <Text>
            Je suis né en 1992, marié et bientôt papa et j'habite à Rouen,
            métropole Normande. Je suis aussi ingénieur en Architecture Système
            habitant. J'ai toujours aimé la programmation et attise une veille
            permanente sur ce sujet ... et je continue pour apporter à mes
            clients la meilleure réponse possible. Je m'adapte aux contraintes
            du projet et non l'inverse.
          </Text>
          <h2>Mon voyage au monde du dév</h2>
          <Text>
            J'ai d'abord commencé dans la Junior Entreprise (AJIR) de mon école
            d'ingénieur, l'INSA de Rouen, où j'ai réalisé mes premiers sites web
            "professionnels". Vient ensuite le temps des stages, de la
            diversification puis du diplome en 2016. Comme beaucoup de mes
            camarades, j'ai "la bougeotte" comme on dit chez moi : trois emplois
            en trois ans. Pourquoi? Je m'ennuyais. J'ai donc décidé en 2018 de
            me lancer en tant qu'indépendant afin de pouvoir me diversifier.
            Voilà maintenant plusieurs années que je pratique aussi bien la
            comptabilité que relation commerciale en plus de mes divers
            développements web, d'intelligence artificielle ou de traitement de
            données et devinez quoi ... j'adore ça!
          </Text>
          <h2>Ma vie en dehors du travail</h2>
          <Text>
            Ce qui donne du sens à la vie pour moi peut se représenter comme un
            triangle isocèle dont les trois coins seraient Travail, Amis et
            Famille. Nous ne devrions jamais perdre de vue à quel point ces deux
            derniers sont importants. A ce titre, j'adore passer du temps avec
            mes amis bien qu'avec le confinement et les contraintes de chacun
            cela devienne de plus en plus compliqué. J'aime aussi prendre le
            temps de vivre avec mon épouse, voyager, découvrir le monde et ses
            richesses. Je ne perds pas de vue que nos actions ont un impact sur
            la planète et sur l'avenir de nos enfants. Je m'investis donc dans
            l'écologie : ambitionne la création d'un potager et d'un espace de
            biodiversité dans notre (futur) jardin, me déplace exclusivement en
            vélo ou transports en commun (j'ai le permis mais pas de voiture).
            Enfin, j'apprécie de plus en plus la lecture, la réflexion et de
            prendre le temps. Etrange pour quelqu'un que la lecture a toujours
            rebuté et pour qui la vie a toujours été à 100 à l'heure... je
            vieillis, je crois.
          </Text>
          <h2>Ma vision</h2>
          <Text>
            Un peu comme Otis dans Astérix et Obélix mission Cléopatre, "je
            crois que la vie c'est d'abord des rencontres. Des gens qui m'ont
            tendu la main peut-être à un moment où je ne pouvais pas". Ce que je
            fais aujourd'hui, je le dois à toutes ces personnes : mes parents,
            mes grands-parents, mes enseignants, mes amis, mon épouse, mes
            clients ... toutes ces personnes qui m'ont un jour fait confiance,
            qui m'ont aidé ou soutenu. Bref, qui ont été là pour moi quand
            j'avais besoin d'eux. Tout comme eux l'ont été pour moi, je suis
            ravi d'aider les entrepreneurs et porteurs de projet dans leurs
            ambitions numériques et de partager mes connaissances tant
            théoriques que pratique avec qui en a besoin.
          </Text>
        </Container>
      </Layout>
    )
  }
}

export default AboutPage
