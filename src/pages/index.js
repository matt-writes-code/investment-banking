import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CNBC from '../components/cnbc'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Market News</h1>
    <CNBC />
  </Layout>
)

export default IndexPage
