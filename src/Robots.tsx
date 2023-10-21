import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Grid, Paper, Typography } from "@mui/material";

import robot2023 from "./img/robots/2023.jpg";
import robot2022 from "./img/robots/2022.jpg";

class RobotInfo {
  year: number;
  name: string;
  img?: string;
  cadLink?: string;
  codeLink?: string;
  techBinder?: string;
  weight?: string;
  record?: string;
  notes?: string;

  constructor(
    year: number,
    name: string,
    options?: {
      img?: string;
      cadLink?: string;
      codeLink?: string;
      techBinder?: string;
      weight?: string;
      record?: string;
      notes?: string;
    }
  ) {
    this.year = year;
    this.name = name;
    this.img = options?.img;
    this.cadLink = options?.cadLink;
    this.codeLink = options?.codeLink;
    this.techBinder = options?.techBinder;
    this.weight = options?.weight;
    this.record = options?.record;
    this.notes = options?.notes;
  }
}

const robots: RobotInfo[] = [
  new RobotInfo(2023, "Mušḫuššu", {
    record: "52-23-1",
    weight: "112.5 lb",
    notes: "test",
    img: robot2023,
    cadLink:
      "https://cad.onshape.com/documents/ba977eb0e20aee4635a57eaa/w/a56a7fbc56f14dbcbff30769",
    codeLink: "https://github.com/team401/2023-Robot-Code",
  }),
  new RobotInfo(2022, "Jörmungandr ", {
    record: "59-21-1",
    img: robot2022,
  }),
  new RobotInfo(2021, "Glycon"),
  new RobotInfo(2020, "Leviathan"),
  new RobotInfo(2019, "Ouroboros"),
  new RobotInfo(2018, "Apophsis"),
  new RobotInfo(2017, "Phil"),
  new RobotInfo(2016, "Quetzalcoatl"),
];

export default function Robots() {
  return (
    <>
      <Container maxWidth="lg" sx={{ pt: 2 }}>
        <Box textAlign="center">
          <Grid container rowSpacing={5} columnSpacing={1} sx={{ pt: 5 }}>
            {robots.map((robot) => (
              <Grid container key={robot.name} columnSpacing={3} sx={{ pt: 2 }}>
                <Grid xs={12} item md={robot.img ? 6 : 0} maxWidth="100%">
                  <img
                    src={robot.img}
                    loading="lazy"
                    width="100%"
                    style={{ maxWidth: "50vw" }}
                  ></img>
                </Grid>
                <Grid xs={12} item md={robot.img ? 6 : 12}>
                  <Paper sx={{ p: 3, minHeight: "100%" }}>
                    <Typography
                      variant="h4"
                      align="left"
                      color="text.secondary"
                      component="h1"
                      paddingBottom={2}
                    >
                      {robot.year} - {robot.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      align="left"
                      color="text.secondary"
                      fontSize="large"
                      component="p"
                      visibility={robot.record ? "visible" : "hidden"}
                    >
                      Record: {robot.record}
                    </Typography>
                    <Typography
                      variant="body1"
                      align="left"
                      color="text.secondary"
                      fontSize="large"
                      component="p"
                      visibility={robot.notes ? "visible" : "hidden"}
                    >
                      Notes: {robot.notes}
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
