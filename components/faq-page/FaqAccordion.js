import * as React from "react"
import Accordion from "@mui/material/Accordion"
import AccordionDetails from "@mui/material/AccordionDetails"
import AccordionSummary from "@mui/material/AccordionSummary"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import styles from "./Faq.module.scss"
import Link from "next/link"

export default function ControlledAccordions() {
  function createData(question, answer, path) {
    return { question, answer, path }
  }

  const qa = [
    createData(
      "How can I book a ticket?",
      "You can book a ticket from the page corresponding to the desired route. Just click on the button 'book now'. ",
      "/tickets"
    ),
    createData(
      "Where I can check my tickets?",
      "Your tickets are store in our database and you can  check it on the tickets page. ",
      "/tickets"
    ),
    createData(
      "How can I cancel a ticket?",
      "Go on the tickets page, search for your ticket and then cancel it.",
      "/tickets"
    ),
    createData(
      "Do I have a discount as a student?",
      "Yes, you have 50% off.",
      "/discounts"
    ),
    createData(
      "Do I have a discount as a senior?",
      "Yes, you have 50% off.",
      "/discounts"
    ),
  ]

  const [expanded, setExpanded] = React.useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div>
      {qa.map((item, index) => {
        const panel = "panel" + index
        return (
          <Accordion
            key={index.toString()}
            expanded={expanded === panel}
            onChange={handleChange(panel)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${panel}bh-content`}
              id={`${panel}bh-header`}
              className={styles.accordionSummary}
            >
              <div>
                <h1>Q.</h1>
                <h4>{item.question}</h4>
              </div>
            </AccordionSummary>
            <AccordionDetails className={styles.accordionDetails}>
              <div>
                <h1>A.</h1>
                <p>
                  {item.answer}{" "}
                  <Link href={item.path}>
                    <a>read more → </a>
                  </Link>
                </p>
              </div>
            </AccordionDetails>
          </Accordion>
        )
      })}
    </div>
  )
}
