import { AppBar, Toolbar, Typography } from "@mui/material"
import React from "react"
import styles from "../styles/Footer.module.scss"

function Footer() {
  return (
    <AppBar position="static" className={styles.footerRoot}>
      <Toolbar>
        <Typography>&copy; All rights reserved</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Footer
