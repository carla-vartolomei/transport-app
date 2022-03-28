import React from "react"
import { Grid, Paper } from "@mui/material"
import styles from "../../styles/ContactLayout.module.scss"

function ContactLayout() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Paper elevation={3} className={styles.contactDetails}>
            <h3 className={styles.contactTitle}>contact info:</h3>
            <ul className={styles.contactInfoList}>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <h3> hello</h3>
        </Grid>
      </Grid>
    </div>
  )
}

export default ContactLayout
