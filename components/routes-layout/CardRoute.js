import React from "react"
import { Paper, Button, Container } from "@mui/material"
import Image from "next/image"
import styles from "../../styles/RoutesLayout.module.scss"
import busIcon from "../../assets/bus-icon.png"

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
        more info
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
