import {
  Box,
  Card,
  CardActions,
  CardContent,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import type { PropsWithChildren, ReactNode } from "react";

import RespImage from "./RespImage";
import StyledButton from "./StyledButton";

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
  actionTitle,
  children,
  img,
  link,
  loading,
  title,
}: PropsWithChildren<{
  actionTitle?: ReactNode;
  img: string;
  link?: string;
  loading?: "eager" | "lazy";
  title: ReactNode;
}>) {
  if (link && actionTitle) {
    return (
      <Grid container columnSpacing={{ xs: 0, md: 3 }} sx={{ pt: 5 }}>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            marginBottom: { xs: 1, md: 0 },
            textAlign: "center"
          }}>
          <Link href={link} target="_blank">
            <RespImage src={img} loading={loading} />
          </Link>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{
          marginBottom: { xs: 5, md: 0 }
        }}>
          <Card
            sx={{
              minHeight: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              mx: 0,
              p: 1,
            }}
          >
            <CardContent sx={{ minHeight: "100%" }}>
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
            </CardContent>
            <CardActions sx={{ p: 0 }}>
              <Box
                sx={{
                  justifyContent: "center",
                  textAlign: "center",
                  minWidth: "100%",
                  px: 0,
                  pb: 1
                }}>
                <StyledButton link={link} title={actionTitle} />
              </Box>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container>
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{
          maxWidth: "100%",
          marginBottom: { xs: 1, md: 0 }
        }}>
        <RespImage src={img} loading={loading} />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }} sx={{
        marginBottom: { xs: 6, md: 0 }
      }}>
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
