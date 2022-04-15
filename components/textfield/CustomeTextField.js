import React from "react"
import { styled } from "@mui/material/styles"
import { TextField } from "@mui/material"

export default function CustomeTextField(props) {
  return <CssTextField {...props} />
}

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#6f22b3",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#6f22b3",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#6f22b3",
    },
    "&:hover fieldset": {
      borderColor: "#6f22b3",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6f22b3",
    },
  },
})
