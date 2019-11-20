import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const Blog = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="Blog | 3Di Split" desc="Mi smo 3Di Split! Ostvarite ideje uz 3D print i modeliranje." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Blog</h1>
        <p>
          Uskoro dolazi! 
        </p>
      </AnimatedBox>
    </Layout>
  )
}

export default Blog
