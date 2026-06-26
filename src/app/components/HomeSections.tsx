import { Box, Container, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import type { PropsWithChildren, ReactNode } from "react";

import RespImage from "./RespImage";

export function HomePage(props: PropsWithChildren<unknown>) {
  return (
    <>
      <RespImage
        src="/img/about/teamPhoto.jpg"
        sizes="100vw"
        loading="eager"
      />
      <Container maxWidth="lg" sx={{ pt: 0 }}>
        <Box textAlign="center" sx={{ pt: 0 }}>
          <Grid container rowSpacing={5} columnSpacing={2}>
            {props.children}
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export function HomeHeading() {
  return (
    <Grid xs={12}>
      <Typography
        variant="h3"
        align="center"
        component="h1"
        sx={{
          m: 2,
          fontWeight: 800,
          color: "primary.main",
        }}
      >
        FRC Team 401: Copperhead Robotics
      </Typography>
      <Typography
        variant="h4"
        align="center"
        color="text.secondary"
        component="h1"
        sx={{
          m: 1,
        }}
      >
        &quot;Docendo Discimus&quot; - By Teaching, We Learn.
      </Typography>
    </Grid>
  );
}

export function HomeSection({
  children,
  img,
  title,
}: PropsWithChildren<{ img: string; title: ReactNode }>) {
  return (
    <Grid container sx={{ pt: 0 }}>
      <Grid xs={12} md={6} maxWidth="100%">
        <RespImage src={img} loading="eager" />
      </Grid>
      <Grid xs={12} md={6}>
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
