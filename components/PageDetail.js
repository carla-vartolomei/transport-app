import React from "react"
import Link from "next/link"
import styles from "../styles/PageDetail.module.scss"

export default function PageDetail({ pageName }) {
  return (
    <div className={styles.pageDetailContainer}>
      <h1>
        <Link href={`${pageName}`}>
          <a className={styles.pageNameTag}>{pageName}</a>
        </Link>
      </h1>
    </div>
  )
}
