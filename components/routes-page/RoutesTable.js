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

function createData(name, time, stations, races) {
  return { name, time, stations, races }
}

const rows = [
  createData("Iasi-Suceava", "2h 33min", 51, 12),
  createData("Iasi-Falticeni", "2h 40min", 43, 5),
  createData("Iasi-Husi", "1h 23min", 33, 5),
  createData("Iasi-Targu Neamt", "1h 57min", 38, 12),
  createData("Iasi-Pascani", "1h 25min", 27, 42),
  createData("Iasi-Targu Frumos", "1h 3min", 23, 30),
  createData("Iasi-Rediu ", "26min", 12, 42),
]

export default function RoutesTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={styles.routesTableHead}>Bus routes</TableCell>
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
                <Link href={`/routes/${row.name.toLowerCase()}`}>
                  <a>{row.name}</a>
                </Link>
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
