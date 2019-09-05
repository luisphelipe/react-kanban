import React from "react";
import styled, { ThemeProvider } from "styled-components";

import Board from "./components/kanban/Board";

const main = {
  fontColor: {
    primary: "#181911",
    secondary: "#463A1E"
  },
  backgroundColor: {
    primary: "#BD995C",
    secondary: "#994C10",
    secondaryBlack: "#593311", // icon darker secondary color

    primaryTransparent: "#BD995CD0",
    secondaryTransparent: "#994C104C"
  }
  // remember to change icon filter too!
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <ThemeProvider theme={main}>
      <Container className="App">
        <Board />
      </Container>
    </ThemeProvider>
  );
}

export default App;
