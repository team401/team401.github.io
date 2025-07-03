import * as React from "react";
import Box from "@mui/material/Box";
import { Grid, Link, Typography } from "@mui/material";
import { Divider } from "@mui/material";

import Page from "./components/Page";
import HeaderCard from "./components/HeaderCard";
import { HeaderButton } from "./components/HeaderCard";
import { SponsorList } from "./SponsorData";

export default function Sponsors() {
  const headerButtons: HeaderButton[] = [
    {
      link: "https://drive.google.com/file/d/1ADN1IktRIFjOAn-JNKDev6nowMtcLJxK/view?usp=sharing",
      title: "Sponsor Flyer",
    },
    { link: "mailto:team401@mcps.org", title: "Email Us" },
  ];
  return (
    <Page>
      <HeaderCard title="Sponsors" buttons={headerButtons}>
        <>
          Team 401 couldn't exist without the generous monetary, material, and
          mentorship support from all of our sponsors. We're thankful for the
          extensive support that we receive from our community.
          <br></br>
          <br></br>
          We're always excited to gain new sponsors, please reach out if you are
          interested in supporting the team!
        </>
      </HeaderCard>
      <Grid
        container
        rowSpacing={5}
        columnSpacing={{ xs: 0, sm: 0, md: 1 }}
        justifyContent="center"
      >
        {SponsorList.map((tier) => (
          <Box key={tier.name} width="100%">
            <Grid
              container
              item
              lg={12}
              sx={{ pt: 6, pb: 1 }}
              width="100%"
              justifyContent="center"
            >
              <Typography
                variant="h4"
                align="left"
                color="text.secondary"
                component="h1"
              >
                {tier.name}
              </Typography>
            </Grid>
            <Divider
              sx={{
                mb: 6,
                borderBottomWidth: 2,
                background: "text.secondary",
              }}
            />
            <Grid
              container
              item
              key={tier.name}
              columnSpacing={12}
              sx={{ pb: 4 }}
              justifyContent="center"
              alignItems="center"
            >
              {tier.sponsors.map((sponsor) => (
                <Grid
                  xs={12 / Math.ceil(tier.size / 2)}
                  sm={12 / (tier.size - 1)}
                  container
                  item
                  justifyContent="center"
                  alignItems="center"
                  md={12 / tier.size}
                  width="100%"
                  key={sponsor.name}
                  sx={{ pb: 4 }}
                >
                  <Link href={sponsor.link} target="_blank">
                    <img
                      src={sponsor.img}
                      width="100%"
                      loading={sponsor.loading}
                    ></img>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Grid>
    </Page>
  );
}

export const SponosorsMemo = React.memo(Sponsors);
