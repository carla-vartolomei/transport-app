import React from "react"
import AboutLayout from "./about-layout/AboutLayout"
import ContactLayout from "./contact-layout/ContactLayout"
import DiscountsLayout from "./discounts-layout/DiscountsLayout"
import RoutesLayout from "./routes-layout/RoutesLayout"

const Layout = ({ pageName }) => {
  switch (pageName) {
    case "about":
      return <AboutLayout />
    case "routes":
      return <RoutesLayout />
    case "discounts":
      return <DiscountsLayout />
    case "contact":
      return <ContactLayout />
    default:
      return <div>hello</div>
  }
}

export default Layout
