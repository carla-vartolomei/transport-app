import React from "react"
import { AppBar, Toolbar, Button, Typography, IconButton } from "@mui/material"
import { Box } from "@mui/system"
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus"
import Link from "next/link"
import styles from "./Navbar.module.scss"
import BusRoutesMenu from "./BusRoutesMenu"

const pages = ["home", "about", "routes", "tickets", "discounts", "contact"]

export default function Navbar({ busRoutes }) {
  const startPoint = busRoutes.startPoint
  const endPoint = busRoutes.endPoint
  return (
    <>
      <AppBar layout="responsive" position="fixed" className={styles.navbarRoot}>
        <Toolbar className={styles.navbarToolBar}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Link href="/">
              <a>
                <DirectionsBusIcon />
              </a>
            </Link>
          </IconButton>
          <Box className={styles.navbarOptions}>
            {pages.map((item, index) => {
              let path = ""
              item === "home" ? (path = "/") : (path = `/${item}`)
              if (item === "routes")
                return (
                  <BusRoutesMenu
                    key={index.toString()}
                    name={item}
                    path={path}
                    startPoint={startPoint}
                    endPoint={endPoint}
                  />
                )
              else
                return (
                  <Button key={index.toString()} color="inherit">
                    <Link href={path}>
                      <a>{item}</a>
                    </Link>
                  </Button>
                )
            })}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}
