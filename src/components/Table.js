import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// import API from "../utils/API";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(thumbnail, firstName, lastName, email) {
  return { thumbnail, firstName, lastName, email };
}

const rows = [
  createData("picture eventually", "Bob", "Barker", "bbarker@gmail.com"),
  createData("picture eventually", "Bob", "Barker", "bbarker@gmail.com"),
  createData("picture eventually", "Bob", "Barker", "bbarker@gmail.com"),
  createData("picture eventually", "Bob", "Barker", "bbarker@gmail.com"),
  createData("picture eventually", "Bob", "Barker", "bbarker@gmail.com"),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Employees</TableCell>
            {/* <TableCell align="right">Thumbnail</TableCell> */}
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">E-Mail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.thumbnail}
              </TableCell>
              {/* <TableCell align="right">{row.thumbnail}</TableCell> */}
              <TableCell align="right">{row.firstName}</TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
