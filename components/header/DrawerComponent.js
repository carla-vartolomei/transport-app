import React, { useState } from "react"
import { Drawer, List, ListItem, ListItemText, IconButton } from "@material-ui/core"
import Link from "next/link"
import MenuIcon from "@mui/icons-material/Menu"
import styles from "./Navbar.module.scss"
import { Box } from "@mui/system"
import { TreeItem, TreeView } from "@mui/lab"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"

const pages = ["home", "about", "routes", "tickets", "discounts", "contact"]

function DrawerComponent({ startPoint, endPoint }) {
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Box className={styles.drawerNavbar}>
          <List className="drawerList">
            {pages.map((item, index) => {
              let path = ""
              item === "home" ? (path = "/") : (path = `/${item}`)
              if (item === "routes")
                return (
                  <ListItem key={index.toString()} className="drawerListItem">
                    <TreeView
                      aria-label="file system navigator"
                      defaultCollapseIcon={<ExpandMoreIcon />}
                      defaultExpandIcon={<ChevronRightIcon />}
                    >
                      <TreeItem nodeId="0" label={item} className="treeItemOne">
                        {endPoint.map((item, index) => {
                          const path = `/routes/${startPoint.name.toLowerCase()}-${item.name
                            .toLowerCase()
                            .split(" ")
                            .join("")}`
                          const nodeId = index + 1
                          const label = startPoint.name + " - " + item.name
                          return (
                            <Link key={index.toString()} href={path} passHref>
                              <TreeItem
                                nodeId={nodeId}
                                label={label}
                                sx={{ padding: "0.5rem" }}
                              />
                            </Link>
                          )
                        })}
                      </TreeItem>
                    </TreeView>
                  </ListItem>
                )
              else
                return (
                  <ListItem key={index.toString()} className="drawerListItem">
                    <Link href={path}>{item}</Link>
                  </ListItem>
                )
            })}
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
