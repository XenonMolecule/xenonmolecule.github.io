import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/main.css'
import ParticleCanvas from "../components/particlecanvas"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" />
    </Layout>
    <ParticleCanvas/>
  </>
)

export default IndexPage
