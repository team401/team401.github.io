import * as React from "react";
import Grid from "@mui/material/Grid";
import { Box, Typography, Card, CardContent, CardActions } from "@mui/material";

import { firstSections } from "./FirstData";
import HeaderCard from "../components/HeaderCard";
import { HeaderButton } from "../components/HeaderCard";
import StyledButton from "../components/StyledButton";
import Page from "../components/Page";
import RespImage from "../components/RespImage";

export default function AboutFirst() {
  const headerTitle = (
    <>
      What is <i>FIRST</i> ?
    </>
  );

  const headerButtons: HeaderButton[] = [
    {
      title: (
        <>
          <i>FIRST</i> Website
        </>
      ),
      link: "https://firstinspires.org",
    },
    {
      title: "Find a Team",
      link: "https://www.firstinspires.org/team-event-search#type=teams&sort=name&programs=FLLJR,FLL,FTC,FRC&year=2023",
    },
  ];

  return (
    <Page>
      <HeaderCard title={headerTitle} buttons={headerButtons}>
        <>
          <i>FIRST</i>® (For Inspiration and Recognition of Science and
          Technology) was founded by Dean Kamen in 1982. The <i>FIRST</i> vision
          is &quot;to transform our culture by creating a world where science
          and technology are celebrated and where young people dream of becoming
          science and technology leaders.&quot; Today, thousands of <i>FIRST</i>{" "}
          competitions are held all over the world for children of all age
          groups and backgrounds.
        </>
      </HeaderCard>
      <Grid
        container
        rowSpacing={{ xs: 0, md: 5 }}
        columnSpacing={{ xs: 0, md: 2 }}
        sx={{ pt: 0, mt: 0 }}
      >
        {firstSections.map((section) => (
          <Grid container key={section.link}>
            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{
                maxWidth: "100%",
                marginBottom: { xs: 1, md: 0 }
              }}>
              <RespImage src={section.img.src} loading={section.loading} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} sx={{
              marginBottom: { xs: 6, md: 0 }
            }}>
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
                    component="h1"
                    sx={{
                      color: "text.secondary",
                      paddingBottom: 0
                    }}>
                    {section.heading}
                  </Typography>
                  <Box
                    sx={{
                      alignItems: "center",
                      justifyContent: "center",
                      paddingBottom: 1,
                      display: "flex",
                      gap: "2rem",
                    }}>
                    <Typography
                      variant="h6"
                      component="h1"
                      noWrap
                      sx={{
                        color: "text.secondary"
                      }}
                    >
                      Ages: {section.ages}
                    </Typography>
                    <Typography
                      variant="h6"
                      component="h1"
                      noWrap
                      sx={{
                        color: "text.secondary"
                      }}
                    >
                      Grades: {section.grades}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    align="left"
                    component="p"
                    sx={{
                      color: "text.secondary",
                      fontSize: "large"
                    }}>
                    {section.para}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 0 }}>
                  <Box
                    sx={{
                      justifyContent: "center",
                      textAlign: "center",
                      minWidth: "100%",
                      p: 0
                    }}>
                    <StyledButton link={section.link} title="Find out more" />
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Page>
  );
}

export const FirstMemo = React.memo(AboutFirst);
