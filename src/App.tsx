import * as React from "react";
import { Suspense, lazy } from "react";
import { Routes, Route, HashRouter, Navigate } from "react-router-dom";
import { Box } from "@mui/material";

import AppBarMemo from "./components/TeamAppBar";
import ScrollToTop from "./components/ScrollToTop";
import FooterMemo from "./components/Footer";

const About = lazy(() => import("./AboutPage"));
const Outreach = lazy(() => import("./OutreachPage"));
const Resources = lazy(() => import("./ResourcesPage"));
const Sponsors = lazy(() => import("./SponsorsPage"));
const Involved = lazy(() => import("./InvolvedPage"));
const Robots = lazy(() => import("./RobotsPage"));
const FIRST = lazy(() => import("./FirstPage"));
const Coalition = lazy(() => import("./CoalitionPage"));
const Projects = lazy(() => import("./ProjectsPage"));

export type PageType = {
  path: string;
  title: string;
  elem: JSX.Element;
};

const unfinished: PageType[] = [
  { path: "/outreach", title: "Outreach", elem: <Outreach /> },
];

const pages: PageType[] = [
  { path: "/", title: "About Us", elem: <About /> },
  { path: "/first", title: "About FIRST", elem: <FIRST /> },
  { path: "/involved", title: "Join Us", elem: <Involved /> },
  { path: "/coalition", title: "Coalition", elem: <Coalition /> },
  { path: "/robots", title: "Robots", elem: <Robots /> },
  { path: "/projects", title: "Projects", elem: <Projects /> },
  { path: "/resources", title: "Resources", elem: <Resources /> },
  { path: "/sponsors", title: "Sponsors", elem: <Sponsors /> },
];

export default function App() {
  return (
    <HashRouter>
      <AppBarMemo pages={pages} />
      <ScrollToTop />
      <Box sx={{ height: "5vh" }}></Box>
      <Suspense fallback={<div style={{ height: "100vh" }}></div>}>
        <Routes>
          <Route path="/" element={<About />} />
          {pages.map((page) => (
            <Route path={page.path} element={page.elem} key={page.path} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
      <FooterMemo />
    </HashRouter>
  );
}
