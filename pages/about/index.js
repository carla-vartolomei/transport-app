import React from "react"
import Banner from "../../components/banner/Banner"
import VisionMissionSection from "../../components/about-page/VisionMissionSection"
import CompanyDataSection from "../../components/about-page/CompanyDataSection"

export default function About() {
  return (
    <>
      <Banner />
      <h1 className="pageTitle">About us</h1>
      <p className="pageDescription">
        INTERTRANSCOM S.R.L. was founded on 03.10.2000 and since then it provides
        high quality transport services. The principles made this company stand out
        in the short time on the market as the main player in passenger transport
        services, and the quality of services exceeded the expectations of the
        beneficiaries.
      </p>
      <VisionMissionSection />
      <p className="pageDescription">
        The young management team pioneered the introduction of satellite fleet
        monitoring, TV / DVD equipment, wireless internet of the car park, receiving
        the appreciation of large-scale customers when occupying the place.
      </p>
      <CompanyDataSection />
    </>
  )
}
