import React from "react"
import { Grid } from "@mui/material"
import styles from "./ContactSection.module.scss"
import InfoCard from "../../contact-page/info-card/InfoCard"

function ContactSection({ contactData }) {
  const iframePath = contactData.iframePath
  const contactDescription = contactData.contactDescription
  const contactInfo = contactData.contactInfo
  return (
    <div className={styles.contactSection}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <InfoCard
            contactDescription={contactDescription}
            contactInfo={contactInfo}
          />
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
