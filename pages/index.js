import React from "react"
import banner from "../assets/banner.png"
import Image from "next/image"
import Link from "next/link"
import axios from "axios"
import { Container } from "@mui/material"
import styles from "../styles/Home.module.scss"
import PageDetail from "../components/homepage/pageDetail/PageDetail"
import HomePageSection from "../components/homepage/HomePageSection"
import SearchBox from "../components/homepage/searchBox/SearchBox"

const pagesName = ["about", "routes", "discounts", "contact"]

export default function Home({ discounts, busRoutes, contactData }) {
  return (
    <>
      <Container fixed className={styles.containerImage}>
        <Link href="/about">
          <a>
            <Image src={banner} alt="Banner" quality={100} priority />
          </a>
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
            />
          </PageDetail>
        ))}
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const { data: discounts } = await axios.get(`http://localhost:3000/api/discounts`)
  const { data: busRoutes } = await axios.get(`http://localhost:3000/api/bus-routes`)
  const { data: contactData } = await axios.get(`http://localhost:3000/api/contact`)

  return {
    props: {
      discounts,
      busRoutes,
      contactData,
    },
  }
}
