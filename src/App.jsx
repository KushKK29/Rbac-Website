import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import AdminPanel from "./pages/AdminPanel";
import Users from "./pages/Users";
import AdminLogin from "./pages/AdminLogin";
import RequestPanel from "./pages/RequestPanel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="admin" element={<AdminPanel />} />
        <Route path="users" element={<Users />} />
        <Route path="requestpanel" element={<RequestPanel />} />
      </Routes>
    </>
  );
}

export default App;
