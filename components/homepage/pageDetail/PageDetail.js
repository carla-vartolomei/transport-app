import React from "react"
import Link from "next/link"
import styles from "./PageDetail.module.scss"

export default function PageDetail({ pageName, children }) {
  return (
    <div className={styles.pageDetailContainer}>
      <h1>
        <Link href={`/${pageName}`}>
          <a className={styles.pageNameTag}>{pageName}</a>
        </Link>
      </h1>
      <div className={styles.pageNameSection}> {children} </div>
    </div>
  )
}
