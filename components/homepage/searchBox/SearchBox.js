import React, { useState } from "react"
import styles from "./SearchBox.module.scss"
import { Box } from "@mui/system"
import { Button } from "@mui/material"
import CssTextField from "../../textfield/CustomeTextField"
import Link from "next/link"

const initialState = {
  departureLocation: "",
  arrivalLocation: "",
  departureDate: "",
  departureTime: "",
}

export default function SearchBox() {
  const [formState, setFormState] = useState(initialState)
  const [path, setPath] = useState("/")

  const onChangeHandler = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
    let path = `${formState.departureLocation.toLowerCase()}-${formState.arrivalLocation.toLocaleLowerCase()}`

    setPath(`/routes/${path}`)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    console.log(formState)
  }

  return (
    <form className={styles.searchBoxDiv} onSubmit={onSubmitHandler}>
      <Box className={styles.searchBox}>
        <CssTextField
          required
          id="departureLocation"
          name="departureLocation"
          className={styles.searchBoxTextField}
          label="Departure Location"
          placeholder="ex: Iasi"
          onChange={onChangeHandler}
        />
        <CssTextField
          required
          id="arrivalLocation"
          name="arrivalLocation"
          className={styles.searchBoxTextField}
          label="Arrival Location"
          placeholder="ex: Suceava"
          onChange={onChangeHandler}
        />
        <CssTextField
          className={styles.searchBoxTextFieldDate}
          type="date"
          id="departureDate"
          name="departureDate"
          onChange={onChangeHandler}
        />
        <CssTextField
          className={styles.searchBoxTextFieldDate}
          type="time"
          id="departureTime"
          name="departureTime"
          onChange={onChangeHandler}
        />

        <Button className={styles.searchBoxButton} type="submit">
          <Link href={path}>
            <a>search route</a>
          </Link>
        </Button>
      </Box>
    </form>
  )
}
