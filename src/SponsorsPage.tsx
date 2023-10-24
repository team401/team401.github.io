import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Card, Grid, Link, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Divider } from "@mui/material";

import { SponsorList } from "./SponsorData";

export default function Sponsors() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ pt: 4 }}>
      <Grid container rowSpacing={5} columnSpacing={1} justifyContent="center">
        <Grid item xs={12} md={9}>
          <Card sx={{ p: 2 }}>
            <Typography
              variant="h3"
              align="left"
              color="text.secondary"
              component="h1"
              textAlign="center"
              paddingBottom={1}
            >
              Sponsors
            </Typography>
            <Typography
              variant="h5"
              align="left"
              color="text.secondary"
              component="h1"
              paddingBottom={2}
            >
              Team 401 couldn't exist without the generous monetary, material,
              and mentorship support from all of our sponsors. We're thankful
              for the extensive support that we receive from our community.
            </Typography>
            <Typography
              variant="h5"
              align="left"
              color="text.secondary"
              component="h1"
            >
              We're always excited to gain new sponsors, please reach out if you
              are interested in supporting the team!
            </Typography>
          </Card>
        </Grid>
        {SponsorList.map((tier) => (
          <Box key={tier.name}>
            <Grid
              container
              item
              lg={12}
              sx={{ pt: 6, pb: 1 }}
              maxWidth="100%"
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
                background: "#333",
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
                  maxWidth="100%"
                  key={sponsor.name}
                  sx={{ pb: 4 }}
                >
                  <Link href={sponsor.link} target="_blank">
                    <img src={sponsor.img} loading="lazy" width="100%"></img>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Grid>
    </Container>
  );
}
