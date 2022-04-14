import { Container } from "@mui/material"
import Link from "next/link"
import React from "react"
import Banner from "../../components/banner/Banner"
import FaqAccordion from "../../components/faq-page/FaqAccordion"
import styles from "../../components/faq-page/Faq.module.scss"

export default function index() {
  return (
    <>
      <Banner />
      <h1 className="pageTitle">Frequently Asked Questions (FAQ)</h1>
      <p className="pageDescription">
        For a better experience with our website, here it is a special page where you
        can find the frequently asked questions. If your question is not on the list,
        don&apos;t be shy and{" "}
        <strong>
          <Link href={"/contact"}>
            <a>contact us.</a>
          </Link>
        </strong>
      </p>
      <section className={styles.faqSection}>
        <FaqAccordion />
      </section>
    </>
  )
}
