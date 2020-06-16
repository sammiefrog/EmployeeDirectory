import React from 'react';
import Table from "./components/Table";
import Menu from "./components/Menu";
import TextField from "./components/TextField";
// import Container from "./components/Container";
import Container from "@material-ui/core/Container";


// import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <Container maxWidth="md">
        <TextField />
        <Table />
      </Container>
    </div>
  );
}

export default App;
