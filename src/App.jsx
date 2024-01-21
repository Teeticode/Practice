import { useState } from "react";
import "./App.css";
import Home from "./Home";
import Services from "./Services";

function App() {
  const [name, setName] = useState(0);
  return (
    <div style={{ width: "100%" }}>
      <Home />
      <Services />
    </div>
  );
}

export default App;
