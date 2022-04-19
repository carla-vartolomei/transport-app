import React from "react"
import Banner from "../../components/banner/Banner"
import styles from "../../styles/PrivacyPolicy.module.scss"
import CookieOutlinedIcon from "@mui/icons-material/CookieOutlined"
import explorer from "../../assets/internet-explorer.png"
import firefox from "../../assets/firefox.png"
import chrome from "../../assets/chrome.png"
import safari from "../../assets/safari.png"
import Image from "next/image"
import Link from "next/link"

export default function index() {
  return (
    <>
      <Banner />
      <h1 className="pageTitle">Privacy policy</h1>
      <h2 className={styles.pageSubtitle}>Introduction</h2>
      <p className={styles.pageParagraph}>
        This <strong>cookie policy</strong> applies to all users of this website. The
        following information is intended to inform users of this website about the
        placement, use and management of cookies in the context of users&apos;
        browsing on this website.
      </p>
      <h2 className={styles.pageSubtitle}>
        What are cookies? <CookieOutlinedIcon />
      </h2>
      <ul className={styles.pageList}>
        <li>
          Cookies are small files made up of letters and numbers that will be stored
          on a user&apos;s computer, mobile device or other equipment from which the
          internet is accessed.
        </li>
        <li>
          Cookies are installed by a request issued by a web-server to a browser
          (e.g. Internet Explorer, Chrome).
        </li>
        <li>
          Cookies are completely &quot;passive&quot; (they do not contain software,
          viruses or spyware and cannot access information on the user&apos;s hard
          drive).
        </li>
        <li>
          A cookie consists of 2 parts: the name and the content or value of the
          cookie.
        </li>
        <li>
          Cookies themselves do not require personal information to be used and in
          most cases do not personally identify internet users.
        </li>
      </ul>
      <h2 className={styles.pageSubtitle}>What we use cookies for?</h2>
      <p className={styles.pageParagraph}>
        Cookies are used to distinguish the user from other users of the site and so
        that our site remembers what you did while browsing, for example, what
        articles you accessed, from what device it was accessed.
      </p>
      <h4 className={styles.pageSubtitle}>
        What types of cookies do we use on our website?
      </h4>
      <ul className={styles.pageList}>
        <li>
          Necessary cookies that ensure the proper functioning of the site. This type
          of cookies are necessary to allow its users to use the website.
        </li>
        <li>
          Analytical/performance cookies (Google Analytics), these cookies allow us
          to recognize and calculate the number of visitors to our site and to see
          how visitors move around when they use it. This helps us to improve the way
          our site works, for example, by making sure users can easily find what they
          are looking for.
        </li>
        <li>
          Social media cookies (Facebook), this type of cookie allows social media
          integration (Facebook) on the website and gives you the ability to
          immediately like or share a page or product on your preferred social media
          service.
        </li>
      </ul>
      <h2 className={styles.pageSubtitle}>
        How can you manage, disable and delete cookies?
      </h2>
      <p className={styles.pageParagraph}>
        Disabling and refusing to receive cookies may make this website difficult to
        visit and may limit your ability to use it. Users can configure their browser
        to reject cookies or to accept cookies from a specific website. All modern
        browsers offer the possibility to change cookie settings. These settings can
        usually be accessed in the &quot;options&quot; or &quot;preferences&quot;
        menu of your browser. However, refusing or disabling cookies does not mean
        that you will no longer receive online advertising - only that it will not be
        tailored to your preferences and interests as evidenced by your browsing
        behavior.
      </p>
      <h2 className={styles.pageSubtitle}>More info about cookies</h2>
      <p className={styles.pageParagraph}>
        To understand these settings, the following links may be useful:
      </p>
      <section className={styles.pageLinks}>
        <div>
          <Image
            src={explorer}
            alt="internet-explorer-icon"
            width="75rem"
            height="75rem"
          />
          <Link href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d">
            <a>
              <h1>Internet Explorer </h1>
            </a>
          </Link>
          <h2> cookie settings</h2>
        </div>
        <div>
          <Image src={firefox} alt="firefox-icon" width="75rem" height="75rem" />
          <Link href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US">
            <a>
              <h1>Firefox</h1>
            </a>
          </Link>
          <h2> cookie settings</h2>
        </div>
        <div>
          <Image src={chrome} alt="chrome-icon" width="75rem" height="75rem" />
          <Link href="https://support.google.com/chrome/answer/95647">
            <a>
              <h1>Google Chrome</h1>
            </a>
          </Link>
          <h2> cookie settings</h2>
        </div>
        <div>
          <Image src={safari} alt="safari-icon" width="75rem" height="75rem" />
          <Link href="https://support.apple.com/kb/ph21411?locale=en_GB">
            <a>
              <h1>Safari</h1>
            </a>
          </Link>
          <h2> cookie settings</h2>
        </div>
      </section>
    </>
  )
}
