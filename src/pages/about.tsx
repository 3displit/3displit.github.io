import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const About = () => {
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
          Pružamo profesionalne usluge 3d printanja. 
          Specijalizirani smo za printanje pomocu FDM/FFF tehnologije. 

          Izradujemo funkcionalne prototipove i gotove proizvode. 
        </p>
        <p>
          Pošaljite nam upit direktno na <a href="mailto:3displit@gmail.com">email adresu</a> ili putem <a href="https://3displit.com/contact">kontakt obrasca</a>.
        </p>
        <p>
          Usluge koje nudimo:

          - pripremu/prilagodbu modela za izradu

          - 3D ispis

          - naknadnu obradu
        </p>
      </AnimatedBox>
    </Layout>
  )
}

export default About
