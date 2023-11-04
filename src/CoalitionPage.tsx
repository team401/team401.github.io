import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Card, Grid, Link, Paper, Typography } from "@mui/material";

type coalitionGoal = {
  title: string;
  description?: JSX.Element;
};

const objectives: coalitionGoal[] = [
  {
    title: "FLL Coaching Stipends",
    description: (
      <>
        Most FLL teams fail not from lack of community interest, but lack of
        access to funding for coach compensation. Many teachers that volunteer
        to coach teams are often already overworked and underpaid and quickly
        realize that the commitment required to support an FLL team is
        significant. Grants received to cover team costs often do not cover
        coach compensation. The Coalition could addresss this issue by pooling
        funding and offering coaching stipends. The Coalition will search for
        corporate sponsors that would be interested in supporting scholastic
        endeavors beyond a single <i>FIRST</i> team.
      </>
    ),
  },
  { title: "Elementary STEM Outreach", description: <></> },
  { title: "Open Source Scouting Data", description: <></> },
  { title: "STEM Bill Advocacy", description: <></> },
  { title: "Gender Diversity Initiatives", description: <></> },
  { title: "Travel Equity Grants", description: <></> },
];

export default function Coalition() {
  return (
    <Container maxWidth="lg" sx={{ pt: 5 }}>
      <Box textAlign="center">
        <Grid item xs={12}>
          <Card sx={{ mb: 4, p: 2, mx: 0 }}>
            <Typography
              variant="h3"
              align="left"
              color="text.secondary"
              component="h1"
              textAlign="center"
              paddingBottom={1}
            >
              Southwest Virginia Robotics Coalition
            </Typography>
            <Typography
              variant="h6"
              align="left"
              color="text.secondary"
              component="h1"
              paddingBottom={2}
            >
              Rural southern and southwestern Virginia face disproportionate
              access and funding issues for participation in <i>FIRST</i> and
              STEM education. The purpose of the Coalition is to unite FRC teams
              from disadvantaged areas in Virginia to pool resources and
              accomplish goals beyond the capabilities of any one team. The
              collective experiences of the teams will be used to work towards
              issues in Southwestern Virginia and address the needs of our
              community.
            </Typography>
          </Card>
        </Grid>
        <Grid
          container
          rowSpacing={{ xs: 0, md: 5 }}
          columnSpacing={{ xs: 0, md: 2 }}
          sx={{ pt: 0, mt: 0 }}
        >
          {objectives.map((goal) => (
            <Grid
              item
              xs={12}
              md={6}
              marginBottom={{ xs: 6, md: 2 }}
              key={goal.title}
            >
              <Paper sx={{ p: 3, minHeight: "100%" }}>
                <Typography
                  variant="h4"
                  align="left"
                  color="text.secondary"
                  component="h1"
                  paddingBottom={2}
                >
                  {goal.title}
                </Typography>
                <Typography
                  variant="body1"
                  align="left"
                  color="text.secondary"
                  fontSize="large"
                  component="p"
                >
                  {goal.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export const CoalitionMemo = React.memo(Coalition);
