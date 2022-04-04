import { Box, Container } from "@material-ui/core"
import React from "react"
import Banner from "../../components/banner/Banner"
import Form from "../../components/contact-page/Form"
import InfoCard from "../../components/contact-page/InfoCard"
import styles from "../../styles/Contact.module.scss"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import YouTubeIcon from "@mui/icons-material/YouTube"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import { IconButton } from "@mui/material"

export default function Contact() {
  return (
    <div className={styles.contactRoot}>
      <Banner />
      <h1 className={styles.pageTitle}>Contact us</h1>
      <Form />
      <div className={styles.infoContainer}>
        <Box className={styles.infoBox}>
          <InfoCard />
        </Box>
      </div>
      <div className={styles.backDiv}>
        <h1>get in touch</h1>
        <p>We are active on social media!</p>
        <p>Go follow us on Facebook, Instagram, Twitter, Youtube and LinkedIn!</p>
        <div className={styles.socialMediaIcons}>
          <IconButton>
            <a href="https://www.facebook.com/">
              <FacebookIcon fontSize="large" />
            </a>
          </IconButton>
          <IconButton>
            <a href="https://www.instagram.com/">
              <InstagramIcon fontSize="large" />
            </a>
          </IconButton>
          <IconButton>
            <a href="https://www.twitter.com/">
              <TwitterIcon fontSize="large" />
            </a>
          </IconButton>
          <IconButton>
            <a href="https://www.youtube.com/">
              <YouTubeIcon fontSize="large" />
            </a>
          </IconButton>
          <IconButton>
            <a href="https://www.linkedin.com/">
              <LinkedInIcon fontSize="large" />
            </a>
          </IconButton>
        </div>
      </div>
    </div>
  )
}
