import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import type { PropsWithChildren, ReactNode } from "react";

import RespImage from "./RespImage";

export function ImageTextGrid(props: PropsWithChildren<unknown>) {
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

export function ImageTextSection({
  children,
  img,
  loading,
  title,
}: PropsWithChildren<{
  img: string;
  loading?: "eager" | "lazy";
  title: ReactNode;
}>) {
  return (
    <Grid container>
      <Grid xs={12} md={6} maxWidth="100%" marginBottom={{ xs: 1, md: 0 }}>
        <RespImage src={img} loading={loading} />
      </Grid>
      <Grid xs={12} md={6} marginBottom={{ xs: 6, md: 0 }}>
        <Paper sx={{ p: 3, minHeight: "100%" }}>
          <Typography
            variant="h4"
            align="left"
            color="text.secondary"
            component="h1"
            paddingBottom={2}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            align="left"
            color="text.secondary"
            fontSize="large"
            component="div"
            sx={{
              "& p": { m: 0, font: "inherit" },
              "& p + p": { mt: 2 },
            }}
          >
            {children}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
