import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import { Paper, Box, Typography, Card, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { involvedSections } from "./InvolvedData";
import fabrication from "./img/involved/fabrication.jpg";
import design from "./img/involved/design.jpg";
import controls from "./img/involved/controls.jpg";
import outreach from "./img/involved/outreach.jpg";
import join from "./img/involved/join.jpg";


export default function About() {
  const theme = useTheme();

  type involvedEntry = {
    img: string;
    heading: string;
    para: JSX.Element;
  };
  
  const involvedSections: involvedEntry[] = [{
    img: join,
    heading: "Who can join Team 401?",
    para: (
      <>
        Our team is available to all Montgomery County High School students 
        who have taken Robotics I, Manufacturing I, or AP Computer Science. 
        If you have taken these and are interested, contact your teacher. 
        Being a part of our team is an invaluable opportunity to learn skills 
        that will carry students into their professional field of choice and 
        can be the deciding factor in a job application.
        <br></br>
        <br></br>
        Our team consists of four subteams, each with a different purpose.
        </>
    ),
  },
    {
      img: fabrication,
      heading: "Fabrication",
      para: (
        <>
          Our fabrication subteam are experts at manufacturing, having access to 
          our shop's array of machines. We use a CNC router, a 30,000 PSI water 
          jet with garnet cutting media, plasma cutter, lathe, 3D printer, and a 
          variety of hand tools to manufacture precision parts that hold up in 
          competition.
          </>
      ),
    },
    {
      img: design,
      heading: "Design",
      para: (
        <>
          Our design subteam uses Onshape, an online CAD (Computer Aided Design)
           software, to design parts for our robots. We 3D model every element 
           of our robot, which can be over 100 pieces, to develop the mechanisms. 
           The design team also prototypes our robots mechanisms, an essential 
           part of the engineering process.
          </>
      ),
    },
    {
      img: controls,
      heading: "Controls",
      para: (
        <>
          The controls subteam handles programming and wiring the robot. We use 
          Java with WPIlib to program our robot. Students solder, daisy-chain, 
          and diagnose problems to make sure the robot is functional on the field. 
          In 2023, this included path planning, vision systems, and pose estimation.
          </>
      ),
    },
    {
      img: outreach,
      heading: "Outreach",
      para: (
        <>
          The outreach and awards team shows that our team is about more than robotics.
           We have an extensive outreach program to spread STEM enthusiasm and education 
           throughout our community. This ranges from small, hands-on demonstrations to 
           large-scale fairs and festivals. Our team annually applies for the Impact 
           Award, the most prestigious award in FIRST. We are always looking for 
           outstanding essayists and presenters to carry our team's legacy into the future.
          </>
      ),
    },
  ];

  return (
    <>
      <Container maxWidth="lg" sx={{ pt: 5 }}>
        <Box textAlign="center">
          <Grid xs={12}>
            <Card sx={{ mb: 3, p: 2, mx: 0 }}>
              <Typography
                variant="h3"
                align="left"
                color="text.secondary"
                component="h1"
                textAlign="center"
                paddingBottom={1}
              >
                Get Involved
              </Typography>
              <Typography
                variant="h6"
                align="left"
                color="text.secondary"
                component="h1"
                paddingBottom={2}
              >
                Are you located in Montgomery County, VA and interested in
                joining Team 401 as a student or mentor? Find out more about our
                prerequisites and team strucutre in the sections below and then{" "}
                <Link href="mailto:401frc@gmail.com" target="_blank">
                  contact us
                </Link>
                !
              </Typography>
            </Card>
          </Grid>
          <Grid
            container
            rowSpacing={{ xs: 0, md: 5 }}
            columnSpacing={{ xs: 0, md: 2 }}
            sx={{ pt: 0, mt: 0 }}
          >
            {involvedSections.map((section) => (
              <Grid container key={section.heading}>
                <Grid
                  xs={12}
                  md={6}
                  maxWidth="100%"
                  marginBottom={{ xs: 1, md: 0 }}
                >
                  <img src={section.img} width="100%"></img>
                </Grid>
                <Grid xs={12} md={6} marginBottom={{ xs: 6, md: 0 }}>
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
