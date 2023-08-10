import React from "react";
import { createRoot } from "react-dom";
import "./style.css";

const App = () => {
  return (
    <div>
      <h1>React 18 Alpha</h1>
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
export default App;
