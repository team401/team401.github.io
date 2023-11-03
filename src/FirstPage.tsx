import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Box,
  Typography,
  Stack,
  Button,
  Link,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { firstSections } from "./FirstData";

export default function AboutFirst() {
  const theme = useTheme();

  return (
    <>
      <Container maxWidth="lg" sx={{ pt: 5 }}>
        <Box textAlign="center">
          <Grid xs={12}>
            <Card sx={{ mb: 4, p: 2, mx: 0 }}>
              <Typography
                variant="h4"
                align="left"
                color="text.secondary"
                component="h1"
                paddingBottom={2}
                textAlign="center"
              >
                What is <i>FIRST</i> ?
              </Typography>
              <Typography
                variant="body1"
                align="left"
                color="text.secondary"
                fontSize="large"
                component="p"
              >
                <i>FIRST</i>® (For Inspiration and Recognition of Science and
                Technology) was founded by Dean Kamen in 1982. The <i>FIRST</i>{" "}
                vision is "to transform our culture by creating a world where
                science and technology are celebrated and where young people
                dream of becoming science and technology leaders." Today,
                thousands of <i>FIRST</i> competitions are held all over the
                world for children of all age groups and backgrounds.
              </Typography>
              <Typography
                variant="body1"
                align="left"
                color="text.secondary"
                fontSize="large"
                component="p"
                paddingTop={2}
              >
                If you're interested in finding an existing team or starting a
                new team, we're happy to help, please{" "}
                <Link href="mailto:401frc@gmail.com" target="_blank">
                  send us an email
                </Link>
                .
              </Typography>
              <Stack direction="row" justifyContent="center">
                <Button
                  component={Link}
                  href="https://firstinspires.org"
                  target="_blank"
                  size="large"
                  variant="contained"
                  sx={{ mt: 2 }}
                >
                  <Typography
                    variant="h5"
                    align="left"
                    color="white"
                    component="h1"
                    textAlign="center"
                  >
                    <i>FIRST</i> Website
                  </Typography>
                </Button>
                <Button
                  component={Link}
                  href="https://www.firstinspires.org/team-event-search#type=teams&sort=name&programs=FLLJR,FLL,FTC,FRC&year=2023"
                  target="_blank"
                  size="large"
                  variant="contained"
                  sx={{ mt: 2, ml: 2 }}
                >
                  <Typography
                    variant="h5"
                    align="left"
                    color="white"
                    component="h1"
                    textAlign="center"
                  >
                    Find a Team
                  </Typography>
                </Button>
              </Stack>
            </Card>
          </Grid>
          <Grid
            container
            rowSpacing={{ xs: 0, md: 5 }}
            columnSpacing={{ xs: 0, md: 2 }}
            sx={{ pt: 0, mt: 0 }}
          >
            {firstSections.map((section) => (
              <Grid container key={section.img}>
                <Grid
                  xs={12}
                  md={6}
                  maxWidth="100%"
                  marginBottom={{ xs: 1, md: 0 }}
                >
                  <img src={section.img} width="100%"></img>
                </Grid>
                <Grid xs={12} md={6} marginBottom={{ xs: 6, md: 0 }}>
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
                        variant="h5"
                        align="center"
                        color="text.secondary"
                        component="h1"
                        paddingBottom={0}
                      >
                        {section.heading}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "2rem",
                        }}
                        alignItems="center"
                        justifyContent="center"
                        paddingBottom={1}
                      >
                        <Typography
                          variant="h6"
                          color="text.secondary"
                          component="h1"
                          noWrap
                        >
                          Ages: {section.ages}
                        </Typography>
                        <Typography
                          variant="h6"
                          color="text.secondary"
                          component="h1"
                          noWrap
                        >
                          Grades: {section.grades}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body1"
                        align="left"
                        color="text.secondary"
                        fontSize="large"
                        component="p"
                      >
                        {section.para}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Box alignContent="center" minWidth="100%">
                        <Button
                          component={Link}
                          href={section.link}
                          target="_blank"
                          size="large"
                          variant="contained"
                          sx={{ mt: 2 }}
                        >
                          <Typography
                            variant="h5"
                            align="left"
                            color="white"
                            component="h1"
                            textAlign="center"
                          >
                            Find out more
                          </Typography>
                        </Button>
                      </Box>
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
