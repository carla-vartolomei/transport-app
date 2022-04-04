import { Box, Container } from "@material-ui/core"
import React from "react"
import Banner from "../../components/banner/Banner"
import Form from "../../components/contact-page/Form"
import InfoCard from "../../components/contact-page/InfoCard"
import styles from "../../styles/Contact.module.scss"

export default function Contact() {
  return (
    <>
      <Banner />
      <h1 className={styles.pageTitle}>Contact us</h1>
      <Form />
      <div className={styles.infoContainer}>
        <Box className={styles.infoBox}>
          <InfoCard />
        </Box>
      </div>
      <div className={styles.backDiv}></div>
    </>
  )
}
