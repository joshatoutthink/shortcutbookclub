import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "fife.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <Link to="/">
      <img src={data.placeholderImage.publicURL} alt="logo" />
    </Link>
  )
}

export default Image
