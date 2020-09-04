import React from "react"
import { graphql, navigate } from "gatsby"

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    mockDataCsv(id: { eq: $id }) {
      id
      title
      subtitle
      content
      slug
    }
  }
`

const PageTemplate = props => {
  const { data, errors } = props
  const page = data && data.mockDataCsv
  return (
    <div>
      <h1>{page.title}</h1>
      <h3>{page.subtitle}</h3>
      <p>{page.content}</p>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  )
}

export default PageTemplate
