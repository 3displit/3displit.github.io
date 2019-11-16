import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import Form from "../components/form"
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const Naruci-print = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="O nama | 3Di Split" desc="Pozdrav. Mi smo 3Di Split! Ostvarite vaše ideje uz 3D print i dizajn." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <div class="container">
        <h1>Contact</h1>
        
        <form id="3DPrintForm" action="https://hooks.zapier.com/hooks/catch/5814268/o2wmp0y/" type="POST">
        
            <div>
                <label for="name">Ime i prezime/Naziv tvrtke</label>
                <input type="text" name="name" placeholder="Ime i prezime/Naziv tvrtke"/>
            </div>
            
            <div>
                <label for="email">Email adresa</label>
                <input type="email" name="email-address" placeholder="Email adresa"/>
            </div>
            
            <div>
                <label for="phone">Broj mobitela/telefona</label>
                <input type="tel" name="phone" placeholder="Broj mobitela/telefona"/>
            </div>
            
            <p>Imam 3D model predmeta:</p>
            <div>
                <input type="radio" id="3d-choice1" name="3dmodel" value="ne"/>
                <label for="3d-choice1">Ne</label>

                <input type="radio" id="3d-choice2" name="3dmodel" value="da"/>
                <label for="3d-choice2">Da</label>
            </div>
            
            <p>Pošaljite nam 3D model, fotografije ili slične materijale:</p>
            <p>
                na email adresu: <a href="mailto:3displit@gmail.com?subject=Upit za 3D print - datoteke">3displit@gmail.com</a> <br />
                ili <br />
                preko WeTransfer servisa: <a href="https://wetransfer.com/?to=3displit@gmail.com&msg=Upit%20za%203D%20print%20-%20datoteke" target="_blank">WeTransfer</a> 
            </p>
            
            <p>Materijal:</p>
            <div>
                <input type="radio" id="material-choice1" name="material" value="pla"/>
                <label for="material-choice1">PLA</label>

                <input type="radio" id="material-choice2" name="material" value="petg"/>
                <label for="material-choice2">PETG</label>
            </div>
            
            <p>Boja:</p>
            <div>
                <input type="radio" id="color-choice1" name="color" value="crna"/>
                <label for="color-choice1">Crna</label>

                <input type="radio" id="color-choice2" name="color" value="bijela"/>
                <label for="color-choice2">Bijela</label>

                <input type="radio" id="color-choice3" name="color" value="Siva"/>
                <label for="color-choice3">Siva</label>

                <input type="radio" id="color-choice4" name="color" value="crvena"/>
                <label for="color-choice4">Crvena</label>

                <input type="radio" id="color-choice5" name="color" value="plava"/>
                <label for="color-choice5">Plava</label>

                <input type="radio" id="color-choice6" name="color" value="zuta"/>
                <label for="color-choice6">Žuta</label>

                <input type="radio" id="color-choice7" name="color" value="ostalo"/>
                <label for="color-choice7">Ostalo (opišite u poruci u nastavku)</label>
            </div>
            
            <p>Kvaliteta ispisa:</p>
            <div>
                <input type="radio" id="quality-choice1" name="quality" value="02mm"/>
                <label for="quality-choice1">0.2 mm (200 mikrona)</label>

                <input type="radio" id="quality-choice2" name="quality" value="03mm"/>
                <label for="quality-choice2">0.3 mm (300 mikrona)</label>
            </div>
            
            <p>Unutrašnja popunjenost predmeta:</p>
            <div>
                <input type="radio" id="infill-choice1" name="infill" value="0"/>
                <label for="infill-choice1">0%</label>

                <input type="radio" id="infill-choice2" name="infill" value="15"/>
                <label for="infill-choice2">15%</label>

                <input type="radio" id="infill-choice3" name="infill" value="25"/>
                <label for="infill-choice3">25%</label>

                <input type="radio" id="infill-choice4" name="infill" value="50"/>
                <label for="infill-choice4">50%</label>

                <input type="radio" id="infill-choice5" name="infill" value="75"/>
                <label for="infill-choice5">75%</label>

                <input type="radio" id="infill-choice6" name="infill" value="85"/>
                <label for="infill-choice6">85%</label>

                <input type="radio" id="infill-choice7" name="infill" value="100"/>
                <label for="infill-choice7">100%</label>
            </div>
            
            <div>
                <label for="message">Poruka</label>
                <textarea name="message"></textarea>
            </div>
            
            <input type="submit" value="Pošalji upit" id="Form-submit"/>
            
        </form> 
       
        <form name="Contact Form" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="Contact Form" />
            <div>
                <label>Your Email:</label>
                <input type="email" name="email" />
            </div>
            <div>
                <label>Message:</label>
                <textarea name="message" />
            </div>
            <button type="submit">Send</button>
        </form>
        </div>
      </AnimatedBox>
    </Layout>
  )
}

export default Naruci-print
