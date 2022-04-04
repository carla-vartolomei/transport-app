import React, { useState } from "react"
import { Box, Button, TextField } from "@material-ui/core"
import styles from "./Form.module.scss"

const intialState = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
}

function Form() {
  const [formState, setFormState] = useState(intialState)

  const onChangeHandler = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    setFormState({
      ...formState,
      [e.target.name]: value,
    })
  }

  const onClickHandler = () => setFormState(intialState)
  const onSubmitHandler = (e) => {
    e.preventDefault()
    console.log(formState)
  }
  return (
    <Box>
      <h3 className={styles.formTitle}>Leave us a message:</h3>
      <form className={styles.contactForm} onSubmit={onSubmitHandler}>
        <div className={styles.nameSection}>
          <TextField
            className={styles.formInput}
            id="firstName"
            name="firstName"
            label="First Name"
            placeholder="ex: John"
            autoComplete="off"
            variant="standard"
            onChange={onChangeHandler}
          />
          <TextField
            className={styles.formInput}
            id="lastName"
            name="lastName"
            label="Last Name"
            placeholder="ex: Smith"
            autoComplete="off"
            variant="standard"
            onChange={onChangeHandler}
          />
        </div>
        <TextField
          className={styles.formInput}
          id="email"
          name="email"
          label="E-mail"
          placeholder="ex: john.smith@gmail.com"
          type="email"
          autoComplete="off"
          variant="standard"
          onChange={onChangeHandler}
        />
        <TextField
          className={styles.formTextArea}
          id="message"
          name="message"
          label="Your message"
          placeholder="Leave your message here"
          multiline
          minRows={2}
          maxRows={10}
          onChange={onChangeHandler}
        />
        <Button className={styles.formSubmitButton} variant="outlined" type="submit">
          submit
        </Button>
      </form>
    </Box>
  )
}

export default Form
