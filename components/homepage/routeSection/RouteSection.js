import React from "react"
import { Box } from "@mui/system"
import { CardRoute } from "./CardRoute"
import styles from "./RouteSection.module.scss"

function RouteSection({ busRoutes }) {
  const startPoint = busRoutes.startPoint
  const endPoint = busRoutes.endPoint
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

export default RouteSection
