import React from "react"
import banner from "../assets/banner.png"
import Image from "next/image"
import Link from "next/link"
import { Container, Paper } from "@mui/material"
import styles from "../styles/Home.module.scss"
import PageDetail from "../components/PageDetail"
import Layout from "../components/Layout"

const pagesName = ["about", "routes", "tickets", "discounts", "contact"]

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
      {pagesName.map((pageName, index) => (
        <PageDetail key={`${index}-${pageName}`} pageName={pageName}>
          <Layout pageName={pageName} />
        </PageDetail>
      ))}
    </>
  )
}
