import * as React from "react";
import { Routes, Route, BrowserRouter, Link, Navigate } from "react-router-dom";
import TeamAppBar from "./TeamAppBar";
import Landing from "./Landing";
import Footer from "./Footer";
import Outreach from "./Outreach";

export default function App() {
  return (
    <BrowserRouter>
      <TeamAppBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/outreach" element={<Outreach />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
