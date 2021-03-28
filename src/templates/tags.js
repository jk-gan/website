import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TagsTemplate = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { tags } = pageContext
  const ogImage = `https://jkgan.com${data.file.publicURL}`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Tags" ogImage={ogImage} />
      <div className="flex container mx-auto mt-16 w-11/12 2xl:w-5/12 xl:w-6/12 lg:w-8/12 md:w-10/12">
        <div className="divide-y-2 w-full">
          <div>
            <h1 className="text-left font-bold text-4xl mb-3">Tags</h1>
          </div>
          <div>
            <ul className="mt-8">
              {tags.map((tag, _index) => {
                return (
                  <li className="mb-4" key={tag}>
                    <Link
                      to={`/tags/${tag}`}
                      className="text-2xl mb-2 font-semibold hover:text-cyan-400"
                    >
                      #{tag}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TagsTemplate

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
