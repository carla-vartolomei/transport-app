import React from "react"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import styles from "./DiscountSection.module.scss"
import Link from "next/link"

function AccordionLayout({ accordionTitle, accordionDetails }) {
  return (
    <>
      <Accordion className={styles.discountsAccordion}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            variant="h1"
            component="h2"
            className={styles.discountsAccordionTitle}
          >
            {accordionTitle}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            variant="h6"
            component="p"
            className={styles.discountsAccordionDetails}
          >
            {accordionDetails}
            <Link href="/discounts">
              <a>
                <span>read more →</span>
              </a>
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default AccordionLayout
