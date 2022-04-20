import React, { useState } from "react"
import styles from "../BookTicket.module.scss"
import Image from "next/image"
import CssTextField from "../../../textfield/CustomeTextField"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import visa from "../../../../assets/visa.png"
import mastercard from "../../../../assets/mastercard.png"
import { Button, InputAdornment } from "@mui/material"
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"

export default function PaymentForm({ startPoint, endPoint, price, changeForm }) {
  const initialState = {
    cardNumber: "",
    cardOwner: "",
    expirationDate: "",
    cvCode: "",
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

  const handleClick = () => {
    changeForm()
  }

  return (
    <form className={styles.bookForm} onSubmit={onSubmitHandler}>
      <h1>Payment Form</h1>
      <h3>Products details</h3>
      <section className={styles.productsDetailsSection}>
        <CssTextField
          label="Products"
          defaultValue={"1 ticket"}
          InputProps={{
            readOnly: true,
          }}
        />
        <CssTextField
          label="Price"
          defaultValue={`${price} lei`}
          InputProps={{
            readOnly: true,
          }}
        />
        <CssTextField
          label="From City"
          defaultValue={startPoint}
          InputProps={{
            readOnly: true,
          }}
        />
        <CssTextField
          label="To City"
          defaultValue={endPoint}
          InputProps={{
            readOnly: true,
          }}
        />
      </section>
      <h3>Payment methods</h3>
      <section className={styles.paymentMethodSection}>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          className={styles.paymentRadioGroup}
        >
          <label className={styles.paymentLabel}>
            <Radio required value="Visa" className={styles.paymentRadio} />
            <Image src={visa} alt="visa-icon" quality="100" />
          </label>
          <label className={styles.paymentLabel}>
            <Radio required value="Mastercard" className={styles.paymentRadio} />
            <Image src={mastercard} alt="mastercard-icon" quality="100" />
          </label>
        </RadioGroup>
      </section>
      <h3>Payment details</h3>
      <section className={styles.paymentDetailsSection}>
        <CssTextField
          required
          id="cardNumber"
          name="cardNumber"
          label="Card number"
          placeholder="ex: 5555555555554444"
          onChange={onChangeHandler}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ paddingRight: "1rem" }}>
                <CreditCardOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
        <CssTextField
          required
          id="cardOwner"
          name="cardOwner"
          label="Card owner"
          placeholder="ex: John Smith"
          autoComplete="Off"
          onChange={onChangeHandler}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ paddingRight: "1rem" }}>
                <PersonOutlineOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
      </section>
      <section className={styles.cardDetails}>
        <CssTextField
          required
          id="expirationDate"
          name="expirationDate"
          helperText="* Please enter expiration date"
          type="month"
          onChange={onChangeHandler}
        />
        <CssTextField
          required
          id="cvCode"
          name="cvCode"
          label="CV Code"
          placeholder="CVC"
          onChange={onChangeHandler}
        />
      </section>
      <Button
        className={styles.formSubmitButton}
        variant="outlined"
        type="submit"
        onClick={handleClick}
      >
        confirm payment
      </Button>
    </form>
  )
}
