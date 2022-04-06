import React from "react"
import { Paper } from "@material-ui/core"
import Image from "next/image"
import vision from "../../assets/vision.png"
import mission from "../../assets/mission.png"
import styles from "../../styles/About.module.scss"

export default function VisionMissionSection() {
  return (
    <div className={styles.sectionRoot}>
      <div className={styles.visionMissionSection}>
        <section className={styles.visionSection}>
          <h1>vision</h1>
          <Image src={vision} alt="company vision" width="100%" height="100%" />
          <p>
            Promoting the comfort, safety and reliability of passengers transport
            actually meant only one thing: <strong>PROMOTING VALUE</strong>.
          </p>
        </section>
        <section className={styles.missionSection}>
          <h1>mission</h1>
          <Image src={mission} alt="company vision" width="100%" height="100%" />
          <p>
            To be the main player in passenger transport services and the quality of
            services to exceed the expectations of the beneficiaries.
          </p>
        </section>
      </div>
    </div>
  )
}
