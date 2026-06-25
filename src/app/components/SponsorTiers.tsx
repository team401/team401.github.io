import { Box, Divider, Grid, Link, Typography } from "@mui/material";
import { Children, cloneElement, isValidElement } from "react";
import type { PropsWithChildren, ReactElement, ReactNode } from "react";

import RespImage from "./RespImage";

export function SponsorTier({
  children,
  name,
  size,
}: PropsWithChildren<{ name: ReactNode; size: number }>) {
  const sponsors = Children.map(children, (child) => {
    if (!isValidElement(child)) {
      return child;
    }

    return cloneElement(
      child as ReactElement<{ sponsorTierSize?: number }>,
      { sponsorTierSize: size }
    );
  });

  return (
    <Box width="100%">
      <Grid
        container
        item
        lg={12}
        sx={{ pt: 6, pb: 1 }}
        width="100%"
        justifyContent="center"
      >
        <Typography
          variant="h4"
          align="left"
          color="text.secondary"
          component="h1"
        >
          {name}
        </Typography>
      </Grid>
      <Divider
        sx={{
          mb: 6,
          borderBottomWidth: 2,
          background: "text.secondary",
        }}
      />
      <Grid
        container
        item
        columnSpacing={12}
        sx={{ pb: 4 }}
        justifyContent="center"
        alignItems="center"
      >
        {sponsors}
      </Grid>
    </Box>
  );
}

export function Sponsor({
  img,
  link,
  loading,
  name,
  sponsorTierSize = 1,
}: {
  img: string;
  link: string;
  loading?: "eager" | "lazy";
  name: string;
  sponsorTierSize?: number;
}) {
  return (
    <Grid
      xs={12 / Math.ceil(sponsorTierSize / 2)}
      sm={12 / (sponsorTierSize - 1)}
      container
      item
      justifyContent="center"
      alignItems="center"
      md={12 / sponsorTierSize}
      width="100%"
      sx={{ pb: 4 }}
    >
      <Link href={link} target="_blank" aria-label={name}>
        <RespImage
          src={img}
          loading={loading}
          sizes={(10 - sponsorTierSize) * 25 + "vw"}
        />
      </Link>
    </Grid>
  );
}
