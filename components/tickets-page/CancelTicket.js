import React, { useState } from "react"
import styles from "../../styles/Tickets.module.scss"
import CloseIcon from "@mui/icons-material/Close"
import CssTextField from "../textfield/CustomeTextField"
import { Button } from "@material-ui/core"
import {
  Alert,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
} from "@mui/material"
import axios from "axios"

export default function CheckTicket() {
  const [open, setOpen] = useState(false)
  const [openSnackbar, setOpenSnackBar] = useState(false)
  const [value, setValue] = useState("")
  const [validation, setValidation] = useState(false)

  const handleClickOpen = () => setOpen(true)

  const handleClose = () => {
    setOpen(false)
    setOpenSnackBar(false)
  }
  const checkTicketID = async (ticketID) => {
    const { data } = await axios.get(
      "https://my-super-app-ebae2b7a8c7a.herokuapp.com/tickets"
    )
    const isTicketID = (await data.find((item) => item.id === ticketID)) || undefined
    isTicketID ? setValidation(true) : setValidation(false)
  }

  const deleteTicket = async (ticketId) => {
    const { data } = await axios.delete(
      `https://my-super-app-ebae2b7a8c7a.herokuapp.com/tickets/${ticketId}`
    )
  }

  const handleChange = (e) => {
    setValue(e.target.value), checkTicketID(e.target.value), handleClose()
  }

  const submitHandler = (e) => {
    e.preventDefault(), handleClickOpen(), checkTicketID(value)
  }

  const handleClick = () => {
    setOpenSnackBar(true), deleteTicket(value)
  }

  const showMessage = () => {
    const messageValid = `Your ticket was canceled!`
    const messageInvalid = `Your ticket "${value}" is not valid!`
    return validation ? messageValid : messageInvalid
  }

  return (
    <>
      <div className={styles.pageSubtitle}>
        <CloseIcon fontSize="large" />
        <h2>Cancel your ticket</h2>
      </div>
      <form className={styles.cancelSection} onSubmit={submitHandler}>
        <CssTextField
          required
          className={styles.cancelField}
          label="Enter your ticket ID"
          onChange={handleChange}
          autoComplete="off"
        />
        <Button className={styles.cancelButton} type="submit">
          cancel
        </Button>
        {validation ? (
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle
              id="alert-dialog-title"
              sx={{ color: "#c23227", fontWeight: "bold" }}
            >
              {"Cancel ticket"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText
                id="alert-dialog-description"
                sx={{ fontSize: "1.2rem" }}
              >
                {
                  "If you continue, you will cancel your ticket and there is no way back! You want to continue?"
                }
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} variant="outlined" color="error">
                Cancel
              </Button>
              <Button onClick={handleClick} variant="outlined" color="error">
                Continue
              </Button>
            </DialogActions>
          </Dialog>
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

        {openSnackbar && (
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={openSnackbar}
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
        )}
      </form>
    </>
  )
}
