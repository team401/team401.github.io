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
    <Box sx={{
      width: "100%"
    }}>
      <Grid
        container
        sx={{
          width: "100%",
          justifyContent: "center",
          pt: 6,
          pb: 1
        }}
        size={{
          lg: 12
        }}>
        <Typography
          variant="h4"
          align="left"
          component="h1"
          sx={{
            color: "text.secondary"
          }}
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
        columnSpacing={12}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          pb: 4
        }}>
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
      container
      sx={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        pb: 4
      }}
      size={{
        xs: 12 / Math.ceil(sponsorTierSize / 2),
        sm: 12 / (sponsorTierSize - 1),
        md: 12 / sponsorTierSize
      }}>
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
