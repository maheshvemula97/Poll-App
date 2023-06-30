import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Polllist from "./Polllist";
import Rawjson from "./Rawjson";

const App = () => {
  return (
    <div className="App" data-testid="App">
      <Router>
        <Routes>
          <Route path="/" element={<Polllist />} />
          <Route path="/poll/:id" element={<Rawjson />} />
          <Route path="*" element={<h1>404 Not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
