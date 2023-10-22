import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Button, Grid, Paper, Stack, Typography, Link } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

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
    techBinder:
      "https://drive.google.com/file/d/1XBMxCsUlEWbWIso0fsR4-QgTbwTDzjae/view?usp=share_link",
  }),
  new RobotInfo(2022, "Jörmungandr ", {
    record: "59-21-1",
    weight: "124.8 lb",
    img: robot2022,
    codeLink: "https://github.com/team401/2022-Robot-Code",
    cadLink:
      "https://cad.onshape.com/documents/489185223ddbfec8c89a2277/w/632bf353cba19a51e989f488",
  }),
  new RobotInfo(2021, "Glycon", {
    record: "6-5-0",
    cadLink:
      "https://cad.onshape.com/documents/84707311327861b9fdce8a73/w/652c81d4db21c84dc91a591d",
  }),
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
                    style={{ maxHeight: 500, maxWidth: "100%" }}
                  ></img>
                </Grid>
                <Grid xs={12} item md={robot.img ? 6 : 12}>
                  <Card
                    sx={{
                      minHeight: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
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
                        {robot.year} - {robot.name}
                      </Typography>
                      {robot.record && (
                        <Typography
                          variant="h5"
                          align="left"
                          color="text.secondary"
                          component="h1"
                        >
                          Record: {robot.record}
                        </Typography>
                      )}
                      {robot.notes && (
                        <Typography
                          variant="h5"
                          align="left"
                          color="text.secondary"
                          component="h1"
                        >
                          Notes: {robot.notes}
                        </Typography>
                      )}
                    </CardContent>
                    <CardActions>
                      <Stack direction="row" spacing={1}>
                        {robot.cadLink && (
                          <Button
                            component={Link}
                            href={robot.cadLink}
                            variant="outlined"
                          >
                            CAD Model
                          </Button>
                        )}
                        {robot.techBinder && (
                          <Button
                            component={Link}
                            href={robot.techBinder}
                            variant="outlined"
                          >
                            Tech Binder
                          </Button>
                        )}
                        {robot.codeLink && (
                          <Button
                            component={Link}
                            href={robot.codeLink}
                            variant="outlined"
                          >
                            Robot Code
                          </Button>
                        )}
                      </Stack>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
