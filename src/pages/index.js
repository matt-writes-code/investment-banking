import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FT from '../components/ft'
import WSJ from '../components/wsj'
import CNBC from '../components/cnbc'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Market News</h1>
  <FT/>
  <WSJ/>
  <CNBC />
  </Layout>
)

export default IndexPage
