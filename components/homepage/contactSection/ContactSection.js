import React from "react"
import { Grid, Paper } from "@mui/material"
import styles from "./ContactSection.module.scss"
import { iframePath } from "./data"
import InfoCard from "../../contact-page/info-card/InfoCard"

function ContactSection() {
  return (
    <div className={styles.contactSection}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <InfoCard />
        </Grid>
        <Grid item xs={8}>
          <div className={styles.mapSectionDiv}>
            <iframe className={styles.mapSection} src={iframePath} />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default ContactSection
