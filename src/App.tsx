import * as React from "react";
import { Routes, Route, HashRouter, Navigate } from "react-router-dom";
import { Box } from "@mui/material";

import AppBarMemo from "./TeamAppBar";
import ScrollToTop from "./ScrollToTop";
import FooterMemo from "./Footer";

import AboutMemo from "./AboutPage";
import OutreachMemo from "./OutreachPage";
import ResourcesMemo from "./ResourcesPage";
import SponsorsMemo from "./SponsorsPage";
import InvolvedMemo from "./InvolvedPage";
import RobotsMemo from "./RobotsPage";
import CoalitionMemo from "./CoalitionPage";
import FirstMemo from "./FirstPage";
import ProjectsMemo from "./Projects";

export type PageType = {
  path: string;
  title: string;
  elem: JSX.Element;
};

const unfinished: PageType[] = [
  { path: "/outreach", title: "Outreach", elem: <OutreachMemo /> },
  { path: "/coalition", title: "Coalition", elem: <CoalitionMemo /> },
];

const pages: PageType[] = [
  { path: "/", title: "About Us", elem: <AboutMemo /> },
  { path: "/first", title: "About FIRST", elem: <FirstMemo /> },
  { path: "/involved", title: "Join Us", elem: <InvolvedMemo /> },
  { path: "/robots", title: "Robots", elem: <RobotsMemo /> },
  { path: "/projects", title: "Projects", elem: <ProjectsMemo /> },
  { path: "/resources", title: "Resources", elem: <ResourcesMemo /> },
  { path: "/sponsors", title: "Sponsors", elem: <SponsorsMemo /> },
];

export default function App() {
  return (
    <HashRouter>
      <AppBarMemo pages={pages} />
      <ScrollToTop />
      <Box sx={{ height: "5vh" }}></Box>
      <Routes>
        <Route path="/" element={<AboutMemo />} />
        {pages.map((page) => (
          <Route path={page.path} element={page.elem} key={page.path} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <FooterMemo />
    </HashRouter>
  );
}
