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
      <SEO title="O nama | 3Di Split" desc="Mi smo 3Di Split! Ostvarite ideje uz 3D print i modeliranje." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Pozdrav. Mi smo 3Di Split!</h1>
        <p>
          Pružamo profesionalne usluge 3d printanja. <br />
          Specijalizirani smo za printanje pomocu FDM/FFF tehnologije. <br />

          Izradujemo funkcionalne prototipove i gotove proizvode. 
        </p>
        <p>
          Pošaljite nam upit direktno na <a href="mailto:3displit@gmail.com">email adresu</a> ili putem <a href="https://3displit.com/contact">kontakt obrasca</a>.
        </p>
        <p>
          Usluge koje nudimo:
          
          <ul>
            <li>pripremu/prilagodbu modela za izradu</li>
            <li>3D ispis</li>
            <li>naknadnu obradu</li>
          </ul> 
        </p>
      </AnimatedBox>
    </Layout>
  )
}

export default About
