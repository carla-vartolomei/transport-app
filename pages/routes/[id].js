import React from "react"
import axios from "axios"
import { Container } from "@material-ui/core"
import { useRouter } from "next/router"
import Banner from "../../components/banner/Banner"
import styles from "../../styles/Routes.module.scss"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined"
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined"
import BookTicket from "../../components/routes-page/book-ticket/BookTicket"

function Id({ busRouteSchedule }) {
  const router = useRouter()
  const { id } = router.query

  const path = busRouteSchedule.pathMap
  const startPointStation = busRouteSchedule.startPointStation
  const endPointStation = busRouteSchedule.endPointStation
  const startPointContact = busRouteSchedule.startPointContact
  const endPointContact = busRouteSchedule.endPointContact

  let startPointTimeSchedule = []
  busRouteSchedule
    ? (startPointTimeSchedule = busRouteSchedule.startPointTimeSchedule)
    : null

  let endPointTimeSchedule = []
  busRouteSchedule
    ? (endPointTimeSchedule = busRouteSchedule.endPointTimeSchedule)
    : null

  const startPoint = id.slice(0, 4).toUpperCase()
  let endPoint = id.slice(5).toUpperCase()

  endPoint === "TARGUFRUMOS" ? (endPoint = "TARGU FRUMOS") : null
  endPoint === "TARGUNEAMT" ? (endPoint = "TARGU NEAMT") : null

  return (
    <>
      <Banner />
      <h1 className="pageTitle">
        {startPoint} - {endPoint}
      </h1>
      <p className="pageDescription">
        Our company offers you a fast and safe route to the desired destination. At a
        minimum and attractive price, we offer you transport services with high level
        comfort. <strong>Book your tickets now!</strong>
      </p>
      <Container className={styles.routeMapSection}>
        <iframe className={styles.routeMap} src={path} />
      </Container>

      <BookTicket startPoint={startPoint} endPoint={endPoint} />

      <section className={styles.routeScheduleSectionRoot}>
        <div className={styles.routeScheduleSection}>
          <section className={styles.startPointSection}>
            <h1>Departures from {startPoint}</h1>
            <p className={styles.busStation}>
              <LocationOnOutlinedIcon />
              <span>&quot;{startPointStation}&quot; Bus Station</span>
            </p>
            <div className={styles.departureTime}>
              <div className={styles.departureTimeTitle}>
                <AccessTimeOutlinedIcon />
                <h3>departure time schedule</h3>
              </div>
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
              <div className={styles.departureTimeTitle}>
                <AccessTimeOutlinedIcon />
                <h3>departure time schedule</h3>
              </div>
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

export const getStaticPaths = async () => {
  const { data: busRoutesSchedule } = await axios.get(
    `http://localhost:3000/api/bus-routes-schedule`
  )

  const paths = busRoutesSchedule.map((route) => ({
    params: { id: route.id },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const { data: busRouteSchedule } = await axios.get(
    `http://localhost:3000/api/bus-routes-schedule/${params.id}`
  )

  return {
    props: { busRouteSchedule },
  }
}

export default Id
