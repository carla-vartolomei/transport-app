import React from "react"
import { Grid, Paper } from "@mui/material"
import styles from "./ContactSection.module.scss"
import { contactDescription, contactData, iframePath } from "./data"

function ContactSection() {
  return (
    <div className={styles.contactSection}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Paper elevation={3} className={styles.contactDetails}>
            <h2 className={styles.contactTitle}>let&apos;s connect</h2>
            <p className={styles.contactDescription}>{contactDescription}</p>
            <ul className={styles.contactInfoList}>
              {contactData.map((item, index) => (
                <li key={index.toString()} className={styles.contactInfoListItem}>
                  {item.icon}
                  <p className={styles.contactInfoListItemText}>{item.info}</p>
                </li>
              ))}
            </ul>
          </Paper>
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
