import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import Form from "../components/form"
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const Order_3d_modeling = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="Naruči 3D modeliranje | 3Di SPLIT" desc="Mi smo 3Di SPLIT! Ostvarite ideje uz 3D print i modeliranje." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <div class="container">
        <h1>Naruči 3D modeliranje</h1>
        
        <form id="3DPrintForm" action="https://hooks.zapier.com/hooks/catch/5814268/o2wmp0y/" type="POST">
        
            <p>
              <label for="name">Ime i prezime/Naziv tvrtke</label>
              <br />
              <br />
              <input type="text" name="name" placeholder="Ime i prezime/Naziv tvrtke"/>
            </p>
            <hr />
            
            <p>
              <label for="email">Email adresa</label>
              <br />
              <br />
              <input type="email" name="email-address" placeholder="Email adresa"/>
            </p>
            <hr />
            
            <p>
              <label for="phone">Broj mobitela/telefona</label>
              <br />
              <br />
              <input type="tel" name="phone" placeholder="Broj mobitela/telefona"/>
            </p>
            <hr />
            
            <p>
              Pošaljite nam fotografije ili slične materijale:
              <br />
              <br />
              na email adresu: <a href="mailto:3displit@gmail.com?subject=Upit za 3D modeliranje - datoteke">3displit@gmail.com</a> <br />
              ili <br />
              preko WeTransfer servisa: <a href="https://wetransfer.com/?to=3displit@gmail.com&msg=Upit%20za%203D%20modeliranje%20-%20datoteke" target="_blank">WeTransfer</a> 
            </p>
            <hr />
            
            <p>
              <label for="message">Poruka</label>
              <br />
              <br />
              <textarea name="message" placeholder="Tekst poruke"></textarea>
            </p>
            <hr />
            
            <div class="form-element">
              <input type="submit" value="Pošalji upit" id="Form-submit"/>
            </div>
            
        </form> 
        
        </div>
      </AnimatedBox>
    </Layout>
  )
}

export default Order_3d_modeling
