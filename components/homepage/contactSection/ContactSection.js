import React from "react"
import { Grid } from "@mui/material"
import styles from "./ContactSection.module.scss"
import InfoCard from "../../contact-page/info-card/InfoCard"

function ContactSection({ contactData }) {
  const iframePath = contactData.iframePath
  const contactDescription = contactData.contactDescription
  const contactInfo = contactData.contactInfo
  return (
    <>
      <section className={styles.contactSection}>
        <InfoCard
          contactDescription={contactDescription}
          contactInfo={contactInfo}
        />

        <div className={styles.mapSectionDiv}>
          <iframe className={styles.mapSection} src={iframePath} />
        </div>
      </section>
    </>
  )
}

export default ContactSection
