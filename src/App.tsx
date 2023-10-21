import * as React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Box } from "@mui/material";

import TeamAppBar from "./TeamAppBar";
import About from "./About";
import Footer from "./Footer";
import Outreach from "./Outreach";
import Resources from "./Resources";
import Sponsors from "./Sponsors";
import Involved from "./Involved";
import Robots from "./Robots";

export type PageType = {
  path: string;
  title: string;
  elem: JSX.Element;
};

const pages: PageType[] = [
  { path: "/", title: "About", elem: <About /> },
  { path: "/involved", title: "Involved", elem: <Involved /> },
  { path: "/outreach", title: "Outreach", elem: <Outreach /> },
  { path: "/robots", title: "Robots", elem: <Robots /> },
  { path: "/resources", title: "Resources", elem: <Resources /> },
  { path: "/sponsors", title: "Sponsors", elem: <Sponsors /> },
];

export default function App() {
  return (
    <BrowserRouter>
      <TeamAppBar pages={pages} />
      <Box sx={{ height: "5vh" }}></Box>
      <Routes>
        {pages.map((page) => (
          <Route path={page.path} element={page.elem} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
