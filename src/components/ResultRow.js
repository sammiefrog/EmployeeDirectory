import React from "react";
import TableRow from "@material-ui/core/TableRow";
// import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// import { getUsers } from "../utils/API.js";

// class ResultRow extends Component {
//     state = {}
//     componentDidMount() { }
    
//     render() {
//         return (

//         )
//     }
// }

function ResultRow(props) {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {props.thumbnail}
      </TableCell>
      {/* <TableCell align="right">{row.thumbnail}</TableCell> */}
      <TableCell align="right">{props.firstName}</TableCell>
      <TableCell align="right">{props.lastName}</TableCell>
      <TableCell align="right">{props.phone}</TableCell>
      <TableCell align="right">{props.email}</TableCell>
    </TableRow>
  );
}

export default ResultRow;
