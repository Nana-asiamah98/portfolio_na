import "./Assets/style.css";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import AnimatedRoutes from "./Routes/AnimatedRoutes";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
}

export default App;
