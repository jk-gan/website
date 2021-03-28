import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const ogImage = `https://jkgan.com${data.file.publicURL}`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" ogImage={ogImage} />
      <div className="flex container mx-auto mt-16 w-11/12 2xl:w-5/12 xl:w-6/12 lg:w-8/12 md:w-10/12">
        <div>
          <h1 className="text-left font-bold text-3xl mb-10">
            Hey, I'm Jun Kai.
          </h1>
          <p className="text-left text-xl text-blueGray-800 mb-3">
            I'm building the world's most advanced education platform at{" "}
            <a
              className="link"
              href="https://mindvalley.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Mindvalley
            </a>
            .
          </p>
          <p className="text-left text-xl text-blueGray-800 mb-3">
            I writes Elixir at work and Rust in my free time. Currently, I'm
            reading{" "}
            <a
              className="link"
              href="https://www.databass.dev"
              rel="noopener noreferrer"
              target="_blank"
            >
              Database Internals
            </a>{" "}
            to learn more about database architecture.
          </p>
          <p className="text-left text-xl text-blueGray-800 mb-3">
            You can also find me on{" "}
            <a
              className="link"
              href="https://twitter.com/jk_gan"
              rel="noopener noreferrer"
              target="_blank"
            >
              Twitter
            </a>
            ,{" "}
            <a
              className="link"
              href="https://github.com/jk-gan"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>{" "}
            and{" "}
            <a
              className="link"
              href="https://www.linkedin.com/in/ganjk"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
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

export default Home
