/* eslint-disable react/no-unescaped-entities */
import React from "react"
import styles from "./IconSection.module.scss"
import IconSection from "./IconSection"
import data from "../../../scripts/iconSectionList"

export default function AboutLayout() {
  return (
    <>
      <p className={styles.sectionDescription}>{aboutDescription}</p>
      <div className={styles.mainSection}>
        {data.map((item, index) => (
          <IconSection
            key={index.toString()}
            iconTitle={item.title}
            iconSubTitle={item.subtitle}
          >
            {item.children}
          </IconSection>
        ))}
      </div>
    </>
  )
}

const aboutDescription =
  "INTERTRANSCOM S.R.L. was founded on 03.10.2000 and since then it provides high quality transport services. The principles made this company stand out in the short time on the market as the main player in passenger transport services, and the quality of services exceeded the expectations of the beneficiaries."
