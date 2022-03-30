import { AppBar, Toolbar, Button, Typography, IconButton } from "@mui/material"
import { Box } from "@mui/system"
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus"
import Link from "next/link"
import React from "react"
import styles from "./Navbar.module.scss"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state"

const pages = ["home", "about", "routes", "tickets", "discounts", "contact"]

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
            {pages.map((item, index) => {
              let path = ""
              item === "home" ? (path = "/") : (path = `/${item}`)
              if (item !== "routes") {
                return (
                  <Button key={index.toString()} color="inherit">
                    <Link href={path}>
                      <a>{item}</a>
                    </Link>
                  </Button>
                )
              } else {
                return (
                  <PopupState variant="popover">
                    {(popupState) => (
                      <>
                        <Button color="inherit" {...bindTrigger(popupState)}>
                          <Link href={path}>
                            <a>{item}</a>
                          </Link>
                        </Button>
                        <Menu {...bindMenu(popupState)}>
                          <MenuItem onClick={popupState.close}>
                            <Link href={`${path}/iasi-suceava`}>
                              <a>Iasi-Suceava</a>
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={popupState.close}>
                            <Link href={`${path}/iasi-falticeni`}>
                              <a>Iasi-Falticeni</a>
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={popupState.close}>
                            <Link href={`${path}/iasi-husi`}>
                              <a>Iasi-Husi</a>
                            </Link>
                          </MenuItem>
                        </Menu>
                      </>
                    )}
                  </PopupState>
                )
              }
            })}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}
