import React from "react"
import Banner from "../../components/banner/Banner"
import Form from "../../components/contact-page/Form"
import styles from "../../styles/Contact.module.scss"

export default function Contact() {
  return (
    <>
      <Banner />
      <h1 className={styles.pageTitle}>Contact us</h1>
      <Form />
    </>
  )
}
