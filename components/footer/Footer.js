import { Container, Grid } from "@material-ui/core"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import styles from "./Footer.module.scss"
import visa from "../../assets/visa.png"
import mastercard from "../../assets/mastercard.png"

function Footer() {
  return (
    <footer className={styles.footerRoot}>
      <section className={styles.footerLinksSection}>
        <div className={styles.footerContainer}>
          <div>
            <h5 className={styles.footerLinksTitle}>Information about company</h5>
            <ul className={styles.footerLinksList}>
              <li className={styles.footerLinksListItem}>
                <Link href="/routes">Autobuses routes</Link>
              </li>
              <li className={styles.footerLinksListItem}>
                <Link href="/tickets">Tickets</Link>
              </li>
              <li className={styles.footerLinksListItem}>
                <Link href="/privacy-policy">Privacy policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className={styles.footerLinksTitle}>Juridical information</h5>
            <ul className={styles.footerLinksList}>
              <li className={styles.footerLinksListItem}>
                <a href="https://anpc.ro/">ANPC</a>
              </li>
              <li className={styles.footerLinksListItem}>
                <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage">
                  SOL
                </a>
              </li>
              <li className={styles.footerLinksListItem}>
                <a href="https://www.arr.ro/">ARR</a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className={styles.footerLinksTitle}>Frequently Asked Questions</h5>
            <ul className={styles.footerLinksList}>
              <li className={styles.footerLinksListItem}>
                <Link href="/faq">How can I book a ticket?</Link>
              </li>
              <li className={styles.footerLinksListItem}>
                <Link href="/faq">Where I can check my tickets?</Link>
              </li>
              <li className={styles.footerLinksListItem}>
                <Link href="/faq">How can I cancel a ticket?</Link>
              </li>
              <li className={styles.footerLinksListItem}>
                <Link href="/faq">Do I have a discount as a student?</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <h6 className={styles.paymentsText}>We accept payments with</h6>
      <section className={styles.paymentsIcons}>
        <Image src={visa} alt="visa-icon" />
        <Image src={mastercard} alt="mastercard-icon" />
      </section>
      <h5 className={styles.footerText}>&copy; All rights reserved</h5>
    </footer>
  )
}

export default Footer
