import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { animated, useSpring, config } from 'react-spring'
import Layout from '../components/layout'
import GridItem from '../components/grid-item'
import SEO from '../components/SEO'
import { ChildImageSharp } from '../types'

type PageProps = {
  data: {
    firstProjekt: {
      title: string
      slug: string
      cover: ChildImageSharp
    }
    threeProjekti: {
      nodes: {
        title: string
        slug: string
        cover: ChildImageSharp
      }[]
    }
    aboutUs: ChildImageSharp
    instagram: ChildImageSharp
  }
}

const Area = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 35vw 40vw 25vw;
  grid-template-areas:
    'first-projekt about-us about-us'
    'three-projekti three-projekti three-projekti'
    'instagram instagram instagram';

  @media (max-width: ${props => props.theme.breakpoints[3]}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 35vw 30vw 30vw 25vw;

    grid-template-areas:
      'first-projekt first-projekt about-us about-us'
      'three-projekti three-projekti three-projekti three-projekti'
      'three-projekti three-projekti three-projekti three-projekti'
      'instagram instagram instagram instagram';
  }

  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 38vw);

    grid-template-areas:
      'first-projekt about-us'
      'three-projekti three-projekti'
      'three-projekti three-projekti'
      'three-projekti three-projekti'
      'instagram instagram';
  }

  @media (max-width: ${props => props.theme.breakpoints[0]}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 50vw);

    grid-template-areas:
      'first-projekt'
      'about-us'
      'three-projekti'
      'three-projekti'
      'three-projekti'
      'instagram';
  }
`

const FirstProjekt = styled(GridItem)`
  grid-area: first-projekt;
`

const AboutUs = styled(GridItem)`
  grid-area: about-us;
`

const ThreeProjekti = styled.div`
  grid-area: three-projekti;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`

const Instagram = styled(GridItem)`
  grid-area: instagram;
`

const Index: React.FunctionComponent<PageProps> = ({ data: { firstProjekt, threeProjekti, aboutUs, instagram } }) => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO />
      <Area style={pageAnimation}>
        <FirstProjekt to={firstProjekt.slug} aria-label={`View projekt "${firstProjekt.title}"`}>
          <Img fluid={firstProjekt.cover.childImageSharp.fluid} />
          <span>{firstProjekt.title}</span>
        </FirstProjekt>
        <AboutUs to="/o-nama" aria-label="Saznaj više o nama">
          <Img fluid={aboutUs.childImageSharp.fluid} />
          <span>O nama</span>
        </AboutUs>
        <ThreeProjekti>
          {threeProjekti.nodes.map(projekt => (
            <GridItem to={projekt.slug} key={projekt.slug} aria-label={`Vidi projekt "${projekt.title}"`}>
              <Img fluid={projekt.cover.childImageSharp.fluid} />
              <span>{projekt.title}</span>
            </GridItem>
          ))}
        </ThreeProjekti>
        <Instagram to="/instagram" aria-label="Razgledaj naš Instagram">
          <Img fluid={instagram.childImageSharp.fluid} />
          <span>Instagram</span>
        </Instagram>
      </Area>
    </Layout>
  )
}

export default Index

export const query = graphql`
  query Index {
    firstProjekt: projektiYaml {
      title
      slug
      cover {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    threeProjekti: allProjektiYaml(limit: 3, skip: 1) {
      nodes {
        title
        slug
        cover {
          childImageSharp {
            fluid(quality: 95, maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    aboutUs: file(sourceInstanceName: { eq: "images" }, name: { eq: "about-us" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    instagram: file(sourceInstanceName: { eq: "images" }, name: { eq: "instagram" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
