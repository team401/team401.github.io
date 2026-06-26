import { Card, Grid, Link, Typography } from "@mui/material";
import type { PropsWithChildren, ReactNode } from "react";

import RespImage from "./RespImage";

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

export function ContentCardGrid({
  children,
  padded = false,
}: PropsWithChildren<{ padded?: boolean }>) {
  return (
    <Grid container item xs={12} sx={{ pt: padded ? 1 : 0 }}>
      {children}
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

export function Resource({
  children,
  img,
  link,
  loading,
  title,
}: PropsWithChildren<{
  img?: string;
  link: string;
  loading?: "eager" | "lazy";
  title: ReactNode;
}>) {
  return (
    <Grid item container md={6} xs={12}>
      <Grid
        container
        item
        sx={{ m: 1, px: 1, pb: { xs: 8, sm: 42, md: 10, lg: 1 } }}
        justifyItems="start"
        justifyContent="start"
        flexDirection="column"
      >
        <Link href={link} target="_blank">
          <Typography variant="h5" align="left" component="h1">
            {title}
          </Typography>
        </Link>
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
        {img && (
          <Link href={link} target="_blank">
            <RespImage src={img} loading={loading} sizes="60vh" />
          </Link>
        )}
      </Grid>
    </Grid>
  );
}
