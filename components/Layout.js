import React from "react"
import Circle from "./Circle"

const Layout = ({ pageName }) => {
  switch (pageName) {
    case "about":
      return <Circle />
    default:
      return <div>hello</div>
  }
}

export default Layout
