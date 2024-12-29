import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

import DynamicAccordion from "./components/DynamicAccordion";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import DynamicRating from "./components/DynamicRating";
import DataTable from "./components/DataTable";

const App = () => {
  return (
    <Router>
      <div style={{ textAlign: "center", margin: "20px" }}>
        <h1>React Assignment-2</h1>
        <nav>
          <Link to="/" style={{ margin: "0 10px" }} className="navlink">
            Rating
          </Link>
          <Link to="/accordion" style={{ margin: "0 10px" }} className="navlink">
            Accordion
          </Link>
          <Link to="/register" style={{ margin: "0 10px" }} className="navlink">
            Registration
          </Link>
          <Link to="/login" style={{ margin: "0 10px" }} className="navlink">
            Login
          </Link>
          <Link to="/Table" style={{ margin: "0 10px" }} className="navlink">
            Table Data
          </Link>
        </nav>
      </div>

      <Routes>
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/accordion" element={<DynamicAccordion />} />
        <Route path="/" element={<DynamicRating />} />
        <Route path="/Table" element={<DataTable />} />
        <Route path="/" element={<h2>Welcome! Please select a link above.</h2>} />
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
};

export default App;