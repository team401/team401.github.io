import { Card, Grid, Typography } from "@mui/material";
import type { PropsWithChildren, ReactNode } from "react";

export function ContentCard({
  children,
  title,
}: PropsWithChildren<{ title: ReactNode }>) {
  return (
    <Card sx={{ mb: 3, p: 2, mx: 0 }}>
      <Typography
        variant="h4"
        align="left"
        color="text.secondary"
        component="h1"
        textAlign="center"
        paddingBottom={1}
      >
        {title}
      </Typography>
      {children}
    </Card>
  );
}

export function ContentCardLead(props: PropsWithChildren<unknown>) {
  return (
    <Typography
      variant="h5"
      align="left"
      color="text.secondary"
      component="div"
      sx={{
        "& p": { m: 0, font: "inherit" },
        "& p + p": { mt: 2 },
      }}
    >
      {props.children}
    </Typography>
  );
}

export function ContentCardGrid(props: PropsWithChildren<unknown>) {
  return (
    <Grid container item xs={12}>
      {props.children}
    </Grid>
  );
}

export function ContentCardGridItem({
  children,
  title,
}: PropsWithChildren<{ title: ReactNode }>) {
  return (
    <Grid item container md={6} sm={12} xs={12}>
      <Grid
        container
        item
        sx={{ m: 1, p: 1 }}
        justifyItems="start"
        justifyContent="start"
        flexDirection="column"
      >
        <Typography variant="h5" align="left" component="h1" color="primary">
          {title}
        </Typography>
        <Typography
          variant="h6"
          align="left"
          color="text.secondary"
          component="div"
          sx={{
            "& p": { m: 0, font: "inherit" },
            "& p + p": { mt: 2 },
          }}
        >
          {children}
        </Typography>
      </Grid>
    </Grid>
  );
}
