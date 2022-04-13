import React from "react"
import axios from "axios"
import Footer from "../components/footer/Footer"
import Navbar from "../components/header/Navbar"
import Head from "next/head"
import "../styles/globals.scss"

function MyApp({ Component, pageProps, busRoutes }) {
  return (
    <>
      <Head>
        <title>INTERTRANS COMPANY</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar busRoutes={busRoutes} />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

MyApp.getInitialProps = async () => {
  const { data: busRoutes } = await axios.get(`http://localhost:3000/api/bus-routes`)

  return {
    busRoutes,
  }
}

export default MyApp
