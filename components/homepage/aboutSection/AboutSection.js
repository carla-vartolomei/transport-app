/* eslint-disable react/no-unescaped-entities */
import React from "react"
import styles from "./IconSection.module.scss"
import IconSection from "./IconSection"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
import MapOutlinedIcon from "@mui/icons-material/MapOutlined"
import LocalActivityOutlinedIcon from "@mui/icons-material/LocalActivityOutlined"
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined"
import DirectionsBusOutlinedIcon from "@mui/icons-material/DirectionsBusOutlined"

export default function AboutSection({ aboutData }) {
  return (
    <>
      <p className={styles.sectionDescription}>{aboutDescription}</p>
      <div className={styles.mainSection}>
        {aboutData.map((item, index) => (
          <IconSection
            key={index.toString()}
            iconTitle={item.title}
            iconSubTitle={item.subtitle}
          >
            {icons[index]}
          </IconSection>
        ))}
      </div>
    </>
  )
}

const aboutDescription =
  "INTERTRANSCOM S.R.L. was founded on 03.10.2000 and since then it provides high quality transport services. The principles made this company stand out in the short time on the market as the main player in passenger transport services, and the quality of services exceeded the expectations of the beneficiaries."

const icons = [
  <LocationOnOutlinedIcon
    key="location-icon"
    fontSize="large"
    className={styles.circleIcon}
  />,
  <MapOutlinedIcon key="map-icon" fontSize="large" className={styles.circleIcon} />,
  <LocalActivityOutlinedIcon
    key="tickets-icon"
    fontSize="large"
    className={styles.circleIcon}
  />,
  <PeopleAltOutlinedIcon
    key="employees-icon"
    fontSize="large"
    className={styles.circleIcon}
  />,
  <DirectionsBusOutlinedIcon
    key="autobus-icon"
    fontSize="large"
    className={styles.circleIcon}
  />,
]
