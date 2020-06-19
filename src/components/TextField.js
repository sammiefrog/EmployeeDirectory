import React, {Component} from "react";
import { createStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
// import SearchButton from "./Button";

const styles = theme => createStyles({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
});

class BasicTextFields extends Component {
  state = {
    searchTerm: "",
  };

  handleInputChange = (event) => {
    // Getting the value and name of the input
    let value = event.target.value;
    const name = event.target.name;


    // Updating the input's state
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    console.log(event);

    this.setState({
      searchTerm: ""
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          name="searchTerm"
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
          label="Search by Name"
          variant="outlined"
        />
        {/* <SearchButton onClick={this.handleFormSubmit} /> */}
      </form>
    );
  }
}

export default withStyles(styles)(BasicTextFields);