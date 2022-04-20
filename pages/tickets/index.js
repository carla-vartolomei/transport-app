import React from "react"
import Banner from "../../components/banner/Banner"
import CheckTicket from "../../components/tickets-page/CheckTicket"
import CancelTicket from "../../components/tickets-page/CancelTicket"

export default function index() {
  return (
    <>
      <Banner />
      <h1 className="pageTitle">Tickets</h1>
      <p className="pageDescription">
        Tickets are proof of payment and reservation of a seat on a certain route on
        a certain date and time. To check the existence of the ticket look for the
        ticket by series. Also, if you want to cancel a ticket, look for it by series
        and cancel it.
      </p>
      <CheckTicket />
      <CancelTicket />
    </>
  )
}
