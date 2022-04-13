import React from "react"
import { Paper } from "@mui/material"
import MailOutlinedIcon from "@mui/icons-material/MailOutlined"
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined"
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined"
import styles from "./InfoCard.module.scss"

const icons = [
  <MailOutlinedIcon key="email-icon" />,
  <PhoneInTalkOutlinedIcon key="phone-icon" />,
  <BusinessOutlinedIcon key="address-icon" />,
]

function InfoCard({ contactDescription, contactInfo }) {
  return (
    <Paper elevation={3} className={styles.contactDetails}>
      <h2 className={styles.contactTitle}>let&apos;s connect</h2>
      <p className={styles.contactDescription}>{contactDescription}</p>
      <ul className={styles.contactInfoList}>
        {contactInfo.map((item, index) => {
          return (
            <li key={index.toString()} className={styles.contactInfoListItem}>
              {icons[index]}
              <p className={styles.contactInfoListItemText}>{item}</p>
            </li>
          )
        })}
      </ul>
    </Paper>
  )
}

export default InfoCard
