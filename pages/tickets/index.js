import { Button, Container } from "@material-ui/core"
import React from "react"
import Banner from "../../components/banner/Banner"
import styles from "../../styles/Tickets.module.scss"
import CheckIcon from "@mui/icons-material/Check"
import CloseIcon from "@mui/icons-material/Close"
import CssTextField from "../../components/textfield/CustomeTextField"

export default function index() {
  return (
    <>
      <Banner />
      <h1 className="pageTitle">Tickets</h1>
      <p className="pageDescription">
        Tickets are proof of payment and reservation of a seat on a certain route on
        a certain date and time. To check the existence of the ticket look for the
        ticket by series. Also, if you want to cancel a ticket, look for it by series
        and cancel it.
      </p>
      <div className={styles.pageSubtitle}>
        <CheckIcon fontSize="large" />
        <h2>Check your ticket</h2>
      </div>
      <section className={styles.checkSection}>
        <CssTextField
          className={styles.checkField}
          label="Enter your ticket number"
        />
        <Button className={styles.checkButton}>check</Button>
      </section>
      <div className={styles.pageSubtitle}>
        <CloseIcon fontSize="large" />
        <h2>Cancel your ticket</h2>
      </div>
      <section className={styles.cancelSection}>
        <CssTextField
          className={styles.cancelField}
          label="Enter your ticket number"
        />
        <Button className={styles.cancelButton}>cancel</Button>
      </section>
    </>
  )
}
