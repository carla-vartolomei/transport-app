import React from "react"
import { Paper } from "@mui/material"
import styles from "./InfoCard.module.scss"
import { contactDescription, contactData } from "../../homepage/contactSection/data"

function InfoCard() {
  return (
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
  )
}

export default InfoCard
