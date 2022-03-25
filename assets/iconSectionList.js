import React from "react"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
import MapOutlinedIcon from "@mui/icons-material/MapOutlined"
import LocalActivityOutlinedIcon from "@mui/icons-material/LocalActivityOutlined"
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined"
import DirectionsBusOutlinedIcon from "@mui/icons-material/DirectionsBusOutlined"
import styles from "../styles/IconSection.module.scss"

const data = [
  {
    title: 240,
    subtitle: "destinations",
    children: (
      <LocationOnOutlinedIcon fontSize="large" className={styles.circleIcon} />
    ),
  },
  {
    title: 60,
    subtitle: "daily routes",
    children: <MapOutlinedIcon fontSize="large" className={styles.circleIcon} />,
  },
  {
    title: 303,
    subtitle: "tickets sold",
    children: (
      <LocalActivityOutlinedIcon fontSize="large" className={styles.circleIcon} />
    ),
  },
  {
    title: 42,
    subtitle: "employees",
    children: (
      <PeopleAltOutlinedIcon fontSize="large" className={styles.circleIcon} />
    ),
  },
  {
    title: 23,
    subtitle: "autobuses",
    children: (
      <DirectionsBusOutlinedIcon fontSize="large" className={styles.circleIcon} />
    ),
  },
]

module.exports = data
