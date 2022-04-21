import React, { useState } from "react"
import styles from "../../styles/Tickets.module.scss"
import CheckIcon from "@mui/icons-material/Check"
import CssTextField from "../textfield/CustomeTextField"
import { Button } from "@material-ui/core"
import { Alert, Snackbar } from "@mui/material"

export default function CheckTicket() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  const [validation, setValidation] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    handleClickOpen()
    if (
      value[0]?.toUpperCase() === "T" &&
      value[1]?.toUpperCase() === "K" &&
      value.length >= 3 &&
      value.length <= 5
    )
      setValidation(true)
    else setValidation(false)
  }

  const showMessage = () => {
    const messageValid = `Your ticket "${value}" is valid!`
    const messageInvalid = `Your ticket "${value}" is not valid!`

    if (
      value[0]?.toUpperCase() === "T" &&
      value[1]?.toUpperCase() === "K" &&
      value.length >= 3 &&
      value.length <= 5
    )
      return messageValid
    else return messageInvalid
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
          label="Enter your ticket number"
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
