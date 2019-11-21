import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import Form from "../components/form"
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const Order_3d_print = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="Naruči 3D print | 3Di SPLIT" desc="Mi smo 3Di SPLIT! Ostvarite ideje uz 3D print i modeliranje." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <div class="container">
        <h1>Naruči 3D print</h1>
        
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
              Imam 3D model predmeta:
              <br />
              <br />
              <input type="radio" id="3d-choice1" name="3dmodel" value="ne"/>
              <label for="3d-choice1">Ne</label>
              <br />
              <input type="radio" id="3d-choice2" name="3dmodel" value="da"/>
              <label for="3d-choice2">Da</label>
            </p>
            <hr />
            
            <p>
              Pošaljite nam 3D model, fotografije ili slične materijale:
              <br />
              <br />
              na email adresu: <a href="mailto:3displit@gmail.com?subject=Upit za 3D print - datoteke">3displit@gmail.com</a> <br />
              ili <br />
              preko WeTransfer servisa: <a href="https://wetransfer.com/?to=3displit@gmail.com&msg=Upit%20za%203D%20print%20-%20datoteke" target="_blank">WeTransfer</a> 
            </p>
            <hr />
            
            <p>
              Materijal:
              <br />
              <br />
              <input type="radio" id="material-choice1" name="material" value="pla"/>
              <label for="material-choice1">PLA</label>
              <br />
              <input type="radio" id="material-choice2" name="material" value="petg"/>
              <label for="material-choice2">PETG</label>
            </p>
            <hr />
            
            <p>
              Boja:
              <br />
              <br />
              <input type="radio" id="color-choice1" name="color" value="crna"/>
              <label for="color-choice1">Crna</label>
              <br />
              <input type="radio" id="color-choice2" name="color" value="bijela"/>
              <label for="color-choice2">Bijela</label>
              <br />
              <input type="radio" id="color-choice3" name="color" value="Siva"/>
              <label for="color-choice3">Siva</label>
              <br />
              <input type="radio" id="color-choice4" name="color" value="crvena"/>
              <label for="color-choice4">Crvena</label>
              <br />
              <input type="radio" id="color-choice5" name="color" value="plava"/>
              <label for="color-choice5">Plava</label>
              <br />
              <input type="radio" id="color-choice6" name="color" value="zuta"/>
              <label for="color-choice6">Žuta</label>
              <br />
              <input type="radio" id="color-choice7" name="color" value="ostalo"/>
              <label for="color-choice7">Ostalo (opišite u poruci u nastavku)</label>
            </p>
            <hr />
            
            <p>
              Kvaliteta ispisa:
              <br />
              <br />
              <input type="radio" id="quality-choice1" name="quality" value="02mm"/>
              <label for="quality-choice1">0.2 mm (200 mikrona)</label>
              <br />
              <input type="radio" id="quality-choice2" name="quality" value="03mm"/>
              <label for="quality-choice2">0.3 mm (300 mikrona)</label>
            </p>
            <hr />
            
            <p>
              Unutrašnja popunjenost predmeta:
              <br />
              <br />
              <input type="radio" id="infill-choice1" name="infill" value="0"/>
              <label for="infill-choice1">0%</label>
              <br />
              <input type="radio" id="infill-choice2" name="infill" value="15"/>
              <label for="infill-choice2">15%</label>
              <br />
              <input type="radio" id="infill-choice3" name="infill" value="25"/>
              <label for="infill-choice3">25%</label>
              <br />
              <input type="radio" id="infill-choice4" name="infill" value="50"/>
              <label for="infill-choice4">50%</label>
              <br />
              <input type="radio" id="infill-choice5" name="infill" value="75"/>
              <label for="infill-choice5">75%</label>
              <br />
              <input type="radio" id="infill-choice6" name="infill" value="85"/>
              <label for="infill-choice6">85%</label>
              <br />
              <input type="radio" id="infill-choice7" name="infill" value="100"/>
              <label for="infill-choice7">100%</label>
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

export default Order_3d_print
