import React, { useState, useEffect } from "react"
import { graphql, navigate } from "gatsby"
import "../styles/indexPage.css"

export default function Index(props) {
  const data = props.data.allMockDataCsv.edges
  const [text, setText] = useState("")

  const handleButtonClick = value => {
    setText(value)
  }

  return (
    <div className="container">
      <p className="blurb">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni libero
        quibusdam deleniti nam quis incidunt recusandae ipsum? Blanditiis,
        assumenda minus. Commodi omnis atque quidem rerum facere eligendi
        expedita fuga esse!
      </p>
      <div className="main-content">
        <div className="link-grid">
          {data.map((item, index) => (
            <button
              className={
                text === item.node.title.toLowerCase()
                  ? "box-link-active"
                  : "box-link"
              }
              onClick={() => handleButtonClick(item.node.title.toLowerCase())}
            >
              {item.node.title}
            </button>
          ))}
        </div>
      </div>
      <div className="button-wrapper">
        <button
          onClick={() => navigate(`/${text}`)}
          className={text === "" ? "disabled-button" : "button"}
          disabled={text === ""}
        >
          Submit
        </button>
        <button onClick={() => setText("")} className="button">
          Home
        </button>
      </div>
    </div>
  )
}

export const IndexQuery = graphql`
  query {
    allMockDataCsv {
      edges {
        node {
          id
          title
          subtitle
          slug
          content
        }
      }
    }
  }
`
