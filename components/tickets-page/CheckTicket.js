import React, { useState } from "react"
import styles from "../../styles/Tickets.module.scss"
import CheckIcon from "@mui/icons-material/Check"
import CssTextField from "../textfield/CustomeTextField"
import { Button } from "@material-ui/core"
import { Alert, Snackbar } from "@mui/material"
import axios from "axios"

export default function CheckTicket() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  const [validation, setValidation] = useState(false)

  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const checkTicketID = async (ticketID) => {
    const { data } = await axios.get(
      "https://transport-api-94aef37b9efd.herokuapp.com/tickets"
    )
    const isTicketID = (await data.find((item) => item.id === ticketID)) || undefined
    isTicketID ? setValidation(true) : setValidation(false)
  }

  const handleChange = (e) => {
    setValue(e.target.value), checkTicketID(e.target.value), handleClose()
  }

  const submitHandler = (e) => {
    e.preventDefault()
    handleClickOpen()
    checkTicketID(value)
  }

  const showMessage = () => {
    const messageValid = `Your ticket "${value}" is valid!`
    const messageInvalid = `Your ticket "${value}" is not valid!`
    return validation ? messageValid : messageInvalid
  }

  return (
    <>
      <div className={styles.pageSubtitle}>
        <CheckIcon fontSize="large" />
        <h2>Check your ticket</h2>
      </div>
      <form className={styles.checkSection} onSubmit={submitHandler}>
        <CssTextField
          required
          className={styles.checkField}
          label="Enter your ticket ID"
          onChange={handleChange}
          autoComplete="off"
        />
        <Button className={styles.checkButton} type="submit">
          check
        </Button>
        {validation ? (
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={open}
            autoHideDuration={10000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%", padding: "0.75rem", fontSize: "1.2rem" }}
            >
              {showMessage()}
            </Alert>
          </Snackbar>
        ) : (
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={open}
            autoHideDuration={10000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%", padding: "0.75rem", fontSize: "1.2rem" }}
            >
              {showMessage()}
            </Alert>
          </Snackbar>
        )}
      </form>
    </>
  )
}
