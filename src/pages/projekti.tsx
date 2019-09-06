import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { config, animated, useSpring } from 'react-spring'
import Layout from '../components/layout'
import GridItem from '../components/grid-item'
import SEO from '../components/SEO'
import { ChildImageSharp } from '../types'

type PageProps = {
  data: {
    projekti: {
      nodes: {
        title: string
        slug: string
        cover: ChildImageSharp
      }[]
    }
  }
}

const Area = styled(animated.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 50vw;

  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    grid-template-columns: 1fr;
    grid-auto-rows: 60vw;
  }
`

const Projekti: React.FunctionComponent<PageProps> = ({ data: { projekti } }) => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout color="#000">
      <SEO title="Projekti | 3Di SPLIT" />
      <Area style={pageAnimation}>
        {projekti.nodes.map(projekt => (
          <GridItem key={projekt.slug} to={projekt.slug} aria-label={`View projekt "${projekt.title}"`}>
            <Img fluid={projekt.cover.childImageSharp.fluid} />
            <span>{projekt.title}</span>
          </GridItem>
        ))}
      </Area>
    </Layout>
  )
}

export default Projekti

export const query = graphql`
  query Projekti {
    projekti: allProjektiYaml {
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
  }
`
