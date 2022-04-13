import React from "react"
import AboutSection from "./aboutSection/AboutSection"
import ContactSection from "./contactSection/ContactSection"
import DiscountSection from "./discountSection/DiscountSection"
import RouteSection from "./routeSection/RouteSection"

const HomePageSection = ({
  pageName,
  discounts,
  busRoutes,
  contactData,
  aboutData,
}) => {
  switch (pageName) {
    case "about":
      return <AboutSection aboutData={aboutData} />
    case "routes":
      return <RouteSection busRoutes={busRoutes} />
    case "discounts":
      return <DiscountSection discounts={discounts} />
    case "contact":
      return <ContactSection contactData={contactData} />
    default:
      return <div>hello</div>
  }
}

export default HomePageSection
