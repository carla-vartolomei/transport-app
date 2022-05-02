import React from "react"
import axios from "axios"
import Footer from "../components/footer/Footer"
import Navbar from "../components/header/Navbar"
import Head from "next/head"
import Link from "next/link"
import CookieConsent from "react-cookie-consent"
import { setCookies, getCookie } from "cookies-next"
import "../styles/globals.scss"

function MyApp({ Component, pageProps, busRoutes }) {
  const isNotCookie = getCookie("cookie") ? false : true
  return (
    <>
      <Head>
        <title>INTERTRANS COMPANY</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar busRoutes={busRoutes} />
      <Component {...pageProps} />
      <Footer />
      {isNotCookie && (
        <CookieConsent
          debug={true}
          style={{
            background: "#242222",
            textAlign: "left",
            paddingLeft: "1rem",
            borderTop: " 0.1rem solid #6f22b3",
          }}
          buttonStyle={{
            background: "#6f22b3",
            color: "whitesmoke",
            fontSize: "1rem",
            borderRadius: "0.4rem",
            width: "75%",
            marginRight: "8rem",
            padding: "0.75rem",
          }}
          buttonText="OK"
          expires={365}
          onAccept={() => setCookies("cookie", true)}
        >
          This site uses cookies to provide necessary site functionality and improve
          your experience. By using our website, you agree to our
          <Link href="/privacy-policy">
            <a style={{ color: "#6f22b3", fontWeight: "bold" }}> privacy policy. </a>
          </Link>
        </CookieConsent>
      )}
    </>
  )
}

MyApp.getInitialProps = async () => {
  const { data: busRoutes } = await axios.get(
    "https://my-transport-api.herokuapp.com/bus-routes"
  )

  return {
    busRoutes,
  }
}

export default MyApp
