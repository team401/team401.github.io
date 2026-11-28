import { Box, Container, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import type { PropsWithChildren, ReactNode } from "react";

import RespImage from "./RespImage";

export function HomePage(props: PropsWithChildren<unknown>) {
  return (
    <>
      <RespImage
        src="/img/about/2026teamPhoto.jpg"
        sizes="100vw"
        loading="eager"
      />
      <Container maxWidth="lg" sx={{ pt: 0 }}>
        <Box
          sx={{
            textAlign: "center",
            pt: 0
          }}>
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
    <Grid size={12}>
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
        component="h1"
        sx={{
          color: "text.secondary",
          m: 1
        }}>
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
      <Grid size={{ xs: 12, md: 6 }} sx={{
        maxWidth: "100%"
      }}>
        <RespImage src={img} loading="eager" />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Paper sx={{ p: 3, minHeight: "100%" }}>
          <Typography
            variant="h4"
            align="left"
            component="h1"
            sx={{
              color: "text.secondary",
              paddingBottom: 2
            }}>
            {title}
          </Typography>
          <Typography
            variant="body1"
            align="left"
            component="div"
            sx={{
              color: "text.secondary",
              fontSize: "large",
              "& p": { m: 0, font: "inherit" },
              "& p + p": { mt: 2 }
            }}>
            {children}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
