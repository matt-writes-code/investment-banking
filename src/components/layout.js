/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Navigation from './navigation'
import Time from './time'
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        {/*<Header siteTitle={data.site.siteMetadata.title} />*/}
        <Navigation />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `10px 1.0875rem 1.45rem`,
          }}
        >
  <div style={{
  display:`flex`,
  flexDirection:`row`,
  justifyContent:`flex-end`
  }}>
  <Time/>
  </div>
          <main>{children}</main>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
