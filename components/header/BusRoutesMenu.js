import React from "react"
import { Button } from "@mui/material"
import Link from "next/link"
import Menu from "@mui/material/Menu"
import styles from "./Navbar.module.scss"
import { useRouter } from "next/router"

export default function BusRoutesMenu({ name, path, startPoint, endPoint }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleMouseOver = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const router = useRouter()
  const goTo = (route) => {
    console.log(route)
    router.push(route)
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
        // onClick={() => goTo("/routes")}
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
        // onMouseLeave={handleClose}
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
