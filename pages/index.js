import React from "react"
import banner from "../assets/banner.png"
import Image from "next/image"
import Link from "next/link"
import { Container } from "@mui/material"
import styles from "../styles/Home.module.css"
import PageDetail from "../components/PageDetail"

export default function Home() {
  return (
    <>
      <Container fixed className={styles.containerImage}>
        <Link href="/about">
          <a>
            <Image
              src={banner}
              alt="Banner"
              width={900}
              height={450}
              quality={100}
              priority
            />
          </a>
        </Link>
      </Container>
      <PageDetail pageName="about" />
      <PageDetail pageName="routes" />
      <PageDetail pageName="tickets" />
      <PageDetail pageName="discounts" />
      <PageDetail pageName="contact" />
    </>
  )
}
