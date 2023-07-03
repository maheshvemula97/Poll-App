import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Polllist from "./components/Polllist";
import Rawjson from "./components/Rawjson";

const App = () => {
  return (
    <div className="App" data-testid="App">
      <Router>
        <Routes>
          <Route path="/" element={<Polllist />} />
          <Route path="/poll/:id" element={<Rawjson />} />
          <Route
            path="*"
            element={<h1 style={{ textAlign: "center" }}>404 Not found</h1>}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
