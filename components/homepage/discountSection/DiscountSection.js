import React from "react"
import styles from "./DiscountSection.module.scss"
import Accordion from "./Accordion"
import data from "../../../scripts/accordionInfo"
import { Box, Container, Grid, Paper } from "@mui/material"
import Image from "next/image"
import discountImage from "../../../assets/discounts-image.png"

function DiscountSection() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Paper className={styles.discountsImagePaper}>
          <Container className={styles.discountsImageContainer}>
            <Image
              src={discountImage}
              alt="discounts-image"
              className={styles.discountsImage}
            />
          </Container>
        </Paper>
      </Grid>
      <Grid item xs={10}>
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
      </Grid>
    </Grid>
  )
}

export default DiscountSection
