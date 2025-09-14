"use client";

import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import { Paper, Box, Typography, useTheme } from "@mui/material";
import { StaticImageData } from "next/image";

import pointing from "./img/about/pointing.png";
import robotTesting from "./img//about/robotTesting.jpg";
import teamPhoto from "./img//about/teamPhoto.jpg";
import RespImage from "./components/RespImage";

type aboutEntry = {
  img: StaticImageData;
  heading: string;
  para: React.ReactNode;
};

const aboutSections: aboutEntry[] = [
  {
    img: pointing,
    heading: "Who are we?",
    para: (
      <>
        We are a <i>FIRST</i> Robotics Competition team dedicated spreading STEM
        (Science, Technology, Engineering, and Mathematics) and serving our
        community. We serve all four public high schools in Montgomery County,
        Virginia and support local <i>FIRST</i> programs throughout the county.
        <br></br>
        <br></br>
        Our team is made up of 35 high school students and 9 mentors. Team
        members fill many different roles including leadership, community
        relations, programming, mechanical design, CNC manufacturing, sponsor
        development, and finance.
      </>
    ),
  },
  {
    img: robotTesting,
    heading: "What do we do?",
    para: (
      <>
        Each year team members design and build a 125 pound robot from scratch
        to compete with teams from around the state and around the world. Aside
        from the robot build we spend most of the year building technical
        skills, volunteering in our local community, and advocating for STEM
        support in education and government.
      </>
    ),
  },
];
export default function About() {
  const theme = useTheme();

  return (
    <>
      <RespImage src={teamPhoto} sizes="100vw" loading="eager" />
      <Container maxWidth="lg" sx={{ pt: 0 }}>
        <Box textAlign="center" sx={{ pt: 0 }}>
          <Grid container rowSpacing={5} columnSpacing={2}>
            <Grid xs={12}>
              <Typography
                variant="h3"
                align="center"
                component="h1"
                sx={{
                  m: 2,
                  fontWeight: 800,
                  color: theme.palette.primary.main,
                }}
              >
                FRC Team 401: Copperhead Robotics
              </Typography>
              <Typography
                variant="h4"
                align="center"
                color="text.secondary"
                component="h1"
                sx={{
                  m: 1,
                }}
              >
                &quot;Docendo Discimus&quot; - By Teaching, We Learn.
              </Typography>
            </Grid>
            {aboutSections.map((section) => (
              <Grid container key={section.heading} sx={{ pt: 0 }}>
                <Grid xs={12} md={6} maxWidth="100%">
                  <RespImage src={section.img} loading="eager" />
                </Grid>
                <Grid xs={12} md={6}>
                  <Paper sx={{ p: 3, minHeight: "100%" }}>
                    <Typography
                      variant="h4"
                      align="left"
                      color="text.secondary"
                      component="h1"
                      paddingBottom={2}
                    >
                      {section.heading}
                    </Typography>
                    <Typography
                      variant="body1"
                      align="left"
                      color="text.secondary"
                      fontSize="large"
                      component="p"
                    >
                      {section.para}
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
