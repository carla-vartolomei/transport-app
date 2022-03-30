import React from "react"
import styles from "../../styles/SearchBox.module.scss"
import { Box } from "@mui/system"
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material"
import { LocalizationProvider, MobileDatePicker, MobileTimePicker } from "@mui/lab"
import AdapterDateFns from "@mui/lab/AdapterDateFns"

export default function SearchBox() {
  const [value, setValue] = React.useState(new Date())

  return (
    <div className={styles.searchBoxDiv}>
      <Box className={styles.searchBox}>
        <TextField
          className={styles.searchBoxTextField}
          label="📍 Departure Location"
          placeholder="ex: Iasi"
          color="secondary"
          variant="standard"
        />
        <TextField
          className={styles.searchBoxTextField}
          label="📍 Arrival Location"
          placeholder="ex: Suceava"
          color="secondary"
          variant="standard"
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MobileDatePicker
            variant="standard"
            disablePast
            label="📅 Departure Date"
            value={value}
            onChange={(newValue) => {
              setValue(newValue)
            }}
            renderInput={(params) => (
              <TextField
                variant="standard"
                color="secondary"
                className={styles.searchBoxTextFieldDate}
                {...params}
              />
            )}
          />
          <MobileTimePicker
            label="⏰ Departure Time"
            value={value}
            onChange={(newValue) => {
              setValue(newValue)
            }}
            renderInput={(params) => (
              <TextField
                variant="standard"
                color="secondary"
                className={styles.searchBoxTextFieldDate}
                {...params}
              />
            )}
          />
        </LocalizationProvider>
        <Button className={styles.searchBoxButton} variant="outlined">
          Search route
        </Button>
      </Box>
    </div>
  )
}
