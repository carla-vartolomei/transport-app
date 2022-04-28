import { Box } from "@material-ui/core"
import React from "react"
import axios from "axios"
import Banner from "../../components/banner/Banner"
import Form from "../../components/contact-page/form/Form"
import InfoCard from "../../components/contact-page/info-card/InfoCard"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import YouTubeIcon from "@mui/icons-material/YouTube"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import { IconButton } from "@mui/material"
import styles from "../../styles/Contact.module.scss"

function Contact({ contactData }) {
  const contactDescription = contactData.contactDescription
  const contactInfo = contactData.contactInfo
  return (
    <div className={styles.contactRoot}>
      <Banner />
      <h1 className="pageTitle">Contact us</h1>
      <Form />
      <div className={styles.infoContainer}>
        <Box className={styles.infoBox}>
          <InfoCard
            contactDescription={contactDescription}
            contactInfo={contactInfo}
          />
        </Box>
      </div>
      <div className={styles.backDiv}>
        <h1>get in touch</h1>
        <p>We are active on social media!</p>
        <p>Go follow us on Facebook, Instagram, Twitter, Youtube and LinkedIn!</p>
        <div className={styles.socialMediaIcons}>
          {socialMediaData.map((item, index) => (
            <IconButton key={index.toString()}>
              <a href={item.link}>{item.icon}</a>
            </IconButton>
          ))}
        </div>
      </div>
    </div>
  )
}

const socialMediaData = [
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

export const getStaticProps = async () => {
  const { data: contactData } = await axios.get(`${process.env.SERVER}/api/contact`)

  return {
    props: {
      contactData,
    },
  }
}

export default Contact
