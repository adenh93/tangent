import React from "react";
import "./App.css";
import Chat from "../Chat";

const App: React.SFC = () => {
  return (
    <div className="App">
      <h1>Tangent</h1>
      <Chat />
    </div>
  );
};

export default App;
