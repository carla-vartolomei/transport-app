/* eslint-disable react/no-unescaped-entities */
import React from "react"
import styles from "../../styles/IconSection.module.scss"
import IconSection from "./IconSection"
import data from "../../scripts/iconSectionList"

export default function AboutLayout() {
  return (
    <>
      <p className={styles.sectionDescription}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap
        into electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing Lorem
        Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
      </p>
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
