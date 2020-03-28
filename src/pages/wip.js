import React from "react"

import SEO from "../components/seo"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/main.css'
import ParticleCanvas from "../components/particlecanvas"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Header from "../components/header"
import Footer from "../components/footer"

const WipPAge = () => (
  <>
    <Header/>
    <SEO title="Work in Progress" />
    <Container>
      <Container className={'center-box'}>
        <Row className={'justify-content-center'}>
          <p className={'big-subheader'}>In Progress...</p>
        </Row>
      </Container>
    </Container>
    <Footer/>
    <ParticleCanvas/>
  </>
)

export default WipPAge
