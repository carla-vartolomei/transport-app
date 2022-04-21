import React from "react"
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import { Box } from "@mui/system"
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus"
import Link from "next/link"
import styles from "./Navbar.module.scss"
import BusRoutesMenu from "./BusRoutesMenu"
import DrawerComponent from "./DrawerComponent"

const pages = ["home", "about", "routes", "tickets", "discounts", "contact"]

export default function Navbar({ busRoutes }) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme?.breakpoints?.down("md"))

  const startPoint = busRoutes.startPoint
  const endPoint = busRoutes.endPoint
  return (
    <>
      <AppBar layout="responsive" position="fixed" className={styles.navbarRoot}>
        <Toolbar className={styles.navbarToolBar}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Link href="/">
              <DirectionsBusIcon
                sx={{
                  color: "white",
                }}
              />
            </Link>
          </IconButton>
          {isMobile ? (
            <DrawerComponent />
          ) : (
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
                      <Link href={path}>{item}</Link>
                    </Button>
                  )
              })}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  )
}
