import React from "react"
import { Button } from "@mui/material"
import Link from "next/link"
import Menu from "@mui/material/Menu"
import styles from "./Navbar.module.scss"

export default function BusRoutesMenu({ name, path, startPoint, endPoint }) {
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
        onClick={() => console.log("route")}
        color="inherit"
      >
        <Link href={path}>
          <a>{name}</a>
        </Link>
      </Button>
      <Menu
        className={styles.routesMenu}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onBlur={handleClose}
      >
        <li className={styles.routesMenuItemOne}>
          <Link href={path} passHref>
            <a>ALL {name.toUpperCase()}</a>
          </Link>
        </li>
        {endPoint.map((item, index) => {
          const path = `/routes/${startPoint.name.toLowerCase()}-${item.name
            .toLowerCase()
            .split(" ")
            .join("")}`
          const props = {
            className: styles.routesMenuItem,
            onMouseLeave: null,
            onClick: null,
          }
          if (index === endPoint.length - 1) props.onMouseLeave = handleClose
          else props.onClick = handleClose

          return (
            <li key={index.toString()} {...props}>
              <Link href={path} passHref>
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
