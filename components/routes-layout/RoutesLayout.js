import React from "react"
import { Box } from "@mui/system"
import { CardRoute } from "./CardRoute"
import styles from "../../styles/RoutesLayout.module.scss"
import data from "../../scripts/routes"

function RoutesLayout() {
  const startPoint = data.startPoint
  const endPoint = data.endPoint
  return (
    <>
      <div className={styles.scrollBar}>
        <Box className={styles.boxRoutes}>
          {endPoint.map((item, index) => {
            return (
              <CardRoute
                key={index.toString()}
                startPoint={startPoint.name}
                endPoint={item.name}
                contactStartPoint={startPoint.phone}
                contactEndPoint={item.phone}
              />
            )
          })}
        </Box>
      </div>
    </>
  )
}

export default RoutesLayout
