import * as React from "react";
import { Grid, Paper, Typography } from "@mui/material";

import Page from "./components/Page";
import HeaderCard from "./components/HeaderCard";

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
    <Page>
      <HeaderCard title="Southwest Virginia Robotics Coalition">
        <>
          Rural southern and southwestern Virginia face disproportionate access
          and funding issues for participation in <i>FIRST</i> and STEM
          education. The purpose of the Coalition is to unite FRC teams from
          disadvantaged areas in Virginia to pool resources and accomplish goals
          beyond the capabilities of any one team. The collective experiences of
          member teams will be used to guide advocacy and work on these issues
          in southwestern Virginia and address the needs of our community.
        </>
      </HeaderCard>
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
    </Page>
  );
}

export const CoalitionMemo = React.memo(Coalition);
