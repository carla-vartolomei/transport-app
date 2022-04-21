import React, { useState } from "react"
import { Drawer, List, ListItem, ListItemText, IconButton } from "@material-ui/core"
import Link from "next/link"
import MenuIcon from "@mui/icons-material/Menu"
import styles from "./Navbar.module.scss"
import { Box } from "@mui/system"

function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Box className={styles.drawerNavbar}>
          {/* <List className={styles.drawerList}> */}
          <List className="ceva">
            <ListItem>
              <ListItemText>
                <Link href="/">Home</Link>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Link href="/about">About</Link>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Link href="/contact">Contact</Link>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Link href="/faq">Faq</Link>
              </ListItemText>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon sx={{ color: "white" }} />
      </IconButton>
    </>
  )
}
export default DrawerComponent
