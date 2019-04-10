import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NewsApi from '../components/newsapi'
import BNMapi from '../components/bnmapi'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Market News</h1>
    <NewsApi />
    <BNMapi/>
  </Layout>
)

export default IndexPage
