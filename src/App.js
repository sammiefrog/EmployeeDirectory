import React from 'react';
import Table from "./components/Table";
import Menu from "./components/Menu";
import Container from "@material-ui/core/Container";


function App() {
  return (
    <div className="App">
      <Menu />
      <Container maxWidth="md">
        {/* <TextField /> */}
        <Table />
      </Container>
    </div>
  );
}

export default App;
