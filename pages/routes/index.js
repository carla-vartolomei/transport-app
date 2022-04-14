import React from "react"
import Banner from "../../components/banner/Banner"
import RoutesTable from "../../components/routes-page/RoutesTable"
import { Container } from "@mui/material"
import styles from "../../styles/Routes.module.scss"

export default function index() {
  return (
    <>
      <Banner />
      <h1 className="pageTitle">Routes</h1>
      <p className="pageDescription">
        Our company offers you a fast and safe route to the desired destination. At a
        minimum and attractive price, we offer you transport services with high level
        comfort. <strong>Book your tickets now!</strong>
      </p>
      <Container className={styles.routesTableContainer}>
        <RoutesTable />
      </Container>
    </>
  )
}
