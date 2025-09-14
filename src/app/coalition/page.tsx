import * as React from "react";
import { Card, Grid, Typography } from "@mui/material";

import Page from "../components/Page";
import HeaderCard, { HeaderButton } from "../components/HeaderCard";

type coalitionGoal = {
  title: string;
  description?: React.ReactNode;
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
        coach compensation. The Coalition could address this issue by pooling
        funding and offering coaching stipends. The Coalition will search for
        corporate sponsors that would be interested in supporting scholastic
        endeavors beyond a single <i>FIRST</i> team.
      </>
    ),
  },
  {
    title: "Travel Equity Grants",
    description: (
      <>
        A considerable expense for teams of any level is travel and competition
        registration. In order to help relieve teams of this burden, the
        Coalition will fundraise and pursue corporate sponsors to provide funds
        and grant opportunities. The Coalition is committed to reducing the
        impact of access to resources on FIRST event participation.
      </>
    ),
  },
  {
    title: "Elementary STEM Outreach",
    description: (
      <>
        When FLL teams are not possible, many elementary schools lack the
        resources for hands-on STEM activities. The Coalition brings the unique
        opportunity to design a scalable, replicable, and educational activity
        that supplements an already existing curriculum. Some options can
        include 3D printed mechanisms, web-based tools, and team-building
        exercises. STEM does not have to be limited to engineering and can be
        used to teach kids about one the most unique features of Southwest
        Virginia: its environment. Scalable STEM activities could be specific to
        the Appalachian regions to teach lessons about mountain formation,
        watersheds, and forest ecosystems.
      </>
    ),
  },
  {
    title: "Gender Diversity Initiatives",
    description: (
      <>
        Many initiatives have increased the number of women and non-binary
        people within STEM during elementary and middle school, however studies
        have shown that these people reduce their STEM involvement starting in
        high school. The Coalition will look into partnering with pre-existing
        advocacy groups or create strategies to increase gender diversity that
        work on a regional basis.
      </>
    ),
  },
  {
    title: "Open Source Scouting Data",
    description: (
      <>
        Scouting can be a very time consuming task that benefits from repetition
        and verification. Team 401 is committed to developing open-source
        databases to better inform alliance selections, especially at higher
        levels of competition. The Coalition pledges to data transparency and to
        developing tools that lend themselves to collaboration and scalability.
      </>
    ),
  },
];

export default function Coalition() {
  const headerButtons: HeaderButton[] = [
    {
      link: "https://drive.google.com/file/d/1beJ20KlyDS6WM4ANM7p32m1NsxwMOnPR/view?usp=sharing",
      title: "Coalition Outline",
    },
    { link: "mailto:team401@mcps.org", title: "Email Us" },
  ];

  return (
    <Page>
      <HeaderCard
        title="Rural Virginia Robotics Coalition"
        buttons={headerButtons}
      >
        <>
          Rural Virginia faces disproportionate access and funding issues for
          participation in <i>FIRST</i> and STEM education. The purpose of the
          RVRC is to unite FRC teams from disadvantaged areas in Virginia to
          pool resources and accomplish goals beyond the capabilities of any one
          team. The collective experiences of member teams will be used to guide
          advocacy and work on these issues in rural Virginia and address the
          needs of our community. Please review the Coalition Outline and email
          us to get involved!
        </>
      </HeaderCard>
      <Card sx={{ mb: 3, p: 2, mx: 0 }}>
        <Typography
          variant="h4"
          align="left"
          color="text.secondary"
          component="h1"
          textAlign="center"
          paddingBottom={1}
        >
          Coalition Objectives
        </Typography>
        <Typography
          variant="h5"
          align="left"
          color="text.secondary"
          component="h1"
        >
          These are initial goals for the RVRC to work on addressing.
        </Typography>
        <Grid item container xs={12}>
          {objectives.map((goal) => (
            <Grid item container md={6} sm={12} key={goal.title}>
              <Grid
                container
                item
                sx={{ m: 1, p: 1 }}
                justifyItems="start"
                justifyContent="start"
                flexDirection="column"
              >
                <>
                  <Typography
                    variant="h5"
                    align="left"
                    component="h1"
                    color="primary"
                  >
                    {goal.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    align="left"
                    color="text.secondary"
                    component="h1"
                  >
                    {goal.description}
                  </Typography>
                </>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Card>
    </Page>
  );
}

export const CoalitionMemo = React.memo(Coalition);
