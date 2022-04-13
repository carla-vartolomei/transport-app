import React from "react"
import styles from "./DiscountSection.module.scss"
import Accordion from "./Accordion"
import { Box } from "@mui/material"

function DiscountSection({ discounts }) {
  return (
    <Box className={styles.boxAccordions}>
      <div className={styles.discountsRoot}>
        {discounts.map((item, index) => (
          <Accordion
            key={index.toString()}
            accordionTitle={item.title}
            accordionDetails={item.details}
          />
        ))}
      </div>
    </Box>
  )
}

export default DiscountSection
