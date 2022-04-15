import React from "react"
import styles from "./SearchBox.module.scss"
import { Box } from "@mui/system"
import { Button, TextField } from "@mui/material"
import { LocalizationProvider, MobileDatePicker, MobileTimePicker } from "@mui/lab"
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import CssTextField from "../../textfield/CustomeTextField"

export default function SearchBox() {
  const [value, setValue] = React.useState(new Date())

  return (
    <div className={styles.searchBoxDiv}>
      <Box className={styles.searchBox}>
        <CssTextField
          className={styles.searchBoxTextField}
          label="Departure Location"
          placeholder="ex: Iasi"
        />
        <CssTextField
          className={styles.searchBoxTextField}
          label="Arrival Location"
          placeholder="ex: Suceava"
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MobileDatePicker
            variant="standard"
            disablePast
            label="Departure Date"
            value={value}
            onChange={(newValue) => {
              setValue(newValue)
            }}
            renderInput={(params) => (
              <CssTextField className={styles.searchBoxTextFieldDate} {...params} />
            )}
          />
          <MobileTimePicker
            label="Departure Time"
            value={value}
            onChange={(newValue) => {
              setValue(newValue)
            }}
            renderInput={(params) => (
              <CssTextField className={styles.searchBoxTextFieldDate} {...params} />
            )}
          />
        </LocalizationProvider>
        <Button className={styles.searchBoxButton} variant="outlined">
          search route
        </Button>
      </Box>
    </div>
  )
}
