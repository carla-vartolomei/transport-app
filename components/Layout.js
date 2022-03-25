import React from "react"
import AboutLayout from "./about-layout/AboutLayout"
import RoutesLayout from "./routes-layout/RoutesLayout"

const Layout = ({ pageName }) => {
  switch (pageName) {
    case "about":
      return <AboutLayout />
    case "routes":
      return <RoutesLayout />
    default:
      return <div>hello</div>
  }
}

export default Layout
