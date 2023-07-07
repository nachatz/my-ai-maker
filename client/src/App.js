import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import NotFound from "./pages/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div class="min-h-screen bg-slate-100">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
