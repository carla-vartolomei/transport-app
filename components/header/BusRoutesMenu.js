import React from "react"
import { Button } from "@mui/material"
import Link from "next/link"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import styles from "./Navbar.module.scss"
import data from "../../scripts/busRoutes"
import { compose } from "@mui/system"

export default function BusRoutesMenu({ name, path }) {
  const startPoint = data.startPoint
  const endPoint = data.endPoint

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleMouseOver = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onMouseOver={handleMouseOver}
        color="inherit"
      >
        {name}
      </Button>
      <Menu
        className={styles.routesMenu}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {endPoint.map((item, index) => {
          const path = `/routes/${startPoint.name.toLowerCase()}-${item.name
            .toLowerCase()
            .split(" ")
            .join("")}`

          if (index === endPoint.length - 1)
            return (
              <MenuItem key={index.toString()} onMouseLeave={handleClose}>
                <Link href={path}>
                  <a>
                    {startPoint.name} - {item.name}
                  </a>
                </Link>
              </MenuItem>
            )
          else
            return (
              <MenuItem key={index.toString()}>
                <Link href={path}>
                  <a>
                    {startPoint.name} - {item.name}
                  </a>
                </Link>
              </MenuItem>
            )
        })}
      </Menu>
    </div>
  )
}
