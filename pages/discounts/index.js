import React from "react"
import Banner from "../../components/banner/Banner"
import styles from "../../styles/Discounts.module.scss"

export default function index() {
  return (
    <>
      <Banner />
      <h1 className="pageTitle">Discounts</h1>
      <p className="pageDescription">
        Our company offers four types of discounts for different types of people. In
        order to benefit from them, you must fall into the respective category and
        follow the instructions.
      </p>
      <p className={styles.pageDescription2}>
        Also people who travel regularly can obtain Travel Passes with{" "}
        <strong>10% discount. </strong>
        These can be obtained from Intertrans Company ticket offices.
        <strong> Required documents:</strong> copy of identity card and photo.
      </p>
      <main className={styles.discountsMainSection}>
        <div className={styles.sectionTitle}>
          <h1>1</h1>
          <h2>Discounts for students</h2>
        </div>
        <section className={styles.sectionInfo}>
          <p>
            Students benefit a <strong>20% discount</strong> on travel
            vouchers/tickets. The discount applies:
            <li>for all routes</li>
            <li>if the student have valid student ID card. </li>
          </p>
        </section>
        <div className={styles.sectionTitle}>
          <h1>2</h1>
          <h2>Discounts for retirees</h2>
        </div>
        <section className={styles.sectionInfo}>
          <p>
            Retirees benefit a <strong>50% discount</strong> on travel
            vouchers/tickets. More info:
            <li>The coupons are red.</li>
            <li>
              The coupon must be filled in with the route, price and number of
              kilometers.
            </li>
            <li>The client must present ID card.</li>
          </p>
        </section>
        <div className={styles.sectionTitle}>
          <h1>3</h1>
          <h2>Discounts by D.G.A.S.P.C coupons </h2>
        </div>
        <section className={styles.sectionInfo}>
          <p>
            People with disabilities and their assistants benefit a
            <strong> 100% discount</strong> on travel vouchers/tickets. More info:
            <li>
              When the driver receives the coupons from the passengers, he has to
              check the endorsed ID card and the ID card and then fill the coupon.
            </li>
            <li>
              The companion of the disabled person cannot travel without the disabled
              person.
            </li>
            <li>
              the companion voucher and the disabled person&apos;s voucher must be
              completed with the same date and the same route.
            </li>
            <li>
              the personal assistant is identified by the disabled person&apos;s ID
              card in which he/she is listed as a personal assistant.
            </li>
            <li>
              The file number that is listed on the travel ticket must be identical
              to the ID number of the disabled person.
            </li>
            <li>
              Please note that the tickets are valid for a return trip or a tour trip
              only on the same route, so you must check the coupon mark where it says
              on which route the tour coupon was taken so that the return coupon is
              on the same route. If this does not happen, you (the driver) have the
              right to take another tour coupon from the disabled person.
            </li>
          </p>
        </section>
        <div className={styles.sectionTitle}>
          <h1>4</h1>
          <h2>Discounts by C.N.P.P coupons </h2>
        </div>
        <section className={styles.sectionInfo}>
          <p>
            People with this type of coupons benefit a <strong>100% discount</strong>{" "}
            on travel vouchers/tickets. More info:
            <li>The coupons are green.</li>
            <li>
              The coupon must be filled in with the route, price and number of
              kilometers.
            </li>
            <li>The client must present ID card.</li>
            <li>The holder may travel with a companion.</li>
          </p>
        </section>
      </main>
    </>
  )
}
