import React from "react"
import { Paper, Button, Container } from "@mui/material"
import Image from "next/image"
import styles from "./RouteSection.module.scss"
import busIcon from "../../../assets/bus-icon.png"
import Link from "next/link"

export function CardRoute({
  startPoint,
  endPoint,
  contactStartPoint,
  contactEndPoint,
}) {
  return (
    <Paper elevation={3} className={styles.cardRout}>
      <h1 className={styles.routeTitle}>{`${startPoint} - ${endPoint}`}</h1>
      <Container className={styles.imageContainer}>
        <Image
          layout="intrinsic"
          src={busIcon}
          alt="bus-icon"
          className={styles.busImage}
        />
      </Container>
      <Button variant="outlined" className={styles.buttonRoute}>
        <Link
          href={`/routes/${startPoint.toLowerCase()}-${endPoint
            .toLowerCase()
            .split(" ")
            .join("")}`}
        >
          more info
        </Link>
      </Button>
      {contactEndPoint ? (
        <>
          <p className={styles.contactRoute}>
            {`Contact ${startPoint} Office: ${contactStartPoint}`}
          </p>
          <p className={styles.contactRoute}>
            {`Contact ${endPoint} Office: ${contactEndPoint}`}
          </p>
        </>
      ) : (
        <>
          <p className={styles.contactRoute}>{`Contact ${startPoint} Office:`}</p>
          <p className={styles.contactRoute}>{`${contactStartPoint}`}</p>
        </>
      )}
    </Paper>
  )
}
