import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your components for different routes
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
