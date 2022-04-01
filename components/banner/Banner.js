import React from "react"
import styles from "./Banner.module.scss"
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus"

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerTitleSection}>
        <DirectionsBusIcon className={styles.bannerTitleIcon} />
        <h1 className={styles.bannerTitle}>Intertrans Company</h1>
      </div>
      <h3 className={styles.bannerSubTitle}>→ takes you anywhere ←</h3>
    </div>
  )
}

export default Banner
