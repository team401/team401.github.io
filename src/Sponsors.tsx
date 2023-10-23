import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Grid, Paper, Typography } from "@mui/material";
import kroger from "./img/sponsors/kroger.png";
import haas from "./img/sponsors/haas.png";
import bae from "./img/sponsors/bae.png";
import mcps from "./img/sponsors/mcps.png";
import auvsi from "./img/sponsors/auvsi.png";

type Sponsor = {
  img: string;
  name: string;
  para: string;
};

const sponsors: Sponsor[] = [
  { img: mcps, name: "Montgomery County Public Schools", para: "mcps" },
  { img: kroger, name: "Kroger", para: "yummy food" },
  { img: haas, name: "Haas", para: "haas" },
  { img: bae, name: "BAE", para: "bae" },
  { img: auvsi, name: "AUVSI", para: "AUVSI" },
];
export default function Sponsors() {
  return (
    <>
      <Container maxWidth="lg" sx={{ pt: 2 }}>
        <Box textAlign="center">
          <Grid container rowSpacing={5} columnSpacing={1} sx={{ pt: 5 }}>
            {sponsors.map((sponsor) => (
              <Grid
                container
                key={sponsor.name}
                columnSpacing={12}
                sx={{ pt: 2 }}
              >
                <Grid xs={12} item md={6} maxWidth="100%">
                  <img
                    src={sponsor.img}
                    loading="lazy"
                    width="100%"
                    style={{ maxWidth: "50vw" }}
                  ></img>
                </Grid>
                <Grid xs={12} item md={6}>
                  <Paper sx={{ p: 3, minHeight: "100%" }}>
                    <Typography
                      variant="h5"
                      align="left"
                      color="text.secondary"
                      component="h1"
                      paddingBottom={2}
                    >
                      {sponsor.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      align="left"
                      color="text.secondary"
                      fontSize="large"
                      component="p"
                    >
                      {sponsor.para}
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
