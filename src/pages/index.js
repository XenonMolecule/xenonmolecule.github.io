import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/main.css'
import ParticleCanvas from "../components/particlecanvas"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import SelfieImg from "../components/selfieimg"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" />
      <Container>
        <Row>
          <Col>
            <h1>MICHAEL RYAN</h1>
          </Col>
          <Col>
            <SelfieImg/>
          </Col>
        </Row>
      </Container>
    </Layout>
    <ParticleCanvas/>
  </>
)

export default IndexPage
