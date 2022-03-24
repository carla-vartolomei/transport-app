import { AppBar, Toolbar, Button, Typography, IconButton } from "@mui/material"
import { Box } from "@mui/system"
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus"
import Link from "next/link"
import React from "react"
import styles from "../styles/Navbar.module.scss"

export default function Navbar() {
  return (
    <>
      <AppBar position="fixed" className={styles.navbarRoot}>
        <Toolbar className={styles.navbarToolBar}>
          <Typography variant="h5" component="div">
            <IconButton size="large" edge="start" color="inherit" aria-label="menu">
              <Link href="/">
                <a>
                  <DirectionsBusIcon />
                </a>
              </Link>
            </IconButton>
            <Link href="/">
              <a> Intertrans Company</a>
            </Link>
          </Typography>
          <Box className={styles.navbarOptions}>
            <Button color="inherit">
              <Link href="/">
                <a>Home</a>
              </Link>
            </Button>
            <Button color="inherit">
              <Link href="/about">
                <a>About</a>
              </Link>
            </Button>
            <Button color="inherit">
              <Link href="/routes">
                <a>Routes</a>
              </Link>
            </Button>
            <Button color="inherit">
              <Link href="/tickets">
                <a>Tickets</a>
              </Link>
            </Button>
            <Button color="inherit">
              <Link href="/discounts">
                <a>Discounts</a>
              </Link>
            </Button>
            <Button color="inherit">
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}
