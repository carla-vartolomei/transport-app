import Link from "next/link"
import React from "react"

export default function index() {
  return (
    <div className="not-found">
      <h1> Ooopss ..</h1>
      <h2> That page cannot be found.</h2>
      <p>
        Go back to the
        <Link href="/">
          <a> Homepage.</a>
        </Link>
      </p>
    </div>
  )
}
