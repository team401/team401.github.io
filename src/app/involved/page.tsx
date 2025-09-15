import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Paper, Typography, Link } from "@mui/material";
import Page from "../components/Page";
import HeaderCard from "../components/HeaderCard";
import RespImage from "../components/RespImage";

import { involvedSections } from "./InvolvedData";

export default function Involved() {
  return (
    <Page>
      <HeaderCard title="Join Us!">
        <>
          Are you located in Montgomery County, Virginia and interested in
          joining Team 401 as a student or mentor? Find out more about our
          prerequisites and team structure in the sections below and then{" "}
          <Link href="mailto:team401@mcps.org" target="_blank">
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
        {involvedSections.map((section) => (
          <Grid container key={section.heading}>
            <Grid
              xs={12}
              md={6}
              maxWidth="100%"
              marginBottom={{ xs: 1, md: 0 }}
            >
              <RespImage src={section.img.src} loading={section.loading} />
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
    </Page>
  );
}

export const InvolvedMemo = React.memo(Involved);
