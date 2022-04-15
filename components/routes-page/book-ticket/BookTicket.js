import react, { useState } from "react"
import Button from "@mui/material/Button"
import Modal from "@mui/material/Modal"
import styles from "./BookTicket.module.scss"
import CssTextField from "../../textfield/CustomeTextField"

export default function BookTickets({ startPoint, endPoint }) {
  const initialState = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    fromCity: startPoint,
    toCity: endPoint,
    departureDate: "",
    departureTime: "",
    comment: "",
  }
  const [formState, setFormState] = useState(initialState)

  const onChangeHandler = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    console.log(formState)
  }

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <div className={styles.bookRouteSection}>
        <Button variant="outlined" className={styles.bookRoute} onClick={handleOpen}>
          book now
        </Button>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={styles.bookModal}
      >
        <form className={styles.bookForm} onSubmit={onSubmitHandler}>
          <h1>Book Tickets Form</h1>
          <section className={styles.personalDetailsSection}>
            <CssTextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              placeholder="ex: John"
              onChange={onChangeHandler}
            />
            <CssTextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              placeholder="ex: Smith"
              onChange={onChangeHandler}
            />
            <CssTextField
              required
              id="phone"
              name="phone"
              label="Phone"
              placeholder="ex: 0723 456 789"
              type="tel"
              onChange={onChangeHandler}
            />
            <CssTextField
              required
              id="email"
              name="email"
              label="E-mail"
              placeholder="ex: john.smith@gmail.com"
              type="email"
              onChange={onChangeHandler}
            />
          </section>
          <h3>Travel Details</h3>
          <section className={styles.travelDetailsSection}>
            <CssTextField
              id="fromCity"
              name="fromCity"
              label="From City"
              defaultValue={startPoint}
              onChange={onChangeHandler}
              InputProps={{
                readOnly: true,
              }}
            />
            <CssTextField
              id="toCity"
              name="toCity"
              label="To City"
              defaultValue={endPoint}
              onChange={onChangeHandler}
              InputProps={{
                readOnly: true,
              }}
            />
            <CssTextField
              required
              id="departureDate"
              name="departureDate"
              onChange={onChangeHandler}
              type="date"
            />
            <CssTextField
              required
              id="departureTime"
              name="departureTime"
              onChange={onChangeHandler}
              type="time"
            />
          </section>
          <h3>Comments</h3>
          <CssTextField
            id="comment"
            name="comment"
            className={styles.commentSection}
            placeholder="Leave your comment here"
            multiline
            maxRows={5}
            onChange={onChangeHandler}
          />
          <Button
            className={styles.formSubmitButton}
            variant="outlined"
            type="submit"
          >
            submit
          </Button>
        </form>
      </Modal>
    </div>
  )
}
