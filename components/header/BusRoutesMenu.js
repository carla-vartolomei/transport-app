import React from "react"
import { Button } from "@mui/material"
import Link from "next/link"
import Menu from "@mui/material/Menu"
import styles from "./Navbar.module.scss"

export default function BusRoutesMenu({ name, startPoint, endPoint }) {
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
        onMouseLeave={handleClose}
      >
        {endPoint.map((item, index) => {
          const path = `/routes/${startPoint.name.toLowerCase()}-${item.name
            .toLowerCase()
            .split(" ")
            .join("")}`

          if (index === endPoint.length - 1)
            return (
              <li
                key={index.toString()}
                onMouseLeave={handleClose}
                className={styles.routesMenuItem}
              >
                <Link href={path}>
                  <a>
                    {startPoint.name} - {item.name}
                  </a>
                </Link>
              </li>
            )
          else
            return (
              <li
                key={index.toString()}
                className={styles.routesMenuItem}
                onClick={handleClose}
              >
                <Link href={path}>
                  <a>
                    {startPoint.name} - {item.name}
                  </a>
                </Link>
              </li>
            )
        })}
      </Menu>
    </div>
  )
}
