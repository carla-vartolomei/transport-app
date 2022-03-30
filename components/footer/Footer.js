import React from "react"
import styles from "./Footer.module.scss"

function Footer() {
  return (
    <footer className={styles.footerRoot}>
      <p className={styles.footerText}>&copy; All rights reserved</p>
    </footer>
  )
}

export default Footer