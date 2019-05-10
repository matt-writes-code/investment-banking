import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BI from '../components/bi'
import WSJ from '../components/wsj'
import GNews from '../components/gnews'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Market News</h1>
  <BI/>
  <WSJ/>
  <GNews />
  </Layout>
)

export default IndexPage
