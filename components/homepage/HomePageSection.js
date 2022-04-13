import React from "react"
import AboutSection from "./aboutSection/AboutSection"
import ContactSection from "./contactSection/ContactSection"
import DiscountSection from "./discountSection/DiscountSection"
import RouteSection from "./routeSection/RouteSection"

const HomePageSection = ({ pageName, discounts }) => {
  switch (pageName) {
    case "about":
      return <AboutSection />
    case "routes":
      return <RouteSection />
    case "discounts":
      return <DiscountSection discounts={discounts} />
    case "contact":
      return <ContactSection />
    default:
      return <div>hello</div>
  }
}

export default HomePageSection
