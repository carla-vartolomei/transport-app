import React from "react"
import { Grid, Paper } from "@mui/material"
import styles from "../../styles/ContactLayout.module.scss"
import MailOutlinedIcon from "@mui/icons-material/MailOutlined"
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined"
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined"

function ContactLayout() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Paper elevation={3} className={styles.contactDetails}>
            <h2 className={styles.contactTitle}>let&apos;s connect</h2>
            <p className={styles.contactDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nobis
              incidunt ut distinctio itaque sed odio qui in quibusdam animi quasi cum
              corporis earum suscipit provident repudiandae excepturi sunt
              aspernatur?
            </p>
            <ul className={styles.contactInfoList}>
              <li className={styles.contactInfoListItem}>
                <MailOutlinedIcon />
                <p className={styles.contactInfoListItemText}>yntiasi@yahoo.com</p>
              </li>
              <li className={styles.contactInfoListItem}>
                <PhoneInTalkOutlinedIcon />
                <p className={styles.contactInfoListItemText}>0232.210.445</p>
              </li>
              <li className={styles.contactInfoListItem}>
                <BusinessOutlinedIcon />
                <p className={styles.contactInfoListItemText}>
                  str. Arcu, nr. 1, bl T3, Mezanin, office 7, IASI
                </p>
              </li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <div className={styles.mapSectionDiv}>
            <iframe
              className={styles.mapSection}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2712.585244635353!2d27.575801315579447!3d47.16597697915797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cafb7aed19103f%3A0xe34a55fae6bd134b!2sStrada%20Arcu%201%2C%20Ia%C8%99i%20700259!5e0!3m2!1sro!2sro!4v1648471616456!5m2!1sro!2sro"
            ></iframe>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default ContactLayout
