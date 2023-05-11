import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Route as Route6 } from "react-router";
import Screen1 from "./components/UI/Screen1";
import Screen2 from "./components/UI/Screen2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Screen1 />} />
        <Route6 path="/summary/:showId" element={<Screen2 />} />
      </Routes>
    </Router>
  );
}

export default App;
