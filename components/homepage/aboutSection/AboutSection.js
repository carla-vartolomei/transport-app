/* eslint-disable react/no-unescaped-entities */
import React from "react"
import styles from "./IconSection.module.scss"
import IconSection from "./IconSection"
import data from "../../../scripts/iconSectionList"

export default function AboutLayout() {
  return (
    <>
      <p className={styles.sectionDescription}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nobis
        deleniti ad, autem ut vitae nihil praesentium rem hic quod voluptatum
        voluptas natus veritatis beatae, temporibus similique. Impedit, excepturi
        ipsam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
        quia voluptas accusamus non sunt necessitatibus facere, expedita, ipsum fugit
        provident praesentium porro inventore cupiditate nihil, rerum quisquam
        assumenda aliquam. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Tempore officia dolores earum repellendus id qui nobis? Atque similique ullam
        molestiae possimus debitis illum voluptatem corporis. Omnis qui
        necessitatibus provident dolores. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Rerum odit quidem dolores eaque porro animi, hic laboriosam
        accusamus et, incidunt voluptatem ab consectetur obcaecati, officia enim
        voluptatum perspiciatis quasi? Error?
      </p>
      <div className={styles.mainSection}>
        {data.map((item, index) => (
          <IconSection
            key={index.toString()}
            iconTitle={item.title}
            iconSubTitle={item.subtitle}
          >
            {item.children}
          </IconSection>
        ))}
      </div>
    </>
  )
}
