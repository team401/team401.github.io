import { Grid, Link, List, ListItem, Stack, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import type { PropsWithChildren, ReactNode } from "react";
import Zoom from "react-medium-image-zoom";

import RespImage from "./RespImage";
import StyledButton from "./StyledButton";

export function RobotGrid(props: PropsWithChildren<unknown>) {
  return (
    <Grid
      container
      rowSpacing={{ xs: 0, md: 5 }}
      columnSpacing={{ xs: 0, md: 2 }}
      sx={{ pt: 0, mt: 0 }}
    >
      {props.children}
    </Grid>
  );
}

export function Robot({
  cadLink,
  children,
  codeLink,
  full,
  img,
  loading,
  name,
  record,
  techBinder,
  year,
}: PropsWithChildren<{
  cadLink?: string;
  codeLink?: string;
  full: string;
  img: string;
  loading?: "eager" | "lazy";
  name: ReactNode;
  record?: string;
  techBinder?: string;
  year: number;
}>) {
  return (
    <Grid container columnSpacing={{ xs: 0, md: 3 }} sx={{ pt: 5 }}>
      <Grid
        xs={12}
        item
        md={img ? 6 : 0}
        marginBottom={{ xs: 1, md: 0 }}
        textAlign="center"
      >
        <Zoom zoomImg={{ src: full }}>
          <RespImage src={img} loading={loading} />
        </Zoom>
      </Grid>
      <Grid xs={12} item md={img ? 6 : 12} marginBottom={{ xs: 5, md: 0 }}>
        <Card
          sx={{
            minHeight: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            mx: 1,
            px: 1,
            pb: 1,
          }}
        >
          <CardContent sx={{ minHeight: "100%" }}>
            <Typography
              variant="h4"
              align="left"
              color="text.secondary"
              component="h1"
            >
              {year} - {name}
            </Typography>
            {record && (
              <Typography
                variant="h5"
                align="left"
                color="text.secondary"
                component="h1"
                padding={0}
              >
                Record: {record}
              </Typography>
            )}
            {children}
          </CardContent>
          <CardActions>
            <Stack
              direction="row"
              spacing={1}
              justifyContent="center"
              textAlign="center"
              width="100%"
            >
              {cadLink && (
                <StyledButton link={cadLink} title="CAD Model" small />
              )}
              {techBinder && (
                <StyledButton link={techBinder} title="Tech Binder" small />
              )}
              {codeLink && (
                <StyledButton link={codeLink} title="Robot Code" small />
              )}
            </Stack>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export function RobotEvents(props: PropsWithChildren<unknown>) {
  return <List sx={{ listStyleType: "disc", p: 0 }}>{props.children}</List>;
}

export function RobotEvent({
  awards,
  code,
  name,
}: {
  awards?: string;
  code: string;
  name: ReactNode;
}) {
  return (
    <ListItem sx={{ display: "list-item", ml: 3, p: 0, mb: 0 }}>
      <Typography
        variant="h6"
        align="left"
        color="text.secondary"
        component="h1"
      >
        <Link
          href={`https://www.thebluealliance.com/event/${code}`}
          target="_blank"
        >
          {name}
        </Link>
      </Typography>
      <Typography
        variant="body1"
        align="left"
        color="text.secondary"
        component="h1"
      >
        {awards}
      </Typography>
    </ListItem>
  );
}

export function RobotNotes(props: PropsWithChildren<unknown>) {
  return (
    <Typography
      variant="body1"
      align="left"
      color="text.secondary"
      component="div"
      paddingTop={1}
      sx={{
        "& p": { m: 0, font: "inherit" },
        "& p + p": { mt: 2 },
      }}
    >
      <b>Notes: </b>
      {props.children}
    </Typography>
  );
}
