import { Box } from "@material-ui/core"
import React from "react"
import Banner from "../../components/banner/Banner"
import Form from "../../components/contact-page/form/Form"
import InfoCard from "../../components/contact-page/info-card/InfoCard"
import styles from "../../styles/Contact.module.scss"
import "../../styles/pageStyles.module.scss"
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
      <h1 className="pageTitle">Contact us</h1>
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
          {data.map((item, index) => (
            <IconButton key={index.toString()}>
              <a href={item.link}>{item.icon}</a>
            </IconButton>
          ))}
        </div>
      </div>
    </div>
  )
}

const data = [
  {
    link: "https://www.facebook.com/",
    icon: <FacebookIcon fontSize="large" />,
  },
  {
    link: "https://www.instagram.com/",
    icon: <InstagramIcon fontSize="large" />,
  },
  {
    link: "https://www.twitter.com/",
    icon: <TwitterIcon fontSize="large" />,
  },
  {
    link: "https://www.youtube.com/",
    icon: <YouTubeIcon fontSize="large" />,
  },
  {
    link: "https://www.linkedin.com/",
    icon: <LinkedInIcon fontSize="large" />,
  },
]
