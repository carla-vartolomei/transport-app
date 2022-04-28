import React, { useState } from "react"
import axios from "axios"
import Button from "@mui/material/Button"
import styles from "../BookTicket.module.scss"
import CssTextField from "../../../textfield/CustomeTextField"

const postTicket = async (ticket) => {
  const { data } = await axios({
    method: "post",
    url: "https://my-transport-api.herokuapp.com/tickets",
    data: { ...ticket },
  })

  console.log(data)
}

export default function BookTicketForm({ startPoint, endPoint, changeForm }) {
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
    const ticket = {
      firstName: formState.firstName,
      lastName: formState.lastName,
      phone: formState.phone,
      email: formState.email,
      fromCity: formState.fromCity,
      toCity: formState.toCity,
      departureDate: formState.departureDate,
      departureTime: formState.departureTime,
      comment: formState.comment,
    }
    postTicket(ticket)
    changeForm()
  }
  return (
    <form method="post" className={styles.bookForm} onSubmit={onSubmitHandler}>
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
          helperText="Please select departure date"
        />
        <CssTextField
          required
          id="departureTime"
          name="departureTime"
          onChange={onChangeHandler}
          type="time"
          helperText="Please select departure date"
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
      <Button className={styles.formSubmitButton} variant="outlined" type="submit">
        go for pay
      </Button>
    </form>
  )
}
