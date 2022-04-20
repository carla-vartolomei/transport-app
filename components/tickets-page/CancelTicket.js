import React, { useState } from "react"
import styles from "../../styles/Tickets.module.scss"
import CloseIcon from "@mui/icons-material/Close"
import CssTextField from "../textfield/CustomeTextField"
import { Button, Tooltip } from "@material-ui/core"
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material"

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
          label="Enter your ticket number"
          onChange={handleChange}
          autoComplete="off"
        />
        <Button className={styles.cancelButton} type="submit">
          cancel
        </Button>
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
            <Button onClick={handleClose} variant="outlined" color="error">
              Continue
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </>
  )
}
