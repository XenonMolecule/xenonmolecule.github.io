import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/main.css'
import ParticleCanvas from "../components/particlecanvas"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" />
      <Container>
        <Container className={'center-box'}>
          <Row className={'justify-content-center'}>
            <h1 className={'big-header'}>Michael Ryan</h1>
          </Row>
          <Row className={'justify-content-center'} style={{'marginTop':'-25px'}}>
            <p className={'big-subheader'}>Computer Science</p>
          </Row>
          <Row className={'justify-content-center'} style={{'marginTop':'-25px'}}>
            <p className={'big-subheader'}>Georgia Tech</p>
          </Row>
        </Container>
      </Container>
    </Layout>
    <ParticleCanvas/>
  </>
)

export default IndexPage
