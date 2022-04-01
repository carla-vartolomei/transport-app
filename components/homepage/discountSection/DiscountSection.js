import React from "react"
import styles from "./DiscountSection.module.scss"
import Accordion from "./Accordion"
import data from "../../../scripts/accordionInfo"
import { Box, Container, Grid, Paper } from "@mui/material"
import Image from "next/image"
import discountImage from "../../../assets/discounts-image.png"

function DiscountSection() {
  return (
    <Box className={styles.boxAccordions}>
      <div className={styles.discountsRoot}>
        {data.map((item, index) => (
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
