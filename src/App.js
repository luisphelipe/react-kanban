import React from "react";
import "./App.css";

import KanbanBoard from "./components/KanbanBoard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <KanbanBoard />
    </div>
  );
}

export default App;
