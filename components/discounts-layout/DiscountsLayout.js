import React from "react"
import styles from "../../styles/DiscountsLayout.module.scss"
import AccordionLayout from "./AccordionLayout"
import data from "../../scripts/accordionInfo"

function DiscountsLayout() {
  return (
    <div className={styles.discountsRoot}>
      {data.map((item, index) => (
        <AccordionLayout
          key={index.toString()}
          accordionTitle={item.title}
          accordionDetails={item.details}
        />
      ))}
    </div>
  )
}

export default DiscountsLayout
