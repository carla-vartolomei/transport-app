import { Paper } from "@mui/material"
import styles from "../../styles/IconSection.module.scss"

import React from "react"

function IconSection({ iconTitle, iconSubTitle, children }) {
  return (
    <div className={styles.sectionElement}>
      <Paper elevation={3} className={styles.circle}>
        {children}
      </Paper>
      <h1 className={styles.detailIcon}>{iconTitle}</h1>
      <h4 className={styles.detailIcon}>{iconSubTitle}</h4>
    </div>
  )
}

export default IconSection
