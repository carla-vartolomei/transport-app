import React from "react"
import Image from "next/image"
import bus from "../../assets/bus.jpg"
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined"
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined"
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined"
import QrCodeScannerOutlinedIcon from "@mui/icons-material/QrCodeScannerOutlined"
import IntegrationInstructionsOutlinedIcon from "@mui/icons-material/IntegrationInstructionsOutlined"
import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined"
import styles from "../../styles/About.module.scss"

export default function CompanyDataSection() {
  return (
    <div className={styles.sectionRoot}>
      <div className={styles.companySection} elevation={3}>
        <section className={styles.companyDataSection}>
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
        </section>
        <section className={styles.imageSection}>
          <Image src={bus} alt="company bus" quality={100} />
        </section>
      </div>
    </div>
  )
}
