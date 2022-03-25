import React from "react"
import { Paper } from "@mui/material"
import styles from "../../styles/RoutesLayout.module.scss"
import { Box } from "@mui/system"

function RoutesLayout() {
  return (
    <>
      <div className={styles.scrollBar}>
        <Box className={styles.boxRoutes}>
          <Paper elevation={3} className={styles.cardRout} />
          <Paper elevation={3} className={styles.cardRout} />
          <Paper elevation={3} className={styles.cardRout} />
          <Paper elevation={3} className={styles.cardRout} />
          <Paper elevation={3} className={styles.cardRout} />
          <Paper elevation={3} className={styles.cardRout} />
        </Box>
      </div>
    </>
  )
}

export default RoutesLayout
