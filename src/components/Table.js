import React, {Component} from "react";
import { createStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ResultRow from "./ResultRow";
import API from "../utils/API.js";
import TextField from "./TextField";

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
      search: "",
      sorted: false,
      sortType: "asc"
    };
  }

  componentDidMount() {
    API.getUsers()
      .then((res) => {
        const cleanData = res.data.results.map((user) => ({
          ...user,
          fullName: user.name.first + " " + user.name.last,
        }));
        console.log(cleanData);
        this.setState({ users: cleanData }, () => console.log(this.state));
      })
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    // Getting the value and name of the input
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value,
    }, () => console.log(this.state))
  };

  // sort = (sortType) => {
  //   console.log("clicked");

  //   if (sortType === "asc") {
  //     this.setState({
  //       users: this.state.users.sort((a, b) => {
  //         return a.fullName > b.fullName
  //       }), sortType: "asc"
  //     });
  //   }
  // }

// compareBy(fullName) {
//   console.log("triggered")
// return function (a, b) {
//   if (""+a[fullName]<(""+b[fullName])) return -1;
//   if (""+a[fullName]>(""+b[fullName])) return 1;
//   return 0;
//   };
// }

sortAlpha() {
this.setState({users: this.state.users.sort((a, b)=> (a.fullName > b.fullName) ? 1: -1)});
} 


  render() {
    const { classes } = this.props;

    return (
      <TableContainer component={Paper}>
        <TextField
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Picture</TableCell>
              <TableCell align="center">
                <button
                  onClick={() => {this.sortAlpha()}}
                >
                  Full Name
                </button>
              </TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell align="center">E-Mail</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.users
              .filter((user) =>
                user.fullName
                  .toLowerCase()
                  .includes(this.state.search.toLowerCase())
              )
              .map((user, i) => (
                <ResultRow
                  key={i}
                  thumbnail={user.picture.thumbnail}
                  fullName={user.fullName}
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
