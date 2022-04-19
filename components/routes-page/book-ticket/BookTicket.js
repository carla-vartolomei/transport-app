import react, { useState } from "react"
import Button from "@mui/material/Button"
import styles from "./BookTicket.module.scss"
import BookTicketForm from "./forms/BookTicketForm"
import PaymentForm from "./forms/PaymentForm"
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined"
import { Dialog, DialogContent, DialogTitle } from "@mui/material"
import TicketInfo from "./TicketInfo"

export default function BookTickets({ startPoint, endPoint, price }) {
  const [state, setState] = useState("start")

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <div className={styles.bookRouteSection}>
        <Button variant="outlined" className={styles.bookRoute} onClick={handleOpen}>
          book now
        </Button>
      </div>

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
              changeForm={() => setState("change-form")}
            />
          )}

          {state === "change-form" && (
            <PaymentForm
              modalClose={handleClose}
              startPoint={startPoint}
              endPoint={endPoint}
              price={price}
              changeForm={() => setState("show-info")}
            />
          )}
          {state === "show-info" && <TicketInfo />}
        </DialogContent>
      </Dialog>
    </>
  )
}
