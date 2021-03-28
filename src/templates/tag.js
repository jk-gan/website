import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TagsTemplate = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { tag } = pageContext
  const posts = data.allMarkdownRemark.nodes
  const ogImage = `https://jkgan.com${data.file.publicURL}`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Tags" ogImage={ogImage} />
      <div className="flex container mx-auto mt-16 w-11/12 2xl:w-5/12 xl:w-6/12 lg:w-8/12 md:w-10/12">
        <div className="divide-y-2 w-full">
          <div>
            <h1 className="text-left font-bold text-4xl mb-3">{`#${tag}`}</h1>
          </div>
          <div>
            <ul className="mt-8">
              {posts.map(post => {
                const title = post.frontmatter.title || post.fields.slug
                const { tags } = post.frontmatter

                return (
                  <li className="mb-10" key={post.id}>
                    <Link
                      to={`/blog${post.fields.slug}`}
                      className="text-2xl mb-2 font-semibold hover:text-cyan-400"
                    >
                      {title}
                    </Link>
                    <section className="text-base text-blueGray-500 mb-2">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </section>
                    <ul className="flex flex-wrap mb-2">
                      {tags.map(tag => {
                        return (
                          <li key={tag}>
                            <Link
                              to={`/tags/${tag}`}
                              className="text-sm mr-2 py-1 px-2 rounded-xl bg-blueGray-100 hover:bg-blueGray-200"
                            >
                              #{tag}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                    <p className="text-sm text-blueGray-400">
                      {/* {dayjs(post.date).format("MMMM D, YYYY")} */}
                      {post.frontmatter.date}
                    </p>
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
  query GetArticlesByTag($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    file(relativePath: { eq: "bg.jpeg" }) {
      publicURL
    }
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        id
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
        }
      }
    }
  }
`
