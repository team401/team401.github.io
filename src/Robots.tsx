import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Button, Grid, Stack, Typography, Link } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import robot2023 from "./img/robots/small2023.png";
import robot2023full from "./img/robots/big/big2023.png";
import robot2022 from "./img/robots/small2022.png";
import robot2022full from "./img/robots/big/big2022.png";
import robot2021 from "./img/robots/small2021.png";
import robot2021full from "./img/robots/big/big2021.png";
import robot2020 from "./img/robots/small2020.png";
import robot2020full from "./img/robots/big/big2020.png";
import robot2019 from "./img/robots/small2019.png";
import robot2019full from "./img/robots/big/big2019.png";
import robot2018 from "./img/robots/small2018.png";
import robot2018full from "./img/robots/big/big2018.png";
import robot2017 from "./img/robots/small2017.png";
import robot2017full from "./img/robots/big/big2017.png";
import robot2016 from "./img/robots/small2016.png";
import robot2016full from "./img/robots/big/big2016.png";
import robot2015 from "./img/robots/small2015.png";
import robot2015full from "./img/robots/big/big2015.png";

class RobotInfo {
  year: number;
  name: string;
  img?: string;
  full?: string;
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
      full?: string;
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
    this.full = options?.full;
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
    full: robot2023full,
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
    full: robot2022full,
    codeLink: "https://github.com/team401/2022-Robot-Code",
    cadLink:
      "https://cad.onshape.com/documents/489185223ddbfec8c89a2277/w/632bf353cba19a51e989f488",
    techBinder:
      "https://drive.google.com/file/d/14bgZD7nQk-9XXW4DcOFP1cOpHNvDAGn0/view?usp=share_link",
  }),
  new RobotInfo(2021, "Glycon", {
    record: "6-5-0",
    img: robot2021,
    full: robot2021full,
    cadLink:
      "https://cad.onshape.com/documents/84707311327861b9fdce8a73/w/652c81d4db21c84dc91a591d",
    techBinder:
      "https://drive.google.com/file/d/1O-RUZgj50lH8vMUX-ZaY8y-wQ7lLyuIa/view?usp=share_link",
    codeLink: "https://github.com/team401/2021-Robot-Code",
  }),
  new RobotInfo(2020, "Leviathan", {
    record: "7-8-0",
    img: robot2020,
    full: robot2020full,
    codeLink: "https://github.com/team401/2020-Robot-Code",
  }),
  new RobotInfo(2019, "Ouroboros", {
    img: robot2019,
    full: robot2019full,
    record: "55-34-3",
    codeLink: "https://github.com/team401/2019-Robot-Code",
  }),
  new RobotInfo(2018, "Apophsis", {
    img: robot2018,
    full: robot2018full,
    record: "36-27-0",
    codeLink: "https://github.com/team401/2018-Robot-Code",
  }),
  new RobotInfo(2017, "Phil", {
    img: robot2017,
    full: robot2017full,
    record: "35-29-1",
    cadLink:
      "https://drive.google.com/drive/folders/1kwPP_zcAugBJMBr_K-Lspbv3sBOXUBAn?usp=share_link",
    codeLink: "https://github.com/team401/2017-Robot-Code",
  }),
  new RobotInfo(2016, "Quetzalcoatl", {
    img: robot2016,
    full: robot2016full,
    record: "38-22-0",
    cadLink:
      "https://drive.google.com/drive/folders/1wz_eZ_hemPkTkRQ8PvtBEJDQy3kdJn9r?usp=share_link",
    codeLink: "https://github.com/team401/2016-Robot-Code",
  }),
  new RobotInfo(2015, "", {
    img: robot2015,
    full: robot2015full,
    cadLink:
      "https://drive.google.com/drive/folders/1V04KOoUnonzY4b9hqrEj9zfMybDzheQb?usp=share_link",
  }),
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
                  <Zoom
                    zoomImg={{
                      src: robot.full,
                    }}
                  >
                    <img
                      src={robot.img}
                      loading="lazy"
                      style={{ maxHeight: 500, maxWidth: "100%" }}
                    />
                  </Zoom>
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
