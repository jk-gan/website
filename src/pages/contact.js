import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const ogImage = `https://jkgan.com${data.file.publicURL}`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact" ogImage={ogImage} />
      <div className="flex container mx-auto mt-16 w-11/12 2xl:w-5/12 xl:w-6/12 lg:w-8/12 md:w-10/12">
        <div>
          <h1 className="text-left font-bold text-3xl mb-10">
            Let's grab a coffee
          </h1>
          <p className="text-left text-xl text-blueGray-800 mb-3">
            If you like my works or want to connect with me, never hesitate to
            send me an email at{" "}
            <a className="link" href="mailto:junkai@hey.com">
              junkai@hey.com
            </a>
            .
          </p>
        </div>
      </div>
    </Layout>
  )
}

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

export default Contact
