import React from "react"
import { Paper } from "@material-ui/core"
import Image from "next/image"
import vision from "../../assets/vision.png"
import mission from "../../assets/mission.png"
import bus from "../../assets/bus.jpg"
import Banner from "../../components/banner/Banner"
import styles from "../../styles/About.module.scss"
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined"
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined"
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined"
import QrCodeScannerOutlinedIcon from "@mui/icons-material/QrCodeScannerOutlined"
import IntegrationInstructionsOutlinedIcon from "@mui/icons-material/IntegrationInstructionsOutlined"
import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined"

export default function About() {
  return (
    <>
      <Banner />
      <h1 className="pageTitle">About us</h1>
      <p className={styles.pageDescription}>
        INTERTRANSCOM S.R.L. was founded on 03.10.2000 and since then it provides
        high quality transport services. The principles made this company stand out
        in the short time on the market as the main player in passenger transport
        services, and the quality of services exceeded the expectations of the
        beneficiaries.
      </p>
      <Paper className={styles.visionMissionSection} elevation={3}>
        <div className={styles.visionSection}>
          <h1>vision</h1>
          <Image src={vision} alt="company vision" width="100%" height="100%" />
          <p>
            Promoting the comfort, safety and reliability of passengers transport
            actually meant only one thing: <strong>PROMOTING VALUE</strong>.
          </p>
        </div>
        <div className={styles.missionSection}>
          <h1>mission</h1>
          <Image src={mission} alt="company vision" width="100%" height="100%" />
          <p>
            To be the main player in passenger transport services and the quality of
            services to exceed the expectations of the beneficiaries.
          </p>
        </div>
      </Paper>
      <p className={styles.pageDescription}>
        The young management team pioneered the introduction of satellite fleet
        monitoring, TV / DVD equipment, wireless internet of the car park, receiving
        the appreciation of large-scale customers when occupying the place.
      </p>
      <Paper className={styles.companySection} elevation={3}>
        <div className={styles.companyDataSection}>
          <h1>company data</h1>
          <ul className={styles.companyDataList}>
            <li>
              <BadgeOutlinedIcon className={styles.listItemIcon} />
              <span>INTERTRANSCOM S.R.L.</span>
            </li>
            <li>
              <PushPinOutlinedIcon className={styles.listItemIcon} />
              <span>str. Arcu, nr. 1, bl T3, Mezanin, office 7, IASI</span>
            </li>
            <li>
              <WorkOutlineOutlinedIcon className={styles.listItemIcon} />
              <span>Other ground passenger transport</span>
            </li>
            <li>
              <QrCodeScannerOutlinedIcon className={styles.listItemIcon} />
              <span> CAEN - 4939</span>
            </li>
            <li>
              <IntegrationInstructionsOutlinedIcon className={styles.listItemIcon} />
              <span>CIF - RO13410037</span>
            </li>
            <li>
              <AppRegistrationOutlinedIcon className={styles.listItemIcon} />
              <span>REG - J22/727/20.09.2000</span>
            </li>
          </ul>
        </div>
        <div className={styles.imageSection}>
          <Image src={bus} alt="company bus" quality={100} />
        </div>
      </Paper>
    </>
  )
}
