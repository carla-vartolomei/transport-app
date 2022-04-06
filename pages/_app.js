import React from "react"
import Footer from "../components/footer/Footer"
import Navbar from "../components/header/Navbar"
import Head from "next/head"
import "../styles/globals.scss"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>INTERTRANS COMPANY</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
