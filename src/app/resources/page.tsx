import * as React from "react";
import { Card, Grid, Link, Typography } from "@mui/material";

import Page from "../components/Page";
import HeaderCard from "../components/HeaderCard";
import RespImage from "../components/RespImage";
import { ResourcesList } from "./ResourcesData";

export default function Resources() {
  return (
    <Page>
      <HeaderCard title="Resources">
        Sharing resources helps FRC teams be more organized and efficient in
        planning, design, manufacturing, and outreach. We&apos;re happy to share
        some of our favorite resources that we use to stay informed and stay on
        track.
      </HeaderCard>
      {ResourcesList.map((section) => (
        <Card sx={{ mb: 3, p: 2, mx: 0 }} key={section.title}>
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
          <Grid item container xs={12}>
            {section.resources.map((resource) => (
              <Grid item container md={6} sm={12} key={resource.title}>
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
                      <Typography variant="h5" align="left" component="h1">
                        {resource.title}
                      </Typography>
                    </Link>
                    <Typography
                      variant="h6"
                      align="left"
                      color="text.secondary"
                      component="h1"
                    >
                      {resource.description}
                    </Typography>
                  </>
                  <Link href={resource.link} target="_blank">
                    {resource.img && (
                      <RespImage
                        src={resource.img}
                        loading={resource.loading}
                        sizes="80vh"
                      />
                    )}
                  </Link>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Card>
      ))}
    </Page>
  );
}

export const ResourcesMemo = React.memo(Resources);
