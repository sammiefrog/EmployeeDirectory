import React from "react";
import TableRow from "@material-ui/core/TableRow";
// import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";


function ResultRow(props) {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {props.thumbnail}
      </TableCell>
      {/* <TableCell align="right">{row.thumbnail}</TableCell> */}
      <TableCell align="right">{props.fullName}</TableCell>
      {/* <TableCell align="right">{props.lastName}</TableCell> */}
      <TableCell align="right">{props.phone}</TableCell>
      <TableCell align="right">{props.email}</TableCell>
    </TableRow>
  );
}

export default ResultRow;
