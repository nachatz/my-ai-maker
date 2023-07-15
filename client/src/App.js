import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import Main from "./layouts/Main/Main";

// Components
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
// import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Public from "./Public";

function App() {

  return (
    <div className="min-h-screen bg-slate-50 ">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Main />} >
            {/* Public */}
            <Route index element={<Public />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<NotFound />} />

            {/* Private */}
            <Route element={<RequireAuth />} >
              <Route path="/home" element={<Home />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
