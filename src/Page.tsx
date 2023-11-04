import { Box, Container } from "@mui/material";
import React from "react";
import { PropsWithChildren } from "react";

export default function Page(props: PropsWithChildren<any>) {
  return (
    <Container maxWidth="lg" sx={{ pt: 5 }}>
      {props.children}
      <Box textAlign="center"></Box>
    </Container>
  );
}
