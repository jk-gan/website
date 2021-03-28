import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        ogImage={data.file.publicURL}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <div className="flex mx-auto mt-16 mb-16 w-11/12 2xl:w-5/12 xl:w-6/12 lg:w-8/12 md:w-10/12">
          <div className="w-full">
            <div className="mb-5">
              <h1 className="text-4xl font-semibold text-center mb-3">
                {post.frontmatter.title}
              </h1>
              {/* <h3 className="opacity-80 text-xl text-blueGray-500 font-normal mb-3 text-center">{subtitle}</h3> */}
              {/* <ul className="flex flex-wrap justify-center">
                {tags.map(tag => {
                  return (
                    <li key={tag} className="mb-2">
                      <Link href={`/tags/${tag}`}>
                        <a className="text-sm mr-2 py-1 px-2 rounded-xl bg-blueGray-100 hover:bg-blueGray-200">
                          #{tag}
                        </a>
                      </Link>
                    </li>
                  )
                })}
              </ul> */}
              <p className="opacity-80 text-sm text-blueGray-400 text-center">
                {/* {dayjs(date).format("MMMM D, YYYY")} */}
                {post.frontmatter.date}
              </p>
            </div>
            <section
              className="prose prose-lg max-w-none mt-10"
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
            />
          </div>
        </div>
        {/* <hr /> */}
        {/* <footer>
          <Bio />
        </footer> */}
      </article>
      {/* <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav> */}
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
    $image: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        image
      }
    }
    file(relativePath: { eq: $image }) {
      publicURL
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
