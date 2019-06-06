import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Porject status</h1>
    <p>Underneath you can see current projects and related information.</p>
    <hr />
    <div class="col-md-4" />
    <progress value="69" max="100" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Contact information</Link>
  </Layout>
)

export default IndexPage
