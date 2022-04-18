import React from "react"
import Banner from "../../components/banner/Banner"
import styles from "../../styles/PrivacyPolicy.module.scss"

export default function index() {
  return (
    <>
      <Banner />
      <h1 className="pageTitle">Privacy policy</h1>
      <h2 className={styles.pageSubtitle}>Introduction</h2>
      <p></p>
    </>
  )
}
