import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
    query($slug: String!){
        markdownRemark(frontmatter:{path: {eq: $slug}}){
            frontmatter{
                title
                date
            }
            html
        }
    }
`

export default function Template({data}) {
  const { markdownRemark } = data
  const { html } = markdownRemark
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

