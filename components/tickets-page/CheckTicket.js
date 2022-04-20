import React, { useState } from "react"
import styles from "../../styles/Tickets.module.scss"
import CheckIcon from "@mui/icons-material/Check"
import CssTextField from "../textfield/CustomeTextField"
import { Button } from "@material-ui/core"
import { Dialog, DialogContent, DialogContentText, DialogTitle } from "@mui/material"

export default function CheckTicket() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

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
  }

  const showMessage = () => {
    const messageValid = `Your ticket "${value}" is valid!`
    const messageInvalid = `Your ticket "${value}" is not valid!`

    if (value[0] === "T" && value[1] === "K") return messageValid
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
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle
            id="alert-dialog-title"
            sx={{ color: "#6f22b3", fontWeight: "bold" }}
          >
            {"Ticket checked"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              id="alert-dialog-description"
              sx={{ fontSize: "1.5rem" }}
            >
              {showMessage()}
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </form>
    </>
  )
}
