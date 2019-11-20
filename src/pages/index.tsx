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
    order3DPrint: ChildImageSharp
    order3DModeling: ChildImageSharp
    aboutUs: ChildImageSharp
    instagram: ChildImageSharp
    projects: ChildImageSharp
    contact: ChildImageSharp
    blog: ChildImageSharp
  }
}

const Area = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 35vw 40vw 25vw;
  grid-template-areas:
    'order-3d-print order-3d-modeling about-us'
    'instagram projects projects'
    'contact blog blog';

  @media (max-width: ${props => props.theme.breakpoints[3]}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 35vw 30vw 30vw 25vw;

    grid-template-areas:
      'order-3d-print order-3d-print about-us about-us'
      'order-3d-print order-3d-print projects projects'
      'instagram instagram projects projects'
      'contact contact blog blog';
  }

  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 38vw);

    grid-template-areas:
      'order-3d-print order-3d-modeling'
      'about-us instagram'
      'projects projects'
      'contact contact';
      'blog blog';
  }

  @media (max-width: ${props => props.theme.breakpoints[0]}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(7, 50vw);

    grid-template-areas:
      'order-3d-print'
      'order-3d-modeling'
      'about-us'
      'instagram'
      'projects'
      'contact'
      'blog';
  }
`

const Order3DPrint = styled(GridItem)`
  grid-area: order-3d-print;
`

const Order3DModeling = styled(GridItem)`
  grid-area: order-3d-modeling;
`

const AboutUs = styled(GridItem)`
  grid-area: about-us;
`

const Instagram = styled(GridItem)`
  grid-area: instagram;
`

const Projects = styled(GridItem)`
  grid-area: projects;
`

const Contact = styled(GridItem)`
  grid-area: contact;
`

const Blog = styled(GridItem)`
  grid-area: blog;
`

const Index: React.FunctionComponent<PageProps> = ({ data: { order3DPrint, order3DModeling, aboutUs, instagram, projects, contact, blog } }) => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO />
      <Area style={pageAnimation}>
        <Order3DPrint to="/order-3d-print" aria-label="Naruči 3D print">
          <Img fluid={order3DPrint.childImageSharp.fluid} />
          <span>Naruči 3D print</span>
        </Order3DPrint>
        <Order3DModeling to="/order-3d-modeling" aria-label="Naruči 3D modeliranje">
          <Img fluid={order3DModeling.childImageSharp.fluid} />
          <span>Naruči 3D modeliranje</span>
        </Order3DModeling>
        <AboutUs to="/about" aria-label="Saznaj više o nama">
          <Img fluid={aboutUs.childImageSharp.fluid} />
          <span>O nama</span>
        </AboutUs>
        <Instagram to="/instagram" aria-label="Razgledaj Instagram">
          <Img fluid={instagram.childImageSharp.fluid} />
          <span>Instagram</span>
        </Instagram>
        <Projects to="/projects" aria-label="Vidi projekte">
          <Img fluid={projects.childImageSharp.fluid} />
          <span>Projekti</span>
        </Projects>
        <Contact to="/contact" aria-label="Kontakt">
          <Img fluid={contact.childImageSharp.fluid} />
          <span>Kontakt</span>
        </Contact>
        <Blog to="/blog" aria-label="Blog">
          <Img fluid={blog.childImageSharp.fluid} />
          <span>Blog</span>
        </Blog>
      </Area>
    </Layout>
  )
}

export default Index

export const query = graphql`
  query Index {
    order3DPrint: file(sourceInstanceName: { eq: "images" }, name: { eq: "order-3d-print" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    order3DModeling: file(sourceInstanceName: { eq: "images" }, name: { eq: "order-3d-modeling" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
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
    projects: file(sourceInstanceName: { eq: "images" }, name: { eq: "projects" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    contact: file(sourceInstanceName: { eq: "images" }, name: { eq: "contact" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    blog: file(sourceInstanceName: { eq: "images" }, name: { eq: "blog" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
