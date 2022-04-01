import React from "react"
import styles from "./Banner.module.scss"

function Banner() {
  return (
    <div className={styles.banner}>
      <h1 className={styles.bannerTitle}>Intertrans Company</h1>
      <h3 className={styles.bannerSubTitle}>→ takes you anywhere ←</h3>
    </div>
  )
}

export default Banner
