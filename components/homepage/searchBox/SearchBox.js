import React, { useState } from "react"
import styles from "./SearchBox.module.scss"
import { Box } from "@mui/system"
import { Button } from "@mui/material"
import CssTextField from "../../textfield/CustomeTextField"
import Link from "next/link"
import { MenuItem } from "@mui/material"

const createData = (value, label) => ({
  value,
  label,
})

const departureLocation = createData("Iasi", "Iasi")
const arrivalLocation = [
  createData("Suceava", "Suceava"),
  createData("Falticeni", "Falticeni"),
  createData("Husi", "Husi"),
  createData("Targu Neamt", "Targu Neamt"),
  createData("Pascani", "Pascani"),
  createData("Targu Frumos", "Targu Frumos"),
  createData("Rediu", "Rediu"),
]

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
    const from = formState.departureLocation.toLowerCase()
    const to = formState.arrivalLocation.split(" ").join("").toLowerCase()
    if (from !== undefined && to !== undefined) {
      let path = `${from}-${to}`
      setPath(`/routes/${path}`)
    }
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()

    const from = formState.departureLocation.toLowerCase()
    const to = formState.arrivalLocation.split(" ").join("").toLowerCase()
    if (from !== undefined && to !== undefined) {
      let path = `${from}-${to}`
      setPath(`/routes/${path}`)
    }
  }

  return (
    <form className={styles.searchBoxDiv} onSubmit={onSubmitHandler}>
      <Box className={styles.searchBox}>
        <CssTextField
          required
          select
          id="departureLocation"
          name="departureLocation"
          className={styles.searchBoxTextField}
          label="Departure Location"
          onChange={onChangeHandler}
          helperText="Please select departure location"
        >
          <MenuItem key={departureLocation.value} value={departureLocation.value}>
            {departureLocation.label}
          </MenuItem>
        </CssTextField>
        <CssTextField
          select
          required
          id="arrivalLocation"
          name="arrivalLocation"
          className={styles.searchBoxTextField}
          label="Arrival Location"
          onChange={onChangeHandler}
          helperText="Please select arrival location"
        >
          {arrivalLocation.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </CssTextField>
        <CssTextField
          required
          className={styles.searchBoxTextFieldDate}
          type="date"
          id="departureDate"
          name="departureDate"
          onChange={onChangeHandler}
          helperText="Please select departure date"
        />
        <CssTextField
          required
          className={styles.searchBoxTextFieldDate}
          type="time"
          id="departureTime"
          name="departureTime"
          onChange={onChangeHandler}
          helperText="Please select departure time"
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
