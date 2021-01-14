import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import Image from "gatsby-image"
import SEO from "../components/SEO"

const ComponentName = ({ data }) => {
  const { content, title, desc, date, category, image } = data.blog

  return (
    <Layout>
      <SEO title={title} description={desc} />
      <section className="blog-template">
        <div className="blog-section section-center">
          <h2 className="w-50 m-auto">{title}</h2>
          <div className="blog-footer">
            <p>{category}</p>
            <p>{date}</p>
          </div>
          {image && (
            <Image fluid={image.childImageSharp.fluid} className="single-blog-img" />
          )}
          <article className="blog-content">
            <ReactMarkdown source={content} />
          </article>
          <Link to="/blog" className="btn center-btn">
            see all blog
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      desc
      date(formatString: "MMMM Do, YYYY")
      category
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default ComponentName