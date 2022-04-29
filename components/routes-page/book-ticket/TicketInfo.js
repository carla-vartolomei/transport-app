import React from "react"
import styles from "./BookTicket.module.scss"
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined"

export default function ticketInfo({ id }) {
  console.log("id", id)
  return (
    <div className={styles.ticketInfoCard}>
      <h1>ticket info</h1>
      <div className={styles.paymentMessage}>
        <PaidOutlinedIcon />
        <h2>Payment successful!</h2>
      </div>
      <div className={styles.ticketMessage}>
        <h2>Your ticket number is: </h2>
        <span>{id}</span>
      </div>
    </div>
  )
}
