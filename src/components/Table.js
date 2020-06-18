import React, {Component} from "react";
import { createStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// import API from "../utils/API";
import ResultRow from "./ResultRow";
import API from "../utils/API.js";

const styles = () => createStyles({
  table: {
    minWidth: 650,
  },
});

class UsersTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
    
    componentDidMount() {
        API.getUsers().then(res => {
            this.setState({ users: res.data.results }, () => console.log(this.state))
        }).catch(err => console.log(err));
  }

    render() {
    const { classes } = this.props;

    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Employees</TableCell>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">E-Mail</TableCell>
            </TableRow>
          </TableHead>
          <ResultRow />
          <TableBody>
            {this.state.users.map((user, i) => (
              <ResultRow
                key={i}
                thumbnail={user.picture.thumbnail}
                firstName={user.name.first}
                lastName={user.name.last}
                phone={user.phone}
                email={user.email}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default withStyles(styles)(UsersTable);
