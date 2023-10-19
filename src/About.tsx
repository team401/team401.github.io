import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import { Paper, Box, Typography } from "@mui/material";

const rowData = [
  {
    img: "img/pointing.png",
    heading: "Who are we?",
    para: (
      <>
        We are a <i>FIRST</i> Robotics Competition team dedicated spreading STEM
        (Science, Technology, Engineering, and Mathematics) and serving our
        community. Team 401 was founded in 1999 by five Virginia Tech students
        and known as PowerSurge until 2006. From 2007 to 2016 we held the name
        HokieGUARD. Now, we are Copperhead Robotics. We have moved around to
        different locations over the years, and have now had a stable shop space
        in Christiansburg High School for a few years. We have built a strong
        robotics program along with a constantly expanding outreach program.{" "}
        <br></br>
        <br></br>Click here to learn about our competition history and here to
        watch us live during competition.
      </>
    ),
  },
  {
    img: "img/robotTesting.jpg",
    heading: "What do we do?",
    para: (
      <>
        Currently, our team is made up of about 30 people from Blacksburg and
        Christiansburg High Schools. We accept students from all four high
        schools, but our membership usually stems mostly from these two schools.
        Each of our students fulfill the many different roles required to run
        our team, ranging from team leadership, outreach organization,
        mechanical design, parts manufacturing, and finance organization.
      </>
    ),
  },
];

export default function About() {
  return (
    <>
      <img src="img/teamPhoto.jpg" width={"100%"}></img>
      <Container maxWidth="lg" sx={{ pt: 2 }}>
        <Box textAlign="center">
          <Grid container rowSpacing={3} columnSpacing={2}>
            <Grid xs={12}>
              <Typography
                variant="h3"
                align="center"
                color="text.secondary"
                component="h1"
              >
                FRC Team 401: Copperhead Robotics
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                component="h1"
              >
                "Docendo Discimus" - By Teaching, We Learn.
              </Typography>
            </Grid>
            {rowData.map((entry) => (
              <Grid container key={entry.heading}>
                <Grid xs={12} md={6} maxWidth="100%">
                  <img src={entry.img} width="100%"></img>
                </Grid>
                <Grid xs={12} md={6}>
                  <Paper sx={{ p: 3, minHeight: "100%" }}>
                    <Typography
                      variant="h4"
                      align="left"
                      color="text.secondary"
                      component="h1"
                      paddingBottom={2}
                    >
                      {entry.heading}
                    </Typography>
                    <Typography
                      variant="body1"
                      align="left"
                      color="text.secondary"
                      fontSize="large"
                      component="p"
                    >
                      {entry.para}
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
