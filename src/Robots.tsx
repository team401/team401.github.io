import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {
  Button,
  Grid,
  Stack,
  Typography,
  Link,
  List,
  ListItem,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import RobotInfo from "./RobotInfo";
import { EventInfo } from "./RobotInfo";
import { smallRoboImages } from "./RobotImages";
import { bigRoboImages } from "./RobotImages";

const robots: RobotInfo[] = [
  new RobotInfo(2023, "Mušḫuššu", {
    record: "52-23-1",
    img: smallRoboImages[2023],
    full: bigRoboImages[2023],
    weight: "112.5 lb",
    cadLink:
      "https://cad.onshape.com/documents/ba977eb0e20aee4635a57eaa/w/a56a7fbc56f14dbcbff30769",
    codeLink: "https://github.com/team401/2023-Robot-Code",
    techBinder:
      "https://drive.google.com/file/d/1XBMxCsUlEWbWIso0fsR4-QgTbwTDzjae/view?usp=share_link",
    events: [
      new EventInfo(
        "FIRST Chesapeake Blacksburg VA District Event",
        ["Event Winner", "Industrial Design Award"],
        "2023vabla"
      ),
      new EventInfo(
        "FIRST Chesapeake Glen Allen VA District Event",
        ["Event Winner", "FIRST Impact Award"],
        "2023vagle"
      ),
      new EventInfo(
        "FIRST Chesapeake District Championship",
        ["Industrial Design Award"],
        "2023chcmp"
      ),
      new EventInfo(
        "FIRST World Championship - Galileo Division",
        [],
        "2023gal"
      ),
      new EventInfo("Blue Ridge Brawl", ["Event Winner"], "2023vabrb"),
      new EventInfo("Rumble in the Roads", [], "2023varr"),
    ],
  }),
  new RobotInfo(2022, "Jörmungandr ", {
    record: "59-21-1",
    img: smallRoboImages[2022],
    full: bigRoboImages[2022],
    weight: "105.8 lb",
    codeLink: "https://github.com/team401/2022-Robot-Code",
    cadLink:
      "https://cad.onshape.com/documents/489185223ddbfec8c89a2277/w/632bf353cba19a51e989f488",
    techBinder:
      "https://drive.google.com/file/d/14bgZD7nQk-9XXW4DcOFP1cOpHNvDAGn0/view?usp=share_link",
    events: [
      new EventInfo(
        "FIRST Chesapeake Richmond VA 3/05 Event",
        ["Chairman's Award"],
        "2022va305"
      ),
      new EventInfo(
        "FIRST Chesapeake Richmond VA 3/20 Event",
        ["Event Winner"],
        "2022va320"
      ),
      new EventInfo(
        "FIRST Chesapeake District Championship",
        ["Industrial Design Award"],
        "2022chcmp"
      ),
      new EventInfo(
        "FIRST World Championship - Galileo Division",
        [],
        "2022gal"
      ),
      new EventInfo("Blue Ridge Brawl", ["Event Winner"], "2022vabrb"),
      new EventInfo("Rumble in the Roads", ["Event Winner"], "2022varr"),
    ],
  }),
  new RobotInfo(2021, "Glycon", {
    record: "6-5-0",
    img: smallRoboImages[2021],
    full: bigRoboImages[2021],
    cadLink:
      "https://cad.onshape.com/documents/84707311327861b9fdce8a73/w/652c81d4db21c84dc91a591d",
    techBinder:
      "https://drive.google.com/file/d/1O-RUZgj50lH8vMUX-ZaY8y-wQ7lLyuIa/view?usp=share_link",
    codeLink: "https://github.com/team401/2021-Robot-Code",
    events: [
      new EventInfo(
        "Infinite Rechage At Home Challenge - Cadmium Group",
        ["Skills Competition Winner"],
        "2021irhcd"
      ),
      new EventInfo("CHSy Champs", [], "2021vachs"),
    ],
  }),
  new RobotInfo(2020, "Leviathan", {
    record: "7-8-0",
    img: smallRoboImages[2020],
    full: bigRoboImages[2020],
    codeLink: "https://github.com/team401/2020-Robot-Code",
    techBinder:
      "https://docs.google.com/spreadsheets/d/1XpBeeOpbmxH3wOLGNq6xpUi1ik0mAV4oYa5G_X_atjs/edit?usp=share_link",
    events: [
      new EventInfo(
        "FIRST Chesapeake Richmond VA District Event",
        ["Autonomous Award"],
        "2020vagle"
      ),
    ],
  }),
  new RobotInfo(2019, "Ouroboros", {
    record: "55-34-3",
    img: smallRoboImages[2019],
    full: bigRoboImages[2019],
    codeLink: "https://github.com/team401/2019-Robot-Code",
    techBinder:
      "https://docs.google.com/spreadsheets/d/1I-6ZXyRkmzfJNMDje_uYloxcl8N80nUArxrgwYMmwB4/edit?usp=sharing",
    events: [
      new EventInfo("FIRST Chesapeake Portsmouth VA Event", [], "2019vapor"),
      new EventInfo(
        "FIRST Chesapeake Blacksburg VA Event",
        ["Chairman's Award"],
        "2019vabla"
      ),
      new EventInfo(
        "FIRST Chesapeake District Championship",
        ["Event Winner"],
        "2019chcmp"
      ),
      new EventInfo("FIRST World Championship - Curie Division", [], "2019cur"),
      new EventInfo("Blue Ridge Brawl", ["Event Winner"], "2019vabrb"),
      new EventInfo("Rumble in the Roads", ["Event Winner"], "2019varr"),
    ],
  }),
  new RobotInfo(2018, "Apophsis", {
    record: "36-27-0",
    img: smallRoboImages[2018],
    full: bigRoboImages[2018],
    codeLink: "https://github.com/team401/2018-Robot-Code",
    techBinder:
      "https://docs.google.com/spreadsheets/d/1EEeoARwE_gVD-K3Rq7yFSZtw8TCNdIWoW9UrcANQ8vs/edit?usp=sharing",
    events: [
      new EventInfo(
        "FIRST Chesapeake Glen Allen VA Event",
        ["Event Winner", "Gracious Professionalism Award"],
        "2018vagle"
      ),
      new EventInfo(
        "FIRST Chesapeake Blacksburg VA Event",
        ["Chairman's Award"],
        "2018vabla"
      ),
      new EventInfo(
        "FIRST Chesapeake District Championship",
        ["Event Finalist", "Judges' Award"],
        "2018chcmp"
      ),
      new EventInfo("FIRST World Championship - Daly Division", [], "2018dal"),
    ],
  }),
  new RobotInfo(2017, "Phil", {
    img: smallRoboImages[2017],
    full: bigRoboImages[2017],
    record: "35-29-1",
    cadLink:
      "https://drive.google.com/drive/folders/1kwPP_zcAugBJMBr_K-Lspbv3sBOXUBAn?usp=share_link",
    codeLink: "https://github.com/team401/2017-Robot-Code",
    techBinder:
      "https://docs.google.com/spreadsheets/d/19phOgF0MFvmUJsUwKOc-AYFOztHVuFnCOuwdu2-Yrjk/edit?usp=sharing",
    events: [
      new EventInfo(
        "FIRST Chesapeake Blacksburg VA Event",
        ["Quality Award"],
        "2017vabla"
      ),
      new EventInfo(
        "FIRST Chesapeake Portsmouth VA Event",
        ["Engineering Inspiration Award", "Safety Award"],
        "2017vapor"
      ),
      new EventInfo(
        "FIRST Chesapeake District Championship",
        ["Engineering Inspiration Award"],
        "2017chcmp"
      ),
      new EventInfo(
        "FIRST World Championship - Archimedes Division",
        [],
        "2017arc"
      ),
      new EventInfo(
        "Rumble in the Roads",
        ["Event Finalist", "Captain's Award"],
        "2017varr"
      ),
    ],
  }),
  new RobotInfo(2016, "Quetzalcoatl", {
    img: smallRoboImages[2016],
    full: bigRoboImages[2016],
    record: "38-22-0",
    cadLink:
      "https://drive.google.com/drive/folders/1wz_eZ_hemPkTkRQ8PvtBEJDQy3kdJn9r?usp=share_link",
    codeLink: "https://github.com/team401/2016-Robot-Code",
    events: [
      new EventInfo(
        "FIRST Chesapeake Blacksburg VA Event",
        ["Imagery Award"],
        "2016vabla"
      ),
      new EventInfo(
        "FIRST Chesapeake Doswell VA Event",
        ["Event Finalist"],
        "2016vados"
      ),
      new EventInfo("FIRST Chesapeake District Championship", [], "2016chcmp"),
      new EventInfo("FIRST World Championship - Archimedes", [], "2016arc"),
    ],
  }),
  new RobotInfo(2015, "Power Surge", {
    img: smallRoboImages[2015],
    full: bigRoboImages[2015],
    record: "0-0 (18 matches played)",
    cadLink:
      "https://drive.google.com/drive/folders/1V04KOoUnonzY4b9hqrEj9zfMybDzheQb?usp=share_link",
    codeLink: "https://code.google.com/archive/p/team401/",
    notes:
      "Power Surge was named after Team 401's original team name from 2000!",
    events: [
      new EventInfo("Rock City Regional", [], "2015arfa"),
      new EventInfo("Virginia Regional", [], "2015vari"),
    ],
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
                      >
                        {robot.year} - {robot.name}
                      </Typography>
                      {robot.record && (
                        <Typography
                          variant="h5"
                          align="left"
                          color="text.secondary"
                          component="h1"
                          padding={0}
                        >
                          Record: {robot.record}
                        </Typography>
                      )}
                      {robot.events && (
                        <List sx={{ listStyleType: "disc", p: 0 }}>
                          {robot.events.map((event) => (
                            <ListItem
                              sx={{
                                display: "list-item",
                                ml: 3,
                                px: 0,
                                pb: 0,
                                mb: 0,
                                pt: 0,
                              }}
                              key={event.eventName}
                            >
                              <Typography
                                variant="h6"
                                align="left"
                                color="text.secondary"
                                component="h1"
                              >
                                <Link href={event.link} target="_blank">
                                  {event.eventName}
                                </Link>
                              </Typography>
                              <Typography
                                variant="body1"
                                align="left"
                                color="text.secondary"
                                component="h1"
                              >
                                {event.awards.join(", ")}
                              </Typography>
                            </ListItem>
                          ))}
                        </List>
                      )}
                      {robot.notes && (
                        <Typography
                          variant="body1"
                          align="left"
                          color="text.secondary"
                          component="p"
                          padding={0}
                        >
                          {robot.notes}
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
                            target="_blank"
                          >
                            CAD Model
                          </Button>
                        )}
                        {robot.techBinder && (
                          <Button
                            component={Link}
                            href={robot.techBinder}
                            variant="outlined"
                            target="_blank"
                          >
                            Tech Binder
                          </Button>
                        )}
                        {robot.codeLink && (
                          <Button
                            component={Link}
                            href={robot.codeLink}
                            variant="outlined"
                            target="_blank"
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
