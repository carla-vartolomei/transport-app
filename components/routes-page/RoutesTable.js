import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import styles from "../../styles/Routes.module.scss"
import Link from "next/link"

function createData(name, path, price, time, stations, races) {
  return { name, path, price, time, stations, races }
}

const rows = [
  createData("Iasi - Suceava", "iasi-suceava", 38, "3h 03min", 51, 12),
  createData("Iasi - Falticeni", "iasi-falticeni", 33, "2h 40min", 43, 5),
  createData("Iasi - Husi", "iasi-husi", 28, "1h 31min", 33, 5),
  createData("Iasi - Targu Neamt", "iasi-targuneamt", 24, "2h 19min", 38, 12),
  createData("Iasi - Pascani", "iasi-pascani", 18, "1h 40min", 27, 42),
  createData("Iasi - Targu Frumos", "iasi-targufrumos", 10, "1h 19min", 23, 30),
  createData("Iasi - Rediu ", "iasi-rediu", 4, "26min", 12, 42),
]

export default function RoutesTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={styles.routesTableHead}>Bus routes</TableCell>
            <TableCell className={styles.routesTableHead}>Price</TableCell>
            <TableCell className={styles.routesTableHead}>Travel time </TableCell>
            <TableCell className={styles.routesTableHead}>
              Number of stations
            </TableCell>
            <TableCell className={styles.routesTableHead}>
              number of daily races
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              className={styles.routesTableBody}
            >
              <TableCell
                component="th"
                scope="row"
                className={styles.routesTableBodyHead}
              >
                <Link href={`/routes/${row.path}`}>
                  <a>{row.name}</a>
                </Link>
              </TableCell>
              <TableCell className={styles.routesTableBodyCell}>
                <strong> {row.price}</strong>
                <span> lei</span>
              </TableCell>
              <TableCell className={styles.routesTableBodyCell}>
                {row.time}
              </TableCell>
              <TableCell className={styles.routesTableBodyCell}>
                {row.stations}
              </TableCell>
              <TableCell className={styles.routesTableBodyCell}>
                {row.races}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
