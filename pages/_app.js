import React from "react"
import axios from "axios"
import Footer from "../components/footer/Footer"
import Navbar from "../components/header/Navbar"
import Head from "next/head"
import Link from "next/link"
import CookieConsent from "react-cookie-consent"
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
      <CookieConsent
        debug={true}
        style={{ background: "#242222", textAlign: "left" }}
        buttonStyle={{
          background: "#6f22b3",
          color: "whitesmoke",
          fontSize: "1rem",
          borderRadius: "0.75rem",
          width: "75%",
          marginRight: "8rem",
        }}
        buttonText="I agree"
        expires={1}
      >
        This site uses cookies. See our
        <Link href="/">
          <a style={{ color: "#6f22b3", fontWeight: "bold" }}> privacy policy </a>
        </Link>
        for more info.
      </CookieConsent>
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
