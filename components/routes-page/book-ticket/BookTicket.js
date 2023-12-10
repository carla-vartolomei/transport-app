import react, { useState } from "react"
import Button from "@mui/material/Button"
import styles from "./BookTicket.module.scss"
import BookTicketForm from "./forms/BookTicketForm"
import PaymentForm from "./forms/PaymentForm"
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined"
import { Dialog, DialogContent, DialogTitle } from "@mui/material"
import TicketInfo from "./TicketInfo"
import axios from "axios"

export default function BookTickets({ startPoint, endPoint, price }) {
  const [state, setState] = useState("start")

  const getTicketID = async () => {
    const { data } = await axios.get(
      "https://my-super-app-ebae2b7a8c7a.herokuapp.com/tickets"
    )
    const { id } = data[data.length - 1]
    setTicketID(id)
  }

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [ticketID, setTicketID] = useState(undefined)

  return (
    <>
      <div className={styles.bookRouteSection}>
        <Button variant="outlined" className={styles.bookRoute} onClick={handleOpen}>
          book now
        </Button>
      </div>
      <div className={styles.bookRouteModalSection}>
        <Dialog open={open} onClose={handleClose} className={styles.bookModal}>
          <DialogTitle className={styles.dialogTitle}>
            <CloseOutlinedIcon
              onClick={handleClose}
              className={styles.dialogTitleIcon}
            />
          </DialogTitle>

          <DialogContent>
            {state === "start" && (
              <BookTicketForm
                startPoint={startPoint}
                endPoint={endPoint}
                changeForm={() => {
                  setState("change-form")
                }}
              />
            )}

            {state === "change-form" && (
              <PaymentForm
                modalClose={handleClose}
                startPoint={startPoint}
                endPoint={endPoint}
                price={price}
                changeForm={() => {
                  getTicketID()
                  setState("show-info")
                }}
              />
            )}
            {state === "show-info" && <TicketInfo id={ticketID} />}
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}
