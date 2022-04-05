import { Paper } from "@material-ui/core"
import React from "react"
import Banner from "../../components/banner/Banner"
import styles from "../../styles/About.module.scss"

export default function About() {
  return (
    <>
      <Banner />
      <h1 className="pageTitle">About us</h1>
      <p className={styles.pageDescription}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ipsa
        laboriosam, doloremque perferendis ullam iure ad sunt itaque debitis eveniet
        quidem, facilis beatae in eos consequatur nobis consectetur ipsum cum! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Corporis aperiam ad atque
        eligendi placeat incidunt voluptates, dolorem obcaecati consequuntur
        voluptate quaerat quia, earum quasi neque. Commodi sint porro temporibus
        recusandae.
      </p>
      <Paper className={styles.visionMissionSection} elevation={3}>
        <div className={styles.visionSection}>
          <h1>vision</h1>
        </div>
        <div className={styles.missionSection}>
          <h1>mission</h1>
        </div>
      </Paper>
    </>
  )
}
