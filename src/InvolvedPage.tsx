import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import { Paper, Box, Typography, Card, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { involvedSections } from "./InvolvedData";

export default function About() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ pt: 5 }}>
      <Box textAlign="center">
        <Grid xs={12}>
          <Card sx={{ mb: 4, p: 2, mx: 0 }}>
            <Typography
              variant="h3"
              align="left"
              color="text.secondary"
              component="h1"
              textAlign="center"
              paddingBottom={1}
            >
              Join Us!
            </Typography>
            <Typography
              variant="h6"
              align="left"
              color="text.secondary"
              component="h1"
              paddingBottom={2}
            >
              Are you located in Montgomery County, Virginia and interested in
              joining Team 401 as a student or mentor? Find out more about our
              prerequisites and team structure in the sections below and then{" "}
              <Link href="mailto:401frc@gmail.com" target="_blank">
                contact us
              </Link>
              !
            </Typography>
          </Card>
        </Grid>
        <Grid
          container
          rowSpacing={{ xs: 0, md: 5 }}
          columnSpacing={{ xs: 0, md: 2 }}
          sx={{ pt: 0, mt: 0 }}
        >
          {involvedSections.map((section) => (
            <Grid container key={section.heading}>
              <Grid
                xs={12}
                md={6}
                maxWidth="100%"
                marginBottom={{ xs: 1, md: 0 }}
              >
                <img src={section.img} width="100%"></img>
              </Grid>
              <Grid xs={12} md={6} marginBottom={{ xs: 6, md: 0 }}>
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
  );
}
