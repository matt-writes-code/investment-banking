import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BI from '../news/bi'
import WSJ from '../news/wsj'
import GNews from '../news/gnews'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <div class="index">
        <SEO title="Home" keywords={[`coffee news`, `investment banking`, `financial markets`]} />
        <h1>Market News</h1>
        <BI />
        <WSJ />
        <GNews />
      </div>

    </Layout>
  )
}

export default IndexPage