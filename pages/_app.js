import React from "react"
import Footer from "../components/footer/Footer"
import Navbar from "../components/header/Navbar"
import "../styles/globals.scss"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
