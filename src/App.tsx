import * as React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Box } from "@mui/material";

import TeamAppBar from "./TeamAppBar";
import About from "./AboutPage";
import Footer from "./Footer";
import Outreach from "./OutreachPage";
import Resources from "./ResourcesPage";
import Sponsors from "./SponsorsPage";
import Involved from "./Involved";
import Robots from "./RobotsPage";
import Coalition from "./CoalitionPage";
import AboutFirst from "./FirstPage";

export type PageType = {
  path: string;
  title: string;
  elem: JSX.Element;
};

const pages: PageType[] = [
  { path: "/", title: "About Us", elem: <About /> },
  { path: "/first", title: "About FIRST", elem: <AboutFirst /> },
  { path: "/involved", title: "Get Involved", elem: <Involved /> },
  { path: "/outreach", title: "Outreach", elem: <Outreach /> },
  { path: "/robots", title: "Robots", elem: <Robots /> },
  { path: "/resources", title: "Resources", elem: <Resources /> },
  { path: "/sponsors", title: "Sponsors", elem: <Sponsors /> },
  { path: "/coalition", title: "Coalition", elem: <Coalition /> },
];

export default function App() {
  return (
    <BrowserRouter>
      <TeamAppBar pages={pages} />
      <Box sx={{ height: "5vh" }}></Box>
      <Routes>
        {pages.map((page) => (
          <Route path={page.path} element={page.elem} key={page.path} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
