import * as React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./theme";
import TeamAppBar from "./TeamAppBar";
import About from "./About";
import Footer from "./Footer";
import Outreach from "./Outreach";
import Resources from "./Resources";
import Sponsors from "./Sponsors";
import Involved from "./Involved";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TeamAppBar />
        <Box sx={{ height: 70 }}></Box>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/involved" element={<Involved />} />
          <Route path="/outreach" element={<Outreach />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}
