import React from 'react';
import Table from "./components/Table";
import Menu from "./components/Menu";
// import Container from "./components/Container";
import Container from "@material-ui/core/Container";


// import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <Container maxWidth="md">
        <Table />
      </Container>
    </div>
  );
}

export default App;
