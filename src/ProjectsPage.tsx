import * as React from "react";

import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  Link,
  Typography,
} from "@mui/material";

import Page from "./components/Page";
import HeaderCard from "./components/HeaderCard";
import StyledButton from "./components/StyledButton";

import { projects } from "./ProjectsData";

export default function Projects() {
  return (
    <Page>
      <HeaderCard title="Projects">
        <>
          Projects are a key training activity for Team 401 and help us prepare
          for the robotics build and competition seasons. If you have questions
          about any of our projects please{" "}
          <Link href="mailto:401frc@gmail.com" target="_blank">
            contact us
          </Link>
          !
        </>
      </HeaderCard>
      <Grid
        container
        rowSpacing={{ xs: 0, md: 5 }}
        columnSpacing={{ xs: 0, md: 2 }}
        sx={{ pt: 0, mt: 0 }}
      >
        {projects.map((project) => (
          <Grid
            container
            key={project.title}
            columnSpacing={{ xs: 0, md: 3 }}
            sx={{ pt: 5 }}
          >
            <Grid
              xs={12}
              item
              md={6}
              marginBottom={{ xs: 1, md: 0 }}
              textAlign="center"
            >
              <Link href={project.link} target="_blank">
                <img
                  src={project.img}
                  style={{ maxHeight: "50vh", maxWidth: "100%" }}
                  loading={project.loading}
                ></img>
              </Link>
            </Grid>
            <Grid xs={12} item md={6} marginBottom={{ xs: 5, md: 0 }}>
              <Card
                sx={{
                  minHeight: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  mx: 0,
                  p: 1,
                }}
              >
                <CardContent sx={{ minHeight: "100%" }}>
                  <Typography
                    variant="h4"
                    align="left"
                    color="text.secondary"
                    component="h1"
                    paddingBottom={2}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    align="left"
                    color="text.secondary"
                    fontSize="large"
                    component="p"
                  >
                    {project.para}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 0 }}>
                  <Box
                    justifyContent="center"
                    textAlign="center"
                    minWidth="100%"
                    sx={{ px: 0, pb: 1 }}
                  >
                    <StyledButton link={project.link} title="CAD Model" />
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Page>
  );
}

export const OutreachMemo = React.memo(Projects);
