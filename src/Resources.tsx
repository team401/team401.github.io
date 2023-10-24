import * as React from "react";
import Container from "@mui/material/Container";
import { Card, Grid, Link, Typography } from "@mui/material";

import { ResourcesList } from "./ResourcesData";

export default function Resources() {
  return (
    <Container disableGutters maxWidth="lg" sx={{ pt: 4 }}>
      <Card sx={{ mb: 2, p: 2 }}>
        <Typography
          variant="h3"
          align="left"
          color="text.secondary"
          component="h1"
          textAlign="center"
          paddingBottom={1}
        >
          Resources
        </Typography>
        <Typography
          variant="h5"
          align="left"
          color="text.secondary"
          component="h1"
          paddingBottom={2}
        >
          Sharing resources helps FRC teams to be more organized and efficient
          in planning, design, and outreach. We're happy to share some of our
          favorite resources that we use to stay on track every year.
        </Typography>
      </Card>
      {ResourcesList.map((section) => (
        <Card sx={{ mb: 3, p: 2 }}>
          <Typography
            variant="h4"
            align="left"
            color="text.secondary"
            component="h1"
            textAlign="center"
            paddingBottom={1}
          >
            {section.title}
          </Typography>
          <Typography
            variant="h5"
            align="left"
            color="text.secondary"
            component="h1"
          >
            {section.description}
          </Typography>
          <Grid container xs={12}>
            {section.resources.map((resource) => (
              <Grid item container md={6} sm={12}>
                <Grid
                  container
                  item
                  sx={{ m: 1, p: 1 }}
                  justifyItems="start"
                  justifyContent="start"
                  flexDirection="column"
                >
                  <>
                    <Link href={resource.link} target="_blank">
                      <Typography variant="h6" align="left" component="h1">
                        {resource.title}
                      </Typography>
                    </Link>
                    <Typography
                      variant="body1"
                      align="left"
                      color="text.secondary"
                      component="h1"
                    >
                      {resource.description}
                    </Typography>
                  </>
                  <Link href={resource.link} target="_blank">
                    {resource.img && (
                      <img src={resource.img} width="100%"></img>
                    )}
                  </Link>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Card>
      ))}
    </Container>
  );
}
