import React, { ReactNode } from "react";
import { Card, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { PropsWithChildren } from "react";

import StyledButton from "./StyledButton";

export type HeaderButton = {
  link: string;
  title: ReactNode | string;
};

type HeaderCardProps = {
  title: ReactNode | string;
  buttons?: HeaderButton[];
};

export default function HeaderCard(props: PropsWithChildren<HeaderCardProps>) {
  return (
    <Grid size={12}>
      <Card sx={{ mb: 4, p: 2, mx: 0 }}>
        <Typography
          variant="h4"
          align="left"
          component="h1"
          sx={{
            color: "text.secondary",
            paddingBottom: 2,
            textAlign: "center"
          }}>
          {props.title}
        </Typography>
        <Typography
          variant="h6"
          align="left"
          component="div"
          sx={{
            color: "text.secondary",
            "& p": { m: 0, font: "inherit" },
            "& p + p": { mt: 2 }
          }}>
          {props.children}
        </Typography>
        <Stack
          direction="row"
          sx={{
            justifyContent: "center",
            alignContent: "center",
            pb: 0,
            mb: 0
          }}>
          {props.buttons?.map((button) => (
            <StyledButton
              link={button.link}
              key={button.link}
              title={button.title}
            />
          ))}
        </Stack>
      </Card>
    </Grid>
  );
}
