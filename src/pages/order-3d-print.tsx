import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const Order3DPrint = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="O nama | 3Di Split" desc="Pozdrav. Mi smo 3Di Split! Ostvarite vaše ideje uz 3D print i dizajn." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Pozdrav. Mi smo 3Di Split!</h1>
        <p>
          You can visit my <a href="https://www.lekoarts.de/en">website</a> or my other{' '}
          <a href="https://gatsby-starter-portfolio.netlify.com">Gatsby projects</a>.
        </p>
      </AnimatedBox>
    </Layout>
  )
}

export default Order3DPrint
