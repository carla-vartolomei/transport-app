import { Button, Container } from "@material-ui/core"
import { useRouter } from "next/router"
import React from "react"
import Banner from "../../components/banner/Banner"
import styles from "../../styles/Routes.module.scss"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined"
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined"
import { data } from "../../scripts/busRoutesSchedule"

function Id() {
  const router = useRouter()
  const { id } = router.query

  let startPoint
  id ? (startPoint = id.slice(0, 4).toUpperCase()) : (startPoint = null)
  let endPoint
  id ? (endPoint = id.slice(5).toUpperCase()) : (endPoint = null)

  endPoint === "TARGUFRUMOS" ? (endPoint = "TARGU FRUMOS") : null
  endPoint === "TARGUNEAMT" ? (endPoint = "TARGU NEAMT") : null

  let routeInfo
  data ? (routeInfo = data[endPoint]) : (routeInfo = null)

  let path
  routeInfo ? (path = routeInfo.pathMap) : (path = null)

  let startPointStation
  routeInfo
    ? (startPointStation = routeInfo.startPointStation)
    : (startPointStation = null)

  let endPointStation
  routeInfo
    ? (endPointStation = routeInfo.endPointStation)
    : (endPointStation = null)

  let startPointContact
  routeInfo
    ? (startPointContact = routeInfo.startPointContact)
    : (startPointContact = null)

  let endPointContact
  routeInfo
    ? (endPointContact = routeInfo.endPointContact)
    : (endPointContact = null)

  let startPointTimeSchedule
  routeInfo
    ? (startPointTimeSchedule = routeInfo.startPointTimeSchedule)
    : (startPointTimeSchedule = [])

  let endPointTimeSchedule
  routeInfo
    ? (endPointTimeSchedule = routeInfo.endPointTimeSchedule)
    : (endPointTimeSchedule = [])

  return (
    <>
      <Banner />
      <h1 className="pageTitle">
        {startPoint} - {endPoint}
      </h1>
      <p className="pageDescription">
        Our company offers you a fast and safe route to the desired destination. At a
        minimum and attractive price, we offer you transport services with high
        comfort. <strong>Book your tickets now!</strong>
      </p>
      <Container className={styles.routeMapSection}>
        <iframe className={styles.routeMap} src={path} />
      </Container>
      <div className={styles.bookRouteSection}>
        <Button variant="outlined" className={styles.bookRoute}>
          book now
        </Button>
      </div>
      <section className={styles.routeScheduleSectionRoot}>
        <div className={styles.routeScheduleSection}>
          <section className={styles.startPointSection}>
            <h1>Departures from {startPoint}</h1>
            <p className={styles.busStation}>
              <LocationOnOutlinedIcon />
              <span>&quot;{startPointStation}&quot; Bus Station</span>
            </p>
            <div className={styles.departureTime}>
              <p className={styles.departureTimeTitle}>
                <AccessTimeOutlinedIcon />
                <h3>departure time schedule</h3>
              </p>
              <div className={styles.departureTimeListSection}>
                <ul className={styles.departureTimeList}>
                  {startPointTimeSchedule.map((item, index) => (
                    <li key={index.toString()}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.contactSection}>
                <PhoneOutlinedIcon />
                <h4>Contact:</h4>
                <span>{startPointContact}</span>
              </div>
            </div>
          </section>
          <section className={styles.endPointSection}>
            <h1>Departures from {endPoint}</h1>
            <p className={styles.busStation}>
              <LocationOnOutlinedIcon />
              <span>&quot;{endPointStation}&quot; Bus Station</span>
            </p>
            <div className={styles.departureTime}>
              <p className={styles.departureTimeTitle}>
                <AccessTimeOutlinedIcon />
                <h3>departure time schedule</h3>
              </p>
              <div className={styles.departureTimeListSection}>
                <ul className={styles.departureTimeList}>
                  {endPointTimeSchedule.map((item, index) => (
                    <li key={index.toString()}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.contactSection}>
                <PhoneOutlinedIcon />
                <h4>Contact:</h4>
                <span>{endPointContact}</span>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}

export default Id
