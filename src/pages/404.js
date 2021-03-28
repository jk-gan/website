import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const ogImage = `https://jkgan.com${data.file.publicURL}`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" ogImage={ogImage} />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    file(relativePath: { eq: "bg.jpeg" }) {
      publicURL
    }
  }
`
