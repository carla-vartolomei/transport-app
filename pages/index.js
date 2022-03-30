import React from "react"
import banner from "../assets/banner.png"
import Image from "next/image"
import Link from "next/link"
import { Container } from "@mui/material"
import styles from "../styles/Home.module.scss"
import PageDetail from "../components/PageDetail"
import HomePageSection from "../components/HomePageSection"
import SearchBox from "../components/search-box/SearchBox"

const pagesName = ["about", "routes", "discounts", "contact"]

export default function Home() {
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
            <HomePageSection pageName={pageName} />
          </PageDetail>
        ))}
      </div>
    </>
  )
}
