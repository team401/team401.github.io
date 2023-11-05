import * as React from "react";
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

import Page from "./Page";
import HeaderCard from "./HeaderCard";
import StyledButton from "./StyledButton";
import { robots } from "./RobotsData";

export default function Robots() {
  return (
    <Page>
      <HeaderCard title="Robots">
        <>
          We're proud to publish accomplishments, CAD models, technical
          documentation, and robot code for all of our robots from the past nine
          years. If you have any questions about any of our robots please{" "}
          <Link href="mailto:401frc@gmail.com" target="_blank">
            contact us
          </Link>
          .
        </>
      </HeaderCard>
      <Grid
        container
        rowSpacing={{ xs: 0, md: 5 }}
        columnSpacing={{ xs: 0, md: 2 }}
        sx={{ pt: 0, mt: 0 }}
      >
        {robots.map((robot) => (
          <Grid
            container
            key={robot.name}
            columnSpacing={{ xs: 0, md: 3 }}
            sx={{ pt: 5 }}
          >
            <Grid
              xs={12}
              item
              md={robot.img ? 6 : 0}
              marginBottom={{ xs: 1, md: 0 }}
              textAlign="center"
            >
              <Zoom
                zoomImg={{
                  src: robot.full,
                }}
              >
                <img
                  src={robot.img}
                  loading={robot.loading}
                  style={{ maxHeight: "50vh", maxWidth: "100%" }}
                />
              </Zoom>
            </Grid>
            <Grid
              xs={12}
              item
              md={robot.img ? 6 : 12}
              marginBottom={{ xs: 5, md: 0 }}
            >
              <Card
                sx={{
                  minHeight: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  mx: 1,
                  px: 1,
                  pb: 1,
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
                            p: 0,
                            mb: 0,
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
                      paddingTop={1}
                    >
                      <b>Notes: </b>
                      {robot.notes}
                    </Typography>
                  )}
                </CardContent>
                <CardActions>
                  <Stack
                    direction="row"
                    spacing={1}
                    justifyContent="center"
                    textAlign="center"
                    width="100%"
                  >
                    {robot.cadLink && (
                      <StyledButton
                        link={robot.cadLink}
                        title="CAD Model"
                        small
                      />
                    )}
                    {robot.techBinder && (
                      <StyledButton
                        link={robot.techBinder}
                        title="Tech Binder"
                        small
                      />
                    )}
                    {robot.codeLink && (
                      <StyledButton
                        link={robot.codeLink}
                        title="Robot Code"
                        small
                      />
                    )}
                  </Stack>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Page>
  );
}

export const RobotsMemo = React.memo(Robots);
