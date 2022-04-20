import React from "react"
import styles from "../../styles/Tickets.module.scss"
import CloseIcon from "@mui/icons-material/Close"
import CssTextField from "../textfield/CustomeTextField"
import { Button, Tooltip } from "@material-ui/core"

export default function CheckTicket() {
  return (
    <>
      <div className={styles.pageSubtitle}>
        <CloseIcon fontSize="large" />
        <h2>Cancel your ticket</h2>
      </div>
      <section className={styles.cancelSection}>
        <CssTextField
          className={styles.cancelField}
          label="Enter your ticket number"
        />
        <Tooltip
          title={
            <span style={{ fontSize: "1.05rem", color: "white" }}>
              If you click on this button, you will cancel your ticket and there is
              no way back!
            </span>
          }
          leaveDelay={500}
          placement="right-end"
        >
          <Button className={styles.cancelButton}>cancel</Button>
        </Tooltip>
      </section>
    </>
  )
}
