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

import { robots } from "./RobotsData";

export default function Robots() {
  return (
    <>
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
                Robots
              </Typography>
              <Typography
                variant="h6"
                align="left"
                color="text.secondary"
                component="h1"
                paddingBottom={2}
              >
                We're proud to publish accomplishments, CAD models, technical
                documentation, and robot code for all of our robots from the
                past nine years. If you have any questions about any of our
                robots please{" "}
                <Link href="mailto:401frc@gmail.com" target="_blank">
                  contact us
                </Link>
                .
              </Typography>
            </Card>
          </Grid>
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
                >
                  <Zoom
                    zoomImg={{
                      src: robot.full,
                    }}
                  >
                    <img
                      src={robot.img}
                      style={{ maxHeight: 500, maxWidth: "100%" }}
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
                          paddingTop={1}
                        >
                          <b>Notes: </b>
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
