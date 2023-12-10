import React from "react"
import banner from "../assets/banner.png"
import Image from "next/image"
import Link from "next/link"
import axios from "axios"
import { Box, Container } from "@mui/material"
import styles from "../styles/Home.module.scss"
import PageDetail from "../components/homepage/pageDetail/PageDetail"
import HomePageSection from "../components/homepage/HomePageSection"
import SearchBox from "../components/homepage/searchBox/SearchBox"

const pagesName = ["about", "routes", "discounts", "contact"]

export default function Home({ discounts, busRoutes, contactData, aboutData }) {
  return (
    <>
      <Container fixed className={styles.containerImage}>
        <Link href="/about">
          <Image src={banner} alt="Banner" quality={100} priority />
        </Link>
      </Container>
      <SearchBox />
      <div>
        {pagesName.map((pageName, index) => (
          <PageDetail key={`${index}-${pageName}`} pageName={pageName}>
            <HomePageSection
              pageName={pageName}
              discounts={discounts}
              busRoutes={busRoutes}
              contactData={contactData}
              aboutData={aboutData}
            />
          </PageDetail>
        ))}
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const { data: discounts } = await axios.get(
    "https://my-super-app-ebae2b7a8c7a.herokuapp.com/discounts"
  )
  const { data: busRoutes } = await axios.get(
    "https://my-super-app-ebae2b7a8c7a.herokuapp.com/bus-routes"
  )
  const { data: contactData } = await axios.get(
    "https://my-super-app-ebae2b7a8c7a.herokuapp.com/contact-data"
  )
  const { data: aboutData } = await axios.get(
    "https://my-super-app-ebae2b7a8c7a.herokuapp.com/icon-section-list"
  )

  return {
    props: {
      discounts,
      busRoutes,
      contactData,
      aboutData,
    },
  }
}
