import * as React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Box } from "@mui/material";

import AppBarMemo from "./TeamAppBar";
import AboutMemo from "./AboutPage";
import FooterMemo from "./Footer";
import OutreachMemo from "./OutreachPage";
import ResourcesMemo from "./ResourcesPage";
import SponsorsMemo from "./SponsorsPage";
import InvolvedMemo from "./InvolvedPage";
import RobotsMemo from "./RobotsPage";
import CoalitionMemo from "./CoalitionPage";
import FirstMemo from "./FirstPage";

export type PageType = {
  path: string;
  title: string;
  elem: JSX.Element;
};

const pages: PageType[] = [
  { path: "/", title: "About Us", elem: <AboutMemo /> },
  { path: "/first", title: "About FIRST", elem: <FirstMemo /> },
  { path: "/involved", title: "Join Us", elem: <InvolvedMemo /> },
  { path: "/outreach", title: "Outreach", elem: <OutreachMemo /> },
  { path: "/robots", title: "Robots", elem: <RobotsMemo /> },
  { path: "/resources", title: "Resources", elem: <ResourcesMemo /> },
  { path: "/sponsors", title: "Sponsors", elem: <SponsorsMemo /> },
  { path: "/coalition", title: "Coalition", elem: <CoalitionMemo /> },
];

export default function App() {
  return (
    <BrowserRouter>
      <AppBarMemo pages={pages} />
      <Box sx={{ height: "5vh" }}></Box>
      <Routes>
        <Route path="/" element={<AboutMemo />} />
        {pages.map((page) => (
          <Route path={page.path} element={page.elem} key={page.path} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <FooterMemo />
    </BrowserRouter>
  );
}
