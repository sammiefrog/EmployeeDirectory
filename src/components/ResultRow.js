import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";


function ResultRow(props) {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <img src={props.thumbnail} alt="thumbnail"></img>
      </TableCell>
      <TableCell align="right">{props.fullName}</TableCell>
      <TableCell align="right">{props.phone}</TableCell>
      <TableCell align="right">{props.email}</TableCell>
    </TableRow>
  );
}

export default ResultRow;
