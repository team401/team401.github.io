import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import { Paper, Box, Typography, Stack, Button, Link } from "@mui/material";

import frc from "./img/first/frc.jpg";
import ftc from "./img/first/ftc.jpg";
import fll from "./img/first/fll.jpg";

import { useTheme } from "@mui/material/styles";

type firstEntry = {
  img: string;
  heading: string;
  para: JSX.Element;
};

const firstSections: firstEntry[] = [
  {
    img: frc,
    heading: "FIRST Robotics Competition (FRC)",
    para: (
      <>
        FRC is for high school students aged 14-18. In FRC, our robots weigh 
        up to 125 pounds and compete on a field with six robots total. Our build 
        season is 8 weeks in January and February, and competitions are held throughout 
        March and April. 
        </>
    ),
  },
  {
    img: ftc,
    heading: "FIRST Tech Challenge (FTC)",
    para: (
      <>
        FTC is for kids in grades 7-12, and is usually made up of smaller teams of about 
        15 members. Their robots typically weigh around 40 pounds, and are made up of fewer
         custom parts than FRC.
        </>
    ),
  },
  {
    img: fll,
    heading: "FIRST LEGO League (FLL)",
    para: (
      <>
        FLL Challenge:
        <br></br>
        <br></br>
        FLL Challenge is for students aged 9-16. FLL students create small robots using a LEGO 
        kit (SPIKE Prime, Mindstorms) to compete for points on a table-top game board. The kit 
        supplies building pieces, motors, sensors, a processor, and easy to learn block programming 
        software. Additionally, they present a research project pertaining to STEM topics related to 
        the current year’s theme.
        <br></br>
        <br></br>
        FLL Explore:
        <br></br>
        <br></br>
        FLL Explore is for children aged 6-10. Students use Lego kits to build interest in Science, 
        Technology, Engineering, and Math. FLL Jr. focuses on teaching the FIRST Core Values - Discovery, 
        Impact, Innovation, Inclusion, Teamwork, and Fun.
        <br></br>
        <br></br>
        FLL Discover:
        <br></br>
        <br></br>
        FLL Discover is for children aged 4-6. Kids engaged in building with LEGO and DUPLO bricks to explore 
        and investigate STEM topics.
        </>
    ),
  },
];

export default function First() {
  const theme = useTheme();

  return (
    <>
      <Container maxWidth="lg" sx={{ pt: 2 }}>
        <Box textAlign="center">
          <Grid container rowSpacing={5} columnSpacing={2}>
            <Grid xs={12}>
              <Typography
                variant="h4"
                align="center"
                color="text.secondary"
                component="h1"
                sx={{
                  m: 2,
                }}
              >
              </Typography>
            </Grid>
            
                <Grid xs={12} md={12}>
                  <Paper sx={{ p: 3, minHeight: "100%" }}>
                    <Typography
                      variant="h4"
                      align="left"
                      color="text.secondary"
                      component="h1"
                      paddingBottom={2}
                      textAlign="center"
                    >
                      What is FIRST?
                    </Typography>
                    <Typography
                      variant="body1"
                      align="left"
                      color="text.secondary"
                      fontSize="large"
                      component="p"
                    >
                      FIRST stands for For Inspiration and Recognition of Science and Technology 
                      and was founded by Dean Kamen in 1982. The FIRST vision is "to transform our 
                      culture by creating a world where science and technology are celebrated and 
                      where young people dream of becoming science and technology leaders." Today, 
                      thousands of competitions are held all over the world for children of all age 
                      groups and backgrounds.
                      <br></br>
                      <br></br>
                      If you are interested in finding an existing team or starting a new team, you 
                      can contact the our outreach team by emailing <a href="mailto:401frc@gmail.com">frc401@gmail.com</a>.
                      <br></br>
                      <br></br>
                    </Typography>
                    <Stack direction="row" justifyContent="center">
                      <Button
                        component={Link}
                        href="firstinspires.org"
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
                          Read More
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
                    </Paper>
                </Grid>
                

            {firstSections.map((section) => (
              <Grid container key={section.heading}>
                <Grid xs={12} md={6} maxWidth="100%">
                  <img src={section.img} width="100%"></img>
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
        </Box>
      </Container>
    </>
  );
}
